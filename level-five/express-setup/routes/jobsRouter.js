const express = require('express')
const {v4: uuidv4} = require('uuid')
const jobsRouter = express.Router()

const jobs = [
  {job: 'teacher', _id: uuidv4()},
  {job: 'janitor', _id: uuidv4()},
  {job: 'web dev', _id: uuidv4()},
  {job: 'killer', _id: uuidv4()}
];

// jobsRouter.post('/', (req, res) => {
//   req.body._id = uuidv4()
//   jobs.push(req.body)
//   res.send(req.body)
// });

// jobsRouter.get('/', (req, res) => {
//   res.send(jobs)
// });

//same route to get all or post new item
jobsRouter.route('/')
  .post((req, res) => {
    req.body._id = uuidv4()
    jobs.push(req.body)
    res.send(req.body)
  })
  .get((req, res) => {
    res.send(jobs)
  })

//same route to delete, put or get one
jobsRouter.route('/:jobId')
  .delete((req, res) => {
    const id = req.params.jobId;
    const index = jobs.findIndex(job => job._id === id);
    jobs.splice(index, 1);
    res.send(`The item with Id#: ${id} has been removed`);
  })
  .put((req, res) => {
    const updates = req.body;
    const index = jobs.findIndex(job => job._id === req.params.jobId);
    const updatedObj = Object.assign(jobs[index], updates);
    res.send(updatedObj);
  })
  .get((req, res) => {
    const id = req.params.jobId;
    const index = jobs.findIndex(job => job._id === id);
    res.send(jobs[index]);
  })
module.exports = jobsRouter