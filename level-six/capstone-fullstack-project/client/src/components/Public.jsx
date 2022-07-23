import React from 'react';
import HackForm from './HackForm';
import EachHack from './EachHack';
import Filter from './Filter';
import {HackContext} from '../context/HackProvider';


function Public() {

  const {
    allLifeHacks,
    newLifeHack,
    addComments,
    editComments,
    deleteComment,
    upvote,
    downvote,
    user: {username}, filterHacks} = React.useContext(HackContext)

  const hacks = allLifeHacks.map(hack => {
    return (
      <EachHack
      {...hack}
      key={hack._id}
      addComments={addComments}
      editComments={editComments}
      deleteComment={deleteComment}
      upvote={upvote}
      downvote={downvote}
      />
    )
  })

  return (
    <div className="public">
      <h2>Welcome to Life Hacks! </h2>
      <p>The best source of tips and tricks to hack your life! </p>
      <p id='publicIntro1'>You may post a new life hack here. </p>

      <HackForm submit={newLifeHack}/>

      <p id='publicIntro2'>Or browse our list of hacks below.</p>

      <Filter submit={filterHacks}/>

      {
        allLifeHacks.length === 0 &&
        <p><span>{username}</span>, be the first to post a life hack for this category!</p>
      }
      {hacks}

    </div>
  )
}

export default Public