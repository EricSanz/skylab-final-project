const { Schema, model } = require('mongoose');

const user = new Schema({
  uid: { type: String },
  displayName: { type: String },
  email: { type: String },
  userPhoto: { type: String },
  favorites: { type: [String] },
});

module.exports = model('users', user);
