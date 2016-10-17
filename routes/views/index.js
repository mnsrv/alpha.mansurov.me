import keystone from 'keystone';

exports = module.exports = (req, res) => {

	const view = new keystone.View(req, res);

	view.render('index');
};