import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Navbar from './components/Navbar.js'
import Auth from './components/Auth.js'
// import Profile from './components/Profile.js'
import {UserContext} from './context/UserProvider';
// import {UserProvider} from './context/UserProvider'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Auth />
      {/* <Routes>
        <Route path='/'
      </Routes> */}
    </div>
  );
}

export default App;
