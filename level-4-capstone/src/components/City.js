import React from 'react';
import {ThemeContext} from '../themeContext';
import {useNavigate} from 'react-router-dom';

function City() {
  const {cityWeather} = React.useContext(ThemeContext);
  const navigate = useNavigate();
  return (
    <div className="city">
      { cityWeather.location ?
        <>
          <h2 className="cityFullGrid">
            All you need to know about <span>{cityWeather.location.name}, {cityWeather.location.country === "United States of America" ? cityWeather.location.region : cityWeather.location.country}</span>
          </h2>
          <h3 className="cityFullGrid">Current Time: {cityWeather.location.localtime.slice(10)}</h3>
          <h3 className="cityFullGrid">{cityWeather.current.weather_descriptions}</h3>
          <img className="weatherImg cityFullGrid" src={cityWeather.current.weather_icons} alt="weather icon"/>
          <h4>Lat: {cityWeather.location.lat}</h4>
          <h4>Lon: {cityWeather.location.lon}</h4>
          <h4>Temp: {cityWeather.current.temperature} °F</h4>
          <h4>Wind Speed: {cityWeather.current.wind_speed} mph</h4>
          <h4>Feels Like: {cityWeather.current.feelslike} °F</h4>
          <h4>Wind Direction: {cityWeather.current.wind_dir}</h4>
          <h4>Humidity: {cityWeather.current.humidity} %</h4>
          <h4>Wind Degree: {cityWeather.current.wind_degree}°</h4>
          <h4>Cloud Cover: {cityWeather.current.cloudcover}%</h4>
          <h4>Rain: {cityWeather.current.precip} in</h4>
          <h4>Visibility: {cityWeather.current.visibility} mi</h4>
          <h4>UV Index: {cityWeather.current.uv_index}</h4>
        </>
        :
          <p className='cityFullGrid badSearchPrompt'>Invalid City or Zip code. Please return to the home screen to try your search again.</p>
      }
      <button className="cityBtn" onClick={()=>navigate(-1)}>Back to Home</button>
    </div>
  );
}

export default City;
