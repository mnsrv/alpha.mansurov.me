var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var Post = new keystone.List('Post', {
	label: 'Заметки',
	singular: 'Заметка',
	plural: 'Заметки',
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
	defaultSort: '-publishedDate'
});

Post.add({
	title: { type: String, required: true, label: 'Название' },
	content: { type: Types.Html, wysiwyg: true, height: 400, label: 'Текст' },
	categories: { type: Types.Relationship, ref: 'PostCategory', many: true, label: 'Теги' },
	state: { type: Types.Select, options: 'черновик, опубликована', default: 'черновик', index: true, label: 'Состояние' },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'опубликована' }, label: 'Дата публикации' },
});

Post.defaultColumns = 'title, state|20%, publishedDate|20%';
Post.register();
