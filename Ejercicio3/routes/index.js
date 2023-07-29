const express = require('express')
const { getProductsController, getProductsByIdController } = require('../controllers/productsControllers')

const router = express.Router()

const productRouter = () => {


    /// TODOS LOS PRODUCTOS
    router.get('/products', getProductsController)

    router.get('/products/:id', getProductsByIdController)

    return router

}

module.exports = productRouter