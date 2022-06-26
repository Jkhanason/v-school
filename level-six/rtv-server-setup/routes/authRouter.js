const express = require('express');
const authRouter = express.Router();
const User = require('../models/user.js');
const jwt = require('jsonwebtoken');

//get all users
authRouter.get('/', (req, res, next) => {
  User.find((err, users) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    res.status(200).send(users)
  })
})

//add new user
authRouter.post('/signup', (req, res, next) => {
  User.findOne({username: req.body.username.toLowerCase()}, (err, user) => { //see if username already exists
    if(err) {
      res.status(500)
      return next(err)
    }
    if(user) { //if that username exists, this will be truthy
      res.status(403)
      return next(new Error('This username is not available.')) //custom error to try a new username
    }
    const newUser = new User(req.body);
    newUser.save((err, user) => {
      if(err) {
        res.status(500)
        return next(err)
      }
      console.log(user)
      const token = jwt.sign(user.toObject(), process.env.SECRET); //
      res.status(201).send({token, user}) //single entries bc keys and values are identical
    })
  })
})

//login as user
authRouter.post('/login', (req, res, next) => {
  User.findOne({username: req.body.username.toLowerCase()}, (err, user) => {
    if(err) {
      res.status(500)
      return next(err)
    }
    if(!user) { //if that username isnt found
      res.status(403)
      return next(new Error('Username or password is incorrect.'));
    }
    if(req.body.password !== user.password) {
      res.status(403)
      return next(new Error('Username or password is incorrect.'));
    }
    const token = jwt.sign(user.toObject(), process.env.SECRET) //give user a token and the secret key
    res.status(200).send({token, user})
  })
})

//edit user info
authRouter.put('/:userId', (req, res, next) => {
  User.findOneAndUpdate(
    {_id: req.params.userId},
    req.body,
    {new: true},
    (err, updatedUser) => {
      if(err) {
        res.status(500)
        return next(err)
      }
      res.status(201).send(updatedUser)
  })
})

module.exports = authRouter