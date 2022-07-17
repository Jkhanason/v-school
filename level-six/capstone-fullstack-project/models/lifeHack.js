const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const requiredString = {
  type: String,
  required: true
}

const commentSchema = new Schema({
  postedBy: requiredString,
  comment: requiredString,
  authorId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }
})

const lifeHackSchema = new Schema({
  description: requiredString,
  category: requiredString,
  username: requiredString,
  authorId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  upvotes: [],
  downvotes: [],
  comments: [commentSchema]
})

module.exports = mongoose.model('LifeHack', lifeHackSchema)