import React from 'react';
import Thing from './Thing';
import {ThemeContext} from './themeContext'

function List () {
  //destructure context props
  const {thingsArray, handleDelete, handleEdit} = React.useContext(ThemeContext);

  //map over array of things and for each, render a thing component
  const eachThing = thingsArray.map((thing, index) => {

    return (
      <Thing
        key={thing._id}
        thing={thing}
        index={index}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    )
  })

  return (
    <div className="thingsContainer">
      {eachThing}
    </div>
  )
}

export default List