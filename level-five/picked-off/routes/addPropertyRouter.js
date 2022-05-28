const express = require('express');
const addPropertyRouter = express.Router();

addPropertyRouter.get('/', (req, res, next) => {
  req.body.PTO = "unlimited";
  next()
});

module.exports = addPropertyRouter