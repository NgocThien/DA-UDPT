


var Login = {
	render: function (req, res, next){
		res.render('Login',{title: "Blog 3T", user: req.user, LoginAlert:req.flash('LoginAlert')});
	}
	
}
module.exports = Login;