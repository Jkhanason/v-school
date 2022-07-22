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
lifeHackRouter.route('/:hackId')
  .put((req, res, next) => {
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

//delete a hack
  .delete((req, res, next) => {
    LifeHack.findOneAndDelete({_id: req.params.hackId}, (err, hack) => {
      if(err) {
        res.status(500)
        return next(err)
      }
      res.status(200).send(`Life hack ID:${hack._id} has been deleted.`)
    })
  })

//add an upvote and remove a downvote
lifeHackRouter.put('/upvote/:hackId', (req, res, next) => {
  LifeHack.findOneAndUpdate(
    {_id: req.params.hackId},
    { $addToSet: {upvotes: req.auth.username},
      $pull: {downvotes: req.auth.username}
    },
    {new: true},
    (err, updatedHack) => {
      if(err) {
        res.status(500)
        return next(err)
      }
      res.status(201).send(updatedHack)
    })
})

//add a downvote and remove an upvote
lifeHackRouter.put('/downvote/:hackId', (req, res, next) => {
  LifeHack.findOneAndUpdate(
    {_id: req.params.hackId},
    { $addToSet: {downvotes: req.auth.username},
      $pull: {upvotes: req.auth.username},
    },
    {new: true},
    (err, updatedHack) => {
      if(err) {
        res.status(500)
        return next(err)
      }
      res.status(201).send(updatedHack)
    })
})

//add comments
lifeHackRouter.put('/comment/:hackId', (req, res, next) => {
  req.body.postedBy = req.auth.username
  req.body.authorId = req.auth._id
  LifeHack.findOneAndUpdate(
    {_id: req.params.hackId},
    { $push: {comments: req.body}},
    {new: true},
    (err, updatedHack) => {
      if(err) {
        res.status(500)
        return next(err)
      }
      res.status(201).send(updatedHack)
    })
})

//edit a comment
lifeHackRouter.put('/comment/edit/:hackId/:commentId', (req, res, next) => {
  LifeHack.findOneAndUpdate(
    {_id: req.params.hackId, "comments._id": req.params.commentId },
    { $set: {"comments.$.comment" : req.body.comment }},
    {new: true},
    (err, comment) => {
      if(err) {
        res.status(500)
        return next(err)
      }
      res.status(201).send(comment)
    })
})

//delete a comment
lifeHackRouter.put('/comment/delete/:hackId/:commentId', (req, res, next) => {
  LifeHack.findOneAndUpdate(
    {_id: req.params.hackId, "comments._id": req.params.commentId},
    { $pull: {comments: {_id: req.params.commentId}}},
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