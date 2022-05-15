import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link> | {' '}
        <Link to="/about">About</Link> | {' '}
        <Link to="/services">Services</Link>
      </nav>
    </header>
  )
}
export default Nav