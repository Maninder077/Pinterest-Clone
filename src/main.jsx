import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
    <App />
    </Router>
  </StrictMode>,

)
