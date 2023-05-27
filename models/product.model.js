const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  desc: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  brand: {
    type: String,
    require: false,
  },
  image: {
    type: String,
    require: false,
  },
  stock: {
    type: Number,
    min: 1,
  },
  discount: {
    type: Number,
  },
});

const reviewSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  reviewText: {
    type: String,
  },
  user: {
    type: String,
  },
});

const productModel = mongoose.model("product", productSchema);
const reviewModel = mongoose.model("review", reviewSchema);

module.exports = { productModel, reviewModel };
