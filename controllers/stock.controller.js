const productModel = require("../models/product.model");

const updateStock = async (productId) => {
    const product = await productModel.findById(productId);
    console.log(product.stock)
    const newStock = product.stock - 1;
    await productModel.findOneAndUpdate({_id: productId},{$set:{stock:newStock}})
    .then((response)=>{
        console.log(response);
    })
    .catch((error)=>{
        console.log(error)
    })
}

module.exports = {updateStock};