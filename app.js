const express = require('express');

const app = express();
app.use(express.json());

app.use("/api/orders", require('./src/routes/orderRoutes.js'));
app.use("/api/auth", require('./src/routes/authRoutes.js'));
app.use("/api/products", require('./src/routes/productRoutes.js'));

module.exports = app;