const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: [true, "Email is required"],
  },
  address: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: [true, "Password is required"],
  },
  role:{
    type: String,
    default: "basic",
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  verifCode:{
    type: Number,
  }
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
