'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaFlask, 
  FaRocket, 
  FaNewspaper, 
  FaTrophy, 
  FaGraduationCap, 
  FaUserGraduate, 
  FaBriefcase, 
  FaUsers 
} from 'react-icons/fa';
import { Card } from '../ui/Card';
import { Skeleton } from '../ui/Skeleton';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  href: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  description, 
  color, 
  href, 
  index 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -6, scale: 1.03 }}
      className="h-full"
    >
      <div className="h-full group cursor-pointer relative overflow-hidden rounded-xl">
        {/* Glassmorphism background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/30 to-gray-900/40 backdrop-blur-md border border-white/10 rounded-xl shadow-xl group-hover:shadow-2xl transition-all duration-300">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/5 group-hover:from-blue-500/10 group-hover:to-purple-600/10 transition-all duration-300" />
        </div>
        
        <div className="relative p-6 h-full flex flex-col items-center text-center min-h-[280px]">
          <motion.div
            className={`text-4xl mb-4 ${color} group-hover:scale-110 transition-transform duration-300 drop-shadow-lg`}
            whileHover={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 0.5 }}
          >
            {icon}
          </motion.div>
          
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
            {title}
          </h3>
          
          <p className="text-gray-300 text-sm leading-relaxed flex-grow line-clamp-3">
            {description}
          </p>
          
          <motion.div
            className="mt-4 text-blue-400 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
            initial={{ x: -10 }}
            animate={{ x: 0 }}
          >
            Learn More →
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const KeyFeaturesSection: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: <FaFlask />,
      title: "Research Excellence",
      description: "Cutting-edge research facilities and innovative projects driving technological advancement and scientific discovery.",
      color: "text-purple-600",
      href: "/research"
    },
    {
      icon: <FaRocket />,
      title: "Innovation & Startups",
      description: "Entrepreneurship development programs fostering next-generation startups and innovative business solutions.",
      color: "text-orange-600",
      href: "/innovation"
    },
    {
      icon: <FaNewspaper />,
      title: "News & Updates",
      description: "Stay updated with the latest happenings, achievements, and announcements from KNIT community.",
      color: "text-green-600",
      href: "/news"
    },
    {
      icon: <FaTrophy />,
      title: "Achievements",
      description: "Celebrating excellence in academics, research, sports, and extracurricular activities of our students and faculty.",
      color: "text-yellow-600",
      href: "/achievements"
    },
    {
      icon: <FaGraduationCap />,
      title: "Academics",
      description: "Comprehensive academic programs with modern curriculum and industry-aligned learning methodologies.",
      color: "text-blue-600",
      href: "/academics"
    },
    {
      icon: <FaUserGraduate />,
      title: "Admissions",
      description: "Join KNIT family through our transparent and merit-based admission process across various programs.",
      color: "text-indigo-600",
      href: "/admissions"
    },
    {
      icon: <FaBriefcase />,
      title: "Placements",
      description: "Industry partnerships and placement assistance ensuring bright career opportunities for our graduates.",
      color: "text-red-600",
      href: "/placements"
    },
    {
      icon: <FaUsers />,
      title: "Alumni Network",
      description: "Strong alumni network spanning across global industries and contributing to societal development.",
      color: "text-teal-600",
      href: "/alumni"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          {isLoading ? (
            <div className="space-y-4">
              <Skeleton width="300px" height="48px" className="mx-auto" />
              <Skeleton width="600px" height="24px" className="mx-auto" />
              <Skeleton width="400px" height="24px" className="mx-auto" />
            </div>
          ) : (
            <>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Explore KNIT
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Discover the various facets of excellence that make Kamla Nehru Institute of Technology 
                a premier institution for engineering education and research.
              </p>
            </>
          )}
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {isLoading ? (
            // Loading skeletons
            Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <Skeleton variant="circular" width="60px" height="60px" className="mx-auto mb-6" />
                <Skeleton width="120px" height="28px" className="mx-auto mb-4" />
                <Skeleton width="100%" height="20px" className="mb-2" />
                <Skeleton width="80%" height="20px" className="mx-auto mb-2" />
                <Skeleton width="60%" height="20px" className="mx-auto" />
              </div>
            ))
          ) : (
            // Actual content
            features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                {...feature}
                index={index}
              />
            ))
          )}
        </div>

        {/* Bottom CTA */}
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-16"
          >
            <p className="text-lg text-gray-600 mb-6">
              Ready to be part of our legacy?
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Join KNIT Today
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default KeyFeaturesSection;
