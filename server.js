// Local server for Frontman

var express = require('express');
var mongoose = require('mongoose');
var app = express();
var port = process.env.PORT || 8080;

// Connect to mongoDB
//mongoose.connect('mongodb://localhost/test');

app.use(express.static(__dirname));
app.use(express.static(__dirname + '/public'));

// Base URL
app.get('/', function(req, res) {
  res.redirect('/index.html');
});

app.listen(port, function() {
    console.log('Listening on port 8080');
});