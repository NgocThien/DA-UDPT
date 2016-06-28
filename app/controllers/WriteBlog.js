var mongoose = require('mongoose');
var Blog = mongoose.model('Blogs');
var WriteBlog = {
	Render: function(req, res, next){
		res.render('WriteBlog',{Title: "Blog 3T", 
							    WriteBlogAlter:req.flash(),
							    user:req.user });
	},

	Process: function(req, res, next){
		var newBlog = new Blog();
		req.checkBody('txtTitle', 'Yêu cầu nhập nội dung phần tiểu đề.').notEmpty;
		req.checkBody('txtContent', 'Yêu cầu nhập nội dung').notEmpty();
		
		var datenow = new Date();
		newBlog.Title = req.body.txtTitle;
		newBlog.Content = req.body.txtContent;
		newBlog.DatePost = datenow;
		newBlog.Poster = req.user.Name;
		
		var errors = req.validationErrors();
		if(errors) {
			req.flash('WriteBlogAlter', errors[0].msg);
			return res.redirect('WriteBlog')
		}

		newBlog.save(function(err) {
			if (err) {
				req.flash('WriteBlogAlter', 'Đăng bài thất bại');
				return res.redirect('WriteBlog');
			}
		});
		return res.redirect('WriteBlog');
	}
}

module.exports = WriteBlog;