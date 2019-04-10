var User = require('../../models/users.model');

module.exports.index = async function(request, response) {	
    var users = await User.find();
    return response.json(users);
}

module.exports.create = async function(req, res){
    var user = await User.create(req.body);
    return res.json(user);
}