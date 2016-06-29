var mongoose = require ('mongoose');
var Blog = mongoose.model('Blogs');

var ListBlog = {

	render: function(req, res, next){
		res.render('ListBlog', {title:'Blog 3T', 
								ListBlog:req.ListBlog,
								user:  req.user})
	},
	loadListBlog: function(req, res, next){
		Blog.find(1).sort('_id').exec(function (err, Blogs){
			req.ListBlog = Blogs;
			next();
		})
	}
}
module.exports = ListBlog;