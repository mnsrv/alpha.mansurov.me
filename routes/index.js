const keystone = require('keystone');
const middleware = require('./middleware');
const importRoutes = keystone.importer(__dirname);

keystone.pre('routes', middleware.initErrorHandlers);
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Handle 404 errors
keystone.set('404', function(req, res, next) {
    res.notfound();
});

// Handle other errors
keystone.set('500', function(err, req, res, next) {
    var title, message;
    if (err instanceof Error) {
        message = err.message;
        err = err.stack;
    }
    res.err(err, title, message);
});

var routes = {
  views: importRoutes('./views')
}

exports = module.exports = function(app) {
  app.get('/', routes.views.index);
  app.get('/blog/:category?', routes.views.blog);
	app.get('/blog/post/:post', routes.views.post);
}
