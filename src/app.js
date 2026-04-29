const express = require('express');

const app = express();
app.use(express.json());

app.use("/api/orders", require('./routes/orderRoutes.js'));
app.use("/api/auth", require('./routes/authRoutes.js'));
app.use("/api/products", require('./routes/productRoutes.js'));

module.exports = app;