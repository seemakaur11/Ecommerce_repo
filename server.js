const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const multer = require('multer');
// const path = require('path');

const app = express();

//connect database
connectDB();
//Init middleware
app.use(express.json({ extended: false }));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

const MIME_TYPES = {
  'imgs/jpg': 'jpg',
  'imgs/jpeg': 'jpeg',
  'imgs/png': 'png',
};

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads');
  },
  filename: (req, file, cb) => {
    // const name = file.originalname.split('').join(_);
    // const extension = MIME_TYPES[file.mimetype];
    cb(null, Date.now() + file.originalname);
  },
});
var upload = multer({ storage: storage }).single('image');
//define route
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/forgot-password', require('./routes/api/forget'));
app.use('/api/reset-password', require('./routes/api/reset'));
app.use('/api/product', upload, require('./routes/api/product'));

//Serve Static assets in production
// if (process.env.NODE_ENV === 'production') {
//   //set static folder
//   app.use(express.static('client/build'));

//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//   });
// }

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
