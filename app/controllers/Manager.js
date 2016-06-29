var mongoose = require('mongoose');
var User = mongoose.model('User');

var Manager = {
	Render: function(req, res, next){
		res.render('Manager', {title:'Blog 3T',user: req.user});
	},

	Update: function(req, res, next){
		var newUser = new User();
		newUser.Name = req.body.txtName;
		newUser.Birthday = req.body.txtBirthDay;
		//console.log(newUser.Birthday);
		newUser.Address = req.body.txtAddress;
		newUser.Job = req.body.txtJob;
		newUser.Phone = req.body.txtPhone;
		User.update(
			{_id: req.user._id},
			{$set: {"Name": newUser.Name,
					"Birthday": newUser.Birthday,
					"Address": newUser.Address,
					"Job": newUser.Job,
					"Phone": newUser.Phone}
			},
			{safe: true, upsert: true, new: true},
			function (err, user) {
				if (err) throw err;
			});
		res.redirect('Manager');
		}
}

module.exports = Manager;