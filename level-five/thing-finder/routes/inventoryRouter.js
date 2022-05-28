const express = require('express');
const inventoryRouter = express.Router();

const inventoryItems = [
  {
      name: "banana",
      type: "food",
      price: 200,
  },{
      name: "pants",
      type: "clothing",
      price: 2500,
  },{
      name: "basket ball",
      type: "toy",
      price: 1000,
  },{
      name: "rockem sockem robots",
      type: "toy",
      price: 1500,
  },{
      name: "shirt",
      type: "clothing",
      price: 800,
  },{
      name: "soup",
      type: "food",
      price: 300,
  },{
      name: "flour",
      type: "food",
      price: 100,
  }
];

inventoryRouter.get('/', (req, res) => {
  if (req.query.type) {
    res.send(inventoryItems.filter(item => item.type === req.query.type));
  }

  const maximumPrice = 1000000;
  const minimumPrice = 0;
  if (req.query.price) {
    res.send(inventoryItems.filter(item => item.price < maximumPrice && item.price > minimumPrice));
  }

  res.send(inventoryItems);
})

module.exports = inventoryRouter