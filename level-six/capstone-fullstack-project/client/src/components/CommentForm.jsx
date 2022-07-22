import React from 'react';

function CommentForm(props) {
  const {submit, setAllState, currentComment, hackId, commentId} = props

  //form is reuseable/ set state to be incoming prop or blank
  const [comment, setComment] = React.useState(currentComment || '')

  function handleSubmit(e) {
    e.preventDefault()
    //to post a comment submit takes the comment and hackId
    //to reuse form for comment edits, submit adds the comment Id as a third parameter
    submit(comment, hackId, commentId)

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
      <button id='submitBtn' className="mainBtns">Send Comment</button>
    </form>
  )
}

export default CommentForm;