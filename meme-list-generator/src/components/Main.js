import React from 'react';
import axios from 'axios';

function Main () {
  //create state for form inputs and img urls
  const [memes, setMemes] = React.useState({
    topText: '',
    bottomText: '',
    // eslint-disable-next-line
    url: "https://i.imgflip.com/21uy0f.jpg"
  });

  //create state for memes array from api
  const [memeApi, setMemeApi] = React.useState([]);

  //make api call and update state
  React.useEffect(() => {
    axios.get("https://api.imgflip.com/get_memes")
    .then(response => setMemeApi(response.data.data.memes))
    .catch(error => console.log(error.data))
    console.count("rendered")
  }, []);

  //console.log('rendered')

  //refresh btn changes memes
  function changeMeme(event) {
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

  //set state to store created memes on submit
  const [createdMemes, setCreatedMemes] = React.useState([]);
  function createMeme(event) {
    event.preventDefault()
    setCreatedMemes(prev => ([
        ...prev, memes
    ]))
  }

  //map over created memes and render each
  let count = 1;
  const eachMeme = createdMemes.map((current, index) => {
    return (
      <div
        key={index}
        id={index}
        className="newMemes">
        <h3 className="newMemeTitle">Meme #{count++}</h3>
        <div className="image-div">
          <img
            className="newMemeImg"
            src={current.url}
            alt="current top memes"
          ></img>
          <p className="topText">{current.topText}</p>
          <p className="bottomText ">{current.bottomText}</p>
        </div>
        <div className="newMemesBtn">
          <button className="editBtn">Edit</button>
          <button
            className="deleteBtn"
            onClick={deleteMeme}
            >Delete</button>
        </div>
      </div>
    )
  });

  //delete memes
  function deleteMeme(event) {
    //save id of the meme div
    const memeId = Number(event.target.offsetParent.id)
    //call setter func and filter to remove the meme at index that matches meme id
    setCreatedMemes(prev => prev.filter((_, index) => index !== memeId))
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