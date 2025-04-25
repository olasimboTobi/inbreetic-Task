import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import navLogo from '../assets/navLogo/navLogo.svg'

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0A2640] shadow-lg' : 'bg-[#0A2640]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <span className="text-[#69E6A6] mr-1">
            <img src={navLogo} alt="Second icon" className="w-6 h-6" />
            </span>
            <span className="text-white text-2xl font-bold">Boldo</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#product" className="text-white hover:text-[#69E6A6] transition-colors duration-300">Product</a>
            <a href="#services" className="text-white hover:text-[#69E6A6] transition-colors duration-300">Services</a>
            <a href="#about" className="text-white hover:text-[#69E6A6] transition-colors duration-300">About</a>
            <button className="bg-white text-[#0A2640] px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300">
              Log In
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0A2640] px-4 pt-2 pb-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            <a href="#product" className="text-white hover:text-[#69E6A6] transition-colors duration-300 py-2">Product</a>
            <a href="#services" className="text-white hover:text-[#69E6A6] transition-colors duration-300 py-2">Services</a>
            <a href="#about" className="text-white hover:text-[#69E6A6] transition-colors duration-300 py-2">About</a>
            <button className="bg-white text-[#0A2640] px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300 w-full">
              Log In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;