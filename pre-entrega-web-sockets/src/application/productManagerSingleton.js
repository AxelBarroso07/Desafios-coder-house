const ProductManager= require('../class/ProductManager')

module.exports = ({streaming, filePath}) => {
    const productManager = new ProductManager(filePath, streaming)
    return productManager
}
 




