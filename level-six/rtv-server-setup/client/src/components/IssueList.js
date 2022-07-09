import React from 'react';
import Issue from './Issue';

function IssueList(props) {

  //takes in the entire issues array as a prop
  const {issues} = props

  return (
    <div className="issueList">
      {/* map over the array of issues and for each issue render
      an Issue component, with the entire current issue object passed
      to it as a prop.
       */}
      {issues.map(issue => <Issue {...issue} key = {issue._id}/>)}
    </div>
  )
}

export default IssueList