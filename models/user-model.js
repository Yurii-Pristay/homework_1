const mongoose = require('mongoose');
var jwt = require('jsonwebtoken');

const accountSchema = new mongoose.Schema({
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

accountSchema.methods.generateAuthToken = (expireTime = '30d') => {
    const token = jwt.sign(
      {
        id: this._id
      },
      'FeedReader',
      { expiresIn: expireTime }
    );
    console.log();
    return token;
};  

const Account = mongoose.model('User', accountSchema);

module.exports = Account;
