import React from 'react'

function Header () {
  return (
    <header className="header-container">
      <h1>Design Your Own Meme!</h1>
      <nav>
      {/* eslint-disable-next-line */}
        <a href="#">About Us</a>
      {/* eslint-disable-next-line */}
        <a href="#">Contact Us</a>
      {/* eslint-disable-next-line */}
        <a href="#">Requests</a>
      </nav>
    </header>

  );
}

export default Header