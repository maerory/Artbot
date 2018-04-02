//Create a collection inside a db
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://majac.co.kr:27017/artbot';

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("artbot");
  dbo.createCollection("artists", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  })
})
