const express = require('express');
const app = express();

app.use(express.json());

app.use('/bounties', require('./routes/bountiesRouter.js'));

app.listen(4545, () => {
  console.log('listening on port 4545')
});