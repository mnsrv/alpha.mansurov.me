var keystone = require('keystone');

module.exports = function(req, res) {
  var view = new keystone.View(req, res);

  var locals = res.locals;
  locals.section = 'index';
  locals.data = {
		projects: [],
    posts: [],
	};

  // Load projects
	view.on('init', function (next) {
    var Project = keystone.list('Project')

    var q = Project.model.find();
		q.where('state', 'продакшен').sort('-publishedDate')

		q.exec(function (err, results) {
			locals.data.projects = results;
			next(err);
		});
	});

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

  view.render('index');
}
