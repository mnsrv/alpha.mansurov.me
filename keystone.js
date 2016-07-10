var keystone = require('keystone');
var Twig = require('twig');
Twig.cache(false);

keystone.init({
    'name': 'Админка',
    'brand': 'Сайт Александра Мансурова',

    'static': ['public', 'uploads'],

    'views': 'templates/views',
    'view engine': 'twig',
    'custom engine': Twig.render,

    'auto update': true,
    'cookie secret': 'demo',
    'auth': true,
    'user model': 'User',

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
