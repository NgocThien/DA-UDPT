var Login = require('../app/controllers/Login');
var SignUp = require('../app/controllers/SignUp');
var WriteBlog = require('../app/controllers/WriteBlog');
var ListBlog = require('../app/controllers/ListBlog');
var passport = require('passport');

require('./passport/passport')(passport);
var configRoutes = function (app){
	//home
	app.get('/', function(req, res, next){
		res.render('Home',{user: req.user, LoggedIn:req.isAuthenticated()});
	});

	/* 
	 * login
	 * Login.render goi ham trong thu muc controllers/login
	 */
	app.get('/Login',Login.render );

	/* 
	 * Dung passport xac thuc nguoi dung
	 * successRedirect neu thanh cong quay lai trang home
	 * failureTrdirect neu that bai thi quay lai trang Login
	 * failureFlash cho phep hien thi flash
	 */
	app.post('/Login', passport.authenticate('login', {
 					successRedirect : '/', 
 					failureRedirect : '/Login', 
 					failureFlash : true 
 	}));

	/*
	 * SignUp 
	 * SignUp.render goi ham trong thu muc controllers/SignUp
	 */
	app.get('/SignUp', SignUp.render);

	/*
 	 * Thanh cong quay lai trang home
 	 * That bai quay lai trang SignUp
	 */
 	app.post('/SignUp', passport.authenticate('signup', {
 			successRedirect : '/', 		
 			failureRedirect : '/SignUp', 
 			failureFlash : true 
 	}));

 	/*
	 *chuyen den trang facebook de xac thuc thanh vien
 	 */
 	app.get('/auth/facebook', passport.authenticate('facebook',
 	 { scope : 'email' }));
 
 	 /*
 	  * xu li dang nhap sau khi xac thuc
 	  */
	app.get('/auth/facebook/callback',
	passport.authenticate('facebook', {
		successRedirect : '/',
		failureRedirect : '/Login'
	}));


	app.get('/WriteBlog', WriteBlog.Render);
	app.post('/WriteBlog', WriteBlog.Process);	

	app.get('/ListBlog',ListBlog.loadListBlog, ListBlog.render);


	
	/*
	app.get('/Home', function(req, res, next){
		res.render('Home');
	});


	app.get('/Contact', function(req, res, next){
  		res.render('Contact');
	});

	

	app.get('/ListBlog', function(req, res, next){
  		res.render('ListBlog');
	});

	app.get('/WriteBlog', function(req, res, next){	
  		res.render('WriteBlog');
	});

	app.get('/BlogA', function(req, res, next){
  		res.render('BlogA');
	});*/
}
module.exports = configRoutes;

