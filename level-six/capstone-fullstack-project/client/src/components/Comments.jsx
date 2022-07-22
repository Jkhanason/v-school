import React from 'react'

function Comments(props) {
  const {postedBy, comment, authorId} = props

  const {_id} = JSON.parse(localStorage.getItem('user'))

  //if the user posted the comment, allow for edits or deletes
  const isAuthor = authorId === _id

  return (
    <div className="comments">
      <h3>Posted by: {postedBy}</h3>
      <h3>{comment}</h3>

    { isAuthor &&
      <>
        <button>edit</button>
        <button>delete</button>
      </>
    }


    </div>
  )
}

export default Comments