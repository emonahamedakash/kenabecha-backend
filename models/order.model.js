const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  price: {
    type: String,
    require: [true, "Price is required"],
  },
  address: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: [true, "Password is required"],
  },
  date:{
    type: String,
  },
  isDelivered: {
    type: Boolean,
    default: false
  },
});

const orderModel = mongoose.model("order", orderSchema);

module.exports = orderModel;
