var keystone = require('keystone');

module.exports = function(req, res) {
  var view = new keystone.View(req, res);

  var locals = res.locals;
  locals.section = 'index';
  locals.data = {
		projects: [],
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

  view.render('index');
}
