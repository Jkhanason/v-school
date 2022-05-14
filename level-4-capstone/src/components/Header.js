import React from 'react';
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div className="header">
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/city'>City</Link>
      </nav>
    </div>
  );
}

export default Header;