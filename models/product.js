const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  //   user: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     required: true,
  //     ref: 'User', //relation betwen the product and yhe user
  //   },
  image: {
    type: String,
    required: true,
    // data: Buffer,
  },
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});
module.exports = Product = mongoose.model('product', ProductSchema);
