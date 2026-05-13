import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
 import './bootstrap/bootstrap.min.css';
import './bootstrap/bootstrap.bundle.min.js';
import './fontawome/all.min.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
       <App />
  </StrictMode>
)
