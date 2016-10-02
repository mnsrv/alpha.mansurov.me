var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.filters = {
		post: req.params.post,
	};
	locals.data = {
		posts: [],
	};

	// Load the current post
	view.on('init', function (next) {
		var Post = keystone.list('Post');
		Post.model.findOne({
			state: 'опубликована',
			slug: locals.filters.post,
		})
			.exec(function (err, result) {
				locals.data.post = result;
				next(err);
			});
	});

	// Load other posts
	view.on('init', function (next) {
		var Post = keystone.list('Post');
		Post.model.find()
			.where('state', 'опубликована')
			.sort('-publishedDate')
			.exec(function (err, results) {
				locals.data.posts = results;
				next(err);
			});
	});

	// Render the view
	view.render('post');
};
