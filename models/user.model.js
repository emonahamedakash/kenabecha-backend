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
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
