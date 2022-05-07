import React from 'react';

function Thing(props) {
  const thing = props.thing;

  //create state for edit status flag
  const [isEditOn, setIsEditOn] = React.useState(false);

  //create state to capture edit info
  const [editForm, setEditFrom] = React.useState({
    "__v": thing.__v,
    "_id": thing._id,
    "sessionId": thing.sessionId,
    "title": thing.title,
    "description": thing.description,
    "imgUrl": thing.imgUrl
  });

  //toggle boolean to display edit form
  function toggleisEditOn(event) {
    setIsEditOn(prev => !prev)
  }

  function handleChange(event) {
    const {name, value} = event.target;
    setEditFrom(prev => ({...prev, [name]: value}))
  }

  //invoke edit function and toggle off edit boolean to hide form
  function handleSubmite(event) {
    event.preventDefault()
    props.handleEdit(editForm)
    setIsEditOn(prev => !prev)
  }

  function deleteThing() {
    props.handleDelete(thing._id)
  }

  return (
    <div
    key={thing._id}
    id={thing._id}
    className='thingsDisplay'>

    { isEditOn ?
        <form name="uglyForm" onSubmit={handleSubmite}>
          <input
            className="titleInput"
            name="title"
            value={editForm.title}
            onChange={handleChange}
            type="text"
          ></input>
          <input
            name="description"
            value={editForm.description}
            onChange={handleChange}
            type="text"
            ></input>
          <input
            name="imgUrl"
            value={editForm.imgUrl}
            onChange={handleChange}
            type="text"
          ></input>
          <button className="editBtn">Add Edits</button>
        </form>
      :
    <>
      <h2>{thing.title}</h2>
      <h5>{thing.description}</h5>
      {thing.imgUrl && <img src={thing.imgUrl} alt={thing.title}/>}
      <button onClick={toggleisEditOn}>Edit</button>
      <button onClick={deleteThing}>Delete</button>
    </>
    }
  </div>
  )
}

export default Thing