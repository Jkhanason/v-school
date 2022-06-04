const express = require('express');
const peopleRouter = express.Router();
const Person = require('../models/people.js');

 peopleRouter.route('/')
  .post((req, res, next) => {
    const newPerson = new Person(req.body)
    newPerson.save((err, addedPerson) => {
      if(err) {
        res.status(500)
        return next(err)
      }
      res.status(201).send(addedPerson)
    });
})
  .get((req, res, next) => {
    Person.find((err, people) => {
      if(err) {
        res.status(500)
        return next(err)
      }
      return res.status(200).send(people)
    });
});

//get only one
peopleRouter.route('/:personId')
  .get((req, res, next) => {
    Person.find({_id: req.params.personId}, (err, person) => {
      if (err) {
        res.status(500)
        return next(err)
      }
      res.status(200).send(person);
    });
  })
  .delete((req, res, next) => {
    Person.findOneAndDelete({_id: req.params.personId}, (err, deletedPerson) => {
      if(err) {
        res.status(500)
        return next(err)
      }
      res.status(200).send(`${deletedPerson} has been deleted.`)
    });
  })
  .put((req, res, next) => {
    const id = req.params.personId;
    Person.findOneAndUpdate(
      {_id: id}, //find the item with this ID
      req.body, //update that item with this this info
      {new: true}, //return to me, the now updated item
      (err, updatedPerson) => {
      if (err) {
        res.status(500)
        return next(error)
      }
      res.status(201).send(updatedPerson)
    });
  });

//get multiple
peopleRouter.get('/search/age', (req, res) => {
  Person.find({age: req.query.age}, (err, people) => {
    if(err) {
      res.status(500)
      return next(err)
    }
    res.status(200).send(people)
  })
})
module.exports = peopleRouter