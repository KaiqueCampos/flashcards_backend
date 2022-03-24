const Collection = require('../models/Collection')

module.exports = {
    async store(req, res) {
        const { name } = req.body;

        const collection = await Collection.create({
            name
        });

        return res.json(collection);
    }
}