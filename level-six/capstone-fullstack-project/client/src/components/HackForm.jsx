import React from 'react'


function HackForm(props) {

  const {submit} = props

  const initInputs = {
    description: '',
    category: ''
  }
  const [form, setForm] = React.useState(initInputs)

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
    setForm(initInputs)

  }
  const {description, category} = form
  return (
    <form className="hackForm" onSubmit={handleSubmit}>
      <input
        name='description'
        placeholder='New life hack'
        value={description}
        onChange={handleChange}
        required
      />
      <select
        name='category'
        value={category}
        onChange={handleChange}
        required
      >
        <option>Select a Category</option>
        <option value='Health'>Health</option>
        <option value='Fitness'>Fitness</option>
        <option value='Cooking'>Cooking</option>
        <option value='Cleaning'>Cleaning</option>
        <option value='Other'>Other</option>
      </select>
      <button className='mainBtns'>Submit</button>
    </form>
  )
}
export default HackForm