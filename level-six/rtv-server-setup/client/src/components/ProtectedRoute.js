import React from 'react';
import {Navigate} from 'react-router-dom';

function ProtectedRoute(props) {

  const {token, children, redirect} = props
  return (
    <>
      {token ? children : <Navigate to={redirect}/>}
    </>
  )
}
export default ProtectedRoute