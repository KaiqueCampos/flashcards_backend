const Collection = require('../models/Collection')

module.exports = {
    async index(req, res) {
        const collection = await Collection.findAll({
            attributes: ['id', 'name']
        })
        return res.json(collection);
    },

    async store(req, res) {
        const { name } = req.body;

        const collection = await Collection.create({
            name
        });

        return res.json(collection);
    },

    async delete(req, res) {
        const { collection_id } = req.params

        const collectionExists = await Collection.findByPk(collection_id);

        if (collectionExists === null){
            return res.status(404).json({message: 'Collection don\'t exist'});
        }

        const collectionTobeDeleted = await Collection.destroy({
            where: { id: collection_id }
        })

        return res.json(collectionTobeDeleted)
    }
}