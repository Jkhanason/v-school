const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');

app.use(express.json()); //looks for a request body and convert it to req.body
app.use(morgan('dev'));

mongoose.connect('mongodb://localhost:27017/peopleDb', () => console.log('Connectd to database.'));

app.use('/people', require('./routes/peopleRouter.js'))
app.use('/jobs', require('./routes/jobsRouter.js'))

app.use((err, req, res, next) => {
  return res.send({error: err.message})
})

app.listen(4545, () => {
  console.log('Server running on 4545')
});

