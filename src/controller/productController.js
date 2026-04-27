const Product = require('../model/Product.js')

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
  const products = await Product.find();
  res.json(products);
}

//Get Single Product
exports.getProduct = async(req,res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
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