import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  //strict mode renders EVERYTHING twice for testing purposes
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
