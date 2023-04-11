const productModel = require("../models/product.model.js");

const multer = require("multer");

const imageStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.originalname);
  },
});
const upload = multer({ storage: imageStorage });

const addProduct = async (req, res) => {
  const allProduct = await productModel.find();
  let id = allProduct.length;
  try {
    const newProduct = new productModel({
      id: id,
      title: req.body.title,
      price: req.body.price,
      desc: req.body.desc,
      category: req.body.category,
      brand: req.body.brand,
      // image: req.file.filename,
    });
    newProduct.save((err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).send(result);
      }
    });
  } catch (error) {
    console.log(error);
  }
};
const allProduct = async (req, res) => {
  const products = await productModel.find();
  res.status(200).send(products);
};
const singleProduct = async (req, res) => {
  const id = req.params.id;
  const products = await productModel.findOne({ id: id });
  res.status(200).send(products);
};

const updateProduct = async (req, res) => {
  const id = req.body.id;
  const title = req.body.title;
  const price = req.body.price;
  const desc = req.body.desc;
  const updatedProduct = await productModel.findOneAndUpdate(
    { _id: id },
    {
      title: title,
      price: price,
      desc: desc,
    }
  );
};

const deleteProduct = async (req, res) => {
  const id = req.params.id;
  const deletedProduct = await productModel.deleteOne({ _id: id }, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.send("This Product deleted sucessfully:", deletedProduct);
    }
  });
};
module.exports = {
  addProduct,
  allProduct,
  singleProduct,
  updateProduct,
  deleteProduct,
  upload,
};
