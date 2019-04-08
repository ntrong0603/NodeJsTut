var db = require('../db');

module.exports.login = function (req, res){
	res.render('auth/login'); 
}

module.exports.postLogin = function (req, res){
	var name = req.body.name;

	var user = db.get('users').find({name: name}).value();

	if(!user){
		res.render('auth/login',{
			errors: [
				'User doent exist'
			]
		}); 
		return;
	}
	res.cookie('name',user.name, {
		signed: true
	});
	res.redirect('/users');
}