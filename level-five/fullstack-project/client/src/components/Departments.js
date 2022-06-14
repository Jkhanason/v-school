import React from 'react'
import {Outlet} from 'react-router-dom';
import Form from './Form';

function Departments(props) {
  const addNewItem = props.addNewItem

  return (
    <>
      <Outlet/>
      <Form addNewItem={addNewItem}/>
    </>
  )
}

export default Departments