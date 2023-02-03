const routes = require('express').Router();
const CustomerController = require('../controller/CustomerController')

routes.get('/', CustomerController.listAll)
routes.get('/:id', CustomerController.getOneById)

routes.post("/", CustomerController.newCustomer)

routes.patch('/:id', CustomerController.editCustomer)

routes.delete('/:id', CustomerController.deleteCustomer)

module.exports = routes