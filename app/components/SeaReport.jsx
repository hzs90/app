import React, {Component} from 'react';

export class SeaReport extends Component {
  initProps(){
    if(Object.keys(this.props.chosen).length === 0 ){
      return <div>Loading</div>
    } else {
      var {chosen} = this.props;
      return (
        <div className="details-right">
          <div className="left">
            WIND SPEED (KNOTS)<br/>
            WIND GUSTS (KNOTS)<br/>
            WIND DIRECTION<br/>
            WAVE (M)<br/>
            WAVE PERIOD (S)<br/>
            WAVE DIRECTION<br/>
            TEMPERATURE (C)<br/>
            CLOUD COVER (%)
          </div>
          <div className="right">
            {chosen.wind_spd.toFixed(1)}<br/>
            {chosen.wind_gust_spd.toFixed(1)}<br/>
            {chosen.wind_cdir}<br/>
            {chosen.temp.toFixed(1)}<br/>
            {chosen.slp.toFixed(1)}<br/>
            {chosen.wind_cdir}<br/>
            {chosen.temp.toFixed(1)}<br/>
            {chosen.clouds.toFixed(1)}
          </div>
        </div>
      )
    }
  };

  render(){
    return (
      <div className="title">
        <h6>SEA FORECAST REPORT</h6>
        <hr/>
        {this.initProps()}
      </div>
    )
  }
};

export default SeaReport;
