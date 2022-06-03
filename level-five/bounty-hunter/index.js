const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose')


app.use(morgan('dev'));
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/bountyDb', () => console.log('Connected to database.'));

app.use('/bounties', require('./routes/bountiesRouter.js'));

app.use((err, req, res, next) =>
  res.send({error: err.message})
)

app.listen(4545, () => {
  console.log('Server listening on port 4545')
});