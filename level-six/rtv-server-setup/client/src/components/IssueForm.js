import React from 'react';

function IssueForm(props) {
  const {submit} = props
  const btnText = props.btnText || 'Add A New Issue'

  const [inputs, setInputs] = React.useState({
    //form is reuseable. set to empty unless props are passed in
    title: props.title || '',
    description: props.description || '',
  })

  function handleChange(event) {
    const {name, value} = event.target
    setInputs(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    //if props.id exists pass it, for put request. Not needed for post request
    submit(inputs, props.id)
    //reset edit form and button state in issue component
    if (props.toggleEditForm) {
      props.toggleEditForm()
    }
    setInputs({
      title: '',
      description: ''
    })
  }

  //deconstruct inputs for easier access
  const {title, description} = inputs

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        value={title}
        onChange={handleChange}
        placeholder="Title"
        required
      />
      <textarea
        name="description"
        type="text"
        value={description}
        onChange={handleChange}
        placeholder="Description"
        required
      />
      <button>{btnText}</button>
    </form>
  )
}

export default IssueForm