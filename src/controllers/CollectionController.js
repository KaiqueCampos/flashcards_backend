const Collection = require('../models/Collection')

module.exports = {
    async index(req, res) {
        const collection = await Collection.findAll()
        return res.json(collection);
    },

    async store(req, res) {
        const { name } = req.body;

        const collection = await Collection.create({
            name
        });

        return res.json(collection);
    }
}