import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import Friendlist from './Friendlist.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Friendlist />
  </React.StrictMode>
);
