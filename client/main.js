require('./css/main.scss');
var $ = require('jquery');

console.log('Hello world!');
$('.js-note').on('click', function() {
  var i = $(this).index();
  $(this).addClass('is-active').siblings().removeClass('is-active');
  $('.js-note-full:eq(' + i + ')').addClass('is-active').siblings().removeClass('is-active');
});
