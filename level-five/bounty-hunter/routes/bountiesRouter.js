const express = require('express');
const bountiesRouter = express.Router();
const Bounty = require('../models/bounty.js');

bountiesRouter.route('/')
  .get((req, res, next) => {
    Bounty.find((err, bounties) => {
      if(err) {
        res.status(500)
        return next(err)
      }
      return res.status(200).send(bounties)
    });
  })
  .post((req, res, next) => {
    const newBounty = new Bounty(req.body)
    newBounty.save((err, addedBounty) => {
      if(err) {
        res.status(500)
        return next(err)
      }
      res.status(201).send(addedBounty)
    });
  })

bountiesRouter.route('/:bountyId')
  .delete((req, res, next) => {
    const id = req.params.bountyId;
    Bounty.findOneAndDelete({_id: id},(err, deletedBounty) => {
      if (err) {
        res.status(500)
        return next(error)
      }
      res.status(200).send(`Item with ID: ${id} has been deleted`);
    });
  })
  .get((req, res, next) => {
    const id = req.params.bountyId;
    Bounty.find({_id: id}, (err, bounty) => {
      if (err) {
        res.status(500)
        return next(err)
      }
      res.status(200).send(bounty);
    });
  })
  .put((req, res, next) => {
    const id = req.params.bountyId;
    Bounty.findOneAndUpdate(
      {_id: id},
      req.body,
      {new: true},
      (err, updatedBounty) => {
      if (err) {
        res.status(500)
        return next(error)
      }
      res.status(201).send(updatedBounty);
    });
  });

  bountiesRouter.get('/search/type', (req, res, next) => {
    Bounty.find({type: req.query.type}, (err, bounties) => {
      if (err) {
        res.status(500)
        return next(err)
      }
      res.status(200).send(bounties)
    })
  })

module.exports = bountiesRouter