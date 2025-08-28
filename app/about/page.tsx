export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">About KNIT</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover the legacy, vision, and values that make Kamla Nehru Institute of Technology 
            a premier destination for engineering education in India.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our History</h2>
            <div className="prose prose-lg mx-auto">
              <p className="text-lg text-gray-600 mb-6">
                Kamla Nehru Institute of Technology (KNIT) was established in 1976 as a constituent college 
                of Dr. A.P.J. Abdul Kalam Technical University (formerly UPTU), Uttar Pradesh. Named after 
                Kamla Nehru, the mother of India's first Prime Minister Jawaharlal Nehru, the institute 
                has been a beacon of technical education in the region.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                From its humble beginnings with just a few departments, KNIT has grown into a comprehensive 
                technical institution offering undergraduate, postgraduate, and doctoral programs across 
                multiple engineering disciplines. The institute has consistently maintained high academic 
                standards and has produced thousands of skilled engineers who have made significant 
                contributions to various industries worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold text-blue-600 mb-6">Our Vision</h3>
              <p className="text-lg text-gray-600">
                To be a premier institute of technology that produces globally competent engineers 
                and leaders who contribute to the sustainable development of society through 
                innovation, research, and ethical practices.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold text-green-600 mb-6">Our Mission</h3>
              <ul className="text-lg text-gray-600 space-y-3">
                <li>• Provide quality technical education with industry-relevant curriculum</li>
                <li>• Foster research and innovation in emerging technologies</li>
                <li>• Develop ethical and responsible engineers</li>
                <li>• Promote industry-academia collaboration</li>
                <li>• Contribute to national and regional development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Facts */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Key Facts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.84L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">1976</h3>
              <p className="text-gray-600">Year Established</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">3000+</h3>
              <p className="text-gray-600">Students</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">200+</h3>
              <p className="text-gray-600">Faculty Members</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">8</h3>
              <p className="text-gray-600">Departments</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. [Director Name]</h3>
              <p className="text-blue-600 font-medium mb-3">Director</p>
              <p className="text-gray-600 text-sm">
                Leading KNIT with over 25 years of experience in technical education and research.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Prof. [Dean Name]</h3>
              <p className="text-blue-600 font-medium mb-3">Dean Academics</p>
              <p className="text-gray-600 text-sm">
                Overseeing academic excellence and curriculum development across all departments.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. [Registrar Name]</h3>
              <p className="text-blue-600 font-medium mb-3">Registrar</p>
              <p className="text-gray-600 text-sm">
                Managing administrative operations and student affairs for institutional efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditation & Rankings */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Accreditation & Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-yellow-600">AICTE</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AICTE Approved</h3>
              <p className="text-gray-600 text-sm">All India Council for Technical Education</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">NAAC</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">NAAC Accredited</h3>
              <p className="text-gray-600 text-sm">National Assessment and Accreditation Council</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">NBA</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">NBA Accredited</h3>
              <p className="text-gray-600 text-sm">National Board of Accreditation</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">ISO</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">ISO Certified</h3>
              <p className="text-gray-600 text-sm">Quality Management System</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
