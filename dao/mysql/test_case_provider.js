var util = require('util');
var pool = require('./pool').pool;

var testCaseProvider = exports;

testCaseProvider.save = function(testCase, callback) {
  pool.getConnection(function(err, connection) {
    if (err) {
      callback(err);
      
      return;
    }
    
    // Use the connection
    connection.query( 'insert into test_case set name=?, reproduction_steps=?, expected_result=?, created_date=?, updated_date=?',
      [testCase.name, testCase.reproductionSteps, testCase.expectedResults, testCase.createdDate, testCase.updatedDate], 
      function(err, result) {
        if (err) {
          callback(err);
          
          return;
        }

        testCase.id = result.insertId;
         
        connection.release();
        
        callback(null, testCase);
      });
  });
};

testCaseProvider.findById = function(id, callback) { 
};

testCaseProvider.findAll = function(callback) { 
};

testCaseProvider.delete = function(id, callback) { 
};