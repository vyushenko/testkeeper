var express = require('express');
var router = express.Router();

var testCaseProvider = require('../dao/mysql/test_case_provider');
var TestCase = require('../models/test_case').TestCase;

var MAIN_MENU_ITEM = require('../src/common_enums').MAIN_MENU_ITEM;

/* if requesting folder, redirect to a list */
router.get('/', function(req, res, next) {
  res.redirect('list');
});

/* show test cases */
router.get('/list', function(req, res, next) {
  var testCases = [
    {id:12345, name:'Test Login Functionality'},
    {id:5445, name:'Test Logout Functionality'}
  ];
    
  res.render('test_cases/list', { title: 'Express - Test Cases', selectedMenu: MAIN_MENU_ITEM.TEST_CASES, testCases: testCases });
});

/* add new */
router.get('/add_new', function(req, res, next) {  
  res.render('test_cases/edit', { title: 'Express - Add New Test Case', selectedMenu: MAIN_MENU_ITEM.TEST_CASES});
});

/* edit */
router.get('/edit', function(req, res, next) {
  var testCase = {id:req.params.tc, name:'Test Login Functionality', steps: '1.) Click on Login link', expectedResult:'You will see login screen'};
    
  res.render('test_cases/edit', { title: 'Express - Edit Test Case', selectedMenu: MAIN_MENU_ITEM.TEST_CASES, testCase: testCase });
});

router.post('/edit', function(req, res, next) {
  //Emulate saving
  var testCase = new TestCase();
  testCaseProvider.save(testCase, function rediectToList(err) {
    if (err) {
      next(err);
      
      return;
    }
    
    res.redirect('list');
  });
});

/* edit */
router.get('/delete', function(req, res, next) {
  res.redirect('list');
});

module.exports = router;
