import React from 'react'

function Comments(props) {
  const {postedBy, comment} = props
  return (
    <div className="comments">
      <h3>Posted by: {postedBy}</h3>
      <h3>{comment}</h3>
    </div>
  )
}

export default Comments