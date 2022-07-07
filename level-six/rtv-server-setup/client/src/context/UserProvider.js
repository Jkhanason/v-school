import React from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const UserContext = React.createContext()

/*create a new instance of axios that can be customized.
could name it anything if I wanted*/
const userAxios = axios.create()

//set up an interceptor for requests
userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  //just like postman, set headers authorization to the bearers token
  config.headers.Authorization = `Bearer ${token}`
  return config
})

function UserProvider(props) {
  const navigate = useNavigate()
  const initalState = {
    //if user or token are saved in local strorage (saved below) pull from that first, OR default to blank
    user: JSON.parse(localStorage.getItem('user')) || {},
    token: localStorage.getItem('token') || '',
    issues: []
  }
  const [userState, setUserState] = React.useState(initalState);

  function signup(credentials) {
    axios.post('/auth/signup', credentials)
      .then(res => {
        //deconstruct response from server
        const {token, user} = res.data
        //save token and user in local storage to info persists page refresh
        localStorage.setItem('token', token)
        localStorage.setItem('user', JSON.stringify(user));
        //update user state with incoming response data
        setUserState(prev => {
          return { //used return keyword on a new line
            ...prev,
            token,
            user
          }
        })
      })
      .catch(err => console.log(err.response.data.errorMsg))
  }

    function login(credentials) {
      axios.post('/auth/login', credentials)
        .then(res => {
          const {token, user} = res.data
          localStorage.setItem('token', token)
          localStorage.setItem('user', JSON.stringify(user))
          setUserState(prev => ({ //added parenthesis on opening line instead of using return keyword
            ...prev,
            token,
            user
          }))
        })
        .catch(err => console.log(err.response.data.errorMsg))
    }

    function logout() {
      //reset user state and local storage to remove tokens and user info
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      setUserState({
        user: {},
        token: '',
        issues: []
      })
      //send user back to login/signup page
      navigate('/')
    }

    function addIssue(newIssue) {
      userAxios.post('/api/issues', newIssue)
        .then(res => setUserState(prevState => ({
          ...prevState,
          issues: [...prevState.issues, res.data]
        })))
        .catch(err => console.log(err.response.data.errorMsg))
    }

  return (
    <UserContext.Provider
      value={{
        ...userState, //spread in state so each item is destructured
        signup,
        login,
        logout,
        addIssue
      }}>
      {props.children}
    </UserContext.Provider>
  )
}

export {UserContext, UserProvider}