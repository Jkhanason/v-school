const express = require('express');
const groceryRouter = express.Router();
const Grocery = require('../models/grocery.js');

//get all
groceryRouter.route('/')
  .get((req, res, next) => {
    Grocery.find((err, brands) => {
        if(err) {
          res.status(500);
          return next(err);
        }
        res.status(200).send(brands);
      });
  })

//get by department
groceryRouter.get('/dept/:deptId', (req, res, next) => {
  Grocery.find({department: req.params.deptId}, (err, items) => {
    if(err) {
      res.status(500);
      return next(err);
    }
    res.status(200).send(items);
  });
})

//update quantity
groceryRouter.put('/order/:itemId', (req, res, next) => {
  console.log(req.body)
  Grocery.findOneAndUpdate(
    {_id: req.params.itemId},
    { $inc: { unitsOnHand: req.body.count}},
    { new: true },
    (err, updatedItem) => {
      if(err){
        res.status(500)
        return next(err)
      }
      if (updatedItem.unitsOnHand < 1) {
        updatedItem.inStock = false
      }
      res.status(201).send(updatedItem)
  });
})

groceryRouter.route('/:id')
  .delete((req, res, next) => {
    Grocery.findOneAndDelete({_id: req.params.id}, (err, deletedItem) => {
      if(err) {
        res.status(500);
        return next(err);
      }
      res.status(200).send(`${deletedItem.name} Grocery has been removed.`);
    });
  })
  .post((req, res, next) => {
    req.body.department = req.params.id
    const newGrocery = new Grocery(req.body);
    newGrocery.save((err, savedGrocery) => {
      if(err) {
        res.status(500);
        return next(err);
      }
      res.status(201).send(savedGrocery)
    });
  })
  .put((req, res, next) => {
    Grocery.findOneAndUpdate(
      {_id: req.params.id},
      req.body,
      {new: true},
      (err, editedItem) => {
        if(err) {
          res.status(500)
          return next(err)
        }
        res.status(201).send(editedItem)
      });
  })


module.exports = groceryRouter