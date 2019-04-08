var db = require('../db');

module.exports.requestAuth = function (req, res, next){

	if(!req.signedCookies.name){
		res.redirect('/auth/login');
		return;
	}

	var user = db.get('users').find({name: req.signedCookies.name}).value();
	if(!user){
		res.redirect('/auth/login');
		return;
	}

	next();
}