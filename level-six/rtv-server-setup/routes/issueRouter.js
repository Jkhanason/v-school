const express = require('express');
const issueRouter = express.Router();
const Issue = require('../models/issue');

//get all issues
issueRouter.route('/')
  .get((req, res, next) => {
    Issue.find((err, issues) => {
      if(err) {
        res.status(500)
        return next(err)
      }
      res.status(200).send(issues)
    })
  })
  //add a new issue
  .post((req, res, next) => {
    req.body.postedBy = req.auth._id
    const issue = new Issue(req.body)
    issue.save((err, savedIssue) => {
      if(err) {
        res.status(500)
        return next(err)
      }
      res.status(201).send(savedIssue)
    })
  })

  //edit an existing issue
  issueRouter.put('/:issueId', (req, res, next) => {
    Issue.findOneAndUpdate(
      {_id: req.params.issueId},
      req.body,
      {new: true},
      (err, updatedIssue) => {
        if(err) {
          res.status(500)
          return next(err)
        }
        res.status(201).send(updatedIssue)
    })
  })

  //add upvote, pull downvote if any
issueRouter.put('/upvote/:issueId', (req, res, next) => {
    Issue.findOneAndUpdate(
      {_id: req.params.issueId},
      { $addToSet: { upvotes: req.auth._id },
        $pull: { downvotes: req.auth._id }
      },
      {new: true},
      (err, updatedIssue) => {
        if(err) {
          res.status(500)
          return next(err)
        }

    //this would also work to update the upvotes/downvotes array only once
    // Issue.findOne({_id: req.params.issueId}, (err, issue) => {
    //     if(err) {
    //       res.status(500)
    //       return next(err)
    //     }

    //     if (issue.upvotes.indexOf(req.auth._id) !== -1) {
    //       res.status(403)
    //       return next(new Error('You can only upvote an issue one time.'))
    //     } else {
    //       issue.upvotes.push(req.auth._id)
    //     }
    //     issue.save((err, savedIssue) => {
    //       if(err) {
    //         res.status(500)
    //         return next(err)
    //       }
    //       res.status(201).send(savedIssue)

    //     })

      res.status(201).send(updatedIssue)
    })
  })

  //add downvote, pull upvote if any
  issueRouter.put('/downvote/:issueId', (req, res, next) => {
    Issue.findOneAndUpdate(
      {_id: req.params.issueId},
      { $pull: { upvotes: req.auth._id },
        $addToSet: { downvotes: req.auth._id }
      },
      {new: true},
      (err, updatedIssue) => {
        if(err) {
          res.status(500)
          return next(err)
        }
        res.status(201).send(updatedIssue)
    })
  })

  //add comments
  issueRouter.put('/comments/:issueId', (req, res, next) => {
    Issue.findOne({_id: req.params.issueId}, (err, issue) => {
      if(err) {
        res.status(500)
        return next(err)
      }
      req.body.username = req.auth.username
      req.body.postedBy = req.auth._id
      // const comment = new commentsSchema(req.body)
      issue.comments.push(req.body)
      issue.save((err, savedIssue) => {
        if(err) {
          res.status(500)
          return next(err)
        }
        res.status(201).send(savedIssue)
      })
    })
  })

module.exports = issueRouter
