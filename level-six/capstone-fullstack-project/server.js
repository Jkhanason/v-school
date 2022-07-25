const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();
const {expressjwt} = require('express-jwt');
const cors = require('cors')

// register middleware
app.use(cors())
//displays server data in console
app.use(morgan('dev'));
//convert incoming requests to json
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/life-hacks', () => console.log('Database is running.'));

app.use('/auth', require('./routes/authRouter'));
//any path to api requires a token to proceed
app.use('/api', expressjwt({secret: process.env.SECRET, algorithms: ['HS256']}));
app.use('/api/hacks', require('./routes/lifeHackRouter'));

app.use((err, req, res, next) => {
  console.log(err)
  //if no token is detected, express jwt will trigger this error for unauthorized users
  if(err.name === "UnauthorizedError") {
    res.status(err.status)
  }
  return res.send({errorMsg: err.message})
});

app.listen(4545, () => {
  console.log(`Server is running on 4545.`)
});