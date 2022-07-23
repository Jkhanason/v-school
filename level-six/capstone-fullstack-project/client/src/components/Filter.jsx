import React from 'react';

function Filter(props) {

  const {submit} = props
  // const [form, setForm] = React.useState('');

  function handleChange(event) {
    //form is lagged for some reason, its always on value behind
    //had to call submit using event value instead
    // setForm(event.target.value)
    submit(event.target.value)

  }

  return (
    <>
      <p>Sort by category</p>
      <select
        // name='form'
        // value={form}
        onChange={handleChange}
        className='filterForm'
      >
        <option value='Show All'>Show All</option>
        <option value='Health'>Health</option>
        <option value='Fitness'>Fitness</option>
        <option value='Cooking'>Cooking</option>
        <option value='Cleaning'>Cleaning</option>
        <option value='Other'>Other</option>
      </select>
    </>
  )
}

export default Filter