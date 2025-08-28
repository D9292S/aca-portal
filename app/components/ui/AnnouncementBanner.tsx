'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaBullhorn, FaInfoCircle, FaExclamationTriangle, FaCheckCircle } from 'react-icons/fa';

interface AnnouncementBannerProps {
  id?: string;
  type?: 'info' | 'warning' | 'success' | 'announcement';
  title: string;
  message: string;
  actionText?: string;
  actionUrl?: string;
  dismissible?: boolean;
  autoHide?: number; // Auto hide after X seconds
  priority?: 'high' | 'medium' | 'low';
}

const AnnouncementBanner: React.FC<AnnouncementBannerProps> = ({
  id = 'default-banner',
  type = 'info',
  title,
  message,
  actionText,
  actionUrl,
  dismissible = true,
  autoHide,
  priority = 'medium'
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);

  // Check if banner was previously dismissed
  useEffect(() => {
    const dismissed = localStorage.getItem(`banner-dismissed-${id}`);
    if (dismissed) {
      setIsDismissed(true);
      setIsVisible(false);
    }
  }, [id]);

  // Auto hide functionality
  useEffect(() => {
    if (autoHide && isVisible) {
      const timer = setTimeout(() => {
        handleDismiss();
      }, autoHide * 1000);

      return () => clearTimeout(timer);
    }
  }, [autoHide, isVisible]);

  const handleDismiss = () => {
    setIsVisible(false);
    if (dismissible) {
      localStorage.setItem(`banner-dismissed-${id}`, 'true');
      setIsDismissed(true);
    }
  };

  const handleAction = () => {
    if (actionUrl) {
      window.open(actionUrl, '_blank');
    }
  };

  const getTypeStyles = () => {
    switch (type) {
      case 'warning':
        return {
          bg: 'bg-gradient-to-r from-amber-500 to-orange-600',
          icon: FaExclamationTriangle,
          iconColor: 'text-white'
        };
      case 'success':
        return {
          bg: 'bg-gradient-to-r from-green-500 to-emerald-600',
          icon: FaCheckCircle,
          iconColor: 'text-white'
        };
      case 'announcement':
        return {
          bg: 'bg-gradient-to-r from-purple-500 to-indigo-600',
          icon: FaBullhorn,
          iconColor: 'text-white'
        };
      case 'info':
      default:
        return {
          bg: 'bg-gradient-to-r from-blue-500 to-cyan-600',
          icon: FaInfoCircle,
          iconColor: 'text-white'
        };
    }
  };

  const { bg, icon: IconComponent, iconColor } = getTypeStyles();

  const getPriorityZIndex = () => {
    switch (priority) {
      case 'high': return 'z-50';
      case 'medium': return 'z-40';
      case 'low': return 'z-30';
      default: return 'z-40';
    }
  };

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`${bg} ${getPriorityZIndex()} relative overflow-hidden`}
        >
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative container mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 flex-1">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex-shrink-0"
                >
                  <IconComponent className={`text-xl ${iconColor}`} />
                </motion.div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="flex flex-col sm:flex-row sm:items-center sm:space-x-4"
                  >
                    <div className="text-white">
                      <span className="font-semibold text-sm sm:text-base">
                        {title}
                      </span>
                      <span className="ml-2 text-sm opacity-90">
                        {message}
                      </span>
                    </div>
                    
                    {actionText && actionUrl && (
                      <motion.button
                        onClick={handleAction}
                        className="mt-2 sm:mt-0 bg-white/20 hover:bg-white/30 text-white px-4 py-1 rounded-full text-sm font-medium transition-colors duration-300 backdrop-blur-sm border border-white/20 hover:border-white/40"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {actionText}
                      </motion.button>
                    )}
                  </motion.div>
                </div>
              </div>

              {/* Dismiss Button */}
              {dismissible && (
                <motion.button
                  onClick={handleDismiss}
                  className="ml-4 text-white/80 hover:text-white p-1 hover:bg-white/20 rounded-full transition-colors duration-300"
                  initial={{ scale: 0, rotate: 90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTimes className="text-sm" />
                </motion.button>
              )}
            </div>
          </div>

          {/* Auto-hide progress bar */}
          {autoHide && (
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-white/30"
              initial={{ width: '100%' }}
              animate={{ width: '0%' }}
              transition={{ duration: autoHide, ease: 'linear' }}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnnouncementBanner;
