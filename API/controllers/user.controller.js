var User = require('../../models/users.model');

module.exports.index = async function(request, response) {	
    var users = await User.find();
    return response.json(users);
}