'use client';

import Link from 'next/link';
import HeroSection from './components/sections/HeroSection';
import LeadershipSection, { sampleLeadershipData } from './components/sections/LeadershipSection';
import NewsEventsSection from './components/sections/NewsEventsSection';
import { FaGraduationCap, FaUsers, FaFlask, FaBriefcase, FaBook, FaUserGraduate, FaAward, FaGlobe } from 'react-icons/fa';
import Button from './components/ui/Button';

// Sample data for News & Events
const sampleNewsItems = [
  {
    id: '1',
    title: 'QS World University Rankings 2026: KNIT Features in List of Top 125',
    summary: 'KNIT Sultanpur has been ranked among the top 125 institutions globally in the QS World University Rankings 2026, emerging as the No. 1 educational institute in Uttar Pradesh.',
    content: 'Full content here...',
    category: 'achievement' as const,
    date: '2025-08-15',
    // image: 'https://via.placeholder.com/400x300/1e3a5f/ffffff?text=KNIT+Ranking',
    author: 'KNIT Media Team',
    tags: ['ranking', 'achievement', 'global'],
    featured: true
  },
  {
    id: '2',
    title: 'Fifty Sixth Convocation Ceremony',
    summary: 'The annual convocation ceremony will be held on Saturday, 2 August 2025, celebrating the achievements of graduating students.',
    content: 'Full content here...',
    category: 'announcement' as const,
    date: '2025-08-02',
    // image: 'https://via.placeholder.com/400x300/c41e3a/ffffff?text=Convocation',
    author: 'Academic Office',
    tags: ['convocation', 'graduation', 'ceremony'],
    featured: true
  },
  {
    id: '3',
    title: 'New Research Center for AI and Machine Learning Inaugurated',
    summary: 'KNIT inaugurates a state-of-the-art research center focused on artificial intelligence and machine learning technologies.',
    content: 'Full content here...',
    category: 'news' as const,
    date: '2025-08-10',
    // image: 'https://via.placeholder.com/400x300/28a745/ffffff?text=AI+Research',
    author: 'Research Department',
    tags: ['research', 'AI', 'technology']
  }
];

const sampleEvents = [
  {
    id: '1',
    title: 'Annual Technical Symposium - TechFest 2025',
    description: 'A 3-day technical symposium featuring competitions, workshops, and keynote sessions by industry experts.',
    startDate: '2025-09-15T09:00:00',
    endDate: '2025-09-17T18:00:00',
    location: 'KNIT Campus, Sultanpur',
    category: 'technical' as const,
    // image: 'https://via.placeholder.com/400x300/ff6b35/ffffff?text=TechFest+2025',
    registrationUrl: '/events/techfest-2025',
    featured: true
  },
  {
    id: '2',
    title: 'Industry-Academia Collaboration Workshop',
    description: 'Workshop on strengthening partnerships between industry and academia for better placement opportunities.',
    startDate: '2025-09-10T10:00:00',
    location: 'Conference Hall, KNIT',
    category: 'workshop' as const,
    registrationUrl: '/events/industry-workshop'
  },
  {
    id: '3',
    title: 'Cultural Evening - Harmony 2025',
    description: 'An evening of cultural performances showcasing the diverse talents of KNIT students.',
    startDate: '2025-09-20T18:00:00',
    location: 'Main Auditorium',
    category: 'cultural' as const,
    // image: 'https://via.placeholder.com/400x300/e91e63/ffffff?text=Harmony+2025'
  }
];

