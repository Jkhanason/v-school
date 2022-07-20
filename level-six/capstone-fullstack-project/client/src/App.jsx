import React from 'react'
import Auth from './components/Auth';
import Navbar from './components/Navbar';
import Public from './components/Public'
import {HackContext} from './context/HackProvider';
import './styles.css'

function App() {

  const {token, logout} = React.useContext(HackContext)

  return (
    <div className="App">
      {token &&
        <Navbar logout={logout}/>
      }
      <Auth />
      <Public/>
    </div>
  )
}

export default App
