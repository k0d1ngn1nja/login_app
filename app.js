const express = require('express'),
	app 				= express(),
	bodyParser  = require('body-parser'),
	mongoose 		= require('mongoose'),
	path 				= require('path'),
	User 				= require('./models/User.model'),
	controller 	= require('./controllers/user.controller');

const port = 3000;
const db = 'mongodb://localhost/loginApp'

mongoose.connect(db);

app.use(express.static(path.join(__dirname, 'views')));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function(req, res) {
  res.render('index.html');
});

app.post('/', controller.register)

app.listen(port, function() {
  console.log('app listening on port ' + port);
});