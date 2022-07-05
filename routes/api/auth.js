const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const config = require('config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const auth = require('../../middleware/auth');

//@route   GET api/auth
//@desc    Test route
//@access  Public
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    console.log(' get user ----->', user);
    res.json(user);
  } catch (err) {
    console.error('error in get auth ---->', err.message);
    res.status(500).send('Server Error');
  }
});

//@route   POST api/auth
//@desc    Authenticate user & get token
//@access  Public
router.post(
  '/',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      //see  if user exist
      let user = await User.findOne({ email: email });
      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User not Registered' }] });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Password not Match' }] });
      }
      // Create token
      const jwttoken = jwt.sign(
        { user_id: user._id, email },
        config.get('jwtSecret'),
        {
          expiresIn: '2h',
        }
      );
      user.token = jwttoken;
      res.status(201).json({ msg: ' User logged in successfully', jwttoken });
    } catch (error) {
      console.log('server error ++++', err.message);
      res.status(500).send('Server error');
    }
  }
);
module.exports = router;
