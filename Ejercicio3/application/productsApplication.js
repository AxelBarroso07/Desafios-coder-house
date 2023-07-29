const productManager = require('./productManagerSingleton.js')

const getProductsApplication = ()=> {
    const products = productManager.getProductById()
    return products
}

const getProductsByIdApplication = (id)=> {
    const products = productManager.getProductById(id)
    return products
}

module.exports = {
    getProductsApplication,
    getProductsByIdApplication
}