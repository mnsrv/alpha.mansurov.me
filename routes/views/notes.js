var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Init locals
	locals.data = {
		posts: [],
	};

	// Load blog posts
  view.on('init', function(next) {
    var Post = keystone.list('Post');
    Post.model.find()
      .where('state', 'опубликована')
      .sort('-publishedDate')
      .exec(function(err, results) {
        locals.data.posts = results;
  			next(err);
      });
  });

	// Render the view
	view.render('notes');
};
