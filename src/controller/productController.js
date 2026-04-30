const Product = require('../model/Product.js')
const mongoose = require('mongoose');

//Create a new product
exports.createProduct = async(req, res)=> {
  const product = await Product.create(req.body);
  res.json({
    message:"Product added successfully",
    data: product
  })
}

//Get all products:
exports.getProducts = async(req,res) => {
  try{
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
 
}

//Get Single Product
exports.getProduct = async(req,res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

//Delete Product 
exports.deleteProduct = async(req,res) => {
  const deletedProduct = await Product.findByIdAndDelete(req.params.id);
  res.json({
    message: "Product deleted successfully",
    data: deletedProduct
  })
}

//Update Product
exports.updateProduct = async(req,res) => {
  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new: true}
  )
  res.json({
    message: "Product updated successfully",
    data: updatedProduct
  })
}