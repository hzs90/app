import React, {Component} from 'react';
import DayList from 'DayList';
import SeaReport from 'SeaReport';
import LocalReport from 'LocalReport';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      days: {},
      chosen: {},
      chosenDate: ""
    }
  }

  getData(today) {
    let url = 'https://api.weatherbit.io/v2.0/forecast/daily?city=Wolverhampton,UK&days=7&days=7&key=7c6c9d70ecf24505980b7c4ccce4e6ac';
    fetch(url).then((res) => {
      return res.json();
    }).then((data) => {
      this.setState({
        isLoading: false,
        days: data.data,
        chosen: data.data[0],
        chosenDate: today
      });
    });
  }

  componentDidMount() {
    console.log("Thank you for the challenge :)");
    let week = {
      0: "SUNDAY",
      1: "MONDAY",
      2: "TUESDAY",
      3: "WEDNESDAY",
      4: "THURSDAY",
      5: "FRIDAY",
      6: "SATURDAY"
    }
    let today = new Date().getDay();
    this.getData(week[today]);
  }

  detailedWeather(idx, date){
    this.setState({
      chosen: this.state.days[idx],
      chosenDate: date
    })
  }

  render() {
    return (
      <div className="container">
        <h1>Wolverhampton</h1>
        <h7 className="sub">West Midlands, UK</h7>
        <div className="main-grid">
          <div className="transparent-back">
            <LocalReport chosen={this.state.chosen} chosenDate={this.state.chosenDate}/>
          </div>
          <div className="transparent-back">
            <SeaReport chosen={this.state.chosen}/>
          </div>
        </div>
        <div>
          <DayList days={this.state.days} details={this.detailedWeather.bind(this)}/>
        </div>
      </div>
    )
  }
}

export default Main;
