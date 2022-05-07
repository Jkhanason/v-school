import React from 'react';
import axios from 'axios';

const ThemeContext = React.createContext()

function ThemeContextProvider(props) {
  //create state for form
  const [form, setForm] = React.useState({
    title: '',
    description: '',
    imgUrl: ''
  })

  //create state for array of form data
  const [thingsArray, setThingsArray] = React.useState([]);

  //setup form to be a controlled component
  function handleChange(event) {
    const {name, value} = event.target
    setForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  //add edited item too array and update api also
  function handleEdit(editedItem) {
    console.log('handleEdit')
    setThingsArray(prev => {
      return prev.map(item => item._id === editedItem._id ? editedItem : item)
    })
    axios.put(`https://api.vschool.io/jasonkhan/thing/${editedItem._id}`, editedItem)
    .then(response => console.log(response.data))
    .catch(error => console.info(error.data))
  }


  function handleDelete(id) {
    //filter the id of the item being deleted, return the rest
    setThingsArray(prevThing => {
      return prevThing.filter(thing => thing._id !== id)
    });
    //also delete item from the api
    axios.delete(`https://api.vschool.io/jasonkhan/thing/${id}`)
      .then(response => console.log(response.data))
      .catch(error => console.log(error.data))
  }

  function handleSubmit(event) {
    event.preventDefault()

    //set obj for api post
    const thingsObject = {
      "title": form.title.toUpperCase(),
      "description": form.description,
      "imgUrl": form.imgUrl
    }
    //reset form to blank
    setForm({
      title: '',
      description: '',
      imgUrl: ''
    })
    //post thing to api, set array state to be thing just posted
    axios.post('https://api.vschool.io/jasonkhan/thing', thingsObject)
      .then(response => setThingsArray(prev => [...prev, response.data]))
      .catch(error => console.log(error.data))
  }

  return (
    <ThemeContext.Provider value={{
        handleSubmit: handleSubmit,
        handleChange: handleChange,
        form: form,
        thingsArray: thingsArray,
        handleDelete: handleDelete,
        handleEdit: handleEdit
    }}>
        {props.children}
    </ThemeContext.Provider>
  )
}

export {ThemeContext, ThemeContextProvider}