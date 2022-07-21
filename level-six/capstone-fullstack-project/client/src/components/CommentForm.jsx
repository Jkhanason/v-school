import React from 'react';

function CommentForm(props) {

  const [comment, setComment] = React.useState('')

  function handleSubmit(e) {

  }

  function handleChange(e) {
    setComment(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name='comment'
        value={comment}
        onChange={handleChange}
        placeholder='Add your comment here'
        required
      />
      <button>Send Comment</button>
    </form>
  )
}

export default CommentForm;