var express = require ('express');

module.exports = function(app){

app.get('/', function(req, res, next){
	res.render('Home');
});

app.get('/Home', function(req, res, next){
	res.render('Home');
});

app.get('/Login', function(req, res, next){
  res.render('Login');
});

app.get('/Contact', function(req, res, next){
  res.render('Contact');
});

app.get('/SignUp', function(req, res, next){
  res.render('SignUp');
});

app.get('/ListBlog', function(req, res, next){
  res.render('ListBlog');
});

app.get('/WriteBlog', function(req, res, next){
  res.render('WriteBlog');
});

app.get('/BlogA', function(req, res, next){
  res.render('BlogA');
});
}	