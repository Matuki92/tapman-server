'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const restaurantSchema = new Schema({
  name: String,
  beers: {
    type: [ObjectId],
    ref: 'beers'
  }
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;