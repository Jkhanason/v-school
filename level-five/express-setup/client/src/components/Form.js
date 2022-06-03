import React from 'react';

function Form(props) {
  const inputs = {
    name: props.name || '',
    age: props.age || ''
  }
  const [form, setForm] = React.useState(inputs)

  function handleChange(event) {
    const {name, value} = event.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.submit(form, props.id)
    setForm(inputs)
    //prevents error on post request for main form at top of page when this prop is undefined
    if (props.setEditOn) {
      props.setEditOn(prev => !prev)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name = 'name'
        value = {form.name}
        onChange={handleChange}
        placeholder= 'Name'
        required
      ></input>
      <input
        name = 'age'
        type = "number"
        value = {form.age}
        onChange={handleChange}
        placeholder= 'Age'
        required
      ></input>
      <button className="submitBtn">{props.btnText}</button>
    </form>
  )
}
export default Form