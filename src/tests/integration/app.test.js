const request = require('supertest');
const app = require('../../app');
const truncate = require('../utils/truncate')

const {
    expect,
    describe,
    test,
} = require('@jest/globals')

describe('APP integration test suite - ', () => {

    beforeAll(async () => {
        await truncate()
    })

    test('POST /collections - should be able to create a new flashcard collection', async () => {
        const response = await request(app).post('/collections').send({
            name: "NewCollection"
        })

        expect(response.status).toBe(200)
    })

    test('GET /collections - should return an array containing all flashcard collections', async () => {

        const response = await request(app).get('/collections')

        expect(response.status).toBe(200)
        expect(response.body).toStrictEqual([{
            id: 1,
            name: "NewCollection"
        }])

    })

    test('POST /collections/:collection_id/flashcards - should be able to save a new flashcard within the collection', async () => {
        const response = await request(app).post('/collections/1/flashcards').send({
            front_information: "What is a Database?",
            back_information: "A database is an organized collection of information"
        })

        expect(response.status).toBe(200)
    })

    test('GET /collections/:collection_id/flashcards - should return flashcards within a specific collection', async () => {

        const response = await request(app).get('/collections/1/flashcards')

        const expectedResponse = {
            id: 1,
            name: "NewCollection",
            flashcards: [
                {
                    id: 1,
                    front_information: "What is a Database?",
                    back_information: "A database is an organized collection of information"
                }
            ]
        }

        expect(response.status).toBe(200)
        expect(response.body).toStrictEqual(expectedResponse)
    })

    test('DELETE /collections/:collection_id/flashcards/:flashcard - should be able to delete the flashcard', async () => {

        const response = await request(app).delete('/collections/:collection_id/flashcards/1')
        expect(response.status).toBe(200)

        const flashcardHasBeenDeleted = await request(app).get('/collections/1/flashcards')
        expect(flashcardHasBeenDeleted.body).toStrictEqual({
            id: 1,
            name: "NewCollection",
            flashcards: []
        })
    })

    test('DELETE /collections/:collection_id/flashcards/:flashcard - should be able to return a message saying the flashcard does not exist to be deleted', async () => {

        const response = await request(app).delete('/collections/:collection_id/flashcards/50')

        const expectedMessage = {
            message: 'Flashcards don\'t exist'
        }

        expect(response.status).toBe(404)
        expect(response.body).toStrictEqual(expectedMessage)
    })

    test('DELETE /collections/:collection_id - should be able to delete the collection', async () => {

        const response = await request(app).delete('/collections/1')
        expect(response.status).toBe(200)

        const collectionHasBeenDeleted = await request(app).get('/collections/1/flashcards')
        const expectedMessage = {
            message: 'Collection not found'
        }

        expect(collectionHasBeenDeleted.status).toBe(404)
        expect(collectionHasBeenDeleted.body).toStrictEqual(expectedMessage)
        
    })

    test('DELETE /collections/:collection_id - should be able to return a message saying the collection does not exist to be deleted', async () => {

        const response = await request(app).delete('/collections/2')

        const expectedMessage = {
            message: 'Collection don\'t exist'
        }
      
        expect(response.status).toBe(404)
        expect(response.body).toStrictEqual(expectedMessage)

    })
})