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

jobsRouter.route('/')
  .post((req, res) => {
    req.body._id = uuidv4()
    jobs.push(req.body)
    res.send(req.body)
  })
  .get((req, res) => {
    res.send(jobs)
  })

module.exports = jobsRouter