import React, {Component} from 'react';

export class LocalReport extends Component {
  initProps(){
    if(Object.keys(this.props.chosen).length === 0 ){
      return <div>Loading</div>
    } else {
      var {chosen, chosenDate} = this.props;
      var icon = `https://www.weatherbit.io/static/img/icons/${chosen.weather.icon}.png`;
      return (
        <div className="details-left">
          <img className="enlarge" src={icon} alt=""/>
          <div>
            <div className="top-day">{chosenDate}<br/></div>
            {chosen.weather.description}<br/>
          <div className="temp-values">
              {chosen.temp} °C<br/>
              {((chosen.temp*1.8) + 32).toFixed(1)} °F
            </div>
          </div>
        </div>
      )
    }
  };

  render(){
    return (
      <div className="title">
        <h6>LOCAL WEATHER REPORT</h6>
        <hr/>
        {this.initProps()}
      </div>
    )
  }
};

export default LocalReport;
