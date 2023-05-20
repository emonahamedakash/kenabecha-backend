const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: {
    type: Number,
    require: true,
  },
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
  image : {
    type: String,
    require: false
  },
  stock: {
    type: Number,
    min: 1,
  }
});

const productModel = mongoose.model("product", productSchema);

module.exports = productModel;
