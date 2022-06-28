const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    title: String,
    description: String,
    // data: [{
    //     key: String,
    //     value: String
    // }],
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product