var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

function pirates() {
  return knex('pirates');
};

/* GET home page. */
router.get('/', function(req, res, next) {
  pirates().select().then(function(pirates) {
  res.json(pirates);
  })
});

module.exports = router;
