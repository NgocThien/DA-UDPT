var express = require('express');
var mongoose = require('mongoose');
var path =require ('path');
var fs = require('fs');

mongoose.connect('mongodb://localhost/myblog', function (err){
	if (err)
		console.log('diconnect');
});
var app = express();
var port = process.env.PORT || 3000;

fs.readdirSync(__dirname + '/app/models').forEach(function (file) {
  	if (~file.indexOf('.js')) require(__dirname + '/app/models/' + file);
});

app.use(express.static(path.join(__dirname, 'public')));

require('./config/express')(app)

require('./config/routes')(app);

app.listen(port, function () {
  console.log('now listening localhost:'+ port);
})