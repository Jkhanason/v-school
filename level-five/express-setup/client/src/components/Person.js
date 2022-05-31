import React from 'react';
import Form from './Form.js';

function Person(props) {
  const person = props.person;
  const [editOn, setEditOn] = React.useState(false);
  return (
    <div className="personContainer">
      {!editOn ?
        <>
          <h3>Name: {person.name}</h3>
          <h3>Age: {person.age}</h3>
          <h4>ID: {person._id}</h4>
          <button
            className="deleteBtn"
            onClick = {() => props.deletePeople(person._id)}>
            Delete
          </button>
          <button
            className ="editBtn"
            onClick= {()=>setEditOn(prev => !prev)}>
            Edit
          </button>
        </>
        :
        <>
          <Form
            name = {person.name}
            age = {person.age}
            id = {person._id}
            btnText = 'Submit Edit'
            submit = {props.updatePeople}
            setEditOn = {setEditOn}

          />
          <button
            className ="editBtn"
            onClick= {()=>setEditOn(prev => !prev)}>
            Cancel Edit
          </button>
        </>
        }
    </div>
  )
}

export default Person

