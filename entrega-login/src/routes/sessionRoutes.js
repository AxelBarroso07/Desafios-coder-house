const express = require('express')
const {loginController} = require('../controllers/loginController')
const { logoutController } = require('../controllers/logoutController')
const router = express.Router()

const sessionRoutes = () => {
    router.post('/login', loginController)
    router.post('/logout', logoutController)

    return router
}

module.exports = sessionRoutes