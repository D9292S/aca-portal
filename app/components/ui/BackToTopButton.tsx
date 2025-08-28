'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronUp } from 'react-icons/fa';

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled up to 400 pixels
      if (window.pageYOffset > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Calculate scroll progress
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <motion.button
            onClick={scrollToTop}
            className="relative w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center group overflow-hidden"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Circular progress ring */}
            <svg 
              className="absolute inset-0 w-14 h-14 transform -rotate-90" 
              viewBox="0 0 56 56"
            >
              <circle
                cx="28"
                cy="28"
                r="26"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="2"
                fill="none"
              />
              <motion.circle
                cx="28"
                cy="28"
                r="26"
                stroke="white"
                strokeWidth="2"
                fill="none"
                strokeDasharray={163.36} // 2 * PI * 26
                initial={{ strokeDashoffset: 163.36 }}
                animate={{ 
                  strokeDashoffset: 163.36 - (163.36 * scrollProgress) / 100 
                }}
                transition={{ duration: 0.1 }}
                strokeLinecap="round"
              />
            </svg>
            
            {/* Arrow icon */}
            <motion.div
              initial={{ y: 2 }}
              animate={{ y: 0 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1,
                ease: "easeInOut"
              }}
              className="relative z-10"
            >
              <FaChevronUp className="text-lg" />
            </motion.div>
            
            {/* Hover effect background */}
            <div className="absolute inset-0 bg-blue-700 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 -z-10" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BackToTopButton;
