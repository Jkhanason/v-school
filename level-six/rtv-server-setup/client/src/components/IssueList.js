import React from 'react';
import Issue from './Issue';

function IssueList(props) {

  //takes in the entire issues array as a prop
  /*profile prop is only passed from Profile component, if present, allow user specific
  functionality on issues page, that arent allowed on public page */
  const {issues, profile} = props

  return (
    <div className="issueList">
      {/* map over the array of issues and for each issue render
      an Issue component, with the entire current issue object passed
      to it as a prop.
       */}
      {issues.map(issue => <Issue {...issue} key = {issue._id} profile={profile}/>)}
    </div>
  )
}

export default IssueList