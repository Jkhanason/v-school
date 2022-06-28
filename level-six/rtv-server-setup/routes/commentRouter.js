const express = require('express');
const commentRouter = express.Router();
const Comment = require('../models/comment');

//get all
commentRouter.route('/')
  .get((req, res, next) => {
    Comment.find((err, comments) => {
      if(err) {
        res.status(500)
        return next(err)
      }
      res.status(200).send(comments)
  })
})
commentRouter.put('/:issueId', (req, res, next)) => {
    const
  }

module.exports = commentRouter