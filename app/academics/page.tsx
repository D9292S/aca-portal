export default function AcademicsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Academic Programs</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Explore our comprehensive range of undergraduate, postgraduate, and doctoral programs 
            designed to meet the evolving needs of the technology industry.
          </p>
        </div>
      </section>

      {/* Program Categories */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-blue-50 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.84L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Undergraduate</h3>
              <p className="text-gray-600 mb-4">4-year B.Tech programs in various engineering disciplines</p>
              <div className="text-3xl font-bold text-blue-600">8</div>
              <div className="text-sm text-gray-500">Programs Available</div>
            </div>
            <div className="bg-green-50 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Postgraduate</h3>
              <p className="text-gray-600 mb-4">2-year M.Tech programs for advanced specialization</p>
              <div className="text-3xl font-bold text-green-600">6</div>
              <div className="text-sm text-gray-500">Programs Available</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Doctoral</h3>
              <p className="text-gray-600 mb-4">Ph.D programs for research and innovation</p>
              <div className="text-3xl font-bold text-purple-600">5</div>
              <div className="text-sm text-gray-500">Research Areas</div>
            </div>
          </div>
        </div>
      </section>

      {/* Undergraduate Programs */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Undergraduate Programs (B.Tech)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Computer Science & Engineering",
                duration: "4 Years",
                intake: "120 Students",
                highlights: ["Artificial Intelligence", "Machine Learning", "Data Science", "Software Engineering"],
                accreditation: "NBA Accredited"
              },
              {
                title: "Information Technology",
                duration: "4 Years",
                intake: "60 Students",
                highlights: ["Cybersecurity", "Cloud Computing", "Mobile App Development", "Database Systems"],
                accreditation: "NBA Accredited"
              },
              {
                title: "Electronics & Communication Engineering",
                duration: "4 Years",
                intake: "120 Students",
                highlights: ["VLSI Design", "Embedded Systems", "Signal Processing", "Communication Networks"],
                accreditation: "NBA Accredited"
              },
              {
                title: "Electrical Engineering",
                duration: "4 Years",
                intake: "60 Students",
                highlights: ["Power Systems", "Renewable Energy", "Control Systems", "Electric Vehicles"],
                accreditation: "NBA Accredited"
              },
              {
                title: "Mechanical Engineering",
                duration: "4 Years",
                intake: "120 Students",
                highlights: ["Robotics", "Manufacturing", "Thermal Engineering", "Design Engineering"],
                accreditation: "NBA Accredited"
              },
              {
                title: "Civil Engineering",
                duration: "4 Years",
                intake: "60 Students",
                highlights: ["Structural Engineering", "Transportation", "Environmental Engineering", "Construction Management"],
                accreditation: "NBA Accredited"
              }
            ].map((program, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{program.title}</h3>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                      {program.accreditation}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <span className="text-gray-500 text-sm">Duration:</span>
                      <p className="font-medium text-gray-900">{program.duration}</p>
                    </div>
                    <div>
                      <span className="text-gray-500 text-sm">Intake:</span>
                      <p className="font-medium text-gray-900">{program.intake}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="text-gray-500 text-sm mb-2 block">Key Areas:</span>
                    <div className="flex flex-wrap gap-2">
                      {program.highlights.map((highlight, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors">
                    View Curriculum
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Postgraduate Programs */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Postgraduate Programs (M.Tech)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Computer Science & Engineering",
                specializations: ["AI & Machine Learning", "Data Science", "Software Engineering"],
                duration: "2 Years",
                intake: "18 Students"
              },
              {
                title: "Electronics & Communication Engineering",
                specializations: ["VLSI Design", "Signal Processing", "Communication Systems"],
                duration: "2 Years",
                intake: "18 Students"
              },
              {
                title: "Mechanical Engineering",
                specializations: ["Production Engineering", "Thermal Engineering", "Design Engineering"],
                duration: "2 Years",
                intake: "18 Students"
              },
              {
                title: "Electrical Engineering",
                specializations: ["Power Systems", "Power Electronics", "Control Systems"],
                duration: "2 Years",
                intake: "18 Students"
              },
              {
                title: "Civil Engineering",
                specializations: ["Structural Engineering", "Environmental Engineering", "Transportation"],
                duration: "2 Years",
                intake: "18 Students"
              },
              {
                title: "Information Technology",
                specializations: ["Cybersecurity", "Cloud Computing", "Software Engineering"],
                duration: "2 Years",
                intake: "18 Students"
              }
            ].map((program, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                <div className="mb-4">
                  <span className="text-gray-500 text-sm mb-2 block">Specializations:</span>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {program.specializations.map((spec, idx) => (
                      <li key={idx}>• {spec}</li>
                    ))}
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Duration:</span>
                    <p className="font-medium">{program.duration}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Intake:</span>
                    <p className="font-medium">{program.intake}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Research Areas (Ph.D)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              {
                area: "Artificial Intelligence & Machine Learning",
                icon: "🤖",
                supervisors: "8 Faculty"
              },
              {
                area: "Renewable Energy Systems",
                icon: "🔋",
                supervisors: "6 Faculty"
              },
              {
                area: "Advanced Materials",
                icon: "🔬",
                supervisors: "5 Faculty"
              },
              {
                area: "Communication Networks",
                icon: "📡",
                supervisors: "7 Faculty"
              },
              {
                area: "Structural Engineering",
                icon: "🏗️",
                supervisors: "4 Faculty"
              }
            ].map((research, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{research.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{research.area}</h3>
                <p className="text-gray-600 text-sm">{research.supervisors}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Academic Calendar 2024-25</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Odd Semester</h3>
              <p className="text-blue-100">August - December 2024</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Even Semester</h3>
              <p className="text-blue-100">January - May 2025</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Summer Training</h3>
              <p className="text-blue-100">June - July 2025</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Admission Period</h3>
              <p className="text-blue-100">June - August 2025</p>
            </div>
          </div>
          <div className="mt-8">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg font-semibold transition-colors">
              Download Academic Calendar
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
