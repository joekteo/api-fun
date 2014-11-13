/*jshint node:true*/
'use strict';
var express = require('express');
var app = express();
var request = require('superagent');

app.get('/', function (req, res) {
//someone help me!
    var lastUrl = 'http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=cher&api_key=0e447e74aee6c102d5ddd0e59f540ec2' +
    '&format=json';

    request
    .get(lastUrl)
     .end(function (err, lastData) {
        var parsedData = JSON.parse(lastData.text);
        res.json(parsedData);
    });
});

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
  console.log('server running on port: ' + app.get('port'));
});




