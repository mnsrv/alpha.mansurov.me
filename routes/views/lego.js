var keystone = require('keystone');

module.exports = function(req, res) {
  var view = new keystone.View(req, res);

  var locals = res.locals;
  locals.section = 'lego';

  view.render('lego');
}
