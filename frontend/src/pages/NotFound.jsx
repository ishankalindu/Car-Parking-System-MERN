import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import '../styles/NotFound.css';

const NotFound = () => {
  const numberVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const textVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: {
        delay: 0.5,
        duration: 0.8
      }
    }
  };

  return (
    <div className="not-found">
      <div className="not-found-content">
        <motion.div 
          className="error-number"
          variants={numberVariants}
          initial="initial"
          animate="animate"
        >
          <span>4</span>
          <motion.div 
            className="zero"
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            0
          </motion.div>
          <span>4</span>
        </motion.div>

        <motion.div 
          className="error-text"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <h1>Page Not Found</h1>
          <p>The page you're looking for doesn't exist or has been moved.</p>
        </motion.div>

        <motion.div 
          className="action-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: { delay: 1 }
          }}
        >
          <Link to="/" className="home-button">
            <Home size={20} />
            <span>Go Home</span>
          </Link>
          <button onClick={() => window.history.back()} className="back-button">
            <ArrowLeft size={20} />
            <span>Go Back</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
