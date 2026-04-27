const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  user: String,
  product : String,
  TotalAmount: Number,
  status: {
    type: String,
    default: "pending"
  }
})

module.exports = mongoose.model('Order', OrderSchema);