const express = require('express')
const { getProductsController,
    getProductsByIdController,
    addProductController,
    updateProductController,
    deleteProductsController
} = require('../controllers/productsControllers')


const router = express.Router()

const productRouter = (productManager) => {

    router.get('/api/products', (req, res )=> {
        return getProductsController(req, res, productManager)
    })

    router.get('/api/products/:id', (req, res)=> {
        return getProductsByIdController(req, res, productManager)
    })


    router.post('/api/products', (req, res) => {
        return addProductController(req, res, productManager)
    })

    router.put('/api/products/:pid', (req, res) => {
        return updateProductController(req, res, productManager)
    })

    router.delete('/api/products/:pid', (req, res) => {
        return deleteProductsController(req, res, productManager)
    })

    return router

}

module.exports = productRouter