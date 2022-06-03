const mongoose = require('mongoose');
const Schema = mongoose.Schema

//people blueprint
const peopleSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model("Person", peopleSchema);