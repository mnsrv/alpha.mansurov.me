var keystone = require('keystone');

keystone.init({

    'name': 'My Project',
    'brand': 'Project',

    'less': 'public',
    'static': 'public',

    'views': 'templates/views',
    'view engine': 'jade',

    'auth': true,
    'user model': 'User',
    'cookie secret': 'demo',

    'auto update': true,
    'mongo': 'mongodb://localhost/react-keystone'

});

keystone.import('models');

keystone.set('locals', {
	_: require('lodash'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable
});

keystone.set('routes', require('./routes'));

keystone.start();
