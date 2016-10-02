require('./css/main.scss');
var $ = require('jquery');

console.log('Hello world!');
$('.js-window-menu').on('click', function() {
  $('.notes__full').toggleClass('is-hidden');
});
