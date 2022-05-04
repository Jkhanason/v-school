import React from 'react';
import {ThemeContext} from './themeContext'

function Navbar() {
  const {className} = React.useContext(ThemeContext)
  console.log(className)
  return (
    <nav className={className}>
      <h4>Home</h4>
      <h4>About</h4>
      <h4>Contact Us</h4>
    </nav>
  )
}

export default Navbar