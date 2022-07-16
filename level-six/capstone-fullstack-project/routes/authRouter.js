const express = require('express');
const authRouter = express.Router();
const User = require('../models/user.js');
const jwt = require('jsonwebtoken');

//add a new user
authRouter.post('/signup', (req, res, next) => {
  //check if that username already exists
  User.findOne({username: req.body.username.toLowerCase()}, (err, user) => {
    if(err) {
      res.status(500)
      return next(err)
    }
    //if a user already has that username
    if(user) {
      res.status(403)
      return next(new Error('That username is unavailable.'))
    }
    //save the new user info, then return to front end to allow access
    const newUser = new User(req.body)
    newUser.save((err, savedUser) => {
      if(err) {
        res.status(500)
        return next(err)
      }
      //jwt takes two arguemtns, the payload (user data) and the secret key
      //.withoutpassword invokes the user schema method to remove the password from being sent to front end
      const token = jwt.sign(savedUser.withoutPassword(), process.env.SECRET)
      res.status(201).send({token, user: savedUser.withoutPassword()})
    })
  })
})


//login as the user
authRouter.post('/login', (req, res, next) => {
  User.findOne({username: req.body.username.toLowerCase()}, (err, user) => {
    if(err) {
      res.status(500)
      return next(err)
    }
    //if no user is found
    if(!user) {
      res.status(403)
      return next(new Error('Username or password is incorrect.'))
    }
    /* call the password check method declared in the user model
    it returns an error or a boolean indicating if the password is correct */
    user.checkPassword(req.body.password, (err, isMatch) => {
      if(err) {
        res.status(403)
        return next(new Error('Username or password is incorrect.'))
      }
      if(!isMatch) {
        res.status(403)
        return next(new Error('Username or password is incorrect.'))
      }
      /* they're authenticated, add token and allow login
      jwt takes two arguemtns, the payload (user data) and the secret key
      .withoutpassword invokes the user schema method to remove the password from being sent to front end */
      const token = jwt.sign(user.withoutPassword(), process.env.SECRET)
      return res.status(201).send({token, user: user.withoutPassword()})
    })
  })
})

module.exports = authRouter