import Link from 'next/link';
import Image from 'next/image';
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
    image: '/api/placeholder/400/300',
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
    image: '/api/placeholder/400/300',
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
    image: '/api/placeholder/400/300',
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
    image: '/api/placeholder/400/300',
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
    image: '/api/placeholder/400/300'
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
        {/* Background Image Container */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"%3E%3Crect fill="%23e8f5e9" width="1200" height="600"/%3E%3Cpath fill="%23c8e6c9" d="M0 300L50 325L100 300L150 275L200 300L250 325L300 300L350 275L400 300L450 325L500 300L550 275L600 300L650 325L700 300L750 275L800 300L850 325L900 300L950 275L1000 300L1050 325L1100 300L1150 275L1200 300V600H0V300Z"/%3E%3C/svg%3E')`
          }}
        >
          {/* Overlay for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>
        </div>
        
        {/* Content Container */}
        <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-white mb-4">
              <div className="text-lg md:text-xl mb-2 font-light tracking-wider">
                FIFTY SIXTH CONVOCATION
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>
                पदवी दीक्षांत समारोह
              </h1>
              <div className="text-2xl md:text-3xl font-semibold mb-2">
                शनिवार, 2 अगस्त 2025
              </div>
              <div className="text-lg md:text-xl">
                Saturday | 2 August 2025
              </div>
            </div>
            
            <div className="mt-8">
              <div className="bg-white/90 backdrop-blur-sm inline-block rounded-lg px-8 py-4 shadow-lg">
                <h2 className="text-2xl md:text-3xl font-bold text-red-700 mb-2">
                  QS World University Rankings 2026: KNIT Features in List of Top 125
                </h2>
                <p className="text-lg text-gray-800">
                  World Institutions; Emerges as No. 1 Educational Institute in Uttar Pradesh
                </p>
              </div>
            </div>
          </div>
          
          {/* CHIEF GUEST Info */}
          <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-sm rounded-lg px-6 py-3 shadow-lg hidden md:block">
            <div className="text-sm font-semibold text-gray-700 mb-1">CHIEF GUEST</div>
            <div className="text-lg font-bold text-gray-900">Hon'ble Governor of Uttar Pradesh</div>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="-mt-20 relative z-10 pb-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 max-w-6xl mx-auto">
            {/* Research Card */}
            <Link href="/research" className="group">
              <div className="bg-gray-100 h-48 flex flex-col items-center justify-center hover:bg-gray-200 transition-all duration-300 border-r border-gray-300">
                <div className="text-center px-6">
                  <div className="text-sm font-semibold text-gray-700 mb-3">RESEARCH</div>
                  <svg className="w-16 h-16 mx-auto text-gray-700 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Startups Card */}
            <Link href="/startups" className="group">
              <div className="bg-red-700 h-48 flex flex-col items-center justify-center hover:bg-red-800 transition-all duration-300 border-r border-red-800">
                <div className="text-center px-6">
                  <div className="text-sm font-semibold text-white mb-3">STARTUPS</div>
                  <svg className="w-16 h-16 mx-auto text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.5 2c-5.288 0-9.649 3.914-10.377 9H2l2.646 2.646L7.293 11H4.123c.71-4.444 4.512-7.5 8.377-7.5 4.687 0 8.5 3.813 8.5 8.5s-3.813 8.5-8.5 8.5c-3.526 0-6.553-2.159-7.841-5.22l-1.928.718C4.277 19.652 8.576 22 13.5 22c5.799 0 10.5-4.701 10.5-10.5S19.299 2 13.5 2zm-.5 6v6l4.5 2.669.75-1.269-3.75-2.225V8h-1.5z"/>
                  </svg>
                </div>
              </div>
            </Link>

            {/* News Card */}
            <Link href="/news" className="group">
              <div className="bg-gray-100 h-48 flex flex-col items-center justify-center hover:bg-gray-200 transition-all duration-300 border-r border-gray-300">
                <div className="text-center px-6">
                  <div className="text-sm font-semibold text-gray-700 mb-3">NEWS</div>
                  <svg className="w-16 h-16 mx-auto text-gray-700 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* KNIT Achievements Card */}
            <Link href="/achievements" className="group">
              <div className="bg-red-700 h-48 flex flex-col items-center justify-center hover:bg-red-800 transition-all duration-300">
                <div className="text-center px-6">
                  <div className="text-sm font-semibold text-white mb-3">KNIT ACHIEVEMENTS</div>
                  <svg className="w-16 h-16 mx-auto text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94A5.01 5.01 0 0011 15.9V19H7v2h10v-2h-4v-3.1a5.01 5.01 0 003.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/>
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Main Content - 3 columns */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* Leadership Section - HIGHLIGHTS */}
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="bg-red-800 text-white px-4 py-3 rounded-t-lg">
                <h2 className="font-bold text-lg">HIGHLIGHTS</h2>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-3 gap-4">
                  {/* Row 1 */}
                  <div className="bg-white p-4 rounded-lg flex items-center space-x-3 border border-gray-200 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0 flex items-center justify-center">
                      <span className="text-gray-500 text-xs">👤</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm">Smt. Anandiben Patel</h3>
                      <p className="text-xs text-blue-600 font-medium">Hon'ble Governor</p>
                      <p className="text-xs text-gray-500">Uttar Pradesh</p>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg flex items-center space-x-3 border border-gray-200 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0 flex items-center justify-center">
                      <span className="text-gray-500 text-xs">👤</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm">Shri Yogi Adityanath</h3>
                      <p className="text-xs text-blue-600 font-medium">Hon'ble Chief Minister</p>
                      <p className="text-xs text-gray-500">Uttar Pradesh</p>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg flex items-center space-x-3 border border-gray-200 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0 flex items-center justify-center">
                      <span className="text-gray-500 text-xs">👤</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm">Shri Ashish Patel</h3>
                      <p className="text-xs text-blue-600 font-medium">Hon'ble Minister</p>
                      <p className="text-xs text-gray-500">Technical Education, UP</p>
                    </div>
                  </div>
                  
                  {/* Row 2 */}
                  <div className="bg-white p-4 rounded-lg flex items-center space-x-3 border border-gray-200 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0 flex items-center justify-center">
                      <span className="text-gray-500 text-xs">👤</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm">Prof. J. P. Pandey</h3>
                      <p className="text-xs text-blue-600 font-medium">Vice Chancellor</p>
                      <p className="text-xs text-gray-500">Dr. APJAKTU</p>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg flex items-center space-x-3 border border-gray-200 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0 flex items-center justify-center">
                      <span className="text-gray-500 text-xs">👤</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm">Shri Pankaj Patel</h3>
                      <p className="text-xs text-blue-600 font-medium">Chairman</p>
                      <p className="text-xs text-gray-500">BoG, KNIT, Sultanpur</p>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg flex items-center space-x-3 border border-gray-200 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0 flex items-center justify-center">
                      <span className="text-gray-500 text-xs">👤</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm">Dr. R.K. Upadhyay</h3>
                      <p className="text-xs text-blue-600 font-medium">Director</p>
                      <p className="text-xs text-gray-500">KNIT, Sultanpur</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* News & Events and Featured Section - Side by Side but Individual */}
            <div className="grid lg:grid-cols-2 gap-6">
              {/* News & Events - Individual Section */}
              <div className="bg-white rounded-lg shadow-sm border">
                <div className="flex justify-between items-center bg-blue-50 px-4 py-3 border-b rounded-t-lg">
                  <h2 className="text-lg font-bold text-blue-800">📰 News & Events</h2>
                  <Link href="/news" className="text-blue-600 text-sm hover:text-blue-800 font-medium">
                    VIEW ALL →
                  </Link>
                </div>
                <div className="p-4 space-y-3">
                  <div className="flex items-start space-x-3 py-3 border-b border-gray-100 last:border-b-0">
                    <div className="bg-orange-100 text-orange-600 p-2 rounded text-xs flex-shrink-0">
                      📅
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-orange-600 font-semibold mb-1">21/06/2025</p>
                      <h3 className="font-medium text-gray-900 mb-2 text-sm hover:text-blue-600 cursor-pointer">
                        Admission Notice for M.Tech. (Full-Time) 2025-26.
                      </h3>
                      <p className="text-xs text-gray-500">File Size: 512 KB | Language: English</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 py-3 border-b border-gray-100 last:border-b-0">
                    <div className="bg-orange-100 text-orange-600 p-2 rounded text-xs flex-shrink-0">
                      📅
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-orange-600 font-semibold mb-1">21/06/2025</p>
                      <h3 className="font-medium text-gray-900 mb-2 text-sm hover:text-blue-600 cursor-pointer">
                        Admission Notice for M.Tech. (Part-Time) 2025-26.
                      </h3>
                      <p className="text-xs text-gray-500">File Size: 598 KB | Language: English</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 py-3 border-b border-gray-100 last:border-b-0">
                    <div className="bg-orange-100 text-orange-600 p-2 rounded text-xs flex-shrink-0">
                      📅
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-orange-600 font-semibold mb-1">10/06/2025</p>
                      <h3 className="font-medium text-gray-900 mb-2 text-sm hover:text-blue-600 cursor-pointer">
                        KNIT students' useful innovation in traffic management
                      </h3>
                      <p className="text-xs text-gray-500">File Size: 193 KB | Language: Hindi</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Featured Section - Individual Section */}
              <div className="bg-white rounded-lg shadow-sm border">
                <div className="flex justify-between items-center bg-blue-600 text-white px-4 py-3 border-b rounded-t-lg">
                  <h2 className="text-lg font-bold">⭐ Featured</h2>
                  <Link href="/featured" className="text-blue-200 text-sm hover:text-white font-medium">
                    VIEW ALL →
                  </Link>
                </div>
                <div className="p-4">
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4 border">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                        K
                      </div>
                      <div>
                        <h3 className="font-bold text-blue-900">KNIT Excellence</h3>
                        <p className="text-xs text-blue-700">Leading Technical Institute</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 mb-3">
                      Discover our world-class facilities, innovative research programs, and outstanding academic achievements.
                    </p>
                    <Link href="/about" className="inline-block bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Circulars */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="bg-blue-600 text-white px-4 py-3 rounded-t-lg">
                <h2 className="font-bold text-lg">📋 Circulars</h2>
              </div>
              <div className="p-4 space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg border hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-600 text-white p-2 rounded flex-shrink-0">
                      📋
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-green-600 font-semibold mb-1">25/08/2025</p>
                      <h3 className="font-semibold text-gray-900 text-sm mb-2">
                        Notice regarding Physical Reporting and Institute Fee of B. Tech and MCA first year & B. Tech second year (Lateral Entry) 2025-26
                      </h3>
                      <p className="text-xs text-gray-500">File Size: 1 MB | Language: Hindi</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-600 text-white p-2 rounded flex-shrink-0">
                      📋
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-green-600 font-semibold mb-1">25/08/2025</p>
                      <h3 className="font-semibold text-gray-900 text-sm mb-2">
                        Notice regarding submission of allotment letter and extra fee payment after internal sliding students of B. Tech first year 2025-26
                      </h3>
                      <p className="text-xs text-gray-500">File Size: 468 KB | Language: Hindi</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-600 text-white p-2 rounded flex-shrink-0">
                      📋
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-green-600 font-semibold mb-1">18/08/2025</p>
                      <h3 className="font-semibold text-gray-900 text-sm mb-2">
                        Regarding hostel allotment MCA Final Year
                      </h3>
                      <p className="text-xs text-gray-500">File Size: 340 KB | Language: English</p>
                    </div>
                  </div>
                </div>
                
                <div className="text-center mt-6">
                  <Link href="/circulars" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors font-medium">
                    View All
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Access Grid */}
      <section className="bg-white py-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Quick Access</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <Link href="/courses" className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg text-center hover:shadow-lg transition-all duration-300 border hover:border-blue-300">
              <div className="text-blue-600 text-3xl mb-3">📚</div>
              <h3 className="font-semibold text-gray-900 text-sm">Courses Offered</h3>
            </Link>
            
            <Link href="/students" className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg text-center hover:shadow-lg transition-all duration-300 border hover:border-green-300">
              <div className="text-green-600 text-3xl mb-3">👥</div>
              <h3 className="font-semibold text-gray-900 text-sm">Students</h3>
            </Link>
            
            <Link href="/incubations" className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg text-center hover:shadow-lg transition-all duration-300 border hover:border-purple-300">
              <div className="text-purple-600 text-3xl mb-3">🚀</div>
              <h3 className="font-semibold text-gray-900 text-sm">Incubations & Startups</h3>
            </Link>
            
            <Link href="/alumni" className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-lg text-center hover:shadow-lg transition-all duration-300 border hover:border-yellow-300">
              <div className="text-yellow-600 text-3xl mb-3">🎓</div>
              <h3 className="font-semibold text-gray-900 text-sm">Alumni</h3>
            </Link>
            
            <Link href="/anti-ragging" className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg text-center hover:shadow-lg transition-all duration-300 border hover:border-red-300">
              <div className="text-red-600 text-3xl mb-3">🛡️</div>
              <h3 className="font-semibold text-gray-900 text-sm">Anti-ragging</h3>
            </Link>
            
            <Link href="/facilities" className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-lg text-center hover:shadow-lg transition-all duration-300 border hover:border-indigo-300">
              <div className="text-indigo-600 text-3xl mb-3">🏢</div>
              <h3 className="font-semibold text-gray-900 text-sm">Campus Facilities</h3>
            </Link>
            
            <Link href="/media" className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-lg text-center hover:shadow-lg transition-all duration-300 border hover:border-pink-300">
              <div className="text-pink-600 text-3xl mb-3">📸</div>
              <h3 className="font-semibold text-gray-900 text-sm">Photo Gallery</h3>
            </Link>
            
            <Link href="/fee-payment" className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-lg text-center hover:shadow-lg transition-all duration-300 border hover:border-teal-300">
              <div className="text-teal-600 text-3xl mb-3">💳</div>
              <h3 className="font-semibold text-gray-900 text-sm">Fee Payment</h3>
            </Link>
            
            <Link href="/erp" className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-6 rounded-lg text-center hover:shadow-lg transition-all duration-300 border hover:border-cyan-300">
              <div className="text-cyan-600 text-3xl mb-3">💻</div>
              <h3 className="font-semibold text-gray-900 text-sm">Institute ERP</h3>
            </Link>
            
            <Link href="/examinations" className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg text-center hover:shadow-lg transition-all duration-300 border hover:border-orange-300">
              <div className="text-orange-600 text-3xl mb-3">📋</div>
              <h3 className="font-semibold text-gray-900 text-sm">Examinations</h3>
            </Link>
            
            <Link href="/useful-links" className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-lg text-center hover:shadow-lg transition-all duration-300 border hover:border-emerald-300">
              <div className="text-emerald-600 text-3xl mb-3">🔗</div>
              <h3 className="font-semibold text-gray-900 text-sm">Useful Links</h3>
            </Link>
            
            <Link href="/disclosure" className="bg-gradient-to-br from-violet-50 to-violet-100 p-6 rounded-lg text-center hover:shadow-lg transition-all duration-300 border hover:border-violet-300">
              <div className="text-violet-600 text-3xl mb-3">ℹ️</div>
              <h3 className="font-semibold text-gray-900 text-sm">RTI</h3>
            </Link>
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="bg-gray-50 py-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Our Partners & Affiliations</h2>
          <div className="flex flex-wrap justify-center items-center space-x-8 opacity-70">
            <div className="text-4xl hover:opacity-100 transition-opacity cursor-pointer">🏛️</div>
            <div className="text-4xl hover:opacity-100 transition-opacity cursor-pointer">🎓</div>
            <div className="text-4xl hover:opacity-100 transition-opacity cursor-pointer">🏢</div>
            <div className="text-4xl hover:opacity-100 transition-opacity cursor-pointer">💼</div>
            <div className="text-4xl hover:opacity-100 transition-opacity cursor-pointer">🔬</div>
            <div className="text-4xl hover:opacity-100 transition-opacity cursor-pointer">🌐</div>
          </div>
        </div>
      </section>
    </div>
  );
}
