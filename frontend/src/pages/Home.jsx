import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import { motion } from 'framer-motion';
const Home = () => {
  return (
    <div className="home-container">
        <motion.div initial={{ opacity: 0 }}  whileInView={{opacity: 1}} >
            <div className="hero-section">
                <div className="hero-content">
                <h1>City Park Pro</h1>
                <p>Find and reserve your perfect parking spot in seconds</p>
                <Link to="/parking-spots" className="cta-button">Find Parking</Link>
                </div>
            </div>
        </motion.div>
      <div className="features-section">
        <h2>Why Choose Us</h2>
        <div className="features-grid">
          <div className="feature-card">
            <i className="fas fa-clock"></i>
            <h3>24/7 Availability</h3>
            <p>Access parking spots anytime, anywhere</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-shield-alt"></i>
            <h3>Secure Parking</h3>
            <p>CCTV monitored facilities for your vehicle's safety</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-money-bill-wave"></i>
            <h3>Best Rates</h3>
            <p>Competitive pricing with flexible payment options</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-map-marked-alt"></i>
            <h3>Easy Location</h3>
            <p>GPS-guided directions to your parking spot</p>
          </div>
        </div>
      </div>

      <div className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Search Location</h3>
            <p>Enter your destination to find nearby parking spots</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Select & Book</h3>
            <p>Choose your preferred spot and book instantly</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Park & Go</h3>
            <p>Follow directions and park hassle-free</p>
          </div>
        </div>
      </div>

      <div className="cta-section">
        <h2>Ready to Get Started?</h2>
        <p>Join thousands of satisfied customers who trust our parking solutions</p>
        <div className="cta-buttons">
          <Link to="/register" className="register-button">Sign Up Now</Link>
          <Link to="/login" className="login-button">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
