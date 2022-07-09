import React from 'react';

function Comment(props) {
  const {username, title, comment} = props


  return (
    <div className='comments'>
      <h3>Posted by: {username}</h3>
      <h4>{title}</h4>
      <h4>{comment}</h4>
    </div>
  )
}

export default Comment