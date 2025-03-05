import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import '../styles/Footer.css';
import logo from '../assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section company-info">
          <img src={logo} alt="ParkEasy" className="footer-logo" />
          <p className="company-description">
            Your trusted parking solution provider. Making parking easier and more convenient for everyone, 24/7.
          </p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Our Services</Link></li>
            <li><Link to="/pricing">Pricing Plans</Link></li>
            <li><Link to="/locations">Parking Locations</Link></li>
            <li><Link to="/blog">Blog & News</Link></li>
          </ul>
        </div>

        <div className="footer-section support">
          <h3>Support</h3>
          <ul>
            <li><Link to="/help">Help Center</Link></li>
            <li><Link to="/faq">FAQs</Link></li>
            <li><Link to="/terms">Terms of Service</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-section contact-info">
          <h3>Contact Info</h3>
          <div className="contact-details">
            <div className="contact-item">
              <MapPin size={20} />
              <p>123 Parking Street, City Name, Country</p>
            </div>
            <div className="contact-item">
              <Phone size={20} />
              <p>+1 234 567 8900</p>
            </div>
            <div className="contact-item">
              <Mail size={20} />
              <p>support@parkeasy.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {currentYear} ParkEasy. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/terms">Terms</Link>
            <Link to="/privacy">Privacy</Link>
            <Link to="/cookies">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
