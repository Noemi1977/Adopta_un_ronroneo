import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'
import { FaSun, FaMoon } from 'react-icons/fa';


// Crear el root con createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderizar la aplicación
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);