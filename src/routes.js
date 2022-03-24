const express = require('express');

const routes = express.Router();

routes.get('/', function(req, res) {
    return res.json({
        hello: 'world',
    })
})

module.exports = routes;