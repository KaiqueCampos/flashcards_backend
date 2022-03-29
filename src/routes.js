const express = require('express');
const CollectionController = require('./controllers/CollectionController')
const FlashcardsController = require('./controllers/FlashcardsController')


const routes = express.Router();

routes.get('/collections', CollectionController.index)
routes.post('/collections', CollectionController.store)
routes.delete('/collections/:collection_id', CollectionController.delete)

routes.get('/collections/:collection_id/flashcards', FlashcardsController.index)
routes.post('/collections/:collection_id/flashcards', FlashcardsController.store)
routes.delete('/collections/:collection_id/flashcards/:flashcard_id', FlashcardsController.delete)

module.exports = routes;