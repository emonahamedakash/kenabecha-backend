const router = require("express").Router();
const {
  createOrder,
  allOrder,
} = require("../controllers/order.controller.js");

router.post("/order", createOrder);
// router.post("/user/:id", deletUser);
router.get("/order", allOrder);

module.exports = router;
