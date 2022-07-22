import React from 'react'
import Auth from './components/Auth';
import Navbar from './components/Navbar';
import Public from './components/Public';
import Profile from './components/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import {HackContext} from './context/HackProvider';
import {Routes, Route, Navigate} from 'react-router-dom';
import './styles.css'

function App() {

  const {token, logout} = React.useContext(HackContext)

  return (
    <div className="App">
      {/* only render if token is exists */}
      {token &&
        <Navbar logout={logout}/>
      }
      <Routes>
        <Route path='/' element={token ? <Navigate to='/profile'/> : <Auth/>}/>
        <Route path='/profile' element={
          <ProtectedRoute token={token} redirectTo='/'>
            <Profile/>
          </ProtectedRoute>}/>
        <Route path='public' element={
          <ProtectedRoute token={token} redirectTo='/'>
            <Public />
          </ProtectedRoute>}/>
      </Routes>

    </div>
  )
}

export default App
