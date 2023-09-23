const express = require('express')
const { sessionChecker } = require('../controllers/middlewares/sessionCheckerController')
const { renderHomeController } = require('../controllers/renderHomeController')
const { renderLoginController } = require('../controllers/renderLoginController')


const router = express.Router()

const viewRoutes = () => {
    router.get('/login', renderLoginController)
    router.get('/realTimeProducts', sessionChecker, renderHomeController)
    return router
}

module.exports = viewRoutes