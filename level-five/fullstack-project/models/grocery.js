const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const grocerySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  department: {
    type: Schema.Types.ObjectId,
    ref: "Department",
    required: true
  },
  price: {
    type: String,
    required: true,
  },
  inStock: {
    type: Boolean,
    required: true
  },
  unitsOnHand: {
    type: Number,
    required: true
  }
});


module.exports = mongoose.model('Grocery', grocerySchema);

