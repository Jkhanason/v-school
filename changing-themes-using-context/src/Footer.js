import React from 'react';
import {ThemeContext} from './themeContext';

function Footer() {
  const {className} = React.useContext(ThemeContext);
  return (
    <footer className={className}>
      <h3>This is the footer</h3>
    </footer>
  )
}

export default Footer