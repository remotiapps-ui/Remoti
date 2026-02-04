import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Support } from './components/Support';
import { AboutUs } from './components/AboutUs';
import { Careers } from './components/Careers';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col font-sans">
        <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/support" element={<Support />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/careers" element={<Careers />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;