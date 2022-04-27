import React from 'react';
import axios from 'axios';

function Main () {
  //create state for form inputs and img urls
  const [memes, setMemes] = React.useState({
    topText: '',
    bottomText: '',
    // eslint-disable-next-line
    url: "https:\/\/i.imgflip.com\/1g8my4.jpg"
  });

  //create state for memes array from api
  const [memeApi, setMemeApi] = React.useState([]);

  //make api call and update state
  React.useEffect(() => {
    axios.get("https://api.imgflip.com/get_memes")
    .then(response => setMemeApi(response.data.data.memes))
    .catch(error => console.log(error.data))
  }, []);

  //refresh btn changes memes
  function changeMeme(event) {
    event.preventDefault()
    const randomNum = Math.floor(Math.random() * memeApi.length);
    const nextUrl = memeApi[randomNum].url
    setMemes(prev => ({
      ...prev,
      url: nextUrl
    }))
  }

  //set state to update as input values change
  function handleChange(event) {
    const {name, value} = event.target;
    setMemes(prev => ({
      ...prev,
      [name]: value
    }));
  }

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
        <img
          className="defaultMeme"
          src={memes.url}
          alt="current top memes">
        </img>
        <br></br>
        <button
          className="submitBtn"
        >Submit</button>
        <button
          className="refreshBtn"
          onClick={changeMeme}
          >Refresh Meme Image</button>
      </div>
      <p className="topText">{memes.topText}</p>
      <p className="bottomText">{memes.bottomText}</p>
    </main>
  );
}

export default Main