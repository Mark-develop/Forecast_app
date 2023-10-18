import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";


const API_KEY = '781ccb4ada473ca8a7acd681cf381feb'

class App extends React.Component {

  state ={
    county: undefined,
    city: undefined,
    temp: undefined,
    ftemp: undefined,
    sunset: undefined,
    error: undefined
  }

  gettingWeather = async (event) => {
    event.preventDefault();
    var city = event.target.elements.city.value;


    if(city){
      const API_URL = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await API_URL.json();
      
      var sunset = data.sys.sunset;
      var date = new Date();
      date.setTime(sunset);
      var sunset_date = date.getHours() + ':' + date.getMinutes();

      this.setState({
        county: data.sys.country,
        city: data.name,
        temp: data.main.temp,
        ftemp: data.main.feels_like,
        sunset: sunset_date,
        error: undefined
      });
    } else {
      this.setState({
        county: undefined,
        city: undefined,
        temp: undefined,
        ftemp: undefined,
        sunset: undefined,
        error: "This city was not found"
      })
    }
  }

  render() {
    return (
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-5 info">
                <Info/>
              </div>
              <div className="col-7 form">
                <Form WeatherMethod={this.gettingWeather}/>
                <Weather
                  country={this.state.county}
                  city={this.state.city}
                  temp={this.state.temp}
                  ftemp={this.state.ftemp}
                  sunset={this.state.sunset}
                  error={this.state.error}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App; 