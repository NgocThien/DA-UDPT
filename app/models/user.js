var mongoose = require('mongoose'); 
var bcrypt = require('bcrypt-nodejs');
var User = mongoose.Schema({
	Name:String,
	Birthday: String,
	Job: String,
	Phone: String,
	Address: String,
	Email:{type:String, unique:true},
	Pass:String},{collection:'user'});


User.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
User.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.Pass);
};
mongoose.model('User', User);
