import React from 'react';

function IssueForm(props) {
  const {addIssue} = props

  const [inputs, setInputs] = React.useState({
    title: '',
    description: '',
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
    addIssue(inputs)
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
      <input
        name="description"
        type="text"
        value={description}
        onChange={handleChange}
        placeholder="Description"
        required
      />
      <button>Add A New Issue</button>
    </form>
  )
}

export default IssueForm