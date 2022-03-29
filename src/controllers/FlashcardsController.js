const Collection = require('../models/Collection');
const Flashcards = require('../models/Flashcards')

module.exports = {
    async index(req, res) {
        const { collection_id } = req.params

        const collection = await Collection.findByPk(collection_id, {
            attributes: ['id', 'name'],
            include: {
                association: 'flashcards',
                attributes: [
                    'id',
                    'front_information',
                    'back_information'
                ]
            }
        })

        if (collection === null){
            return res.status(404).send({message: 'Collection not found'})
        }

        return res.json(collection);
    },

    async store(req, res) {
        const { collection_id } = req.params
        const { front_information, back_information } = req.body;

        const collection = await Collection.findByPk(collection_id);

        if (!collection) {
            return res.status(404).json({ error: 'Collection not found' })
        }

        const flashcards = await Flashcards.create({
            collection_id,
            front_information,
            back_information,
        })

        return res.json(flashcards);
    },

    async delete(req, res) {
        const { flashcard_id } = req.params

        const flashcardExists = await Flashcards.findByPk(flashcard_id)
        if (flashcardExists === null){
            return res.status(404).json({message: 'Flashcards don\'t exist'});
        }

        const flashcardsTobeDeleted = await Flashcards.destroy({
            where: { id: flashcard_id }
        })

        return res.json(flashcardsTobeDeleted)
    }
}