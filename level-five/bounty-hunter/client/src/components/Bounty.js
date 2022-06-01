import React from 'react';
import Form from './Form';

function Bounty(props) {
  const bounty = props.bounty;
  const [isEditOn, setIsEditOn] = React.useState(false)

  function handleClick() {
    props.deleteBounty(bounty._id)
  }

  function setEdit() {
    setIsEditOn(prev => !prev)
  }

  return (
    <div className="bountyContainer">
      { !isEditOn ?
        <>
          <h2>Name: {bounty.firstName} {bounty.lastName}</h2>
          <h3>Is alive: {bounty.living ? 'Yes' : 'No'}</h3>
          <h3>Price of Bounty: ${bounty.bounty}</h3>
          <h3>Affiliation: <span>{bounty.type}</span></h3>
          <button className="deleteBtn" onClick={handleClick}>Delete</button>
          <button className="editBtn" onClick={setEdit}>Edit</button>
        </>
      :
        <>
          <Form
            btnText = "Save Edits"
            firstName = {bounty.firstName}
            lastName = {bounty.lastName}
            living = {bounty.living}
            bounty = {bounty.bounty}
            type = {bounty.type}
            _id = {bounty._id}
            submit = {props.updateBounty}
            setIsEditOn = {setIsEditOn}
          />
          <button className="cancelEdit" onClick={setEdit}>Cancel</button>
        </>
      }
    </div>
  )
}

export default Bounty