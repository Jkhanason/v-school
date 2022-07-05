import React from 'react';
import axios from 'axios';

const UserContext = React.createContext()

function UserProvider(props) {
  const initalState = {
    //if user or token are saved in local strorage (saved below) pull from that first, OR default to blank
    user: JSON.parse(localStorage.getItem('user')) || {},
    token: localStorage.getItem('token') || '',
    todos: []
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

  return (
    <UserContext.Provider
      value={{
        ...userState, //spread in state so each item is destructured
        signup
      }}>
      {props.children}
    </UserContext.Provider>
  )
}

export {UserContext, UserProvider}