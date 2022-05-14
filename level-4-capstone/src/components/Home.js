import React from 'react';
import {ThemeContext} from '../themeContext';
import {Link} from 'react-router-dom';

function Home() {
  const {homeWeather, handleChange, handleSubmit, form} = React.useContext(ThemeContext)

  return (
    <div className="home">
        <h3 className="homeTitle">Today's weather at your fingertips.</h3>
        <form onSubmit={(event) => handleSubmit(event)}>
          <input
            type="text"
            // minLength='5'
            //maxLength='5'
            name="zipCode"
            required
            value={form.zipCode}
            placeholder="Seach by City or Zip Code"
            onChange={(event) => handleChange(event)}
          ></input><br></br>
          <button className="submitBtn">Search</button>
          {/* <Link to='/city'><button className="submitBtn">Search</button></Link> */}
        </form>
        <div className="homeWeatherDisplay">
          <h2>{homeWeather.location.name}, {homeWeather.location.region}</h2>
          <h3 className="homeLocalTime">Local Time: {homeWeather.location.localtime.slice(10)}</h3>
          <h3>Current Temp: {Math.floor(homeWeather.current.temperature * 1.8 + 32)} °F</h3>
          <h3>Feels Like: {Math.floor(homeWeather.current.feelslike * 1.8 + 32)} °F</h3>
          <img className="weatherImg" src={homeWeather.current.weather_icons} alt="weather icon"/>
          <h3>{homeWeather.current.weather_descriptions[0]}</h3>
          <h3>Humidity: {homeWeather.current.humidity}%</h3>
          <h3>Change of Rain: {homeWeather.current.precip}%</h3>
          <h3>Wind Speed / Direction: {homeWeather.current.wind_speed} mph - {homeWeather.current.wind_dir} </h3>
        </div>
    </div>
  );
}

export default Home;