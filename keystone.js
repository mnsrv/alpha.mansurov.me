require('dotenv').config({silent: true});

require('babel-register')({
  "presets": ["es2015"]
});

var moment = require('moment');
moment.locale('ru');

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
  'cookie secret': process.env.COOKIE_SECRET,
  'auth': true,
  'user model': 'User',

  'wysiwyg additional buttons': 'strikethrough',

  'mongo': process.env.MONGODB_URI || 'mongodb://localhost/react-keystone'
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
