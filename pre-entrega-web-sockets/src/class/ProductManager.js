const fs = require('fs');

class ProductManager {
  constructor(filePath, io) {
    this.filePath = filePath;
    this.products = [];
    this.socketStream = io
    this.loadProducts();
  }

  loadProducts() {
    try {
      const data = fs.readFileSync(this.filePath, 'utf-8');
      this.products = JSON.parse(data);
      this.streamProducts()
    } catch (error) {
      this.products = [];
    }
  }

  streamProducts () {
      this.socketStream.emit('productosActualizados', this.products);
  }

  saveProducts() {
    fs.writeFileSync(this.filePath, JSON.stringify(this.products, null, 2));
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
    const product = this.getProductById(productId);
    if (product) {
      Object.assign(product, updatedProduct);
      this.saveProducts();
    }
  }
}

module.exports = ProductManager;
