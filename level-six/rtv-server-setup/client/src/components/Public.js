import React from 'react';
import IssueForm from './IssueForm';
import IssueList from './IssueList';
import {UserContext} from '../context/UserProvider';

function Public() {
  const {allIssues, addIssue} = React.useContext(UserContext)

  return (
    <div className="public">
      <h2>Post a new issue here!</h2>
      <IssueForm submit={addIssue}/>
      <h3>Issues from other users</h3>
      {/* calling the prop "issues" to support reuseablility, based on how
      IssueList is rendered from the Profile component*/}
      <IssueList issues = {allIssues} />
    </div>
  )
}

export default Public