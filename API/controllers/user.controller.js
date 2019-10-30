
var User = require('../../models/users.model');

module.exports.index = async function(request, response) {	
	try{
		console.log('dsadfsdfsdfsd',request.query);
		var users = await User.find();
    	return response.json(users);
	} catch(err){
		console.error(err)
		return response.json({err :err});
	}
    
}

module.exports.create = async function(req, res){
    var user = await User.create(req.body);
    return res.json(user);
}