var express = require('express');
var router = express.Router();
var MAIN_MENU_ITEM = require('../src/common_enums').MAIN_MENU_ITEM;

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

module.exports = router;
