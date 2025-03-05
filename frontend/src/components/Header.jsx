import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { User, LogOut, ChevronDown, Menu, X } from 'lucide-react';
import '../styles/Header.css';
import logo from '../assets/logo.png';
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo">
          <motion.img 
            src={logo} 
            alt="ParkEasy" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </Link>

        <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <Link to="/">Home</Link>
          <Link to="/parking-spots">Find Parking</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="header-right">
          {!isLoggedIn ? (
            <motion.button
              className="login-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/login')}
            >
              Login
            </motion.button>
          ) : (
            <div className="user-menu">
              <motion.div
                className="user-trigger"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                whileHover={{ scale: 1.05 }}
              >
                <span className="user-name">John Doe</span>
                <ChevronDown size={20} />
              </motion.div>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    className="dropdown-menu"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link to="/profile" className="dropdown-item">
                      <User size={16} />
                      <span>Profile</span>
                    </Link>
                    <button onClick={handleLogout} className="dropdown-item">
                      <LogOut size={16} />
                      <span>Logout</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}

          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
