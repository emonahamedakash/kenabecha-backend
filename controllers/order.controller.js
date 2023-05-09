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

const delivery = async (req, res) => {
  const id = req.params.id;


  //Finding that user in database
  const order = await orderModel.findOne({ _id: id });
  
  //Verifying the mail.
  if (order) {
      const result = await orderModel.findOneAndUpdate({ _id: id },{$set: {isDelivered: true}});
      res.status(200).json({ success: true, message: result });
  } else {
    res.status(404).json({ success: false, message: "Order not Found" });
  }
}


module.exports = { createOrder, allOrder, delivery };
