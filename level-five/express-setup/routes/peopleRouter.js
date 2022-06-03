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
    res.status(201).send(users)
})
  .get((req, res) => {
    res.status(200).send(users)
});

//get only one
peopleRouter.route('/:personId')
  .get((req, res, next) => {
    const foundUser = users.find(user => user._id === req.params.personId);
    if (!foundUser) {
      const error = new Error('Unable to locate a user with that ID number.')
      res.status(500)
      return next(error)
    }
    res.status(200).send(foundUser);
  })
  .delete((req, res, next) => {
    const id = req.params.personId;
    const index = users.findIndex(user => user._id === id);
    if (index === -1) {
      const error = new Error('No user currently has that ID number. Please verify the ID you entered.')
      res.status(500)
      return next(error)
    }
    users.splice(index, 1);
    res.status(200).send(`Item with ID: ${id} has been deleted.`);
  })
  .put((req, res, next) => {
    const id = req.params.personId;
    const index = users.findIndex(user => user._id === id);
    if (index === -1) {
      const error = new Error('Could not locate a user with that ID number.')
      res.status(500)
      return next(error)
    }
    const updatedObj = Object.assign(users[index], req.body);
    res.status(201).send(updatedObj)
  });

//get multiple
peopleRouter.get('/search/age', (req, res) => {
  if (!req.query.age) {
    const error = new Error('Please provide a search parameter')
    res.status(500)
    return next(error)
  }
  // res.send(users.filter(user => user.name[user.name.length-1] === req.query.lastletter))
  const ages = users.filter(user => user.age === Number(req.query.age))
  res.status(200).send(ages.length !== 0 ? ages : 'No matches found.')


})
module.exports = peopleRouter