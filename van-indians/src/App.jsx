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
    // <div className="min-h-screen w-full bg-gradient-to-t from-green-300 via-transparent to-orange-300">
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#FF9933] via-[#fffdf7] to-[#138808] z-0" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500 opacity-10 blur-3xl rounded-full transform -translate-x-1/2 -translate-y-1/2 z-0" />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Router>
          <>
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/events" element={<Events />} />
              </Routes>
            </main>
            <Footer />
          </>
        </Router>
      </div>
    </div>


  );

}

export default App;
