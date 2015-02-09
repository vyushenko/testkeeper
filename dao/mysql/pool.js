var mysql = require('mysql');

var pool  = mysql.createPool({
  host     : 'localhost',
  port     : 3306,
  user     : 'test_keeper_dev',
  password : 'W8er$bnQy@Q',
  database : 'test_keeper'
});

module.exports.pool = pool;