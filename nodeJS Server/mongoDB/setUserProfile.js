var async = require("async");
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var serverModule = require('./serverModule.js');
var mongoDBTemplet = require('./mongoCurdModule.js');
var urlencodedParser = bodyParser.urlencoded({ extended: false });


app.post('/setUserInfo', urlencodedParser, function (req, res) {
    mongoDBTemplet.connectMongo(function (err, resp) {
        mongoDBTemplet.setNewCollaction("userInfoKT", function (err, resp) {
            mongoDBTemplet.insertCollection(req.body, function (err, resp) { });
        });
    });



});

serverModule.startServer(app);













 /* mongoDBTemplet.connectMongo(function(){
         mongoDBTemplet.setNewCollection("userInfoKT",function(){
              mongoDBTemplet.insertCollection(req,function(){
                  mongoDBTemplet.closeConnection(function(){
                      res.end();
                  });
              });
         });
     });*/


/*async.series([
    mongoDBTemplet.connectMongo(function(err, resp) {  }),
      mongoDBTemplet.setNewCollaction("userInfoKT", function(err, resp) {  }),
      mongoDBTemplet.insertCollection(req, function(err, resp) {  })
     /*function (callback) {
        mongoDBTemplet.connectMongo();
    },
    function (callback) {
        mongoDBTemplet.setNewCollaction("userInfoKT", callback);
    },
    function (callback) {
        mongoDBTemplet.insertCollection(req, callback);
    }, 

], function (err) {
    console.log('all functions complete');
});*/
