var mongoose = require('mongoose');

var userShema = new mongoose.Schema({
	id: Number,
	name: String,
	file: String
});

var User = mongoose.model('User', userShema, 'users');

module.exports = User;