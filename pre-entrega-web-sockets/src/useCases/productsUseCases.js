const {getProductsApplication, getProductsByIdApplication, addProductApplication, updateProductApplication, deleteProductApplication } = require('../application/productsApplication')


/**
 * Retorna todos los productos
 */
const getProducts = () => {
    return getProductsApplication()
}

const getProductsByLimit = (limit) => {
    const products = getProductsApplication()
    
    const newArrayOfProducts = []

    if(limit < 0) {
        return {
            error : {
                message : "El limite es inferior a 1"
            }
        }
    }

    if(limit > products.length) {
        return {
            error : {
                message : "El limite ha excedido la cantidad de productos"
            }
        }
    }

    products.forEach((product, index) => {
        if(index < limit) {
            newArrayOfProducts.push(product)
        }
    });

    return newArrayOfProducts

}

const getProductById = (id) => {
    const product = getProductsByIdApplication(id)

    if(!product) {
        return {
            error : {
                message : "El producto no existe."
            }
        }
    } else {
        return product
    }
}

const addProduct = (product, productManager) => {
    return addProductApplication(product, io)
}

const updateProduct = (id, product, productManager)  => {
    return updateProductApplication(id, product, io)
}

const deleteProduct = (id, productManager)=> {
    return deleteProductApplication(id, io)
}

module.exports = {
    getProducts,
    getProductById,
    getProductsByLimit,
    addProduct,
    updateProduct,
    deleteProduct
}