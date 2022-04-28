import React from 'react';

function Meme (props) {
  const current = props.current;

  //save state of current meme
  const [currentMeme, setCurrentMeme] = React.useState(current)

  //create state to save current meme and update input values on edit
  function handleChange(event) {
    const {name, value} = event.target;
    setCurrentMeme(prev => ({
      ...prev,
      [name]: value
    }));
  }

  //on form submit to save edit..
  function saveEditedMeme(event) {
    event.preventDefault()
    /* call saveMeme function with current meme as a parameter, sends state back to main.js */
    props.saveMeme(currentMeme)
    //hide inputs and save button
    setDisplay('none')
  }

  //create state to toggle edit input display on and off
  const [display, setDisplay] = React.useState('none');

  //edit memes already created
  function editMeme(event) {
    //show inputs and save btn
    setDisplay(true)
  }

  return (
    <div
      className="newMemes">
      <h3 className="newMemeTitle">Meme #{props.index + 1}</h3>
      <div className="image-div">
        <img
          className="newMemeImg"
          src={current.url}
          alt="current top memes"
        ></img>
        <p className="topText">{currentMeme.topText}</p>
        <p className="bottomText ">{currentMeme.bottomText}</p>
      </div>
      <div className="newMemesBtn">
        <button
          className="editBtn"
          onClick={editMeme}
          >Edit</button>
        <button
          className="deleteBtn"
          onClick={props.deleteMeme}
          >Delete</button>
      </div>
      <form
        onSubmit={saveEditedMeme}
        style = {{display: display}}
        >
        <input
          name="topText"
          onChange={handleChange}
          placeholder="Top Text"
          value={currentMeme.topText}
          className="editInputs"
        ></input>
        <input
        name="bottomText"
        onChange={handleChange}
        placeholder="Top Text"
        value={currentMeme.bottomText}
        className="editInputs"
        ></input>
        <button className="saveBtn">Save</button>
      </form>
  </div>
  )
}

export default Meme