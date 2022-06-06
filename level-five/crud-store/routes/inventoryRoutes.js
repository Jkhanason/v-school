const express = require('express');
const inventoryRouter = express.Router();
const Inventory = require('../models/inventory.js');

inventoryRouter.get('/', (req, res, next) => {
  Inventory.find((err, items) => {
    if(err) {
      res.status(500)
      return next(err)
    }
    res.status(200).send(items)
  });
});

inventoryRouter.route('/:brandId')
  .post((req, res, next) => {
    req.body.brand = req.params.brandId
    const newItem = new Inventory(req.body)
    newItem.save((err, addedItem) => {
      if(err) {
        res.status(500)
        return next(err)
      }
      res.status(201).send(addedItem)
  });
})

inventoryRouter.get('/brand/:brandId', (req, res, next) => {
    Inventory.find({brand: req.params.brandId}, (err, items) => {
      if(err) {
        res.status(500)
        return next(err)
      }
      res.status(200).send(items)
  });
});

inventoryRouter.route('/:itemId')
  .delete((req, res, next) => {
    const id = req.params.itemId
    Inventory.findOneAndDelete({_id: id}, (err, deletedItem) => {
      if(err) {
        res.status(500)
        return next(err)
      }
      res.status(200).send(`Item with ID ${id} has been removed.`)
    });
  })
  .get((req, res, next) => {
    const id = req.params.itemId
    Inventory.find({_id: id}, (err, item) => {
      if(err) {
        res.status(500)
        return next(err)
      }
      res.status(200).send(item)
    });
  })
  .put((req, res, next) => {
    Inventory.findOneAndUpdate(
      {_id: req.params.itemId},
      req.body,
      {new: true},
      (err, updatedItem) => {
        if(err) {
          res.status(500)
          return next(err)
        }
        res.status(201).send(updatedItem)
    });
  })


module.exports = inventoryRouter