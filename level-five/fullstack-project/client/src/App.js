import React from 'react';
import axios from 'axios';
import Header from './components/Header.js';
import ProductDisplay from './components/ProductDisplay.js';
import Form from './components/Form.js';
import {Routes, Route} from 'react-router-dom';

function App() {
  //create state for allProducts
  const [allProducts, setAllProducts] = React.useState([]);
  const [editMainForm, setEditMainForm] = React.useState(true); //come back to this

  function getallProducts() {
    axios.get('/grocery')
    .then(res => setAllProducts(res.data))
    .catch(err => console.log(err.data))
  }

  React.useEffect(() => {
    getallProducts()
  }, []);

  function updateCount(id, count) {
    axios.put(`/grocery/order/${id}`, {count})
      .then(res => setAllProducts(prev => prev.map(item => item._id !== id ? item : res.data)))
      .catch(err => console.log(err.data))
  }

  function addNewItem(newItem) {
    axios.post(`/grocery/${newItem.department}`, newItem)
      .then(res => setAllProducts(prev => [...prev, res.data]))
      .catch(err => console.log(err.data))
  }

  function editItems(editedItem, id){
    axios.put(`/grocery/${id}`, editedItem)
      .then(res =>setAllProducts(prev => prev.map(item => item._id === id ? res.data : item)))
      .catch(err => console.log(err.data))
  }

  const groceryProducts = allProducts.filter(item => item.department === '62a0ad1e75dd0911590ed6ed');
  const dairyProducts = allProducts.filter(item => item.department === '62a0ad3175dd0911590ed6ef');
  const produceProducts = allProducts.filter(item => item.department === '62a0ad1575dd0911590ed6eb');

  const eachItem = allProducts.map((item, index) => {
    return (
      <ProductDisplay
        key={item._id}
        item={item}
        index={index+= 1}
        updateCount={updateCount}
        editItems={editItems}
        />
    )
  });

  const groceryItems = groceryProducts.map((item, index) => {
    return (
      <ProductDisplay
        key={item._id}
        item={item}
        index={index+= 1}
        updateCount={updateCount}
        editItems={editItems}
        />
    )
  });

  const dairyItems = dairyProducts.map((item, index) => {
    return (
      <ProductDisplay
        key={item._id}
        item={item}
        index={index+= 1}
        updateCount={updateCount}
        editItems={editItems}
        />
    )
  });

    const produceItems = produceProducts.map((item, index) => {
      return (
        <ProductDisplay
          key={item._id}
          item={item}
          index={index+= 1}
          updateCount={updateCount}
          editItems={editItems}
          />
      )
  });

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={eachItem} />
        <Route path='/grocery' element={groceryItems} />
        <Route path='/dairy' element={dairyItems} />
        <Route path='/produce' element={produceItems} />
      </Routes>
      {editMainForm &&<Form addNewItem={addNewItem}/>}
    </div>
  );
}

export default App;
