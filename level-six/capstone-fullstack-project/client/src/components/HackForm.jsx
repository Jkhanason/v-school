import React from 'react'


function HackForm(props) {

  /* submit is either a delete or post function depending on where the form is rendered
  */
  const {submit, id, setAllState} = props

  const initInputs = {
    //form is reuseable. if props are passed in set value to that instead of blank
    description: props.description || '',
    category: props.category || ''
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
    //id prop is only passed from EachHack component for edit post function
    submit(form, id)
    setForm(initInputs)

    //for edit post function, hide edit form after submitting edits
    if (setAllState) {
      setAllState(prev => ({
        ...prev,
        showEditForm: false
      }))
    }

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