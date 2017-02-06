//var exports = module.exports = {};
var  connectMongo = function(collectionName, collectionData){
    var MongoClient = require('mongodb').MongoClient ;
    var  format = require('util').format;
MongoClient.connect('mongodb://admin:admin@ds117109.mlab.com:17109/my_mongo_db_00', function (err, db) {
    if (err) {
        throw err;
    } else {
         myCollection = db.collection(collectionName);
         myCollection.insert(collectionData, function(err, result) {
    if(err)
        throw err;
 
    console.log("entry saved");
});  
        console.log("successfully connected to the database" );
    }
    db.close();
});
};

 exports.connectMongo = connectMongo;
 