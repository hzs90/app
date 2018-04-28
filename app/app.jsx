import React from 'react';
import ReactDOM from 'react-dom';

var Main = require('./components/Main');

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Main/>,
  document.getElementById('app')
);
