var express = require('express');
var mongoose = require('mongoose');
var path =require ('path');
var hbs = require('express-handlebars');

mongoose.connect('localhost');
var app = express();
var port = process.env.PORT || 5000;


app.engine('hbs',hbs({extname:'hbs'}));
app.set('views',path.join(__dirname,'/app/views'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));
var route = require('./routes');
route(app);
app.listen(port, function () {
  console.log('now listening on http://localhost:5000');
})