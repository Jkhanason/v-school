const express = require('express');
const peopleRouter = express.Router()
const {v4: uuidv4} = require('uuid')

//fake data
const users=[
  {name:"joe", age:14, _id: uuidv4()},
  {name:"moe", age:44, _id: uuidv4()},
  {name:"slow", age:19, _id: uuidv4()},
  {name:"flow", age:32, _id: uuidv4()},
  {name:"blow", age:22, _id: uuidv4()}
 ];

 peopleRouter.post('/', (req, res) => {
  req.body._id = uuidv4()
  users.push(req.body)
  res.send(req.body)
})

peopleRouter.get('/', (req, res) => {
  res.send(users)
});

module.exports = peopleRouter