const express = require('express');
const router = express.Router();
const Product = require('../../models/product');
const { check, validationResult } = require('express-validator/check');

//CREATE PRODUCT
router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('category', 'Category is required').not().isEmpty(),
    check('price', 'Price is required').not().isEmpty(),
    // check('image', 'Image is required').not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let product = new Product({
        name: req.body.name,
        category: req.body.category,
        price: req.body.price,
        image: req.file.filename,
      });
      await product.save();
      return res
        .status(200)
        .json({ msg: 'product created successfully', data: product });
    } catch (err) {
      console.log('server error ++++', err.message);
      res.status(500).send('Server error');
    }
  }
);
//GET PRODUCT BY ID
router.get('/find/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);
    if (!product) return res.status(400).json({ error: 'Product not found' });

    return res
      .status(200)
      .json({ msg: 'Product fetch successfully', data: product });
  } catch (err) {
    console.log('server error ++++', err.message);
    res.status(500).send('Server error');
  }
});
//UPDATE PRODUCT
router.put(
  '/:id',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('category', 'Category is required').not().isEmpty(),
    check('price', 'Price is required').not().isEmpty(),
    // check('image', 'Image is required').not().isEmpty(),
  ],
  async (req, res) => {
    try {
      const { id } = req.params;
      let updateProduct = {
        name: req.body.name,
        category: req.body.category,
        price: req.body.price,
        // image: req.file.filename,
      };
      const product = await Product.findById(id);
      if (!product) return res.status(400).json({ error: 'Product not found' });

      const updatedProduct = await Product.findByIdAndUpdate(
        id,
        { $set: updateProduct },
        { new: true }
      );
      console.log('updated product =====>', updatedProduct);
      return res
        .status(200)
        .json({ msg: 'Product update successfully', data: updatedProduct });
    } catch (err) {
      console.log('server error ++++', err.message);
      res.status(500).send('Server error');
    }
  }
);

//DELETE PRODUCT
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    return res.status(200).json('Product delete successfully');
  } catch (err) {
    console.log('server error ++++', err.message);
    res.status(500).send('Server error');
  }
});
//FIND ALL PRODUCT
router.get('/', async (req, res) => {
  try {
    const { name, category } = req.query;
    const products = await Product.find({
      $or: [{ name: { $regex: name } }],
    });
    console.log('all products =======>', products);
    return res
      .status(200)
      .json({ msg: 'All Products fetch successfully', data: products });
  } catch (err) {
    console.log('server error ++++', err.message);
    res.status(500).send('Server error');
  }
});
module.exports = router;
