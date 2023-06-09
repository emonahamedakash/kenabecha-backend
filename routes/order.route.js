const router = require("express").Router();
const {
  createOrder,
  allOrder,
  delivery
} = require("../controllers/order.controller.js");

router.post("/order", createOrder);
router.put("/delivery", delivery);
router.get("/order", allOrder);

module.exports = router;
