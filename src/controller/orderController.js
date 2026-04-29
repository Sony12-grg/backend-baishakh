const Product = require("../model/Product.js");
const Order = require("../model/Order.js");
const User = require("../model/User.js");

const createOrder = async(req, res) => {
  try{
    const userId = req.user.id;
    const {products} = req.body;

    if (!req.user) {
    return res.status(401).json({ message: "User not authenticated" });
    }

    if (!products || products.length === 0) {
      return res.status(400).json({ message: "No products selected" });
    }
   
      const orderExists = await Order.findOne({user: userId});
   if(orderExists) {
    return res.status(400).json({message: "Order already exists"});
   }

    let totalAmount = 0;
    for(let item of products) {
      const product = await Product.findById(item.productId);

      if(!product) {
        return res.status(404).json({message: `Product with ID ${item.productId} not found`});
      }
      totalAmount += product.price * item.quantity;
    }

    const order = await Order.create({
      user: userId,
      products,
      totalAmount,
      status: "pending"
    });
    res.status(201).json({message: "Order created successfully", order});
  }catch(error) {
   res.status(500).json({message: "Server error", error: error.message});
  }
 
};

module.exports = {
  createOrder
};