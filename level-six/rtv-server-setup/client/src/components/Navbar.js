import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/profile">Profile</Link>
      <Link to="/public">Public</Link>
    </div>
  )
}

export default Navbar