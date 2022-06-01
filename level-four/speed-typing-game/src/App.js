import React from 'react';

function App() {
  const [text, setText] = React.useState('');
  const [time, setTime] = React.useState(3);
  const [wordCount, setWordCount] = React.useState(0);
  const [gameHasStarted, setGameHasStarted] = React.useState(false);
  const textRef = React.useRef(null);

  //once game starts, count down time until 0
  React.useEffect(() => {
    if (gameHasStarted && time > 0) {
      setTimeout(() => {
        setTime(prev => prev - 1)
      }, 1000);
    } else {
      endGame()
    }
  }, [time, gameHasStarted])

  //sync textarea input with state
  function handleChange(e) {
    setText(e.target.value)
  }


  function startGame () {
    //remove disable to allow focus to take affect
    textRef.current.disabled = false;
    textRef.current.focus();
    setGameHasStarted(true);
    setText('')
  }

  function endGame() {
    //tally totaly words
    countWords(text)
    setGameHasStarted(false)
    //reset game time
    setTime(5)
  }
  //dump extra white spaces then filter for words and grab length
  function countWords(text) {
    const words = text.trim().split(' ');
    setWordCount(words.filter(word => word !== '').length);
  }

  return (
    <div className="container">
      <h1>How quickly can you type?</h1>
      <textarea
        onChange={handleChange}
        value={text}
        ref={textRef}
        disabled={!gameHasStarted}
      />
      <h2>Time remaining: <span style={{color: '#fff'}}>{time}</span></h2>
      <button
        onClick={startGame}
        disabled={gameHasStarted}
      >START</button>
      <h1>Word Count: <span style={{color: '#fff'}}>{wordCount}</span></h1>
    </div>
  );
}

export default App;
