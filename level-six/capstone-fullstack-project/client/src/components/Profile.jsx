import React from 'react';
import {HackContext} from '../context/HackProvider';
import HackForm from './HackForm';
import EachHack from './EachHack';
function Profile (props) {
  //pull necessary data from context
  const {hacks, user: {username}, newLifeHack, deleteLifeHack, editLifeHack, addComments, editComments,  deleteComment} = React.useContext(HackContext)

  //iterate the hacks array and render an EachHack component for each one
  const hack = hacks.map(hack => {
    return (
      <EachHack
        //spread in the entire hack as a prop
        {...hack}
        key={hack._id}
        //add these funcs to each component
        deleteLifeHack={deleteLifeHack}
        editLifeHack={editLifeHack}
        addComments={addComments}
        editComments={editComments}
        deleteComment={deleteComment}
        />
    )
  })

  return (
    <div className="profile">
      <h3>Hello {username}!</h3>
      <h4>You can post a new life hack here.</h4>
      < HackForm submit={newLifeHack}/>
      { hacks.length > 0 &&
        <h4>Your previous life hacks are shown below.</h4>
      }
      {/* renders a component for each user hack */}
      {hack}
    </div>
  )
}

export default Profile