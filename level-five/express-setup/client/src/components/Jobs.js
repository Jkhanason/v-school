import React from 'react';

function Jobs(props) {
  const {job} = props.job;
  return (
    <div className="jobContainer">
      <h3>Job Title: {job}</h3>
      <button className="deleteBtn">Delete</button>
    </div>
  )
}

export default Jobs