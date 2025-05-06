
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingBag, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-300 border-b",
        isScrolled ? "bg-white shadow-sm py-2" : "bg-white/95 py-4"
      )}
    >
      <div className="container-klin">
        <div className="flex items-center justify-between">
          {/* Mobile menu button */}
          <button 
            onClick={toggleMenu}
            className="lg:hidden text-klin-primary"
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Logo */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <Link to="/" className="flex items-center">
              <span className="text-2xl md:text-3xl font-bold tracking-tighter font-bricolage">KLIN</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 font-medium">
            <Link to="/categories/chemises" className="link-hover">Chemises</Link>
            <Link to="/categories/costumes" className="link-hover">Costumes</Link>
            <Link to="/categories/tee-shirts" className="link-hover">Tee-shirts</Link>
            <Link to="/categories/pulls-et-gilets" className="link-hover">Pulls & Gilets</Link>
            <Link to="/categories/pantalons" className="link-hover">Pantalons</Link>
            <Link to="/categories/shorts" className="link-hover">Shorts</Link>
            <Link to="/categories/accessoires" className="link-hover">Accessoires</Link>
          </nav>
          
          {/* Icons */}
          <div className="flex items-center space-x-4 ml-auto lg:ml-0">
            <Link to="/contact" className="text-klin-primary hover:text-klin-hover">
              <MessageSquare size={20} />
            </Link>
            <Link to="/panier" className="text-klin-primary hover:text-klin-hover">
              <ShoppingBag size={20} />
            </Link>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={cn(
        "fixed inset-0 bg-white z-40 pt-20 overflow-y-auto transition-transform duration-300 lg:hidden",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="container-klin py-8">
          <nav className="flex flex-col space-y-6">
            <Link to="/categories/chemises" className="text-lg font-medium" onClick={toggleMenu}>Chemises</Link>
            <Link to="/categories/costumes" className="text-lg font-medium" onClick={toggleMenu}>Costumes</Link>
            <Link to="/categories/tee-shirts" className="text-lg font-medium" onClick={toggleMenu}>Tee-shirts</Link>
            <Link to="/categories/pulls-et-gilets" className="text-lg font-medium" onClick={toggleMenu}>Pulls & Gilets</Link>
            <Link to="/categories/pantalons" className="text-lg font-medium" onClick={toggleMenu}>Pantalons</Link>
            <Link to="/categories/shorts" className="text-lg font-medium" onClick={toggleMenu}>Shorts</Link>
            <Link to="/categories/accessoires" className="text-lg font-medium" onClick={toggleMenu}>Accessoires</Link>
          </nav>
          
          <div className="mt-12 space-y-6">
            <Link to="/contact" className="block text-lg font-medium" onClick={toggleMenu}>Contact</Link>
            <Link to="/faq" className="block text-lg font-medium" onClick={toggleMenu}>FAQ</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
