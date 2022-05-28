const express = require('express');
const app = express()

app.use(express.json());

app.use('/inventory', require('./routes/inventoryRouter.js'));

app.listen(4545, () => {
  console.log('The server is live.')
});