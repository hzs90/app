var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'https://api.weatherbit.io/v2.0/forecast/daily?city=Raleigh,NC&days=7&key=7c6c9d70ecf24505980b7c4ccce4e6ac';

module.exports = {
  getTemp() {
    return axios.get(OPEN_WEATHER_MAP_URL).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        console.log(res);
        return res;
      }
    }, function (res) {
      throw new Error(res.data.message);
    });
  }
}
