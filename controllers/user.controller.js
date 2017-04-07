const User = require('../models/User.model');

exports.register = (req, res) => {
	let newUser = new User();

	newUser.username = req.body.username; 
	newUser.email		 = req.body.email;
	newUser.password = req.body.password;

	newUser.save((err, user) => {
		if(err){
			console.log(err.message);
			console.log(err.errors.username.message);
			res.send('Error registering user');
		} else {
			console.log(user);
			res.redirect('/signup.html');
		}
	});
}