var Login = require('../app/controllers/Login');
var SignUp = require('../app/controllers/SignUp');
var WriteBlog = require('../app/controllers/WriteBlog');
var ListBlog = require('../app/controllers/ListBlog');
var Manager = require('../app/controllers/Manager');
var ShowBlog = require('../app/controllers/ShowBlog');
var passport = require('passport');
require('./passport')(passport);
var mongoose = require('mongoose');
var User = mongoose.model('User');


var configRoutes = function (app){
	//home
	app.get('/', function(req, res, next){
		res.render('Home',{user: req.user});
	});

	/* 
	 * login
	 * Login.render goi ham trong thu muc controllers/login
	 * isLoggedIn kiem tra da dang nhap hoac dang ki hay chua
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
	app.get('/SignUp',SignUp.render);

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

	/*
	 * Logout tai khoan
	 */
	app.get('/Logout', function(req, res, next){
		req.logout();
		res.redirect('/');
	})

	/*
	 * thuc hien chuc nang viet blog
	 * thanh cong hay that bai deu load lai trang writeBlog
	 */

	app.get('/WriteBlog',isLoggedIn, WriteBlog.Render);
	app.post('/WriteBlog', WriteBlog.Process);	

	/*
	 * Load cac danh sach Blog, theo thu tu giam dan cua id
	 */
	app.get('/ListBlog',ListBlog.loadListBlog, ListBlog.render);



	app.get('/Manager', Manager.Render);
	app.post('/Manager', Manager.Update);

	/*
	 * Hien thong bai viet
	 */
	app.get('/Blog/:id',ShowBlog.LoadBlog, ShowBlog.Render); 



	/*
	 * thuc hien chuc nang viet blog
	 * thanh cong hay that bai deu load lai trang writeBlog
	 */

	app.get('/WriteBlog',isLoggedIn, WriteBlog.Render);
	app.post('/WriteBlog', WriteBlog.Process);	

	/*
	 * Load cac danh sach Blog, theo thu tu giam dan cua id
	 */
	app.get('/ListBlog',ListBlog.loadListBlog, ListBlog.render);



	app.get('/Manager', Manager.Render);
	app.post('/Manager', Manager.Update);

	/*
	 * Hien thong bai viet
	 */
	app.get('/Blog/:id',ShowBlog.LoadBlog, ShowBlog.Render); 

	

	/*
	 * gui comment len bai viet
	 */
	app.post('/Blog',ShowBlog.Comment);

	
	app.get('/Home', function(req, res, next){
		res.render('Home',{user: req.user})});


	function isLoggedIn(req, res, next) {
 
		// nếu người dùng đã đăng nhập thì tiếp tục thực hiện
 		if (req.isAuthenticated())
 			return next();
 
		// ngược lại điều hướng về đăng nhập.
 		res.redirect('/Login');
	}
}
module.exports = configRoutes;

