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
  userId: {
    type: String,
    require: [true, "User Id is required"],
    default: "Unknown User"
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
