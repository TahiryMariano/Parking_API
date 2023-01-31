const routes = require('express').Router();


routes.get('/', async (req, res, next) => {
    res.send({ message: 'OK API is working' })
});

module.exports = routes;