import React from 'react';
import AuthForm from './AuthForm'
import {HackContext} from '../context/HackProvider';

function Auth() {
  //pull required data from context
  const {signup, error, login, clearError} = React.useContext(HackContext)

  //state to toggle login or sign up form
  const [toggle, setToggle] = React.useState(false)

  function handleToggle() {
    //switch between login or sign up forms
    setToggle(prev => !prev)
    //clear error msg between toggles
    clearError()
  }

  return (
    <div className="auth">
      <h2>Hack your life!</h2>
      {toggle ?
      <>
        <h2>Please Login to proceed.</h2>
        <AuthForm
          btnText='Login'
          submit={login}
          error={error}
        />
        <p className="loginPrompt" onClick={handleToggle}>Need to create an Account?</p>
      </>
      :
      <>
        <h2>Please Sign up to proceed.</h2>
        <AuthForm
          btnText='Sign up'
          submit={signup}
          error={error}
        />
        <p className="loginPrompt" onClick={handleToggle}>Already have an account?</p>
      </>
      }
    </div>
  )
}

export default Auth