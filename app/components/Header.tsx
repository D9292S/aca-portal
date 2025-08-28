'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import KNITLogo from './KNITLogo';
import SearchBox from './ui/SearchBox';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [fontSize, setFontSize] = useState('medium');
  const [showHindi, setShowHindi] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animate between English and Hindi text
  useEffect(() => {
    const interval = setInterval(() => {
      setShowHindi(prev => !prev);
    }, 5000); // Increased to 5 seconds for better readability

    return () => clearInterval(interval);
  }, []);

  const adjustFontSize = (size: string) => {
    setFontSize(size);
    document.documentElement.style.fontSize = 
      size === 'small' ? '14px' : 
      size === 'large' ? '18px' : '16px';
  };

  // Sample search suggestions
  const searchSuggestions = [
    { id: '1', title: 'Computer Science Department', type: 'department' as const, url: '/departments/cse', description: 'Department of Computer Science and Engineering' },
    { id: '2', title: 'Dr. A.K. Sharma', type: 'faculty' as const, url: '/faculty/ak-sharma', description: 'Professor, Computer Science Department' },
    { id: '3', title: 'B.Tech Admissions', type: 'page' as const, url: '/admissions/btech', description: 'Undergraduate admission process and requirements' },
    { id: '4', title: 'Annual Technical Symposium', type: 'news' as const, url: '/events/techfest-2025', description: 'Technical event and competitions' },
    { id: '5', title: 'Data Structures and Algorithms', type: 'course' as const, url: '/courses/dsa', description: 'CS201 - Core computer science course' },
  ];

  const handleSearch = (query: string) => {
    // Implement actual search functionality
    console.log('Searching for:', query);
    // You can redirect to search results page
    // window.location.href = `/search?q=${encodeURIComponent(query)}`;
  };

  const navItems = [
    { 
      name: 'About Us', 
      href: '/about',
      submenu: ['Vision & Mission', 'History', 'Leadership', 'Campus Life', 'Awards & Recognition']
    },
    { 
      name: 'Governance', 
      href: '/governance',
      submenu: ['Board of Governors', 'Director', 'Registrar', 'Senate', 'Committees', 'Annual Reports']
    },
    { 
      name: 'Academics', 
      href: '/academics',
      submenu: ['Programs', 'Academic Calendar', 'Academic Regulations', 'Examination', 'Academic Audit', 'Fee Structure']
    },
    { 
      name: 'Departments', 
      href: '/departments',
      submenu: ['Computer Science & Engineering', 'Electronics & Communication', 'Mechanical Engineering', 'Civil Engineering', 'Electrical Engineering', 'Applied Sciences & Humanities']
    },
    { 
      name: 'Training & Placements', 
      href: '/placements',
      submenu: ['Training Programs', 'Placement Statistics', 'Recruitment Process', 'Industry Partners', 'Career Guidance', 'Alumni Network']
    },
    { 
      name: 'Media', 
      href: '/media',
      submenu: ['News & Updates', 'Press Releases', 'Photo Gallery', 'Video Gallery', 'Publications', 'Events']
    },
    { 
      name: 'Contact Us', 
      href: '/contact',
      submenu: []
    },
    { 
      name: 'NAAC', 
      href: '/naac',
      submenu: []
    },
    { 
      name: 'Disclosure', 
      href: '/disclosure',
      submenu: []
    },
    { 
      name: 'NBA', 
      href: '/nba',
      submenu: []
    },
    { 
      name: 'NIRF', 
      href: '/nirf',
      submenu: []
    },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[100] backdrop-blur-lg bg-gray-900/80 border-b border-white/10 transition-all duration-300 ${
        isScrolled ? 'shadow-2xl bg-gray-900/90' : 'shadow-xl'
      }`}>
        {/* Top Dark Bar */}
        <div className="bg-gradient-to-r from-gray-800/90 to-gray-900/90 text-white text-xs backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-1.5">
              {/* Left Side Links */}
              <div className="hidden lg:flex items-center space-x-4">
                <Link href="/jobs" className="hover:text-gray-200 transition-colors flex items-center opacity-90 hover:opacity-100" aria-label="Jobs">
                  <span className="mr-1">💼</span> Jobs
                </Link>
                <Link href="/calendar" className="hover:text-gray-200 transition-colors flex items-center opacity-90 hover:opacity-100" aria-label="Calendar">
                  <span className="mr-1">📅</span> Calendar
                </Link>
                <Link href="/tenders" className="hover:text-gray-200 transition-colors flex items-center opacity-90 hover:opacity-100" aria-label="Tenders">
                  <span className="mr-1">📄</span> Tenders
                </Link>
                <Link href="/payment-gateway" className="hover:text-gray-200 transition-colors flex items-center opacity-90 hover:opacity-100" aria-label="Payment Gateway">
                  <span className="mr-1">💳</span> Payment Gateway
                </Link>
                <Link href="/recruiters" className="hover:text-gray-200 transition-colors flex items-center opacity-90 hover:opacity-100" aria-label="Recruiters/Careers">
                  <span className="mr-1">🎯</span> Recruiters/Careers
                </Link>
                <Link href="/iges" className="hover:text-gray-200 transition-colors flex items-center opacity-90 hover:opacity-100" aria-label="IGES">
                  <span className="mr-1">🏆</span> IGES
                </Link>
                <Link href="/icc" className="hover:text-gray-200 transition-colors flex items-center opacity-90 hover:opacity-100" aria-label="ICC">
                  <span className="mr-1">⚖️</span> ICC
                </Link>
                <Link href="/give" className="hover:text-gray-200 transition-colors flex items-center opacity-90 hover:opacity-100" aria-label="GIVE">
                  <span className="mr-1">🤝</span> GIVE
                </Link>
              </div>
              
              {/* Right Side Links */}
              <div className="flex items-center space-x-3">
                {/* Social Media Icons */}
                <div className="hidden md:flex items-center space-x-2">
                  <a href="https://twitter.com/knitofficial" target="_blank" rel="noopener noreferrer" 
                     className="hover:text-gray-200 transition-colors opacity-90 hover:opacity-100" aria-label="Twitter">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="https://linkedin.com/company/knitofficial" target="_blank" rel="noopener noreferrer" 
                     className="hover:text-gray-200 transition-colors opacity-90 hover:opacity-100" aria-label="LinkedIn">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="https://facebook.com/knitofficial" target="_blank" rel="noopener noreferrer" 
                     className="hover:text-gray-200 transition-colors opacity-90 hover:opacity-100" aria-label="Facebook">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                </div>
                
                {/* Language and Font Size */}
                <div className="flex items-center space-x-2 border-l border-gray-600 pl-3">
                  <button className="hover:text-gray-200 font-semibold opacity-90 hover:opacity-100">हिंदी</button>
                  <span className="text-red-300">|</span>
                  <div className="flex items-center space-x-1">
                    <button 
                      onClick={() => adjustFontSize('small')}
                      className="hover:text-red-100 px-1 text-xs"
                      aria-label="Decrease font size"
                    >
                      A-
                    </button>
                    <button 
                      onClick={() => adjustFontSize('medium')}
                      className="hover:text-gray-200 px-1 transition-colors opacity-90 hover:opacity-100"
                      aria-label="Normal font size"
                    >
                      A
                    </button>
                    <button 
                      onClick={() => adjustFontSize('large')}
                      className="hover:text-gray-200 px-1 text-lg transition-colors opacity-90 hover:opacity-100"
                      aria-label="Increase font size"
                    >
                      A+
                    </button>
                  </div>
                  <span className="text-gray-400">|</span>
                  <Link href="/email" className="hover:text-gray-200 transition-colors opacity-90 hover:opacity-100">
                    KNIT Email
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Institute Name Section */}
        <div className="bg-white/20 backdrop-blur-md border-b border-white/10 py-2">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between gap-4">
              {/* Logo and Institute Name */}
              <div className="flex items-center space-x-4 flex-shrink-0 flex-1 min-w-0">
                <Link href="/" className="flex-shrink-0 group" aria-label="KNIT Homepage">
                  <div className="transform transition-all duration-300 hover:scale-105 hover:drop-shadow-lg">
                    <KNITLogo />
                  </div>
                </Link>
                <div className="border-l-2 border-gray-300 pl-4 flex-1 min-w-0 group">
                  <div className="text-lg md:text-xl lg:text-2xl font-semibold relative h-8 md:h-10 overflow-hidden">
                    {/* English Title */}
                    <h1 className={`absolute inset-0 flex items-center transition-all duration-1000 ease-in-out ${
                      showHindi 
                        ? 'opacity-0 transform translate-y-4' 
                        : 'opacity-100 transform translate-y-0'
                    }`}>
                      <span className="truncate bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-sm">
                        Kamla Nehru Institute of Technology, Sultanpur
                      </span>
                    </h1>
                    {/* Hindi Title */}
                    <h1 className={`absolute inset-0 flex items-center transition-all duration-1000 ease-in-out ${
                      showHindi 
                        ? 'opacity-100 transform translate-y-0' 
                        : 'opacity-0 transform -translate-y-4'
                    }`}>
                      <span className="truncate bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-sm">
                        कमला नेहरू प्रौद्योगिकी संस्थान, सुल्तानपुर
                      </span>
                    </h1>
                  </div>
                  
                  {/* Subtitle Lines with enhanced styling */}
                  <div className="mt-1 space-y-0.5">
                    <p className="text-sm text-gray-200 font-medium tracking-wide opacity-90">
                      An Autonomous Government Funded Institute
                    </p>
                    <p className="text-xs text-gray-300 tracking-wide opacity-80">
                      Affiliated to Dr. A.P.J. Abdul Kalam Technical University, Lucknow
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Location Info */}
              <div className="hidden xl:flex items-center space-x-3 flex-shrink-0">
                <div className="text-right">
                  <div className="text-sm font-bold text-gray-100 tracking-wide drop-shadow-sm">
                    KAMLA NEHRU INSTITUTE OF TECHNOLOGY
                  </div>
                  <div className="text-xs text-gray-200 font-medium opacity-90">
                    Sultanpur-Kadipur Road, Sultanpur-228118, India
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-3 rounded-full shadow-lg border border-blue-200 group hover:shadow-xl transition-all duration-300">
                  <svg className="w-6 h-6 text-blue-600 group-hover:text-blue-700 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button 
                onClick={toggleMenu}
                className="lg:hidden p-2 rounded text-gray-200 hover:text-white transition-colors"
                aria-label="Toggle navigation menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>

            {/* Mobile Search Box */}
            <div className="lg:hidden mt-4">
              <SearchBox 
                suggestions={searchSuggestions}
                onSearch={handleSearch}
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="bg-gray-800/80 backdrop-blur-md border-b border-white/10 shadow-lg">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-14">
              {/* Main Navigation - Desktop */}
              <div className="hidden lg:flex items-center flex-1 justify-start">
                {/* Home Icon */}
                <Link href="/" className="flex items-center px-3 py-2 hover:bg-white/10 transition-all duration-300 rounded-lg group transform hover:scale-105 flex-shrink-0 mr-4">
                  <svg className="w-5 h-5 text-gray-300 group-hover:text-white transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </Link>
                
                {/* Navigation Items */}
                <div className="flex items-center space-x-1 flex-1 justify-center">
                  {navItems.map((item, index) => (
                    <div key={index} className="relative group">
                      <Link
                        href={item.href}
                        className="flex items-center px-2 py-2 hover:bg-white/10 hover:text-white transition-all duration-300 text-sm font-medium text-gray-200 rounded-lg border-b-2 border-transparent hover:border-blue-400 group transform hover:scale-[1.02] relative overflow-hidden"
                        onMouseEnter={() => item.submenu?.length > 0 && setActiveDropdown(item.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <span className="relative z-10 whitespace-nowrap">{item.name}</span>
                        {/* Animated underline */}
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></div>
                        {item.submenu && item.submenu.length > 0 && (
                          <svg className="w-3 h-3 ml-1 transform group-hover:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        )}
                      </Link>
                      
                      {/* Dropdown Menu */}
                      {item.submenu && item.submenu.length > 0 && activeDropdown === item.name && (
                        <div 
                          className="absolute top-full left-0 min-w-[320px] bg-gray-900/95 backdrop-blur-md shadow-2xl border border-gray-600 rounded-xl z-[60] animate-fadeIn overflow-hidden"
                          onMouseEnter={() => setActiveDropdown(item.name)}
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          <div className="py-2">
                            {item.submenu.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                href={`${item.href}/${subItem.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                                className="flex items-center px-5 py-3 text-sm text-gray-200 hover:bg-white/10 hover:text-white hover:pl-7 transition-all duration-300 border-l-3 border-transparent hover:border-blue-400 group relative overflow-hidden"
                              >
                                <span className="flex-1 relative z-10">{subItem}</span>
                                <svg className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 group-hover:text-blue-400 transition-all duration-300 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                                {/* Hover background effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Section - Search Box */}
              <div className="flex items-center space-x-4 flex-shrink-0">
                {/* Search Box - Desktop */}
                <div className="hidden lg:block">
                  <SearchBox 
                    suggestions={searchSuggestions}
                    onSearch={handleSearch}
                    showVoiceSearch={true}
                    className="w-48"
                  />
                </div>

                {/* Mobile Menu Button */}
                <button 
                  onClick={toggleMenu}
                  className="lg:hidden flex items-center p-2 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded-md ml-2"
                  aria-label="Toggle navigation menu"
                  {...(isMenuOpen && { 'aria-expanded': 'true' })}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t backdrop-blur-md bg-gradient-to-br from-gray-800/95 to-gray-900/95 border-gray-600/50 animate-fadeIn">
            <div className="max-w-7xl mx-auto px-4 py-4">
              <div className="flex flex-col space-y-2">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-white hover:text-blue-300 py-3 px-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-medium transform hover:translate-x-2 hover:scale-[1.02] border-l-3 border-transparent hover:border-blue-400"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Mobile Important Links */}
                <div className="pt-4 border-t border-gray-600/50">
                  <div className="grid grid-cols-2 gap-3">
                    <Link href="/naac" className="text-yellow-300 text-center py-3 px-3 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-lg border border-yellow-500/30 hover:bg-gradient-to-r hover:from-yellow-600/30 hover:to-orange-600/30 transition-all duration-300 font-medium">NAAC</Link>
                    <Link href="/disclosure" className="text-yellow-300 text-center py-3 px-3 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-lg border border-yellow-500/30 hover:bg-gradient-to-r hover:from-yellow-600/30 hover:to-orange-600/30 transition-all duration-300 font-medium">Disclosure</Link>
                    <Link href="/nba" className="text-yellow-300 text-center py-3 px-3 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-lg border border-yellow-500/30 hover:bg-gradient-to-r hover:from-yellow-600/30 hover:to-orange-600/30 transition-all duration-300 font-medium">NBA</Link>
                    <Link href="/nirf" className="text-yellow-300 text-center py-3 px-3 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-lg border border-yellow-500/30 hover:bg-gradient-to-r hover:from-yellow-600/30 hover:to-orange-600/30 transition-all duration-300 font-medium">NIRF</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
