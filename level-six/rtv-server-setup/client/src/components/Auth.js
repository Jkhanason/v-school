import React from 'react';
import AuthForm from './AuthForm';
import {UserContext} from '../context/UserProvider';


function Auth() {
  const [inputs, setInputs] = React.useState({
    username: '',
    password: ''
  })
  const [toggle, setToggle] = React.useState(false)
  const {signup, login} = React.useContext(UserContext)

  function handleChange(event) {
    const {name, value} = event.target
    setInputs(prev => ({
      ...prev,
      [name]: value
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    signup(inputs)
  }
  // function signup(inputs) {

  // }

  return (
    <>
    <AuthForm
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      inputs={inputs}
      btnText="Sign Up"
    />


    </>
  )
}

export default Auth