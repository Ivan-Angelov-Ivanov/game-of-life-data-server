var express = require('express');
var router = express.Router();

var user = {name: 'Ivan', age: 22, city: 'Sofia'}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(user);
});

module.exports = router;
