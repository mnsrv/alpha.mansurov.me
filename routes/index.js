import keystone from 'keystone';
import middleware from './middleware';

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

const routes = {
  views: importRoutes('./views'),
  api: importRoutes('./api'),
};

exports = module.exports = (app) => {
  // API
  app.all('*', keystone.middleware.api);
  app.get('/api/notes', routes.api.notes.list);
  app.get('/api/notes/:slug', routes.api.notes.get);

  // Views
  app.get('*', routes.views.index);

  // NOTE: To protect a route so that only admins can see it, use the requireUser middleware:
  // app.get('/protected', middleware.requireUser, routes.views.protected);
};
