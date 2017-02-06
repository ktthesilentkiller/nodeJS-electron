var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));
app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

app.post('/process_post', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
   response = {
      first_name:req.body.first_name,
      last_name:req.body.last_name
   };
   connectMongo();
   console.log(response);
   res.end(JSON.stringify(response));
})

//mongodb://<dbuser>:<dbpassword>@ds117109.mlab.com:17109/my_mongo_db_00

var connectMongo = function(){
    var MongoClient = require('mongodb').MongoClient , format = require('util').format;
MongoClient.connect('mongodb://admin:admin@ds117109.mlab.com:17109/my_mongo_db_00', function (err, db) {
    if (err) {
        throw err;
    } else {
         myCollection = db.collection('test_collection');
         myCollection.insert({name: "doduck", description: "learn more than everyone"}, function(err, result) {
    if(err)
        throw err;
 
    console.log("entry saved");
});  
        console.log("successfully connected to the database" );
    }
    db.close();
});
};

var server = app.listen(8081, function () {
   var host = server.address().address;
   var port = server.address().port;
   
   console.log("Example app listening at http://%s:%s", host, port);

});