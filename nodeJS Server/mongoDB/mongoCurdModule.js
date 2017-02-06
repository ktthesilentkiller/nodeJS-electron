var MongoClient = require('mongodb').MongoClient, format = require('util').format;
var myCollection;
var db;
var exports = module.exports = {};
var dbURL = 'mongodb://admin:admin@ds117109.mlab.com:17109/my_mongo_db_00';
var async = require("async");


exports.connectMongo = function (callback) {
    MongoClient.connect(dbURL, function (err, database) {
        if (err) {
            throw err;
        } else {
            db = database;
            console.log("successfully connected to the database");
        }
        callback();
    });

};


exports.setNewCollaction = function (collectionName, callback) {
    myCollection = db.collection(collectionName);
    console.log('collection :' + collectionName);
    callback();
};


exports.insertCollection = function (collectionData, callback) {
    myCollection.insert(collectionData, function (err, result) {
        if (err) {
            throw err;
        }
        console.log("entry saved");
        callback();
    });

};


exports.closeConnection = function () {
    db.close();
};

