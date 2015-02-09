var express = require('express');
var router = express.Router();
var MAIN_MENU_ITEM = require('../src/common_enums').MAIN_MENU_ITEM;

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express', selected_menu: MAIN_MENU_ITEM.DASHBOARD });
});

module.exports = router;
