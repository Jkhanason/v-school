import React from 'react';
import HackForm from './HackForm';
import Comments from './Comments';
import CommentForm from './CommentForm';

function EachHack(props) {
  //destructure props
  const {category, comments, description, downvotes, upvotes, deleteLifeHack, _id, editLifeHack, addComments} = props

  //boolean to toggle the show comments button
  const hasComments = comments.length > 0

  //state to control the buttons
  const [allState, setAllState] = React.useState({
    showDeletePrompt: false,
    showEditForm: false,
    showComments: false,
    showCommentForm: false
  })

  //when any button is clicked, toggle off any other button that was in use
  function resetAllState(name) {
    //name is the button name pulled from the click event
    //the button names match the state names below
    setAllState(prev => ({
      showDeletePrompt: false,
      showEditForm: false,
      showComments: false,
      showCommentForm: false,

      /*
      example: button is named showDeletePrompt,
      set everything to false, then..
      [showDeletePrompt]: !prev[showDeletePrompt]
      if showDeletePrompt was false, it is now true
      */

      [name]: !prev[name]

    }))
  }

  //displays the delete prompt
  function toggleDeletePrompt(e){
    resetAllState(e.target.name)
  }

  //displays the edit form
  function toggleEditForm(e) {
    resetAllState(e.target.name)
  }

  //delete a life hack
  function handleDelete() {
    deleteLifeHack(_id)
  }

  //displays already posted comments
  function toggleComments(e) {
    resetAllState(e.target.name)
  }

  //displays form to add new comment
  function toggleCommentForm(e) {
    resetAllState(e.target.name)
  }


  return (
    <div className="eachHack">
      <p>Category: <span>{category}</span></p>
      <p id='description'>{description}</p>
      <p className="hackStats">Upvotes: {upvotes.length}</p>
      <p className="hackStats">Downvotes: {downvotes.length}</p>
      <p className="hackStats">Comments: {comments.length}</p>

      <button
        className="mainBtns eachHackBtns"
        onClick={toggleEditForm}
        name="showEditForm">{!allState.showEditForm ? 'Edit' : 'Cancel Edit'}</button>

      <button
        className="mainBtns eachHackBtns"
        onClick={toggleDeletePrompt}
        name="showDeletePrompt">{!allState.showDeletePrompt ? 'Delete' : 'Cancel Delete'}</button>

      {/* only render button if hack has comments already*/}
      {
        hasComments &&
        <button
          onClick={toggleComments}
          className="mainBtns eachHackBtns"
          name='showComments'>{!allState.showComments ? 'Show Comments' : 'Hide Comments'}</button>
      }

      <button
        onClick={toggleCommentForm}
        className="mainBtns eachHackBtns"
        name="showCommentForm">{!allState.showCommentForm ? 'Post a Comment' : 'Cancel Comment'}</button>

      {/* if this is true, map over comments array and render the comments component */}
      {
        allState.showComments &&
        comments.map(comment => <Comments {...comment} key={comment._id}/>)
      }

      {/* clicking delete button will toggle this on or off */}
      {
        allState.showDeletePrompt &&
        <p className="deletePrompt" onClick={handleDelete}>Click here to delete this life hack.</p>
      }

      {/* edit button will toggle this */}
      {
        allState.showEditForm &&
        <HackForm
        //prefill the form with these props, edit hacks with submit and id, state is passed to toggle off edit form on submit
          category={category}
          description={description}
          submit={editLifeHack}
          id={_id}
          setAllState={setAllState}
          />
        }

      {/* post comment button toggles this*/}
      {
        allState.showCommentForm &&
        <CommentForm
        //needs the hack id and addComments func to post new comments
        //uses state to toggle off comment form on submit
        submit={addComments}
        setAllState={setAllState}
        id = {_id}/>
      }
    </div>
  )
}

export default EachHack