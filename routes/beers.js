'use strict';

const express = require('express');
const router = express.Router();
const Beer = require('./../models/beer');

const options = {
  new: true
};

//GET BEERS
router.get('/all', (req, res, next) => {

  Beer.find({})
    .then(result => {
      res.json(result);
    })
    .catch(next)
});

//ADD A NEW BEER
router.post('/add', (req, res, next) => {

  // DATA VALIDATION

  const data = {
    name: req.body.name,
    style: req.body.style,
    color: req.body.color,
    brewery: req.body.brewery,
    abv: req.body.abv,
    ibu: req.body.ibu,
    price: req.body.price,
    country: req.body.country
  }
  const beer = new Beer(data);

  beer.save()
    .then(result => {
      res.json(result);
    })
    .catch(next);
});

//UPDATE BEER
router.put('/update', (req, res, next) => {

  // VALIDATION

  const $updates = {
    name: req.body.name,
    style: req.body.style,
    abv: req.body.abv,
    ibu: req.body.ibu,
    brewery: req.body.brewery,
    color: req.body.color,
    price: req.body.price,
    country: req.body.country
  };

  Beer.findByIdAndUpdate({_id: req.body._id}, $updates, options)
    .then(result => {
      res.json(result);
    })
    .catch(next)
});

//DELETE BEER
router.delete('/:id', (req, res, next) => {

  // VALIDATION

  Beer.findByIdAndRemove(req.params.id)
    .then(result => {
      res.json(result);
    })
    .catch(next)
});

//END
module.exports = router;
