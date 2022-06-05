const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inventorySchema = new Schema({
  item: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    requried: true
  },
  quantity: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Inventory', inventorySchema);