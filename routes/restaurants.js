const express = require('express');
const router = express.Router();
const Restaurant = require('./../models/beer');

//GET RESTAURANTS
router.get('/', (req, res, next) => {

  // VALIDATION

  Restaurant.find({})
    .then(result => {
      res.json(result);
    })
    .catch(next);
});

//ADD NEW RESTAURANT
router.post('/', (req, res, next) => {

  // VALIDATION

  const data = {
    name: req.body.name
  }

  const restaurant = new Restaurant(data);
  restaurant.save()
    .then()
    .catch(next);
});

module.exports = router;
