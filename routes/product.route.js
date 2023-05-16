const router = require("express").Router();
const {
  addProduct,
  allProduct,
  singleProduct,
  updateProduct,
  deleteProduct,
  // upload,
  // uploadProductImage,
  // getProductImage,
} = require("../controllers/product.controller.js");

router.post("/product", addProduct);
router.get("/product", allProduct);
router.get("/product/:id", singleProduct);
router.put("/product/", updateProduct);
router.delete("/product/:id", deleteProduct);
// router.post("/add-product-image/:id", upload.single("image"), uploadProductImage);
// router.get("/fetch-product-image/:id", getProductImage)
module.exports = router;
