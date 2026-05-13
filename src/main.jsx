import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
 import './Bootstrap/bootstrap.min.css';
 import './Bootstrap/bootstrap.bundle.min.js';
 import './fontawome/all.min.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
       <App />
  </StrictMode>
)
