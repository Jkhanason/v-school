import React from 'react';
import Navbar from './Navbar';
import Main from './Main';
import Footer from './Footer';
import {ThemeContextProvider} from './themeContext';

function App() {
  return (
    <div className="app">
      <ThemeContextProvider>
        <Navbar />
        <Main />
        <Footer />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
