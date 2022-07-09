import React from 'react';
import Comment from './Comments';
import {UserContext} from '../context/UserProvider'

function Issue(props) {

  //pull necessary functions from context
  const {addComment, deleteIssue} = React.useContext(UserContext)
  //destructure props for easy referencing
  const {title, description, upvotes, downvotes, comments, _id} = props

  //create state to control show button display and text
  const [showBtn, setShowBtn] = React.useState(false)
  const [showBtnText, setShowBtnText] = React.useState('Show Comments')

  //set a boolean for whether an issue has any comments
  const hasComments = comments.length > 0
  //create state to control post button display and text
  const [showForm, setShowForm] = React.useState(false)
  const [postBtnText, setPostBtnText] = React.useState('Post Comment')

  //create state to toggle delete prompt
  const [deleteText, setDeleteText] = React.useState('Delete this Issue?')
  //state to display delete button
  const [showDeleteBtn, setShowDeleteBtn] = React.useState(false)

  //state to control the comments form
  const [comment, setComment] = React.useState('')

  //adjusts state to hide or display comments, switch btn text
  function toggleComments() {
    setShowBtnText(prev => prev === 'Show Comments' ? 'Hide Comments' : 'Show Comments')
    setShowBtn(prev => !prev)
  }

  //adjust state to hide or display comment form, switch btn text
  function toggleForm() {
    setPostBtnText(prev => prev === 'Post Comment' ? 'Cancel Comment' : 'Post Comment')
    setShowForm(prev => !prev)
  }

  //controls comment form
  function handleChange(event) {
    setComment(prev => event.target.value)
  }

  //add new comment
  function sendComment(event) {
    event.preventDefault()
    //sending comment with {} to create a comment key to match the validation required by the comment model
    addComment({comment}, _id)
    //clear text
    setComment('')
    //hide the form
    setShowForm(prev => !prev)
    //swap post button text
    setPostBtnText('Post Comment')
  }

  function toggleDeleteText() {
    setShowDeleteBtn(prev => !prev)
    setDeleteText(prev => prev === "Delete this Issue?" ? "Keep this Issue." : "Delete this Issue?")
  }

  return (
    <div className = "issue">
      <h2>{title}</h2>
      <h4>{description}</h4>
      <h5 className='inline'>Upvotes: {upvotes.length}</h5>
      <h5 className='inline'>Downvotes: {downvotes.length}</h5>
      <h5 className='inline'>Comments: {comments.length}</h5>
      <div className="commentBtns">
        { hasComments &&
          <button onClick={toggleComments}>{showBtnText}</button>
        }
        <button onClick={toggleForm}>{postBtnText}</button>
        <p className="deletePrompt" onClick={toggleDeleteText} >{deleteText}</p>
        {/* calling delete function inline with the issue id passed in */}
        { showDeleteBtn &&
          <button onClick={() => deleteIssue(_id)}>Remove Issue</button>
        }
      </div>
      { showBtn && //if show btn is clicked, then render comments
        comments.map(comment => <Comment {...comment} key = {comment._id} />)
      }
      { showForm && //if post button is clicked, render comments form
        <form onSubmit={sendComment}>
          <textarea
            name='comment'
            value={comment}
            placeholder="Add your comment here."
            required
            onChange={handleChange}
          />
          <button>Send Comment</button>
        </form>
      }
    </div>
  )
}

export default Issue