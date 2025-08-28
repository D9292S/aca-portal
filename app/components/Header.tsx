'use client';

import Link from 'next/link';
import { useState } from 'react';
import KNITLogo from './KNITLogo';
import SearchBox from './ui/SearchBox';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [fontSize, setFontSize] = useState('medium');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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
      name: 'Academics', 
      href: '/academics',
      submenu: ['Programs', 'Academic Calendar', 'Academic Regulations', 'Courses Offered', 'Examination', 'Academic Audit']
    },
    { 
      name: 'Admissions', 
      href: '/admissions',
      submenu: ['B.Tech Admissions', 'M.Tech Admissions', 'MCA Admissions', 'PhD Admissions', 'International Students']
    },
    { 
      name: 'For Students', 
      href: '/students',
      submenu: ['Student Portal', 'Academic Resources', 'Hostel', 'Clubs & Societies', 'Sports', 'Health Centre']
    },
    { 
      name: 'For Faculty and Staff', 
      href: '/faculty',
      submenu: ['Faculty Directory', 'Staff Directory', 'Employee Portal', 'Research Projects', 'Publications']
    },
    { 
      name: 'Research', 
      href: '/research',
      submenu: ['Research Areas', 'Research Projects', 'Publications', 'Patents', 'Collaborations', 'Research Facilities']
    },
    { 
      name: 'Alumni', 
      href: '/alumni',
      submenu: ['Alumni Association', 'Distinguished Alumni', 'Alumni Events', 'Give Back', 'Alumni Portal']
    },
    { 
      name: 'Resources', 
      href: '/resources',
      submenu: ['Library', 'IT Services', 'Downloads', 'Tenders', 'RTI', 'Career Opportunities']
    },
    { 
      name: 'Administration', 
      href: '/administration',
      submenu: ['Director', 'Deans', 'Registrar', 'Board of Governors', 'Senate', 'Committees']
    },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
        {/* Top Red Bar */}
        <div className="bg-red-700 text-white text-xs">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-2">
              {/* Left Side Links */}
              <div className="hidden lg:flex items-center space-x-5">
                <Link href="/jobs" className="hover:text-red-100 transition-colors flex items-center" aria-label="Jobs">
                  <span className="mr-1">💼</span> Jobs
                </Link>
                <Link href="/calendar" className="hover:text-red-100 transition-colors flex items-center" aria-label="Calendar">
                  <span className="mr-1">📅</span> Calendar
                </Link>
                <Link href="/tenders" className="hover:text-red-100 transition-colors flex items-center" aria-label="Tenders">
                  <span className="mr-1">📄</span> Tenders
                </Link>
                <Link href="/payment-gateway" className="hover:text-red-100 transition-colors flex items-center" aria-label="Payment Gateway">
                  <span className="mr-1">💳</span> Payment Gateway
                </Link>
                <Link href="/recruiters" className="hover:text-red-100 transition-colors flex items-center" aria-label="Recruiters/Careers">
                  <span className="mr-1">🎯</span> Recruiters/Careers
                </Link>
                <Link href="/iges" className="hover:text-red-100 transition-colors flex items-center" aria-label="IGES">
                  <span className="mr-1">🏆</span> IGES
                </Link>
                <Link href="/icc" className="hover:text-red-100 transition-colors flex items-center" aria-label="ICC">
                  <span className="mr-1">⚖️</span> ICC
                </Link>
                <Link href="/give" className="hover:text-red-100 transition-colors flex items-center" aria-label="GIVE">
                  <span className="mr-1">🤝</span> GIVE
                </Link>
              </div>
              
              {/* Right Side Links */}
              <div className="flex items-center space-x-3">
                {/* Social Media Icons */}
                <div className="hidden md:flex items-center space-x-2">
                  <a href="https://twitter.com/knitofficial" target="_blank" rel="noopener noreferrer" 
                     className="hover:text-red-100 transition-colors" aria-label="Twitter">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="https://linkedin.com/company/knitofficial" target="_blank" rel="noopener noreferrer" 
                     className="hover:text-red-100 transition-colors" aria-label="LinkedIn">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="https://facebook.com/knitofficial" target="_blank" rel="noopener noreferrer" 
                     className="hover:text-red-100 transition-colors" aria-label="Facebook">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                </div>
                
                {/* Language and Font Size */}
                <div className="flex items-center space-x-2 border-l border-red-500 pl-3">
                  <button className="hover:text-red-100 font-semibold">हिंदी</button>
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
                      className="hover:text-red-100 px-1"
                      aria-label="Normal font size"
                    >
                      A
                    </button>
                    <button 
                      onClick={() => adjustFontSize('large')}
                      className="hover:text-red-100 px-1 text-lg"
                      aria-label="Increase font size"
                    >
                      A+
                    </button>
                  </div>
                  <span className="text-red-300">|</span>
                  <Link href="/email" className="hover:text-red-100 transition-colors">
                    KNIT Email
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Institute Name Section */}
        <div className="bg-white py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between gap-4">
              {/* Logo and Institute Name */}
              <div className="flex items-center space-x-4 flex-shrink-0">
                <Link href="/" className="flex-shrink-0" aria-label="KNIT Homepage">
                  <KNITLogo />
                </Link>
                <div className="border-l-2 border-gray-300 pl-4">
                  <h1 className="text-xl md:text-2xl font-semibold text-gray-900">
                    Kamla Nehru Institute of Technology, Sultanpur
                  </h1>
                  <p className="text-sm md:text-base text-gray-700 mt-1">
                    कमला नेहरू प्रौद्योगिकी संस्थान, सुल्तानपुर
                  </p>
                </div>
              </div>

              {/* Search Box - Desktop */}
              <div className="hidden lg:block flex-grow max-w-md mx-8">
                <SearchBox 
                  suggestions={searchSuggestions}
                  onSearch={handleSearch}
                  showVoiceSearch={true}
                  className="w-full"
                />
              </div>
              
              {/* Location Info */}
              <div className="hidden xl:flex items-center space-x-3 flex-shrink-0">
                <div className="text-right">
                  <div className="text-sm font-semibold text-gray-800">
                    KAMLA NEHRU INSTITUTE OF TECHNOLOGY
                  </div>
                  <div className="text-xs text-gray-600">
                    Sultanpur-Kadipur Road, Sultanpur-228118, India
                  </div>
                </div>
                <div className="bg-gray-100 p-2 rounded-full">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button 
                onClick={toggleMenu}
                className="lg:hidden p-2 rounded text-gray-600 hover:text-gray-800"
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
        <nav className="bg-gray-100 border-t border-b border-gray-300">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              {/* Home Icon */}
              <Link href="/" className="flex items-center px-3 py-3 hover:bg-gray-200 transition-colors">
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </Link>

              {/* Main Navigation - Desktop */}
              <div className="hidden lg:flex items-center flex-1">
                {navItems.map((item, index) => (
                  <div key={index} className="relative group">
                    <button
                      className="flex items-center px-3 py-3 hover:bg-gray-200 transition-colors text-sm font-medium text-gray-700"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {item.name}
                      {item.submenu && (
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </button>
                    
                    {/* Dropdown Menu */}
                    {item.submenu && activeDropdown === item.name && (
                      <div 
                        className="absolute top-full left-0 min-w-[250px] bg-white shadow-lg border border-gray-200 z-50"
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <div className="py-2">
                          {item.submenu.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={`${item.href}/${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                            >
                              {subItem}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Search Icon */}
              <button 
                className="flex items-center px-3 py-3 hover:bg-gray-200 transition-colors"
                aria-label="Search"
              >
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className="lg:hidden p-2 text-white hover:bg-gray-700/50 rounded ml-2"
                aria-label="Toggle mobile menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t backdrop-blur-md bg-gray-700/95 border-gray-600/50">
            <div className="max-w-7xl mx-auto px-4 py-4">
              <div className="flex flex-col space-y-3">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-white hover:text-gray-200 py-3 px-4 rounded hover:bg-gray-700/50 transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Mobile Important Links */}
                <div className="pt-4 border-t border-gray-600/50">
                  <div className="grid grid-cols-2 gap-3">
                    <Link href="/naac" className="text-yellow-400 text-center py-2 px-3 bg-gray-700/50 rounded">NAAC</Link>
                    <Link href="/disclosure" className="text-yellow-400 text-center py-2 px-3 bg-gray-700/50 rounded">Disclosure</Link>
                    <Link href="/nba" className="text-yellow-400 text-center py-2 px-3 bg-gray-700/50 rounded">NBA</Link>
                    <Link href="/nirf" className="text-yellow-400 text-center py-2 px-3 bg-gray-700/50 rounded">NIRF</Link>
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
