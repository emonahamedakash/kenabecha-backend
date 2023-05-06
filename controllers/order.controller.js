const orderModel = require("../models/order.model.js");


//New order
const createOrder = (req, res) => {

  try {
    const newOrder = new orderModel({
      title: req.body.title,
      price: req.body.price,
      address: req.body.address,
      phone: req.body.phone,
      date: req.body.date,
      isDelivered: req.body.isDelivered
    });
    newOrder.save((err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).send(result);
        console.log("new order created");
      }
    });
  } catch (error) {
    console.log(error);
  }
};


//Getting all user
const allOrder = async (req, res) => {
  const orders = await orderModel.find();
  res.status(200).send(orders);
};


module.exports = { createOrder, allOrder };
