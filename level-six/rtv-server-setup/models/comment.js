const mongoose = require('mongoose');
const Schema = mongoose.Schema

const requriedString = {
  type: String,
  required: true
}

// const messages = new Schema({
//   title: {
//     ty
//   }
// })

const commentSchema = new Schema({
  title: {
    requriedString,
    unqiue: true
  },
  comment: requriedString,
  postedBy: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  aboutWhatIssue: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Issue'
  }
})

module.exports = mongoose.model('Comment', commentSchema)