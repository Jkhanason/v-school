import React from 'react'
import {HackContext} from '../context/HackProvider';


function Public() {

  const {lifeHacks} = React.useContext(HackContext)

  return (
    <div className="public">
      <h2>public</h2>
    </div>
  )
}

export default Public