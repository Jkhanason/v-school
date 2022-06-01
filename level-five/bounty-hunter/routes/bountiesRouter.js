const express = require('express');
const {v4: uuidv4} = require('uuid');
const bountiesRouter = express.Router();

const bounties = [
  {
    firstName: 'Luke',
    lastName: 'Skywalker',
    living: true,
    bounty: 1000,
    type: 'Jedi',
    _id: uuidv4()
  },
  {
    firstName: 'Obi-Wan',
    lastName: 'Kenobi',
    living: true,
    bounty: 2000,
    type: 'Jedi',
    _id: uuidv4()
  },
  {
    firstName: 'Mace',
    lastName: 'Windu',
    living: true,
    bounty: 2200,
    type: 'Jedi',
    _id: uuidv4()
  },
  {
    firstName: 'Count',
    lastName: 'Dooku',
    living: true,
    bounty: 3000,
    type: 'Sith',
    _id: uuidv4()
  },
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

bountiesRouter.route('/:bountyId')
  .delete((req, res) => {
    const id = req.params.bountyId;
    const index = bounties.findIndex(bounty => bounty._id === id);
    bounties.splice(index, 1);
    res.send(`Item with ID: ${id} has been deleted`);
  })
  .get((req, res) => {
    const id = req.params.bountyId;
    const index = bounties.findIndex(bounty => bounty._id === id);
    res.send(bounties[index]);
  })
  .put((req, res) => {
    const id = req.params.bountyId;
    const index = bounties.findIndex(bounty => bounty._id === id);
    const updatedInfo = Object.assign(bounties[index], req.body);
    res.send(updatedInfo);
  })

module.exports = bountiesRouter