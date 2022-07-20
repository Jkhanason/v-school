import React from 'react';
import axios from 'axios';


const HackContext = React.createContext()

/* create a new instance of axios that can be customized.
  it could be named anything */
const userAxios = axios.create()

//set up an interceptor for requests
userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  //just like postman, set the headers authorization to the bearers token
  config.headers.Authorization = `Bearer ${token}`
  return config
})

function HackProvider(props) {

  //state to hold user info
  const [userState, setUserState] = React.useState({
    //if user or token are saved in local strorage (saved below) pull from that first
    user: JSON.parse(localStorage.getItem('user')) || {},
    token: localStorage.getItem('token') || '',
    hacks: []
  })
  //state to hold all lifehacks
  const [lifeHacks, setLifeHacks] = React.useState([])
  //state to capture error msgs
  const [error, setError] = React.useState('')

  //handle sign up
  function signup(credentials) {
    axios.post('http://localhost:4545/auth/signup', credentials)
      .then(res => {
        //deconstruct response from server
        const {token, user} = res.data
        //save token and user info in local storage so it persists page refresh
        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('token', token)
        setUserState(prev => ({
          ...prev,
          token,
          user
        }))
      })
      .catch(err => setError(err.response.data.errorMsg))
  }

  //handle login
  function login(credentials) {
    axios.post('http://localhost:4545/auth/login', credentials)
      .then(res => {
        //invoke get to populate state on page load
        getAllHacks()
        const {token, user} = res.data
        localStorage.setItem('token', token)
        localStorage.setItem('user', JSON.stringify(user))
        setUserState(prev => ({
          ...prev,
          token,
          user
        }))
      })
      .catch(err => setError(err.response.data.errorMsg))
  }

  //clear error message
  function clearError() {
    setError('')
  }

  //handle logout
  function logout() {
    //clear user data and local storage, return to auth page
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setUserState({
      user: {},
      token: '',
      hacks: []
    })
  }

  //request all life hacks, using userAxios that that the Bearer token attached
  function getAllHacks() {
    userAxios.get('http://localhost:4545/api/hacks')
      .then(res => setLifeHacks(res.data))
      .catch(err => console.log(err.response.data.errorMsg))
  }


  return (
    <HackContext.Provider
      value={{
        ...userState,
        lifeHacks,
        signup,
        login,
        error,
        clearError,
        logout
      }}>
      {props.children}
    </HackContext.Provider>
  )
}

export {HackContext, HackProvider}