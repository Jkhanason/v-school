import React from 'react';
import {UserContext} from '../context/UserProvider';
import TodoForm from './TodoForm';

function Profile() {
  //destructing the nexted username within the user object
  const {user: {username}} = React.useContext(UserContext)

  return (
    <div className="profile">
      <h1>Welcome {username}!</h1>
      <h3>Add a Todo</h3>
      <TodoForm />
      <h3>Your Todos</h3>
    </div>
  )
}

export default Profile