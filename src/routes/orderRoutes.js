const router = require('express').Router();
const express = require('express');

const { createOrder } = require('../controller/orderController.js');

const auth = require('../middleware/authMiddleware.js');


router.post('/', auth.protect, createOrder);

module.exports = router;