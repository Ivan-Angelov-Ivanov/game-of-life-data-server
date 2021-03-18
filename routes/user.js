var express = require('express');
var router = express.Router();
const User = require('../models/user')

//var user = {name: 'Ivan', age: 22, city: 'Sofia'}

// controllers
const {listOfUsers, addUser} = require("../controllers/user")

/* GET users listing. */
router.get('/users', listOfUsers);
router.post('/user', addUser);

module.exports = router;
