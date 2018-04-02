//Find a document in the db with the name of a given artist

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://majac.co.kr:27017/artbot';
let artist = "John Constable"
let link;

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("artbot");
  var query = { name: artist };
  dbo.collection("artists").find(query).toArray(function(err, result) {
    if (err) throw err;
    link = result.map(function (result) {
      return result.link;
    });

    db.close();
  })
})
