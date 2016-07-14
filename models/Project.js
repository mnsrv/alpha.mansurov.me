var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Project Model
 * ==========
 */

var Project = new keystone.List('Project', {
	label: 'Проекты',
	singular: 'Проект',
	plural: 'Проекты',
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
	defaultSort: '-publishedDate'
});

Project.add({
	title: { type: String, required: true, label: 'Название' },
	state: { type: Types.Select, options: 'разработка, продакшен', default: 'разработка', index: true, label: 'Статус' },
	color: { type: Types.Color, label: 'Цвет' },
	startedDate: { type: Types.Date, index: true, default: Date.now, label: 'Дата начала разработки'},
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'продакшен' }, label: 'Дата релиза' },
	url: { type: Types.Url, dependsOn: { state: 'продакшен' }, label: 'Ссылка' }
});

Project.defaultColumns = 'title, state|20%';
Project.register();
