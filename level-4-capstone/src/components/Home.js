import React from 'react';
import {WeatherContext} from '../weatherContext';

function Home() {
  const {homeWeather, handleChange, handleSubmit, form} = React.useContext(WeatherContext)

  return (
    <div className="home">
      <h3 className="homeTitle">Today's weather at your fingertips.</h3>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          type="text"
          name="location"
          required
          value={form.location}
          placeholder="Seach by City or Zip Code"
          onChange={(event) => handleChange(event)}
        ></input><br></br>
        <button className="submitBtn">Search</button>
      </form>
      <div className="homeWeatherDisplay">
      { homeWeather.location ?
      <>
        <h2>{homeWeather.location.name}, {homeWeather.location.country === "United States of America" ? homeWeather.location.region : homeWeather.location.country}</h2>
        <h3 className="homeLocalTime">Local Time: {homeWeather.location.localtime.slice(10)}</h3>
        <h3>Current Temp: {homeWeather.current.temperature} °F</h3>
        <h3>Feels Like: {homeWeather.current.feelslike} °F</h3>
        <img className="weatherImg" src={homeWeather.current.weather_icons} alt="weather icon"/>
        <h3>{homeWeather.current.weather_descriptions[0]}</h3>
        <h3>Humidity: {homeWeather.current.humidity}%</h3>
        <h3>Change of Rain: {homeWeather.current.precip} in</h3>
        <h3>Wind Speed / Direction: {homeWeather.current.wind_speed} mph - {homeWeather.current.wind_dir} </h3>
      </>
      :
      <></>
      }
      </div>
    </div>
  );
}

export default Home;