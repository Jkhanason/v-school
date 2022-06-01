const express = require('express');
const peopleRouter = express.Router();
const {v4: uuidv4} = require('uuid');

//fake data
const users=[
  {name:"joe", age:14, _id: uuidv4()},
  {name:"moe", age:44, _id: uuidv4()},
  {name:"slow", age:19, _id: uuidv4()},
  {name:"flow", age:32, _id: uuidv4()},
  {name:"blow", age:22, _id: uuidv4()}
 ];


 peopleRouter.route('/')
  .post((req, res) => {
    req.body._id = uuidv4()
    users.push(req.body)
    res.send(req.body)
})
  .get((req, res) => {
    res.send(users)
});

//get only one
peopleRouter.route('/:personId')
  .get((req, res, next) => {
    const foundUser = users.find(user => user._id === req.params.personId);
    if (!foundUser) {
      const error = new Error('Unable to locate a user with that ID number.')
      return next(error)
    }
    res.send(foundUser);
  })
  .delete((req, res, next) => {
    const id = req.params.personId;
    const index = users.findIndex(user => user._id === id);
    if (index === -1) {
      const error = new Error('No user currently has that ID number. Please verify the ID you entered.')
      return next(error)
    }
    users.splice(index, 1);
    res.send(`Item with ID: ${id} has been deleted.`);
  })
  .put((req, res, next) => {
    const id = req.params.personId;
    const index = users.findIndex(user => user._id === id);
    if (index === -1) {
      const error = new Error('Could not locate a user with that ID number.')
      return next(error)
    }
    const updatedObj = Object.assign(users[index], req.body);
    res.send(updatedObj)
  });

//get multiple
peopleRouter.get('/search/age', (req, res) => {
  req.query.age ? res.send(users.filter(user => user.age === Number(req.query.age))) : res.send(users)
  // res.send(users.filter(user => user.name[user.name.length-1] === req.query.lastletter))

})
module.exports = peopleRouter