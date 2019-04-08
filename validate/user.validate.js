module.exports.postCreate = function (req, res, next){
	var errors = [];
	if(!req.body.name) {
		errors.push('Name is request.');
	}
	if(errors.length > 0) {
		res.render('users/create', {
			errors: errors,
			values: req.body
		});
		return;
	}
	//gui du lieu cho cac middleware tiep theo
	res.locals.success = true;
	
	next();
}