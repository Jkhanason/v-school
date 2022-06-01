import React from 'react';
import {ThemeContext} from './themeContext';

function Form() {
  const {handleSubmit, handleChange, form} = React.useContext(ThemeContext)

  return (
    <div className="formDiv">
      <form name="uglyForm" onSubmit={(event)=>{handleSubmit(event)}}>
        <input
          name="title"
          value={form.title}
          onChange={(event)=>{handleChange(event)}}
          placeholder="title"
          type="text"
          required
        ></input>
        <input
          name="description"
          value={form.description}
          onChange={(event)=> {handleChange(event)}}
          placeholder="description"
          type="text"
          required
        ></input>
        <input
          name="imgUrl"
          value={form.imgUrl}
          onChange={(event)=> {handleChange(event)}}
          placeholder="url"
          type="text"
          required
        ></input>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Form