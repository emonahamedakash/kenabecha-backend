const productModel = require("../models/product.model.js");
const cloudinary = require('cloudinary').v2;


// const uploadImage = async (image, title) =>{
//   console.log(image);
//   //Cloudinary
// cloudinary.config({ 
//   cloud_name: 'devils', 
//   api_key: '627531486253236', 
//   api_secret: '7EvdZrev_0faoEKGlfnBMvU_Azc',
//   secure: true
// });
 
// await cloudinary.uploader.upload(image.tempFilePath,
//   {
//     public_id: `${Date.now()}`,
//     resource_type: "auto",
//     }
//   ).then(
//   result=>{
//     console.log("From Cloudinary: ",result.url);
//     return result.url;
//   }
// )
// .catch(err=>console.log(err));
  
// }



const addProduct = async (req, res) => {
  const allProduct = await productModel.find();
  let id = allProduct.length;
  const file = req.files.image;
  // const imageUrl = uploadImage(file, req.body.title);
  // console.log("from add product: ",imageUrl);
//image upload start
  cloudinary.config({ 
    cloud_name: 'devils', 
    api_key: '627531486253236', 
    api_secret: '7EvdZrev_0faoEKGlfnBMvU_Azc',
    secure: true
  });
  const imageUrl = await cloudinary.uploader.upload(file.tempFilePath,
    {
      public_id: `${Date.now()}`, 
      resource_type: "auto"
  }
  )
    
  //image upload end
  try {
    const newProduct = new productModel({
      id: id,
      title: req.body.title,
      price: req.body.price,
      desc: req.body.desc,
      category: req.body.category,
      brand: req.body.brand,
      image: imageUrl.url,
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

// const uploadProductImage = async (req, res) => {
//   const result = await productModel.findOneAndUpdate({
//     _id: req.params.id
//   }, { image: req.file.filename })

//   console.log(result);
//   res.send('Uploaded')
// }

// const getProductImage = async (req, res) => {
//   const product = await productModel.findOne({ _id: req.params.id })
//   const imgPath = path.join(__dirname, '../uploads', product.image)

//   if(fs.existsSync(imgPath)){
//     return res.sendFile(imgPath)
//   }
  
//   res.send('Image not found')
// }

module.exports = {
  addProduct,
  allProduct,
  singleProduct,
  updateProduct,
  deleteProduct,
  // upload,
  // uploadProductImage,
  // getProductImage
};
// const productModel = require("../models/product.model.js");

// const multer = require("multer");
// const fs = require("fs")
// const path = require("path")

// const imageStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "_" + file.originalname);
//   },
// });

// const upload = multer({ storage: imageStorage });

// const addProduct = async (req, res) => {
//   const allProduct = await productModel.find();
//   let id = allProduct.length;
//   try {
//     const newProduct = new productModel({
//       id: id,
//       title: req.body.title,
//       price: req.body.price,
//       desc: req.body.desc,
//       category: req.body.category,
//       brand: req.body.brand,
//       // image: req.file.filename,
//     });
//     newProduct.save((err, result) => {
//       if (err) {
//         res.status(500).send(err);
//       } else {
//         res.status(201).send(result);
//       }
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
// const allProduct = async (req, res) => {
//   const products = await productModel.find();
//   res.status(200).send(products);
// };
// const singleProduct = async (req, res) => {
//   const id = req.params.id;
//   const products = await productModel.findOne({ id: id });
//   res.status(200).send(products);
// };

// const updateProduct = async (req, res) => {
//   const id = req.body.id;
//   const title = req.body.title;
//   const price = req.body.price;
//   const desc = req.body.desc;
//   const updatedProduct = await productModel.findOneAndUpdate(
//     { _id: id },
//     {
//       title: title,
//       price: price,
//       desc: desc,
//     }
//   );
// };

// const deleteProduct = async (req, res) => {
//   const id = req.params.id;
//   const deletedProduct = await productModel.deleteOne({ _id: id }, (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send("This Product deleted sucessfully:", deletedProduct);
//     }
//   });
// };

// const uploadProductImage = async (req, res) => {
//   const result = await productModel.findOneAndUpdate({
//     _id: req.params.id
//   }, { image: req.file.filename })

//   console.log(result);
//   res.send('Uploaded')
// }

// const getProductImage = async (req, res) => {
//   const product = await productModel.findOne({ _id: req.params.id })
//   const imgPath = path.join(__dirname, '../uploads', product.image)

//   if(fs.existsSync(imgPath)){
//     return res.sendFile(imgPath)
//   }
  
//   res.send('Image not found')
// }

// module.exports = {
//   addProduct,
//   allProduct,
//   singleProduct,
//   updateProduct,
//   deleteProduct,
//   upload,
//   uploadProductImage,
//   getProductImage
// };
