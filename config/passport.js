var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var configAuth = require('./env/development');
 
// load model User
var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = function(passport) {

	passport.serializeUser(function(user, done) {
		done(null, user.id);
	});

	passport.deserializeUser(function(id, done) {
		User.findById(id, function(err, user) {
			done(err, user);
		});
	});
	passport.use('login', new LocalStrategy({
		usernameField: 'txtUser',
		passwordField : 'txtPass',
		passReqToCallback : true

	},
	function(req, username, password, done) {
		process.nextTick(function() {
			User.findOne({'UserName':username}, function(err, user) {
 				if (err)
 					return done(err);
 				else if (!user)
 					return done(null, false, req.flash('LoginAlert', 'Tên đăng nhập không tồn tại'));	
 				else if (!user.validPassword(password))
 					return done(null, false, req.flash('LoginAlert', 'Mật khẩu không chính xác'));
				else
					return done(null, user);
			});
		});

	}));


	passport.use('signup', new LocalStrategy({
		usernameField : 'txtUser',
		passwordField : 'txtPass',
		passReqToCallback : true
	},
	function(req, username, password, done) {

		process.nextTick(function() {

			User.findOne({'UserName': username}, function(err, user) {

				if (err)
					return done(err);

				req.checkBody('txtName','Họ Tên không được rỗng.').notEmpty();
				req.checkBody('txtUser', 'Tên đăng nhập không hợp lệ.').notEmpty();
				req.checkBody('txtEmail', 'Email không hợp lệ.').isEmail();
				req.checkBody('txtPass','Mật khẩu dài it nhất 6 kí tự.').isLength({min:6})
				req.checkBody('txtConfirmPass','Mật khẩu không hợp lệ.').equals(password);

				var errors = req.validationErrors();
				if(errors){
					return done(null, false, req.flash('RegisterAlert', errors[0].msg));
				}


				if (user)
					return done(null, false, req.flash('RegisterAlert',
						'Tên đăng nhập đã tồn tại, vui lòng chọn tên khác.'));

				else {

					var newUser = new User();
					newUser.Name = req.body.txtName;
					newUser.UserName = username;
					newUser.Email = req.body.txtEmail;
					newUser.Pass = newUser.generateHash(password);

					newUser.save(function(err) {
						if (err){
							return done(null, false, req.flash('RegisterAlert', 'Đăng kí thất bại.'));
						}
						return done(null, newUser);
					}); 	
				}			
			});
		});
	}));

	passport.use(new FacebookStrategy({

		clientID : configAuth.facebookAuth.clientID,
		clientSecret : configAuth.facebookAuth.clientSecret,
		callbackURL : configAuth.facebookAuth.callbackURL,
		passReqToCallback : true,
		profileFields: ['id', 'displayName','emails']

	},
	function(req, token, refreshToken, profile, done) {
		process.nextTick(function() {
			User.findOne({'Email' : profile.emails[0].value }, function(err, user) {
				if (err)
					return done(err);

				if (user) {
					return done(null, user);
				} else {
					var newUser = new User();
					newUser.Name = profile.displayName;
					newUser.Email = profile.emails[0].value;
					newUser.save(function(err) {
						if (err)
							throw err;
						return done(null, newUser);
					});
				}
			});
		});

	}));

};