const mongoose = require('mongoose');
var jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
    unique: true,
    minlength: 4,
    maxlength: 100
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: 4,
    maxlength: 100
  }
});

userSchema.methods.generateAuthToken = (expireTime = '30d') => {
    const token = jwt.sign(
      {
        id: this._id
      },
      'FeedReader',
      { expiresIn: expireTime }
    );
    return token;
};  

const User = mongoose.model('User', userSchema);

module.exports = User;
