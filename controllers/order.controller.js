const orderModel = require("../models/order.model.js");
const {updateStock} = require("./stock.controller.js");


//New order
const createOrder = (req, res) => {
console.log(req.body);
  try {
    const newOrder = new orderModel({
      title: req.body.cartData[0].title,
      price: req.body.cartData[0].price,
      address: req.body.address,
      phone: req.body.phone,
      userId: req.body.userId,
      date: Date.now(),
    });
    newOrder.save((err, result) => {
      if (err) {

        res.status(500).send(err);
      } else {
        updateStock(req.body.cartData[0]._id)
        res.status(201).send(result);
      }
    });
  } catch (error) {
    console.log(error);
  }
};


//Getting all Orders
const allOrder = async (req, res) => {
  const orders = await orderModel.find();
  res.status(200).send(orders);
};

const delivery = async (req, res) => {
  const id = req.body.id;

  await orderModel.findOneAndUpdate({_id : id} ,
    {$set:{isDelivered : true}})
     .then((response)=>{
      res.send(response);
      console.log(response);
  })
  .catch((error)=>{
    res.send(error);
      console.log(error);
  })

  // //Finding that user in database
  // const order = await orderModel.findOne({ _id: id });
  
  // //Verifying the mail.
  // if (order) {
  //     res.status(200).json({ success: true, message: result });
  // } else {
  //   res.status(404).json({ success: false, message: "Order not Found" });
  // }
}


module.exports = { createOrder, allOrder, delivery };
