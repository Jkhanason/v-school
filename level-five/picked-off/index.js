const express = require('express');
const app = express();

app.use(express.json());

app.use(require('./routes/addPropertyRouter.js'));

app.get('/', (req, res) => {
  const jobGoals = {
    "location": "remote",
    "pay": 80000
  };
  const updatedObj = Object.assign(jobGoals, req.body);
  res.send(updatedObj);
});

app.listen(4545, () => {
  console.log('The servier is live.');
});