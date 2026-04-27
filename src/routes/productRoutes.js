const { createProduct,getProducts, getProduct,deleteProduct, updateProduct } = require('../controller/productController.js');
const {protect} = require('../middleware/authMiddleware.js');

const router = require('express').Router();

router.post('/', protect, createProduct);
router.get('/', getProducts);
router.get('/:id', getProduct);
router.delete('/:id',deleteProduct);
router.patch('/:id', updateProduct);

module.exports = router;