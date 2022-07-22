import React from 'react'
import CommentForm from './CommentForm';

function Comments(props) {
  const {postedBy, comment, authorId, editComments, hackId, _id,  deleteComment} = props

  //pull users id from storage
  const user = JSON.parse(localStorage.getItem('user'))
  const userId = user._id
  //if the user posted the comment, allow for edits or deletes
  const isAuthor = authorId === userId

  //state to control buttons
  const [allState, setAllState] = React.useState({
    showCommentForm: false,
    showDeletePrompt: false
  })

  //only one button can be active at a time
  //captures click event to turn on that one and off the other
  //name is the button name, same as state key names
  function resetState(name) {
    setAllState(prev => ({
      showCommentForm: false,
      showDeletePrompt: false,
      [name]: !prev[name]
    }))
  }

  //destructure state for easy reference below
  const {showCommentForm, showDeletePrompt} = allState

  function toggleEdits(event) {
    resetState(event.target.name)
  }

  function toggleDeletePrompt(e) {
    resetState(e.target.name)
  }

  function handleDelete() {
    //passed hack id and comment id to function
    deleteComment(hackId, _id)
  }
  return (
    <div className="comments">
      <h3>Posted by: {postedBy}</h3>
      <p id="description">{comment}</p>

    {/* allows user to edit or delete their own comments */}
    { isAuthor &&
      <>
        <button
          className='mainBtns'
          name="showCommentForm"
          onClick={toggleEdits}
          id="editBtn">{!showCommentForm ? 'Edit' : 'Cancel Edit'}</button>

        <button
          className='mainBtns'
          name="showDeletePrompt"
          onClick={toggleDeletePrompt}
          id="deleteBtn">{!showDeletePrompt ? 'Delete' : 'Cancel Delete'}</button>
      </>
    }

    {/* clicking delete button will render this */}
    {
      showDeletePrompt &&
      <p
        className="deletePrompt"
        onClick={handleDelete}>Delete this comment?</p>
    }

    {/* clicking edit button renders this */}
    {
      showCommentForm &&
      <CommentForm
        currentComment={comment}
        submit={editComments}
        setAllState={setAllState}
        hackId={hackId}
        commentId={_id}
      />
    }

    </div>
  )
}

export default Comments