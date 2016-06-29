var mongoose = require('mongoose'); 
var autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection(process.env.DB_URL);
 autoIncrement.initialize(connection);

var Blog = mongoose.Schema({
	_id: {type: Number,default:0, unique: true},
	Title: String,
	Content: String,
	DatePost: Date,
	Poster: String,
	NumComment:{type: Number, default:0},
	View:{type:Number, default:0}},{collection:'Blogs'});

mongoose.model('Blogs',Blog);
Blog.plugin(autoIncrement.plugin, {
    model: 'Blogs',
    field: '_id',
    startAt: 1,
    incrementBy:1
});



