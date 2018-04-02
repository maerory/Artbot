//Creating a db

var MongoClient = require('mongodb').MongoClient,
  f = require('util').format,
  assert = require('assert')

var user = encodeURIComponent('artbot');
var password = encodeURIComponent('artbot');
var authMechanism = 'DEFAULT';
var url = f('mongodb://%s:%s@majac.co.kr:27017/myproject?authMechanism=%s',
  user, password, authMechanism);

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
})
