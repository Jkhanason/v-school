import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import {HackProvider} from './context/HackProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <HackProvider>
        <App />
      </HackProvider>
    </BrowserRouter>
  </React.StrictMode>
)
