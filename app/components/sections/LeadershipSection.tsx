'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaEnvelope, FaPhone, FaLinkedin, FaTwitter } from 'react-icons/fa';

interface LeadershipMember {
  id: string;
  name: string;
  designation: string;
  department: string;
  image?: string;
  bio: string;
  message?: string;
  email?: string;
  phone?: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
  };
  qualifications: string[];
  achievements: string[];
}

interface LeadershipCardProps {
  member: LeadershipMember;
}

const LeadershipCard: React.FC<LeadershipCardProps> = ({ member }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      className="relative h-80 w-full perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className={`relative w-full h-full transition-transform duration-700 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front Side */}
        <div className="absolute inset-0 w-full h-full backface-hidden">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 h-full overflow-hidden">
            <div className="relative h-48 bg-gradient-to-br from-blue-600 to-red-600">
              {member.image && !imageError ? (
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-white text-3xl font-bold">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            
            <div className="p-6 relative -mt-8">
              <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-red-600">
                <h3 className="font-bold text-lg text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-red-600 font-semibold text-sm mb-1">
                  {member.designation}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.department}
                </p>
              </div>
              
              <div className="mt-4 text-center">
                <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  Hover for details
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 h-full p-6 overflow-y-auto">
            <div className="h-full flex flex-col">
              <div className="text-center mb-4">
                <h3 className="font-bold text-lg text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-red-600 font-semibold text-sm">
                  {member.designation}
                </p>
              </div>
              
              <div className="flex-grow space-y-4">
                {member.message && (
                  <div>
                    <h4 className="font-semibold text-sm text-gray-700 mb-2">Message</h4>
                    <p className="text-xs text-gray-600 italic">
                      "{member.message}"
                    </p>
                  </div>
                )}
                
                <div>
                  <h4 className="font-semibold text-sm text-gray-700 mb-2">Bio</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
                
                {member.qualifications.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-sm text-gray-700 mb-2">Qualifications</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {member.qualifications.map((qual, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-red-500 mr-2">•</span>
                          {qual}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex justify-center space-x-3">
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="text-gray-500 hover:text-red-600 transition-colors"
                      aria-label="Email"
                    >
                      <FaEnvelope size={16} />
                    </a>
                  )}
                  {member.phone && (
                    <a
                      href={`tel:${member.phone}`}
                      className="text-gray-500 hover:text-red-600 transition-colors"
                      aria-label="Phone"
                    >
                      <FaPhone size={16} />
                    </a>
                  )}
                  {member.socialLinks?.linkedin && (
                    <a
                      href={member.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-blue-600 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin size={16} />
                    </a>
                  )}
                  {member.socialLinks?.twitter && (
                    <a
                      href={member.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-blue-400 transition-colors"
                      aria-label="Twitter"
                    >
                      <FaTwitter size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

interface LeadershipSectionProps {
  title?: string;
  members: LeadershipMember[];
}

const LeadershipSection: React.FC<LeadershipSectionProps> = ({ 
  title = "Leadership", 
  members 
}) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the visionary leaders who guide KNIT towards excellence in education, 
            research, and innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <LeadershipCard member={member} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Sample data for demonstration
export const sampleLeadershipData: LeadershipMember[] = [
  {
    id: '1',
    name: 'Prof. Dr. A.K. Sharma',
    designation: 'Director',
    department: 'KNIT Sultanpur',
    // image: 'https://via.placeholder.com/300x300/1e3a5f/ffffff?text=Director',
    bio: 'Leading KNIT with over 25 years of experience in engineering education and research. Committed to excellence in technical education and innovation.',
    message: 'We strive to create global engineers who can contribute meaningfully to society.',
    email: 'director@knit.ac.in',
    phone: '+91-5362-240454',
    qualifications: [
      'Ph.D. in Computer Science',
      'M.Tech in Information Technology',
      'B.Tech in Computer Science'
    ],
    achievements: [
      'IEEE Fellow',
      '50+ Research Publications',
      'Best Teacher Award 2020'
    ],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/director-knit'
    }
  },
  {
    id: '2',
    name: 'Dr. B.K. Singh',
    designation: 'Registrar',
    department: 'Administration',
    // image: 'https://via.placeholder.com/300x300/c41e3a/ffffff?text=Registrar',
    bio: 'Experienced administrator with expertise in academic planning and institutional development.',
    qualifications: [
      'Ph.D. in Management',
      'MBA in Operations',
      'B.E. in Mechanical Engineering'
    ],
    achievements: [
      'Excellence in Administration Award',
      'Process Innovation Champion'
    ],
    email: 'registrar@knit.ac.in'
  },
  // Add more sample data as needed
];

export default LeadershipSection;
