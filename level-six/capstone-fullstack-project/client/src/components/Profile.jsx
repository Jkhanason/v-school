import React from 'react';
import {HackContext} from '../context/HackProvider';
import HackForm from './HackForm';

function Profile (props) {
  //pull necessary data from context
  const {hacks, user: {username}, newLifeHack} = React.useContext(HackContext)

  return (
    <div className="profile">
      <h3>Hello {username}!</h3>
      <h4>You can post a new life hack here.</h4>
      < HackForm submit={newLifeHack}/>
      { hacks.length > 0 &&
        <h4>Your previous life hacks are shown below.</h4>
      }
    </div>
  )
}

export default Profile