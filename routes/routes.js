var express = require('express');
var router = express.Router();

var controller = require('../controllers/controller.js');


// Create new user


router.post('/user',controller.createUser);
router.get('/user/id/:id',controller.findbyID);
router.get('/user',controller.listUser);

module.exports = router;