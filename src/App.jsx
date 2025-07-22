import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Blogs from './pages/Blogs';
import Gallery from './pages/Gallery';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router basename="/">
      <div className="flex flex-col min-h-screen relative z-0">
        <Navbar />
        
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/gallery" element={<Gallery />} />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />

        <img 
          src="./bgthree.jpg" 
          className="fixed top-0 left-0 w-[100vw] h-[100vh] z-[-1] opacity-[20%] dark:invert bg-cover object-cover" 
          alt="" 
        />
      </div>
    </Router>
  );
}

export default App;
