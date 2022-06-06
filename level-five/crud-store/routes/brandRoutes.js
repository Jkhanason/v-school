const express = require('express');
const brandRouter = express.Router();
const Brand = require('../models/brand.js');

brandRouter.route('/')
  .get((req, res, next) => {
    Brand.find((err, brands) => {
      if(err) {
        res.status(500)
        return next(err)
      }
      res.status(200).send(brands)
    });
  })
  .post((req, res, next) => {
    const newBrand = new Brand(req.body);
    newBrand.save((err, addedBrand) => {
      if(err) {
        res.status(500)
        return next(err)
      }
      res.status(201).send(addedBrand)
    });
  });


module.exports = brandRouter