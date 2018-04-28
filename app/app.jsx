import React from 'react';
import ReactDOM from 'react-dom';

import Main from 'Main';

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <div className="wrapper">
    <Main/>
  </div>,
  document.getElementById('app')
);
