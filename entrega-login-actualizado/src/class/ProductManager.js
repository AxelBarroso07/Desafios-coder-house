const DataManager = require('../dao/DataManager');

class ProductManager extends DataManager {
  constructor(io, storage) {
    super(storage)
    this.products = [];
    this.socketStream = io
    this.loadProducts()
  }

   loadProducts() {
    try {
      this.storage.load().then((result)=> {
        this.products = result
        this.streamProducts()
      })
    } catch (error) {
      this.products = [];
    }
  }

  streamProducts () {
      this.socketStream.emit('productosActualizados', this.products);
  }

   saveProducts() {
    this.storage.post(this.products)
    
    this.streamProducts()
  }

   addProduct(product) {
    this.products.push(product);
     this.saveProducts();
  }

   getProducts() {
    return this.products;
  }

   getProductById(productId) {
    return this.products.find(product => product.id === productId);
  }

   deleteProduct(productId) {
    const index = this.products.findIndex(product => product.id === productId);
    if (index !== -1) {
      this.products.splice(index, 1);
      this.saveProducts();
      
    } else {
      return false
    }

  }

   updateProduct(productId, updatedProduct) {
    const product =  this.getProductById(productId);
    if (product) {
      Object.assign(product, updatedProduct);
       this.saveProducts();
    }
  }
}

module.exports = ProductManager;
