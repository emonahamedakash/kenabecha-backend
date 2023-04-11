const router = require("express").Router();
const {
  addProduct,
  allProduct,
  singleProduct,
  updateProduct,
  deleteProduct,
  upload,
} = require("../controllers/product.controller.js");

router.post("/product", addProduct);
router.get("/product", allProduct);
router.get("/product/:id", singleProduct);
router.put("/product/", updateProduct);
router.delete("/product/:id", upload.single("image"), deleteProduct);
module.exports = router;
