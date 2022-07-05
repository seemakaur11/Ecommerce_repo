const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../../models/User');

//@route   POST api/user
//@desc    Register route
//@access  Public

router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;
    try {
      // see if user exist
      let user = await User.findOne({ email: email });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }
      user = new User({ name, email, password });

      //Encrypt password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();

      // Create token
      const jwttoken = jwt.sign(
        { user_id: user._id, email },
        config.get('jwtSecret'),
        {
          expiresIn: '2h',
        }
      );
      console.log(' user ----->', user);
      user.token = jwttoken;
      res.status(201).json(jwttoken);
    } catch (err) {
      console.log('server error ++++', err.message);
      res.status(500).send('Server error');
    }
  }
);
module.exports = router;