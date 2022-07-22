import React from 'react';

function AuthForm(props) {
  //deconstructing props
  const {btnText, submit, error} = props
  //state to control form
  const [form, setForm] = React.useState({
    username: '',
    password: ''
  })

  function handleChange(e) {
    const {name, value} = e.target
    setForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    submit(form)
  }

  const {username, password} = form
  return(
   <div className="authForm">
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='username'
        placeholder="Username"
        value={username}
        onChange={handleChange}
      />
      <input
        type='text'
        name='password'
        placeholder="Password"
        value={password}
        onChange={handleChange}
      />
      <button id="submitBtn" className="mainBtns">{btnText}</button>
      {/* if theres a signup/login error, display this */}
      {error &&
        <p className='errorText'>{error}</p>
      }
    </form>
   </div>
  )
}

export default AuthForm