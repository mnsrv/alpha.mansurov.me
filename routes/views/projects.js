var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Init locals
	locals.section = 'projects';
	locals.data = {
		projects: [],
	};

	// Load the posts
	view.on('init', function (next) {
    var Project = keystone.list('Project')

    var q = Project.model.find();
		q.where('state', 'продакшен').sort('-publishedDate')

		q.exec(function (err, results) {
			locals.data.projects = results;
			next(err);
		});
	});

	// Render the view
	view.render('projects');
};
