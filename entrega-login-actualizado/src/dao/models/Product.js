const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    id: {
        type: String,
        required: false,
    },
    title: {
        type: String,
        required: false,
    },
    description: String,
    code: {
        type: String,
        required: false,
    },
    price: {
        type: Number,
        required: false,
    },
    stock: {
        type: Number,
        required: false,
    },
    status: {
        type: Boolean,
        required: false,
    },
    category: String,
    thumbnail: String,
    quantity: String,
}, { collection: 'products' });


const Product = mongoose.model('Product', ProductSchema)

module.exports = {
    Product,
    ProductSchema
}