const ProductManager = require('../class/ProductManager')
const MongoDBStorage = require('../dao/MongoDBStorage')
const { Product } = require('../dao/models/Product')


module.exports = ({streaming}) => {

    const mongodbStorage = new MongoDBStorage(Product);
    const productManagerMongoDbStorage = new ProductManager(streaming, mongodbStorage);

    const productManager = new ProductManager(streaming, productManagerMongoDbStorage)
    return productManager
}
 




