import React from 'react';
import HackForm from './HackForm';
import Comments from './Comments';
import CommentForm from './CommentForm';

function EachHack(props) {
  //destructure props
  const {category, comments, description, downvotes, upvotes, deleteLifeHack, _id, editLifeHack} = props

  //state to show delete prompt
  const [deletePrompt, setDeletePrompt] = React.useState(false)

  //state to control delete button text
  const [deleteBtnTxt, setDeleteBtnText] = React.useState('Delete')

  //state to show edit form
  const [showEditForm, setShowEditForm] = React.useState(false)

  //state to control edit button text
  const [editBtnText, setEditBtnText] = React.useState('Edit')

  //state to render comments
  const [showComments, setShowComments] = React.useState(false)

  //boolean to toggle show comments button
  const hasComments = comments.length > 0

  //state to control comment button text
  const [showCommentsBtnText, setShowCommentsBtnText] = React.useState('Show Comments')

  //toggles delete btn text and display of delete prompt
  function showDeletePrompt(){
    setDeletePrompt(prev => !prev)
    setDeleteBtnText(prev => prev === 'Delete' ? 'Cancel Delete' : 'Delete')

    //reset edit state
    setShowEditForm(false)
    setEditBtnText('Edit')
  }

  //toggles edit btn text and display of edit form
  function allowEditForm() {
    setShowEditForm(prev => !prev)
    setEditBtnText(prev => prev === 'Edit' ? 'Cancel Edit' : 'Edit')

    //reset delete state.
    setDeletePrompt(false)
    setDeleteBtnText('Delete')
  }

  //delete a life hack
  function handleDelete() {
    deleteLifeHack(_id)
  }

  function toggleComments() {
    setShowCommentsBtnText(prev => prev === "Show Comments" ? "Hide Comments" : "Show Comments")
    //toggle comments rendering on and off
    setShowComments(prev => !prev)
  }

  function allowCommentForm() {

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
        onClick={allowEditForm}>{editBtnText}</button>

      <button
        className="mainBtns eachHackBtns"
        onClick={showDeletePrompt}>{deleteBtnTxt}</button>

      {/* only render button if hack has comments already*/}
      {
        hasComments &&
        <button
          onClick={toggleComments}
          className="mainBtns eachHackBtns">{showCommentsBtnText}</button>
      }

      <button
        onClick={allowCommentForm}
        className="mainBtns eachHackBtns">Post a comment</button>

      {/* if this is true, map over comments array and render the comments component */}
      {
        showComments &&
        comments.map(comment => <Comments {...comment} key={comment._id}/>)
      }

      {
        deletePrompt &&
        <p className="deletePrompt" onClick={handleDelete}>Click here to delete this life hack.</p>
      }

      {
        showEditForm &&
        <HackForm
        //prefill the form with these props, edit hacks with submit and id
          category={category}
          description={description}
          submit={editLifeHack}
          id={_id}
          allowEditForm={allowEditForm}
        />
      }
    </div>
  )
}

export default EachHack