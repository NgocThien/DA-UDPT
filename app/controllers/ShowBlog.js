var mongoose = require('mongoose');
var Blogs = mongoose.model('Blogs');
var ShowBlog = {
	Render: function (req, res, next){
		res.render('Blog', {	title:'Blog 3T',
								Blog: req.Blog,
								user: req.user
							})
	},
	LoadBlog:function(req, res, next){
		var id = req.params.id;
		Blogs.findById(id, function(err, Blog){
			Blog.View = Blog.View + 1;
			Blog.save();
			req.Blog = Blog;

			next();
		});
	},
	Comment: function(req, res, next){

		var id = req.param('id');
		console.log(req.body.txtAreaSendComment);
		var Comment = req.body.txtAreaSendComment;
		console.log(id);
		console.log(Comment);
		var CurrentDate = new Date();

		Blogs.update({'_id':id}, {$push:{"Comment":{User:req.user.Name, 
													ContentCmt: Comment, 
													DateCmt:CurrentDate}}},
					function(err){
						if (err){

						}
					})
		res.send(Comment);
	}

}
module.exports = ShowBlog;