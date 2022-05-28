const express = require('express');
const app = express();

app.use(express.json());

app.use('/todos', require('./routes/todoRouter.js'))

app.listen(4545, () => {
  console.log('Server is now live.')
});