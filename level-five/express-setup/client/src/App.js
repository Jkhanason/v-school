import React from 'react';
import axios from 'axios';
import Person from './components/Person.js';
import Jobs from './components/Jobs.js';
import Form from './components/Form.js';

function App() {
  //state for hold data for both api calls
  const [people, setPeople] = React.useState([]);
  const [jobs, setJobs] = React.useState([]);

  React.useEffect(() => {
    axios.get('/people')
      .then(res => setPeople(res.data))
      .catch(error => console.log(error.data))
  }, []);

  React.useEffect(() => {
    axios.get('/jobs')
      .then(res => setJobs(res.data))
      .catch(error => console.log(error.data))
  }, []);

  //post request for people api
  function handlePost(newPerson) {
    axios.post('/people', newPerson)
      .then(res => setPeople(res.data))
      .catch(error => console.log(error.data))
  }

  //delete request to people api
  function deletePeople(id) {
    axios.delete(`/people/${id}`)
    .then(res => {
      setPeople(prev => prev.filter(person => person._id !== id))
    })
    .catch(error => console.log(error.data))
  }

  //put request to people api
  function updatePeople(updates, id) {
    axios.put(`/people/${id}`, updates)
      .then(res => {
        setPeople(prev => prev.map(current => current._id === id ? res.data : current))
      })
      .catch(error => console.log(error.data))
  }

  const eachPerson = people.map(person => {
    return (
      <Person
        key = {person._id}
        person = {person}
        deletePeople = {deletePeople}
        updatePeople = {updatePeople}
      />
    )
  });

  const eachJob = jobs.map(job => {
    return (
      <Jobs
        key = {job._id}
        job = {job}
      />
    )
  })

  return (
    <div className="App">
      <Form
        submit = {handlePost}
        btnText = "Submit"
      />
      {eachPerson}
      {eachJob}
    </div>
  );
}

export default App;
