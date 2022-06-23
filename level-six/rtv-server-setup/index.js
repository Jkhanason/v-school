const express = require('express');
const app = express();
require('dotenv').config();
const morgan = require('morgan');
const mongoose = require('mongoose');
const {expressjwt} = require('express-jwt');

app.use(morgan('dev'));
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/rock-the-vote', () => console.log('Database is running.'));

app.use((err, req, res, next) => {
  console.log(err)
  return res.send({message: err.message})
})

app.listen(4545, () => {
  console.log('Server running on 4545.')
})