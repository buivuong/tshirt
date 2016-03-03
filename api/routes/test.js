var models = require('../models');

module.exports = function(router){
	router.post('/users', function(req, res){
		var email = req.body.email;
		models.users.create({
			email: email
		})
		.then(function(usersCreated){
			res.json(usersCreated);
		})
	});
}