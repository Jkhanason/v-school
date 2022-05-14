import React from 'react';
import About  from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import City from './components/City';
import {ThemeContextProvider} from './themeContext';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Header/>
        <ThemeContextProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/city' element={<City />} />
        </Routes>
        </ThemeContextProvider>
        <Footer/>
    </div>
  );
}

export default App;
