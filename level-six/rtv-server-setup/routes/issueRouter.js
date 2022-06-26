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

  //add upvote to issue
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
    // Issue.find({_id: req.params.issueId}, (err, issue) => {
    //     if(err) {
    //       res.status(500)
    //       return next(err)
    //     }
    //   for (let i = 0; i < issue.length; i++) {
    //     if (issue[i].upvotes.indexOf(req.auth._id) !== -1) {
    //       res.status(403)
    //       return next(new Error('You can only upvote an issue one time.'))
    //     } else {
    //       issue[i].upvotes.push(req.auth._id)
    //     }
    //   }
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

module.exports = issueRouter
