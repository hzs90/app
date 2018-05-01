import React, {Component} from 'react';

export class Day extends Component {
  render(){
    var {date, cels, fahr, icon, idx} = this.props;

    var date = new Date();
    var today = date.getDay();
    var requiredIdx = 0;

    if((today + idx) > 6){
      requiredIdx = Math.abs(7 - (today + idx));
    } else {
      requiredIdx = today + idx;
    }

    var week = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
    date = week[requiredIdx];

    var icon = `https://www.weatherbit.io/static/img/icons/${icon}.png`;
    return (
      <div className="day" onClick={() => this.props.details(idx, date)}>
        <div>
          {date}
        </div>
        <div className="images">
          <img src={icon} alt="icon"/>
        </div>
        <div>
          {cels} °C
        </div>
        <div>
          {fahr} °F
        </div>
      </div>
    )
  }
};

export default Day;
