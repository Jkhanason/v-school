const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')

const userSchema = new Schema({
  username: {
    type: String,
    lowercase: true,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  memberSince: {
    type: Date,
    default: Date.now
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
});

// pre-save hook function to encrypt user passwords on sign up
/* cant user arrow func, needs function keyword to assess the "this" keyword
*/
userSchema.pre('save', function(next) {
  const user = this
  //ensures this only runs on initial signup
  if (!user.isModified('password')) {
    return next()
  }
  /* bcrypt.hash takes 2 arguements.
  1) what info to hash
  2) the saltRounds value which is how long the hashing algorithm takes to run, 10 is default.
  lower is faster, but less secure. higher is more secure but could slow down
  the UX*/
  bcrypt.hash(user.password, 10, (err, hash) => {
    if(err) {
      return next(err)
    }
    //reset their plain text pw to the hashed version to send to database
    user.password = hash
    return next()
  })
})

/* these methods could be named anything */

//this method checks the encrypted password on login. its called in the router file
userSchema.methods.checkPassword = function(passwordAttempt, callback) {
  /* .compare runs === against the plain text password the user enters
  and the hashed password saved in the system*/
  bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
    if(err) {
      return callback(err)
    }
    //returns a null value for err and the boolean indicating password match
    return callback(null, isMatch)
  })
}

//invoked in the router file to remove user pw from being sent to front end
userSchema.methods.withoutPassword = function() {
  //convert user data to an object
  const user = this.toObject()
  //delete pw from user data and return user data
  delete user.password
  return user
}


module.exports = mongoose.model('User', userSchema)