import React from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

interface HeaderProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isMenuOpen, toggleMenu }) => {
  const navItems = ['Bots', 'Bolo English', 'About Us', 'Support', 'Careers'];
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (item: string) => {
    const lowerItem = item.toLowerCase().replace(' ', '-');
    
    // Handle Page Navigation
    if (['support', 'about-us', 'careers'].includes(lowerItem)) {
      navigate(`/${lowerItem}`);
      if (isMenuOpen) toggleMenu();
      return;
    }

    // Handle Home Page Sections
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to render Home component then scroll
      setTimeout(() => {
        const element = document.getElementById(lowerItem);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(lowerItem);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    
    if (isMenuOpen) toggleMenu();
  };

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={handleLogoClick}>
            <div className="w-8 h-8 bg-emerald-800 rounded-lg flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-800 to-emerald-600">
              Project Genie
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavigation(item)}
                className="text-gray-600 hover:text-emerald-800 font-medium transition-colors cursor-pointer bg-transparent border-none"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => window.open('https://wa.me/919000090000', '_blank')}
              className="bg-emerald-800 text-white px-5 py-2 rounded-full font-semibold hover:bg-emerald-900 transition-colors shadow-lg shadow-emerald-800/20"
            >
              Get Started
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-emerald-800 focus:outline-none"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavigation(item)}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald-800 hover:bg-emerald-50 rounded-md bg-transparent border-none"
              >
                {item}
              </button>
            ))}
            <div className="pt-4">
              <button 
                onClick={() => window.open('https://wa.me/919000090000', '_blank')}
                className="w-full bg-emerald-800 text-white px-5 py-3 rounded-lg font-semibold hover:bg-emerald-900 transition-colors"
              >
                Chat on WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};