export default function Home() {
  const handleVirtualTour = () => {
    // Implement virtual tour functionality
    console.log('Opening virtual tour...');
  };

  const handleApplyNow = () => {
    // Navigate to admissions page
    window.location.href = '/admissions';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Section */}
      <HeroSection onVirtualTour={handleVirtualTour} onApplyNow={handleApplyNow} />

      {/* Key Features Grid - as per REDESIGN_PLAN.md */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Research */}
            <Link href="/research" className="group">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-8 rounded-xl text-white text-center transform group-hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
                <FaFlask className="mx-auto mb-4 text-4xl" />
                <h3 className="text-xl font-bold mb-2">RESEARCH</h3>
                <p className="text-sm opacity-90">Innovation & Discovery</p>
              </div>
            </Link>

            {/* Startups */}
            <Link href="/startups" className="group">
              <div className="bg-gradient-to-br from-green-500 to-green-700 p-8 rounded-xl text-white text-center transform group-hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
                <FaBriefcase className="mx-auto mb-4 text-4xl" />
                <h3 className="text-xl font-bold mb-2">STARTUPS</h3>
                <p className="text-sm opacity-90">Entrepreneurship Hub</p>
              </div>
            </Link>

            {/* News */}
            <Link href="/news" className="group">
              <div className="bg-gradient-to-br from-red-500 to-red-700 p-8 rounded-xl text-white text-center transform group-hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
                <FaGlobe className="mx-auto mb-4 text-4xl" />
                <h3 className="text-xl font-bold mb-2">NEWS</h3>
                <p className="text-sm opacity-90">Latest Updates</p>
              </div>
            </Link>

            {/* Achievements */}
            <Link href="/achievements" className="group">
              <div className="bg-gradient-to-br from-purple-500 to-purple-700 p-8 rounded-xl text-white text-center transform group-hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
                <FaAward className="mx-auto mb-4 text-4xl" />
                <h3 className="text-xl font-bold mb-2">ACHIEVEMENTS</h3>
                <p className="text-sm opacity-90">Excellence Record</p>
              </div>
            </Link>

            {/* Academics */}
            <Link href="/academics" className="group">
              <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 p-8 rounded-xl text-white text-center transform group-hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
                <FaBook className="mx-auto mb-4 text-4xl" />
                <h3 className="text-xl font-bold mb-2">ACADEMICS</h3>
                <p className="text-sm opacity-90">Programs & Courses</p>
              </div>
            </Link>

            {/* Admissions */}
            <Link href="/admissions" className="group">
              <div className="bg-gradient-to-br from-orange-500 to-orange-700 p-8 rounded-xl text-white text-center transform group-hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
                <FaGraduationCap className="mx-auto mb-4 text-4xl" />
                <h3 className="text-xl font-bold mb-2">ADMISSIONS</h3>
                <p className="text-sm opacity-90">Join KNIT</p>
              </div>
            </Link>

            {/* Placements */}
            <Link href="/placements" className="group">
              <div className="bg-gradient-to-br from-teal-500 to-teal-700 p-8 rounded-xl text-white text-center transform group-hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
                <FaBriefcase className="mx-auto mb-4 text-4xl" />
                <h3 className="text-xl font-bold mb-2">PLACEMENTS</h3>
                <p className="text-sm opacity-90">Career Success</p>
              </div>
            </Link>

            {/* Alumni */}
            <Link href="/alumni" className="group">
              <div className="bg-gradient-to-br from-pink-500 to-pink-700 p-8 rounded-xl text-white text-center transform group-hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
                <FaUserGraduate className="mx-auto mb-4 text-4xl" />
                <h3 className="text-xl font-bold mb-2">ALUMNI</h3>
                <p className="text-sm opacity-90">Success Stories</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Leadership Showcase */}
      <LeadershipSection members={sampleLeadershipData} />

      {/* News & Events Section */}
      <NewsEventsSection 
        newsItems={sampleNewsItems} 
        events={sampleEvents} 
        maxItems={6}
      />

      {/* Quick Access Portal */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Quick Access Portal</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Access various portals and services with ease
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { title: 'Student Login', href: '/student-portal', icon: '👨‍🎓' },
              { title: 'Faculty Portal', href: '/faculty-portal', icon: '👨‍🏫' },
              { title: 'Alumni Network', href: '/alumni-portal', icon: '🎓' },
              { title: 'Parent Portal', href: '/parent-portal', icon: '👥' },
              { title: 'Recruiter Zone', href: '/recruiter-zone', icon: '🏢' },
              { title: 'Library', href: '/library', icon: '📚' }
            ].map((portal) => (
              <Link
                key={portal.title}
                href={portal.href}
                className="group text-center p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-4xl mb-3">{portal.icon}</div>
                <h3 className="font-semibold text-sm group-hover:text-red-400 transition-colors">
                  {portal.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Join KNIT?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start your journey towards excellence in engineering education. 
            Apply now for the upcoming academic session.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="xl" 
              variant="gold" 
              href="/admissions"
              className="shadow-2xl"
            >
              Apply for Admission
            </Button>
            <Button 
              size="xl" 
              variant="outline" 
              href="/virtual-tour"
              className="bg-transparent border-white text-white hover:bg-white hover:text-red-600"
            >
              Take Virtual Tour
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
