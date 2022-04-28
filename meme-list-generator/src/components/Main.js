import React from 'react';
import axios from 'axios';
import Meme from './Meme.js';
import { v4 as uuidv4 } from 'uuid';

function Main () {
  //create state for form inputs and img urls
  const [memes, setMemes] = React.useState({
    topText: '',
    bottomText: '',
    url: "https://i.imgflip.com/21uy0f.jpg",
  });

  //create state for memes array from api
  const [memeApi, setMemeApi] = React.useState([]);

  //make api call and update memeApi state
  React.useEffect(() => {
    axios.get("https://api.imgflip.com/get_memes")
    .then(response => setMemeApi(response.data.data.memes))
    .catch(error => console.log(error.data))
    // console.count("api call")  //remove this later
  }, []);

  //refresh button changes memes
  function changeMeme() {
    const randomNum = Math.floor(Math.random() * memeApi.length);
    const nextUrl = memeApi[randomNum].url
    setMemes(prev => ({
      ...prev,
      url: nextUrl
    }))
  }

  //set meme state to update as input values change
  function handleChange(event) {
    const {name, value} = event.target;
    setMemes(prev => ({
      ...prev,
      [name]: value
    }));
  }

  //create state to store memes created by submit button
  const [createdMemes, setCreatedMemes] = React.useState([]);
  //on submit add meme obj to createdMemes array
  function createMeme() {
    //redirect memes to new const
    const newMeme = memes
    //add an id key to eay meme obj
    newMeme.id = uuidv4()
    setCreatedMemes(prev => ([
        ...prev, newMeme
    ]))
  }

  //map over created memes and render each
  const eachMeme = createdMemes.map((current, index) => {
    return (
      <Meme
        key={index}
        current = {current}
        deleteMeme = {deleteMeme}
        saveMeme = {saveMeme}
        index = {index}
      />
    )
  });

  //delete memes from array
  function deleteMeme(event) {
    //save id of the meme div
    const memeId = Number(event.target.offsetParent.id)
    //call setter func and filter to remove the meme at index that matches meme id
    setCreatedMemes(prev => prev.filter((_, index) => index !== memeId))
  }

  //to save edited meme info, receive current state from meme.js
  function saveMeme(meme) {
    //map over memes array and if the ids match, keep the edited meme passed in rom meme.js
    setCreatedMemes(prev => prev.map(element => {
      if (element.id === meme.id) {
        return meme
      } else {
        //else keep meme array as it is
        return element
      }
    }));
  }
console.log(createdMemes)
  return (
    <main className="content-container">
      <div className="meme-form">
        <input
          name="topText"
          onChange={handleChange}
          placeholder="Top Text"
          value={memes.topText}
        ></input>
        <input
          name="bottomText"
          onChange={handleChange}
          placeholder="Bottom Text"
          value={memes.bottomText}
        ></input>
        <br></br>
        <div className="image-div">
          <img
            className="defaultMeme"
            src={memes.url}
            alt="current top memes">
          </img>
          <p className="topText">{memes.topText}</p>
          <p className="bottomText">{memes.bottomText}</p>
        </div>
        <button
          className="submitBtn"
          onClick={createMeme}
        >Submit</button>
        <button
          className="refreshBtn"
          onClick={changeMeme}
          >Refresh Meme Image</button>
      </div>
      {eachMeme}
    </main>
  );
}

export default Main

/* event.target.offsetParent.children[1].children[1].textcontent
  event.target.offsetParent.children[1].children[2]
*/