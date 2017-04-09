let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let mongooseHidden = require('mongoose-hidden')()

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
  password: {
    type: String,
    hide: true
  }
});

UserSchema.plugin(mongooseHidden);
module.exports = mongoose.model('User', UserSchema, 'users');