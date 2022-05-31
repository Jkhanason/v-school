const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(express.json()); //looks for a request body and convert it to req.body
app.use(morgan('dev'));

app.use('/people', require('./routes/peopleRouter.js'))

app.use('/jobs', require('./routes/jobsRouter.js'))

app.listen(4545, () => {
  console.log('it works')
});

