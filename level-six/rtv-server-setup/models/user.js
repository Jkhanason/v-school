const mongoose = require('mongoose');
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    lowercase: true,
    unique: true
  },
  password: {
    type: String,
    require: true
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

userSchema.pre('save', function(next) {
  const user = this
  //ensures this only runs on initial sign up
  if(!user.isModified('password')) {
    return next()
  }
  /* bcrypt.hash takes 2 arguements. 1) what info to hash 2) the saltRounds value
  which is how long the hashing algorithm takes to run, 10 is default.
  lower is faster, but less secure. higher is more secure but could slow down
  the UX*/
  bcrypt.hash(user.password, 10, (err, hash) => {
    if(err) {
      return next(err)
    }
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
    //isMatch is a boolean
    return callback(null, isMatch)
  })
}

//will be invoked in the router file
userSchema.methods.withoutPassword = function() {
  //convert user data to an object
  const user = this.toObject()
  //delete password and return user data
  delete user.password
  return user
}

module.exports = mongoose.model('User', userSchema)