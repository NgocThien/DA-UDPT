var mongoose = require ('mongoose');
var Blog = mongoose.model('Blogs');

var ListBlog = {

	render: function(req, res, next){
		res.render('ListBlog', {title:'Blog 3T', ListBlog:req.ListBlog})
	},
	loadListBlog: function(req, res, next){
		Blog.find(1).sort('_id').exec(function (err, Blogs){
			req.ListBlog = Blogs;
			console.log(Blogs);
			next();
		})
	}
}
module.exports = ListBlog;