const express = require('express');
const departmentRouter = express.Router();
const Department = require('../models/department.js');

departmentRouter.route('/')
  .get((req, res, next) => {
    Department.find((err, brands) => {
        if(err) {
          res.status(500);
          return next(err);
        }
        res.status(200).send(brands);
      });
  })
  .post((req, res, next) => {
    const newBrand = new Department(req.body);
    newBrand.save((err, savedBrand) => {
      if(err) {
        res.status(500);
        return next(err);
      }
      res.status(201).send(savedBrand)
    });
  })

  departmentRouter.route('/:deptId')
    .delete((req, res, next) => {
      Department.findOneAndDelete({_id: req.params.deptId}, (err, deletedItem) => {
        if(err) {
          res.status(500);
          return next(err);
        }
        res.status(200).send(`${deletedItem.name} department has been removed.`);
      });
    })


module.exports = departmentRouter