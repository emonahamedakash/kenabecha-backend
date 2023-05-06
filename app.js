const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const productRouter = require("./routes/product.route.js");
const userRouter = require("./routes/user.route.js");
const orderRouter = require("./routes/order.route.js");

dotenv.config();
mongoose.set("strictQuery", false);
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api", productRouter);
app.use("/api", userRouter);
app.use("/api", orderRouter);

//Connecting to Db
mongoose.connect(process.env.URI, (err) => {
  if (err) {
    console.log("Db connection Error!");
    console.log(err);
  } else {
    console.log("Db connected...✅");
  }
});

module.exports = app;
