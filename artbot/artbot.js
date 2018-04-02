//Using nodejs to fetch the link from the database and use that link to scrap the artist information

let artist = "John Constable" // We should fetch the artist name here
let artist_link; //Declare the link here first so that we can save the result from query to the artists DB


//Start the Mongo Client
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://majac.co.kr:27017/artbot';

//Query our database for the link to the artist
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("artbot");
  var query = { name: artist };
  dbo.collection("artists").find(query).toArray(function(err, result) {
    if (err) throw err;
    artist_link = result.map(function (result) {
      return result.link
    });
    db.close();
  })
})

//Use the link to crawl with python
let spawn = require('child_process').spawn,
    sys = require('util'),
    py = spawn('python',['artist_crawl.py']),
    data = "/Artist/Joseph-Mallord-William-Turner/2A123FB50C356620",
    dataString = '';

var aaa = py.stdout.on('data', function(data){
  dataString += data.toString();
  return data.toString();
});

var bbb = py.stdout.on('end', function(){
  console.log(dataString);
});

py.stdin.write(JSON.stringify(data));
py.stdin.end();

console.log(aaa);
console.log(bbb);
