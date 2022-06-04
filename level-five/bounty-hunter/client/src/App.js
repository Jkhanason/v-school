import React from 'react';
import axios from 'axios';
import Bounty from './components/Bounty';
import Form from './components/Form'

function App() {

  const [bounties, setbounties] = React.useState([]);

  function getBounties() {
    axios.get('/bounties')
      .then(res => setbounties(res.data))
      .catch(error => console.log(error.data))
  }

  React.useEffect(() => {
    getBounties()
  }, []);

  function postBounty(newBounty) {
    axios.post('/bounties', newBounty)
    .then(res => setbounties(prev => [...prev, res.data]))
    .catch(error => console.log(error.response.data.error))
  }

  function deleteBounty(id) {
    axios.delete('/bounties/' + id)
      .then(res => getBounties())
      .catch(error => console.log(error.response.data.error))
  }

  function updateBounty(updates, id) {
    axios.put(`/bounties/${id}`, updates)
      .then(res => getBounties())
      .catch(error => console.log(error.response.data.error))
  }

  function handleFilter(event) {
    const {value} = event.target
    if (value === 'reset') {
      getBounties()
    }
    axios.get(`/bounties/search/type?type=${value}`)
      .then(res => setbounties(res.data))
      .catch(err => console.log(err.response.data.error))
  }

  const eachBounty = bounties.map(bounty => {
    return (
      <Bounty
        key = {bounty._id}
        bounty = {bounty}
        deleteBounty = {deleteBounty}
        updateBounty = {updateBounty}
      />
    )
  });

  return (
    <div className="App">
      <div className="formDiv">
        <Form
            submit = {postBounty}
            btnText = "Submit New Bounty"
        />
        <h4>Filter by Type</h4>
        <select onChange={handleFilter}>
          <option value="reset">All Bounties</option>
          <option value="Jedi">Jedi</option>
          <option value="Sith">Sith</option>
        </select>
      </div>
      {eachBounty}
    </div>
  );
}

export default App;
