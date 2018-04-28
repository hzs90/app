import React, {Component} from 'react';
import Day from 'Day';

export class DayList extends Component {
  defaultProps(){
    if(Object.keys(this.props.days).length === 0 ){
      return <div>Loading</div>
    } else {
      return this.props.days
      .map((day, idx) => {
        return <Day
          key={idx}
          date={day.datetime}
          cels={day.temp}
          fahr={((day.temp*1.8) + 32).toFixed(1)}
          idx={idx} icon={day.weather.icon}
          details={this.props.details.bind(this)}
          />})
    }
  }
  render(){
    return (
      <div className="day-list">
          {this.defaultProps()}
      </div>
    )
  }
};

export default DayList;
