const mongoose = require('mongoose');

const feedItemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        minlength: 1,
        maxlength: 100
    },
    url: {
        type: String,
        required: [true, 'Url is required'],
        validate: {
            validator: (v) => {
              return /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi.test(v);
            },
            message: props => `${props.value} is not a valid url!`
        }
    }
});

const feedSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
    unique: true,
    minlength: 1,
    maxlength: 100
  },
  feeds: [feedItemSchema]
});

const Feed = mongoose.model('Feed', feedSchema);

module.exports = Feed;
