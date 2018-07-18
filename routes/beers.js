const express = require('express');
const router = express.Router();
const Beer = require('./../models/beer');

//GET BEERS
router.get('/', (req, res, next) => {

});

//ADD A NEW BEER
router.post('/add', (req, res, next) => {

  // DATA VALIDATION

  const data = {
    name: req.body.name
    // style: req.body.style,
    // color: req.body.color,
    // brewery: req.body.brewery,
    // abv: req.body.abv,
    // ibu: req.body.ibu,
    // price: req.body.price
  }
  const beer = new Beer(data);

  beer.save()
    .then()
    .catch(next);
});

//END
module.exports = router;
