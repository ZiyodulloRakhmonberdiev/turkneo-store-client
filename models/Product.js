const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    descr: { type: String, required: true },
    img: { type: String, required: true },
    man: { type: Boolean, default: false },
    woman: { type: Boolean, default: false },
    categories: { type: Array, required: true },
    price: { type: Number, required: true },
    hasStockPrice: { type: Boolean, default: false },
    stockPrice: { type: Number, required: true },
    color: { type: Array },
    size: { type: Array, required: true },
    inStock: { type: Boolean, default: false }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Product', ProductSchema)
