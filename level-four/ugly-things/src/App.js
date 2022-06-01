import React from 'react';
import Form from './Form';
import List from './List';
import {ThemeContextProvider} from './themeContext';



function App() {
  return (
    <div className="app">
      <ThemeContextProvider>
        <Form/>
        <List/>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
