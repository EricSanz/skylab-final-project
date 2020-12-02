const { Schema, model } = require('mongoose');

const videogameSchema = new Schema({
  id: { type: Number },
  name: { type: String },
  platforms: { type: [String] },
  developer: { type: String },
  price: { type: Number },
  salePrice: { type: Number },
  release: { type: String },
});

module.exports = model('videogames', videogameSchema);
