const routes = require('express').Router()
const RegularPassController = require('../controller/RegularPassController')

routes.post("/", RegularPassController.newRegularPass)

routes.get("/", RegularPassController.getAllRegularPass)

routes.get("/:id", RegularPassController.getOneRegularPassById)

routes.patch("/:id", RegularPassController.editRegularPass)

routes.delete("/:id", RegularPassController.deleteRegularPass)

module.exports = routes