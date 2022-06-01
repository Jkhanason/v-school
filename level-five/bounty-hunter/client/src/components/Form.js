import React from 'react';


function Form(props) {

  const inputs = {
    firstName: props.firstName || '',
    lastName: props.lastName || '',
    living: props.living || '',
    bounty: props.bounty || '',
    type: props.type || ''
  }
  const [form, setForm] = React.useState(inputs);

  const handleChange = event => {
    const {name, value, type, checked} = event.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  }

  function handleSubmit (event) {
    event.preventDefault()
    props.submit(form, props._id)
    props.setIsEditOn(prev => !prev)
    setForm(inputs)

  }

  return (
    <form onSubmit = {handleSubmit}>
      <input
        required
        placeholder = "First Name"
        name = "firstName"
        value = {form.firstName}
        onChange={handleChange}
      >
      </input>
      <input
        required
        placeholder = "Last Name"
        name = "lastName"
        value = {form.lastName}
        onChange={handleChange}

      >
      </input>
      <label htmlFor="living"> Is Alive: </label>
      <input
        placeholder = "Alive"
        name = "living"
        checked = {form.living}
        type = "checkbox"
        id="living"
        onChange={handleChange}
      >
      </input>
      <input
        required
        placeholder = "Price"
        name = "bounty"
        value = {form.bounty}
        type = "number"
        onChange={handleChange}
      >
      </input>
      <input
        required
        placeholder = "Jedi or Sith"
        name = "type"
        value = {form.type}
        onChange={handleChange}
      >
      </input>
      <button className="submitBtn">{props.btnText}</button>
    </form>
  )
}

export default Form