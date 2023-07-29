const {getProductsApplication, getProductsByIdApplication} = require('../application/productsApplication')


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

module.exports = {
    getProducts,
    getProductById,
    getProductsByLimit
}