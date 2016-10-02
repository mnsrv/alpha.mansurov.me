require('./css/main.scss');
var viewportUnitsBuggyfill = require('viewport-units-buggyfill');
viewportUnitsBuggyfill.init();
// viewportUnitsBuggyfill.findProperties();
// var cssText = viewportUnitsBuggyfill.getCss();
var $ = require('jquery');

console.log('Hello world!');
$('.js-window-menu').on('click', function() {
  $('.notes__full').toggleClass('is-hidden');
});
