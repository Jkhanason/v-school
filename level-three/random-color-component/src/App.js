import axios from 'axios'
import React from 'react';

function App() {

  const [color, setColor] = React.useState('f6f6f6')

  React.useEffect(() => {
    axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
      .then(response => setColor(response.data.colors[0].hex))
      .catch(error => console.log(error.data))
  }, [])

  return (
    <div style={{backgroundColor: '#' + color}} className="color-container"> </div>
  )
}

export default App;
