var mongoose = require('mongoose');
var Blog = mongoose.model('Blogs');
var ShowBlog = {
	Render: function (req, res, next){
		res.render('BlogA', {Blog: req.Blog})
	},
	LoadBlog:function(req, res, next){
		var id = req.params.id;
		Blog.findById(id, function(err, Blog){
			req.Blog = Blog;
			next();
		});
	}
}
module.exports = ShowBlog;