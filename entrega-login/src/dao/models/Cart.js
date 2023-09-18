const mongoose = require('mongoose');
const { ProductSchema } = require('./Product');

const CartSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  products: [ProductSchema], // Define el array de productos utilizando el schema de producto
});

const Cart = mongoose.model('Cart', CartSchema);

module.exports = Cart;
