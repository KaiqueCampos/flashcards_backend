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
    }
}