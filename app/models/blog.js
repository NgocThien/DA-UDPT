var mongoose = require('mongoose'); 
var autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection("mongodb://localhost/myblog");
 autoIncrement.initialize(connection);

var Blog = mongoose.Schema({
	_id: {type: Number,default:0, unique: true},
	Title: String,
	Content: String,
	DatePost: Date,
	Poster: String,
	Comment:[{
		User:String, 
		ContentCmt: String, 
		DateCmt:Date}],

	Rate:{type:Number, default:0}},{collection:'Blogs'});

mongoose.model('Blogs',Blog);
Blog.plugin(autoIncrement.plugin, {
    model: 'Blogs',
    field: '_id',
    startAt: 1,
    incrementBy:1
});



/*var mongoose = require('mongoose'); 
//var bcrypt = require('bcrypt-nodejs');
//bai dang
var Blog = mongoose.Schema({
	id:String,
	UserName: String,
	Title: String,
	Contain: String,
	DateUpLoad: Date,
	Comment: [{
		UserNameComment : String,
		ContainComment: String,
		DateComment: Date
	}]

}, {collection: 'Blog1'});


mongoose.model('Blog1', Blog);*/