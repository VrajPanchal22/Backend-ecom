const express = require('express');
const router = express.Router();
const userRoutes = require('./user');
const sellerRoutes = require('./seller');
const productRoutes = require('./product');
const orderRoutes = require('./order');

router.use('/user', userRoutes);
router.use('/seller', sellerRoutes);
router.use('/product', productRoutes);
router.use('/order', orderRoutes);

module.exports = router;
