import { useState } from 'react'


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import FAQ from './pages/FAQ'
import Gallery from './pages/Gallery'
import Events from './pages/Events'
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/events" element={<Events />} />
      </Routes>
      <Footer />
       </>
    </Router>

    
  );

}

export default App;
