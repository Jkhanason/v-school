const express = require('express')
const lifeHackRouter = express.Router();
const LifeHack = require('../models/lifeHack');

//get all hacks
lifeHackRouter.route('/')
  .get((req, res, next) => {
    LifeHack.find((err, hacks) => {
      if(err) {
        res.status(500)
        return next(err)
      }
      res.status(200).send(hacks)
    })
  })

  //post a new hack
  .post((req, res, next) => {
    req.body.username = req.auth.username
    req.body.authorId = req.auth._id
    const newHack = new LifeHack(req.body)
    newHack.save((err, savedHack) => {
      if(err) {
        return next(err)
      }
      res.status(201).send(savedHack)
    })
  })

//get hacks by user
lifeHackRouter.get('/user', (req, res, next) => {
  LifeHack.find({authorId: req.auth._id}, (err, hacks) => {
    if(err) {
      res.status(500)
      return next(err)
    }
    res.status(200).send(hacks)
  })
})

//edit a posted hack
lifeHackRouter.put('/:hackId', (req, res, next) => {
  LifeHack.findOneAndUpdate(
    {_id: req.params.hackId},
    req.body,
    {new: true},
    (err, updatedHack) => {
      if(err) {
        res.status(500)
        return next(err)
      }
      res.status(201).send(updatedHack)
    })
})

module.exports = lifeHackRouter