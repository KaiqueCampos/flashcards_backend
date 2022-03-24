const Sequelize = require('sequelize');
const dbConfig = require('../config/database')

const Collection = require('../models/Collection')
const Flashcards = require('../models/Flashcards')


const connection = new Sequelize(dbConfig); 
Collection.init(connection);
Flashcards.init(connection);

Flashcards.associate(connection.models);
Collection.associate(connection.models);

module.exports = connection;