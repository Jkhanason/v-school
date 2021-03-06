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
    newUser.save((err, savedUser) => {
      if(err) {
        res.status(500)
        return next(err)
      }
      //jwt takes two arguemtns, the payload (user data) and the secret key
      //.withoutpassword invoked the user schema method to remove the password from being sent to front end
      const token = jwt.sign(savedUser.withoutPassword(), process.env.SECRET); //
      res.status(201).send({token, user: savedUser.withoutPassword()}) //token is single entries bc key and value are identical
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
    /*call the password check method declared in the user model
    it returns an error or a boolean for is the password is correct*/
    user.checkPassword(req.body.password, (err, isMatch) => {
      if(err) {
        res.status(403)
        return next(new Error('Username or password is incorrect.'))
      }
      if(!isMatch) {
        res.status(403)
        return next(new Error('Username or password is incorrect.'))
      }
      //they're authenticated, add token and allow login
      //jwt takes two arguemtns, the payload (user data) and the secret key
      //.withoutpassword invokes the user schema method to remove the password from being sent to front end
      const token = jwt.sign(user.withoutPassword(), process.env.SECRET)
      return res.status(200).send({token, user: user.withoutPassword()})
    })
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