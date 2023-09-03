const express = require('express')
const { renderHomeController } = require('../controllers/renderHomeController')


const router = express.Router()

const viewRoutes = () => {
    router.get('/realTimeProducts', renderHomeController)

    return router
}

module.exports = viewRoutes