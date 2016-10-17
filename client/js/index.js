import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import 'whatwg-fetch';
import viewportUnitsBuggyfill from 'viewport-units-buggyfill';
import routes from './routes';

require('../css/main.scss');
require("!!file-loader?name=favicon.ico!../favicon.ico");

viewportUnitsBuggyfill.init();

ReactDOM.render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('root')
);

// viewportUnitsBuggyfill.findProperties();
// var cssText = viewportUnitsBuggyfill.getCss();
