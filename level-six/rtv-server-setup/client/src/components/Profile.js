import React from 'react';
import {UserContext} from '../context/UserProvider';
import IssueForm from './IssueForm';
import IssueList from './IssueList';

function Profile() {
  //destructing the nested username within the user object
  const {user: {username}, addIssue, issues} = React.useContext(UserContext)

  return (
    <div className="profile">
      <h1>Welcome {username}!</h1>
      <h3>Post a new Issue</h3>
      {/* passing addIssue func to the form as a prop */}
      <IssueForm submit = {addIssue}/>
      <h3>Your Previous Issues</h3>
      {/* 1) passing the issues array from context as a prop.
          2) sending "profile true" to allow user specific functionality not allowed
          on public page. */}
      <IssueList issues={issues} profile={true}/>
    </div>
  )
}

export default Profile