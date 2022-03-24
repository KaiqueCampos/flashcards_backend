const express = require('express');
const CollectionController = require('./controllers/CollectionController')

const routes = express.Router();

routes.post('/collections', CollectionController.store)

module.exports = routes;