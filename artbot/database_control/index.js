//Checking connection to your database

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://majac.co.kr:27017/artbot';
var db;

MongoClient.connect(url, function (err, database) {
  if (err) {
    console.error('MongoDB 연결 실패', err);
    return;
  }
  db = database;
  console.log('DB 접속 성공');
  console.log(db);
});
