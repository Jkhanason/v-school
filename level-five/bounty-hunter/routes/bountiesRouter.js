const express = require('express');
const {v4: uuidv4} = require('uuid');
const bountiesRouter = express.Router();

const bounties = [
  {
    firstName: 'Luke',
    lastName: 'Skywalker',
    living: true,
    Bounty: 1000,
    type: 'Jedi',
    _id: uuidv4()
  },
  {
    firstName: 'Obi-Wan',
    lastName: 'Kenobi',
    living: true,
    Bounty: 2000,
    type: 'Jedi',
    _id: uuidv4()
  },
  {
    firstName: 'Mace',
    lastName: 'Windu',
    living: true,
    Bounty: 2200,
    type: 'Jedi',
    _id: uuidv4()
  },
  {
    firstName: 'Count',
    lastName: 'Dooku',
    living: true,
    Bounty: 3000,
    type: 'Sith',
    _id: uuidv4()
  }
];

bountiesRouter.route('/')
  .get((req, res) => {
    res.send(bounties)
  })
  .post((req, res) => {
    req.body._id = uuidv4()
    bounties.push(req.body);
    res.send(req.body)
  })

module.exports = bountiesRouter