

var hbs = require('express-handlebars');
var passport = require ('passport');
var flash = require('connect-flash');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var expressSession = require('express-session');
var path = require('path');
var configExpress = function(app){

	app.engine('hbs',hbs({extname:'hbs', defaultLayout:'index',layoutsDir:'./app/views/layouts'}));
	app.set('views','./app/views');
	app.set('view engine', 'hbs');

	

	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(expressValidator());
	app.use(expressSession({secret:'max',saveUninitialized:true, resave:true}));

	app.use(passport.initialize());
	app.use(passport.session());
	app.use(flash());

	

}
module.exports = configExpress;