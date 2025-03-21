import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './views/HomePage'
import Router from './Router'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router></Router>
  </StrictMode>,
)
