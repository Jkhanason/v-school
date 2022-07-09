import React from 'react';
import Comment from './Comments';
import {UserContext} from '../context/UserProvider'

function Issue(props) {

  //pull func from context
  const {addComment} = React.useContext(UserContext)
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

  //state to control the comments form
  const [comment, setComment] = React.useState('')

  //adjusts state to hide or display comments
  function toggleComments() {
    setShowBtnText(prev => prev === 'Show Comments' ? 'Hide Comments' : 'Show Comments')
    setShowBtn(prev => !prev)
  }

  //adjust state to hide or display comment form
  function toggleForm() {
    setPostBtnText(prev => prev === 'Post Comment' ? 'Cancel Comment' : 'Post Comment')
    setShowForm(prev => !prev)
  }

  //add new comment
  function sendComment(event) {
    event.preventDefault()
    //sending comment with {} to create a comment key to match the validation required by the comment model
    addComment({comment}, _id)
    setComment('')
    setShowForm(prev => !prev)
    setPostBtnText('Post Comment')
  }

  function handleChange(event) {
    setComment(prev => event.target.value)
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
      </div>
      { showBtn &&
        comments.map(comment => <Comment {...comment} key = {comment._id} />)
      }
      { showForm &&
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