const mongoose = require('mongoose');
const Schema = mongoose.Schema

const requiredString = {
  type: String,
  required: true
}

const commentsSchema = new Schema({
  username: requiredString,
  comment: requiredString,
  postedBy: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User"
  },
})

const issueSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  description: requiredString,
  datedPosted: {
    type: Date,
    default: Date.now
  },
  upvotes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    }
  ],
  downvotes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    }
  ],
  postedBy: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User"
  },
  author: requiredString,
  comments: [commentsSchema]
})

module.exports = mongoose.model("Issue", issueSchema)