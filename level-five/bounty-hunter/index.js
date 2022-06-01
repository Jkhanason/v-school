const express = require('express');
const app = express();
const morgan = require('morgan');


app.use(morgan('dev'));
app.use(express.json());

app.use('/bounties', require('./routes/bountiesRouter.js'));

app.listen(4545, () => {
  console.log('listening on port 4545')
});