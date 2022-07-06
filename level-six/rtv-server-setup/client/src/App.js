import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Auth from './components/Auth.js';
import Profile from './components/Profile.js';
import Public from './components/Public.js';
import {UserContext} from './context/UserProvider';


function App() {
  const {token, logout} = React.useContext(UserContext)
  return (
    <div className="App">
      {/* pass logout func from context to navbar as a prop */}
      <Navbar logout = {logout}/>
      <Routes>
        {/* if a token exists (theyre a user) redirect from Auth page to Profile page */}
        <Route
          path='/'
          element= {token ? <Navigate to='/profile'/> : <Auth />}
        />
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/public' element={<Public />}></Route>
      </Routes>
    </div>
  )
}

export default App;
