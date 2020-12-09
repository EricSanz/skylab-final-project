const { Schema, model } = require('mongoose');

const user = new Schema({
  uid: { type: String },
  userName: { type: String },
  userEmail: { type: String },
  userPhoto: { type: String },
  userFavourites: { type: [String] },
});

module.exports = model('users', user);
