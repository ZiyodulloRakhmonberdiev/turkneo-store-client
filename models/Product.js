const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    descr: { type: String },
    img: { type: String, required: true },
    categories: { type: Array, required: true },
    price: { type: Number, required: true },
    stockPrice: { type: Number, required: false },
    color: { type: Array, required: false },
    size: { type: Array, required: false },
    tags: { type: Array, required: false },
    inStock: { type: Boolean, default: true },
    onSale: { type: Boolean, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Product', ProductSchema)
