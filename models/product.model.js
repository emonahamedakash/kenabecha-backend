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
  }
  // image: {
  //   data: Buffer,
  //   contentType: String,
  // },
  // rating: {
  //   type: Number,
  //   require: false,
  //   min: 0,
  //   max: 5,
  // },
});

const productModel = mongoose.model("product", productSchema);

module.exports = productModel;
