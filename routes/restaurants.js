const express = require('express');
const router = express.Router();
const Restaurant = require('./../models/restaurant');

//GET RESTAURANTS
router.get('/', (req, res, next) => {

  // VALIDATION

  Restaurant.find({})
    .then(result => {
      res.json(result);
    })
    .catch(next);
});

//GET OWN BEERS
router.get('/:restaurant', (req, res, next) => {

  // VALIDATION

  Restaurant.findOne({name: req.params.restaurant})
    .populate({
      path: 'beers',
      model: 'Beer'
    })
    .then(result => {

      const data = {
        beers: result.beers
      }
      res.json(data);
    })
    .catch(next);
});

//ADD NEW RESTAURANT
router.post('/add', (req, res, next) => {

  // VALIDATION

  const data = {
    name: req.body.name
  }

  const restaurant = new Restaurant(data);
  restaurant.save()
    .then(result => {
      res.json(result);
    }
    )
    .catch(next);
});

//PUSH BEER TO RESTAURANT
router.post('/push', (req, res, next) => {

  // VALIDATION

  const options = {
    new: true
  };
  const restaurant = req.body.restaurantName;
  const beerId = req.body.beerId;

  Restaurant.findOneAndUpdate(
    {name: restaurant},
    {$addToSet: {beers: beerId}},
    options
  )
    .then(result => {
      res.json(result);
    })
    .catch(next);
});

module.exports = router;
