const mongoose = require('mongoose');
const Schema = mongoose.Schema

const issueSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
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
  }
})

module.exports = mongoose.model("Issue", issueSchema)