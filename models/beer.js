'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const ObjectId = Schema.Types.ObjectId;

const beerSchema = new Schema({
  name: String,
  style: String,
  color: String,
  brewery: String,
  abv: Number,
  ibu: Number,
  price: Number
});

const Beer = mongoose.model('Beer', beerSchema);

module.exports = Beer;