import React from 'react';

function TodoForm() {

  const [inputs, setInputs] = React.useState({
    title: '',
    description: '',
    imgUrl: ''
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
    //add todos
  }

  //deconstruct inputs for easier access
  const {title, description, imgUrl} = inputs

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        value={title}
        onChange={handleChange}
        placeholder="Title"
      />
      <input
        name="description"
        type="text"
        value={description}
        onChange={handleChange}
        placeholder="Description"
      />
      <input
        name="imgUrl"
        type="text"
        value={imgUrl}
        onChange={handleChange}
        placeholder="Image Url"
      />
      <button>Add New Todo</button>
    </form>
  )
}

export default TodoForm