import React from 'react';
import {UserContext} from '../context/UserProvider';

function Public() {
  const {allIssues} = React.useContext(UserContext)

  const eachIssue = allIssues.map(issue => {
    return (
      <div key={issue._id}>
        <h2>{issue.title}</h2>
        <h3>{issue.description}</h3>
      </div>
    )
  })
  return (
    <div className="public">
      <h3>public page</h3>
      {eachIssue}
    </div>
  )
}

export default Public