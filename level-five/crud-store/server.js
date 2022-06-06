const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();

app.use(morgan('dev'));
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/crud-store', () => console.log('Connected to database'));

app.use('/inventory', require('./routes/inventoryRoutes.js'));
app.use('/brand', require('./routes/brandRoutes.js'));

app.use((err, req, res, next) => {
  res.send({error: err.message})
});

app.listen(4545, () => {
  console.log('Server running on 4545');
});