import React from 'react';
import AuthForm from './AuthForm';
import {UserContext} from '../context/UserProvider';


function Auth() {
  const [inputs, setInputs] = React.useState({
    username: '',
    password: ''
  })
  const [toggle, setToggle] = React.useState(false)

  //pulling necessary funcs from context
  const {signup, login, clearErrMsg, errMsg} = React.useContext(UserContext)

  function handleChange(event) {
    const {name, value} = event.target
    setInputs(prev => ({
      ...prev,
      [name]: value
    }))
  }

  function handleSignup(event) {
    event.preventDefault()
    signup(inputs)
  }

  function handleLogin(event) {
    event.preventDefault()
    login(inputs)

  }

  function handleToggle() {
    //switches between login and sign up prompts
    setToggle(prev => !prev)
    //clears error message if any
    clearErrMsg()
  }

  return (
    <div className="authContainer">
    {/* render either the sign up or login form when user clicks the P tag*/}
      <h1>Voice Your Issues</h1>
      { !toggle ?
        <>
          <AuthForm
            handleChange={handleChange}
            handleSubmit={handleSignup}
            inputs={inputs}
            btnText="Sign Up"
            errMsg={errMsg}
          />
          <p onClick={handleToggle}>Already a member? Click here.</p>
        </>
      :
        <>
          <AuthForm
            handleChange={handleChange}
            handleSubmit={handleLogin}
            inputs={inputs}
            btnText="Login"
            errMsg={errMsg}
          />
          <p onClick={handleToggle}>Not a member? Click here.</p>
        </>
      }
    </div>
  )
}

export default Auth