import React from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const ThemeContext = React.createContext()

function ThemeContextProvider(props) {
  const navigate = useNavigate()

  //create state for form
  const [form, setForm] = React.useState({
    location: ''
  });

  //create state to store home page api info
  const [homeWeather, setHomeWeather] = React.useState({});

  //create state to store city page weather
  const [cityWeather, setCityWeather] = React.useState({});

  const randomLocation = ['Austin', 'Reykjavik', 'Cape Town', 'Dublin', 'London'];

  React.useEffect(() => {
    const randomNum = Math.floor(Math.random() * randomLocation.length);
    axios.get(`http://api.weatherstack.com/current?access_key=dd56fdb122b5706e3668440b79fff444&query=${randomLocation[randomNum]}&units=f`)
    .then(response => setHomeWeather(response.data))
    .catch(response => console.log(response.data))
  // console.count("home rendered")
  }, []);

  //convert form to controlled component
  function handleChange(event) {
    const {name, value} = event.target;
    setForm({[name]: value})
  }

  //on form submit make api call and store in city weather state array
  function handleSubmit(event) {
    event.preventDefault()
    axios.get(`http://api.weatherstack.com/current?access_key=dd56fdb122b5706e3668440b79fff444&query=${form.location}&units=f`)
      .then(response => setCityWeather(response.data))
      .catch(response => console.log(response.data))
      // console.count(" city rendered")

    navigate('/city');
    setForm({location: ''});
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