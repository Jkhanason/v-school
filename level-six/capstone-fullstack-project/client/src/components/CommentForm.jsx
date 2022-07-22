import React from 'react';

function CommentForm(props) {
  const {submit, id, setAllState} = props

  const [comment, setComment] = React.useState('')

  function handleSubmit(e) {
    e.preventDefault()
    submit(comment, id)

    //reset comment form state to toggle off after submit
    setAllState(prev => ({
      ...prev,
      showCommentForm: false
    }))
  }

  function handleChange(e) {
    setComment(e.target.value)
  }

  return (
    <form className='commentForm' onSubmit={handleSubmit}>
      <input
        name='comment'
        value={comment}
        onChange={handleChange}
        placeholder='Add your comment here'
        required
      />
      <button className="mainBtns">Send Comment</button>
    </form>
  )
}

export default CommentForm;