import React, {Component} from 'react';

export class Day extends Component {
  render(){
    //var {day} = this.props;
    var day = "Monday";
    var cels = 22;
    var fahren = (cels*1.8)+32;

    var icon = "https://www.weatherbit.io/static/img/icons/t01d.png";
    return (
      <div>
        <div>
          {day}
        </div>
        <div>
          <img src={icon} alt="icon"/>
        </div>
        <div>
          {cels}
          {fahren}
        </div>
      </div>
    )
  }
};

export default Day;
