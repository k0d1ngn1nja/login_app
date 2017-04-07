const express = require('express'),
	app 				= express(),
	bodyParser  = require('body-parser'),
	mongoose 		= require('mongoose'),
	path 				= require('path'),
	User 				= require('./User.model');

const port = 8080;
const db = 'mongodb://localhost/User'

mongoose.connect(db);

app.use(express.static(path.join(__dirname, 'views')));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function(req, res) {
  res.render('index.html');
});

app.listen(port, function() {
  console.log('app listening on port ' + port);
});