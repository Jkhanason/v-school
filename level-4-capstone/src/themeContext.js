import React from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const ThemeContext = React.createContext()

function ThemeContextProvider(props) {
  const navigate = useNavigate()

  //create state for form
  const [form, setForm] = React.useState({
    zipCode: ''
  })

  //create state to store home page api info
  const [homeWeather, setHomeWeather] = React.useState(
    {
      "request": {
          "type": "City",
          "query": "Toronto, Canada",
          "language": "en",
          "unit": "m"
      },
      "location": {
          "name": "Toronto",
          "country": "Canada",
          "region": "Ontario",
          "lat": "43.667",
          "lon": "-79.417",
          "timezone_id": "America/Toronto",
          "localtime": "2022-05-13 16:38",
          "localtime_epoch": 1652459880,
          "utc_offset": "-4.0"
      },
      "current": {
          "observation_time": "08:38 PM",
          "temperature": 17,
          "weather_code": 113,
          "weather_icons": [
              "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png"
          ],
          "weather_descriptions": [
              "Sunny"
          ],
          "wind_speed": 28,
          "wind_degree": 60,
          "wind_dir": "ENE",
          "pressure": 1020,
          "precip": 0,
          "humidity": 72,
          "cloudcover": 0,
          "feelslike": 17,
          "uv_index": 6,
          "visibility": 14,
          "is_day": "yes"
      }
  }
);

  //create state to store city page weather
  const [cityWeather, setCityWeather] = React.useState(
    {
      "request": {
          "type": "City",
          "query": "Toronto, Canada",
          "language": "en",
          "unit": "m"
      },
      "location": {
          "name": "Toronto",
          "country": "Canada",
          "region": "Ontario",
          "lat": "43.667",
          "lon": "-79.417",
          "timezone_id": "America/Toronto",
          "localtime": "2022-05-13 16:38",
          "localtime_epoch": 1652459880,
          "utc_offset": "-4.0"
      },
      "current": {
          "observation_time": "08:38 PM",
          "temperature": 17,
          "weather_code": 113,
          "weather_icons": [
              "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png"
          ],
          "weather_descriptions": [
              "Sunny"
          ],
          "wind_speed": 28,
          "wind_degree": 60,
          "wind_dir": "ENE",
          "pressure": 1020,
          "precip": 0,
          "humidity": 72,
          "cloudcover": 0,
          "feelslike": 17,
          "uv_index": 6,
          "visibility": 14,
          "is_day": "yes"
      }
  }
  );

  // React.useEffect(() => {
  // axios.get('http://api.weatherstack.com/current?access_key=d2a39943a4da96ef61985216dbb64868&query=austin')
  //   .then(response => setCityWeather(response.data))
  //   .catch(response => console.log(response.data))
  // }, [])

  //convert form to controlled component
  function handleChange(event) {
    const {name, value} = event.target;
    setForm({[name]: value})
  }

  //on form submit make api call and store in weather state array
  function handleSubmit(event) {
    event.preventDefault()

  // axios.get('http://api.weatherstack.com/current?access_key=d2a39943a4da96ef61985216dbb64868&query=austin')
  //   .then(response => setHomeWeather(response.data))
  //   .catch(response => console.log(response.data))
    navigate('/city')
    // setForm({zipCode: ''})

  }

  return (
    <ThemeContext.Provider value={{
      form: form,
      homeWeather: homeWeather,
      cityWeather: cityWeather,
      handleChange: handleChange,
      handleSubmit: handleSubmit,
    }}>
      {props.children}
    </ThemeContext.Provider>
  )

}

export {ThemeContext, ThemeContextProvider}