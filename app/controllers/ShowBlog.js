var mongoose = require('mongoose');
var Blog = mongoose.model('Blogs');
var ShowBlog = {
	Render: function (req, res, next){
		res.render('BlogA', {	title:'Blog 3T',
								Blog: req.Blog,
								user: req.user
							})
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