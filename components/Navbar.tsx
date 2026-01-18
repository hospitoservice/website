
import React, { useState, useEffect } from 'react';
import logo from '../asset/hospitonetLogoPng.png';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Sign Up', href: '#signup' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="HospitoNet Logo" 
              className="h-14 w-auto"
            />
            <span className="font-display font-bold text-2xl tracking-tight text-slate-900">
              HOSPITO<span className="text-primary">NET</span></span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors">
                {link.name}
              </a>
            ))}
            <a href="#contact" className="px-6 py-2.5 bg-primary hover:bg-secondary text-white rounded-full font-bold text-sm shadow-lg shadow-primary/20 transition-all">
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-icons-round text-3xl">{isMobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 absolute top-full left-0 w-full p-4 flex flex-col space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lg font-medium text-slate-700"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="w-full text-center px-6 py-3 bg-primary text-white rounded-lg font-bold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
