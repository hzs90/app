import React, {Component} from 'react';
import Day from 'Day';
var api = require('weatherBitJSON').getTemp();

var Main = (props) => {
  return (
    <div>
      MAIN TITLE
      <Day/>
    </div>
  );
}

module.exports = Main;
