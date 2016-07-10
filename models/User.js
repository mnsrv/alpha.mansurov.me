var keystone = require('keystone');
var Types = keystone.Field.Types;

var User = new keystone.List('User', {
  label: 'Пользователи',
  singular: 'Пользователь',
  plural: 'Пользователи',
});

User.add({
  name: { type: Types.Name, required: true, index: true, label: 'Имя' },
  email: { type: Types.Email, initial: true, required: true, index: true, label: 'Электронная почта' },
  password: { type: Types.Password, initial: true, label: 'Пароль' },
  canAccessKeystone: { type: Boolean, initial: true, label: 'Администратор' }
});

User.register();
