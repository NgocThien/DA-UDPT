var mongoose = require('mongoose');
var Blog = mongoose.model('Blogs');
var WriteBlog = {
	Render: function(req, res, next){
		res.render('WriteBlog',{Title: "Blog 3T", WriteBlogAlter:req.flash()});
	},

	Process: function(req, res, next){
		var newBlog = new Blog();
		req.checkBody('title', 'Yêu cầu nhập nội dung phần tiểu đề.').notEmpty;
		req.checkBody('contain', 'Yêu cầu nhập nội dung').notEmpty();
		var datenow = new Date();
		newBlog.Title = req.body.title;
		newBlog.Content = req.body.contain;
		newBlog.DatePost = datenow;
		newBlog.Poster = req.user.Name;
		var errors = req.validationErrors();
		if(errors){
			return  req.flash('WriteBlogAlter', 'Em da bi loi');
		}

		newBlog.save(function(err) {
			if (err)
				throw err;
				return req.flash('WriteBlogAlter', 'Em da bi loi');
		});
		res.redirect('WriteBlog');
	}
}

module.exports = WriteBlog;