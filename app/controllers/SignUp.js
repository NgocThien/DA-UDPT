

var SignUp = {
	render: function(req, res, next){
		res.render ('SignUp', {title:"Blog 3T", 
					RegisterAlert: req.flash('RegisterAlert')});
	}
}
module.exports = SignUp;