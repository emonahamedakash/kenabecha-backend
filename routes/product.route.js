const router = require("express").Router();
const {
  addProduct,
  allProduct,
  singleProduct,
  updateProduct,
  deleteProduct,
  lowStockNotification
  // upload,
  // uploadProductImage,
  // getProductImage,
} = require("../controllers/product.controller.js");

router.post("/product", addProduct);
router.get("/product", allProduct);
router.get("/product/:id", singleProduct);
router.get("/lowstock", lowStockNotification);
router.put("/product/update", updateProduct);
router.delete("/product/:id", deleteProduct);
// router.post("/add-product-image/:id", upload.single("image"), uploadProductImage);
// router.get("/fetch-product-image/:id", getProductImage)
module.exports = router;
