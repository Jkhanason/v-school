import React from 'react';
import Home from './components/Home';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';

import {Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/products'>Products</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/:productId' element={<ProductDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;