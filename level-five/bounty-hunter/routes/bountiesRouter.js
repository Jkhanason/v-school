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
    res.status(200).send(bounties)
  })
  .post((req, res) => {
    req.body._id = uuidv4()
    bounties.push(req.body);
    res.status(201).send(req.body)
  })

bountiesRouter.route('/:bountyId')
  .delete((req, res, next) => {
    const id = req.params.bountyId;
    const index = bounties.findIndex(bounty => bounty._id === id);
    if (index === -1) {
      const error = new Error(`Unable to delete a bounty with ID: ${id}.`);
      res.status(500)
      return next(error)
    }
    bounties.splice(index, 1);
    res.status(200).send(`Item with ID: ${id} has been deleted`);
  })
  .get((req, res, next) => {
    const id = req.params.bountyId;
    const index = bounties.findIndex(bounty => bounty._id === id);
    if (index === -1) {
      const error = new Error(`Unable to locate a bounty with ID: ${id}.`);
      res.status(500)
      return next(error)
    }
    res.status(200).send(bounties[index]);
  })
  .put((req, res, next) => {
    const id = req.params.bountyId;
    const index = bounties.findIndex(bounty => bounty._id === id);
    if (index === -1) {
      const error = new Error(`Unable to update a bounty with ID: ${id}.`);
      res.status(500)
      return next(error)
    }
    const updatedInfo = Object.assign(bounties[index], req.body);
    res.status(201).send(updatedInfo);
  })

  bountiesRouter.get('/search/type', (req, res, next) => {
    if (!req.query.type) {
      const error = new Error('Please provide a search parameter')
      res.status(500)
      return next(error)
    }
    const types = bounties.filter(bounty => bounty.type.toLowerCase() === req.query.type.toLowerCase())
    res.status(200).send(types.length !== 0 ? types : 'No matches found.')
  })

module.exports = bountiesRouter