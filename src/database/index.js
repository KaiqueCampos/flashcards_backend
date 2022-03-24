const Sequelize = require('sequelize');
const dbConfig = require('../config/database')

const Collection = require('../models/Collection')

const connection = new Sequelize(dbConfig); 
Collection.init(connection);

module.exports = connection;