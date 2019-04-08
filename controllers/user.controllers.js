var User = require('../models/users.model');

var  users = [];

User.find()
.then(function(result){
	users = result;
})
.catch(function(err){
	console.log(err);
});

//su dung async await
// async function(req, res){
// 	var users = await User.find();
// }

module.exports.index = function(request, response) {
	
	var page = parseInt(request.query.page) || 1;
	if(page){
		var start = (page - 1) * 2;
	}
	else{
		var start = 0;
	}
	var end = start + 2;
	var result = users.slice(start, end);
	response.render('users/users', {
		users: result,
		numPage: Math.ceil(users.length/2),
		page: page
	});
}

module.exports.search = function(request, response) {
	var q = request.query.q;
	var reqUrl = "search?q="+q+"&";
	var page = parseInt(request.query.page) || 1;
	var matChedUsers = users.filter(function(user) {
		return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
	});
	if(page){
		var start = (page - 1) * 2;
	}
	else{
		var start = 0;
	}
	var end = start + 2;
	var result = matChedUsers.slice(start, end);
	
	response.render('users/users', {
		users: result,
		rs: q,
		numPage: Math.ceil(matChedUsers.length/2),
		page: page,
		reqUrl: reqUrl
	});
}

module.exports.create = function(request, response) {
	response.render('users/create');
}

module.exports.postCreate = function(request, response) {

	request.body.file = request.file.path.split("\\").slice(1).join("/");

	db.get('users')
	.push(request.body)
	.write();
	response.redirect('/users');
}

module.exports.view = function(request, response) {
	var id = parseInt(request.params.id);

	var user = db.get('users').find({id: id}).value();
	console.log(user);

	response.render('users/view', {
		user: user
	});
}