const router = require('express').Router();
const CustomerRoutes = require('./CustomerRoutes')
const RegularPassRoutes = require('./RegularPassRoutes')

router.use('/customer', CustomerRoutes)
router.use('/regular', RegularPassRoutes)

module.exports = router;