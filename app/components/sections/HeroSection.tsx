'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaGraduationCap, FaUsers, FaAward, FaBookOpen } from 'react-icons/fa';
import Button from '../ui/Button';

interface StatisticProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
}

const AnimatedStatistic: React.FC<StatisticProps> = ({ icon, value, label, suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepValue = value / steps;
    const stepDuration = duration / steps;

    let currentCount = 0;
    const timer = setInterval(() => {
      currentCount += stepValue;
      if (currentCount >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(currentCount));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
    >
      <div className="text-3xl mb-2 text-white">
        {icon}
      </div>
      <div className="text-4xl font-bold text-white mb-1">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-white/80 text-sm font-medium">
        {label}
      </div>
    </motion.div>
  );
};

interface HeroSectionProps {
  onVirtualTour?: () => void;
  onApplyNow?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onVirtualTour, onApplyNow }) => {
  const [currentAnnouncementIndex, setCurrentAnnouncementIndex] = useState(0);

  const announcements = [
    "QS World University Rankings 2026: KNIT Features in List of Top 125 World Institutions",
    "Fifty Sixth Convocation - Saturday, 2 August 2025",
    "KNIT Emerges as No. 1 Educational Institute in Uttar Pradesh",
    "New Academic Session 2025-26 Admissions Open Now",
  ];

  const statistics = [
    {
      icon: <FaUsers />,
      value: 5000,
      label: "Students",
      suffix: "+"
    },
    {
      icon: <FaGraduationCap />,
      value: 95,
      label: "Placement Rate",
      suffix: "%"
    },
    {
      icon: <FaBookOpen />,
      value: 12,
      label: "Departments"
    },
    {
      icon: <FaAward />,
      value: 50,
      label: "Years of Excellence",
      suffix: "+"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAnnouncementIndex((prev) => 
        prev === announcements.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [announcements.length]);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0">
        {/* Replace with actual video when available */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-blue-900 to-red-900 bg-cover bg-center bg-no-repeat opacity-90"
        >
          {/* Animated overlay patterns */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute top-20 left-20 w-32 h-32 border-2 border-white/20 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute bottom-20 right-20 w-24 h-24 border-2 border-gold/30 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4 z-10">
        {/* Announcement Ticker */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 w-full max-w-4xl"
        >
          <div className="bg-red-600/90 backdrop-blur-sm rounded-lg px-6 py-3 shadow-lg">
            <div className="flex items-center justify-center">
              <div className="bg-white text-red-600 px-2 py-1 rounded-md text-xs font-bold mr-3">
                NEWS
              </div>
              <motion.p
                key={currentAnnouncementIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="text-white font-medium text-sm md:text-base"
              >
                {announcements[currentAnnouncementIndex]}
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-5xl mx-auto mb-12"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Excellence in
            <motion.span
              className="block text-red-400"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
            >
              Engineering Education
            </motion.span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-xl md:text-2xl text-white/90 mb-2 font-light"
          >
            कमला नेहरू प्रौद्योगिकी संस्थान, सुल्तानपुर
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            Pioneering innovation and nurturing future engineers since 1976. 
            Join us in our journey of academic excellence and technological advancement.
          </motion.p>
        </motion.div>

        {/* Call-to-Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <Button
            size="xl"
            variant="primary"
            onClick={onApplyNow}
            className="shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
          >
            Apply Now
          </Button>
          
          <Button
            size="xl"
            variant="outline"
            onClick={onVirtualTour}
            icon={<FaPlay />}
            className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-gray-900 shadow-2xl"
          >
            Virtual Campus Tour
          </Button>
        </motion.div>

        {/* Statistics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl"
        >
          {statistics.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 + index * 0.1 }}
            >
              <AnimatedStatistic
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
                suffix={stat.suffix}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-1 h-16 bg-gradient-to-b from-white/60 to-transparent rounded-full" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
