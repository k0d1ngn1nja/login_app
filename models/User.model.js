const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const minlength = [5, "The value provided is doesn't meet the min-length required to signup"];

let UserSchema = new Schema({
  username: {
  	type: String,
  	require: true,
  	minlength: minlength
  },
  email: {
  	type: String,
  	required: true,
  	unique: true
  },
  password: String
});

module.exports = mongoose.model('User', UserSchema);