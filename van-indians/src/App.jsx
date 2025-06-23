import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import home from './pages/home'
import faq from './pages/FAQ'
import gallery from './pages/Gallery'
import events from './pages/Events'

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<home />} />
        <Route path="/events" element={<events />} />
        <Route path="/faq" element={<faq />} />
        <Route path="/gallery" element={<gallery />} />
      </Routes>
    </Router>
  );
  
}

export default App
