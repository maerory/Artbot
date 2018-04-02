//Select 3 random documents from database

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://majac.co.kr:27017/artbot';

// const MongoClient = require('mongodb').MongoClient;
// const url = 'mongodb://majac.co.kr:27017/artbot';

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var randoms = dbo.collection("artists").aggregate([
      { $sample: { size: 3} }
    ]);
  randoms.each(function(err, artist) {
    if (artist !== null) console.log(artist.name);
    });
  db.close();
})
