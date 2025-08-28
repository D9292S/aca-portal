export default function PlacementsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Placements</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            KNIT has a stellar placement record with leading companies recruiting our graduates. 
            Our dedicated Training & Placement Cell ensures excellent career opportunities for all students.
          </p>
        </div>
      </section>

      {/* Placement Statistics */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Placement Statistics 2024</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-gray-600">Placement Rate</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2">₹28 LPA</div>
              <div className="text-gray-600">Highest Package</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                </svg>
              </div>
              <div className="text-4xl font-bold text-purple-600 mb-2">₹8.5 LPA</div>
              <div className="text-gray-600">Average Package</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <div className="text-4xl font-bold text-orange-600 mb-2">150+</div>
              <div className="text-gray-600">Companies Visited</div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Recruiters */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Top Recruiters</h2>
          
          {/* IT & Software Companies */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-blue-600 mb-6 text-center">IT & Software Companies</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {[
                "Microsoft", "Google", "Amazon", "TCS", "Infosys", "Wipro", 
                "Accenture", "IBM", "Oracle", "Adobe", "Salesforce", "PayPal"
              ].map((company, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-12 bg-gray-200 rounded flex items-center justify-center">
                    <span className="text-sm font-medium text-gray-600">{company}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Companies */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-green-600 mb-6 text-center">Core Engineering Companies</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {[
                "L&T", "BHEL", "NTPC", "ONGC", "Tata Steel", "Mahindra",
                "Bajaj Auto", "Maruti Suzuki", "Hero MotoCorp", "Ashok Leyland", "TVS Motors", "Godrej"
              ].map((company, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-12 bg-gray-200 rounded flex items-center justify-center">
                    <span className="text-sm font-medium text-gray-600">{company}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Government Organizations */}
          <div>
            <h3 className="text-xl font-semibold text-purple-600 mb-6 text-center">Government & PSUs</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {[
                "ISRO", "DRDO", "BARC", "Indian Railways", "IOCL", "BPCL",
                "HPCL", "Coal India", "SAIL", "GAIL", "PowerGrid", "NHPC"
              ].map((company, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-12 bg-gray-200 rounded flex items-center justify-center">
                    <span className="text-sm font-medium text-gray-600">{company}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Department-wise Placement */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Department-wise Placement Data</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  department: "Computer Science & Engineering",
                  students: 120,
                  placed: 118,
                  percentage: 98.3,
                  avgPackage: "₹12.5 LPA",
                  topPackage: "₹28 LPA"
                },
                {
                  department: "Information Technology", 
                  students: 60,
                  placed: 58,
                  percentage: 96.7,
                  avgPackage: "₹11.8 LPA",
                  topPackage: "₹25 LPA"
                },
                {
                  department: "Electronics & Communication",
                  students: 120,
                  placed: 112,
                  percentage: 93.3,
                  avgPackage: "₹8.2 LPA",
                  topPackage: "₹22 LPA"
                },
                {
                  department: "Mechanical Engineering",
                  students: 120,
                  placed: 114,
                  percentage: 95.0,
                  avgPackage: "₹7.5 LPA", 
                  topPackage: "₹18 LPA"
                },
                {
                  department: "Electrical Engineering",
                  students: 60,
                  placed: 57,
                  percentage: 95.0,
                  avgPackage: "₹7.8 LPA",
                  topPackage: "₹20 LPA"
                },
                {
                  department: "Civil Engineering",
                  students: 60,
                  placed: 54,
                  percentage: 90.0,
                  avgPackage: "₹6.5 LPA",
                  topPackage: "₹15 LPA"
                }
              ].map((dept, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="mb-4 lg:mb-0">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{dept.department}</h3>
                      <p className="text-gray-600">Students: {dept.students} | Placed: {dept.placed}</p>
                    </div>
                    <div className="grid grid-cols-3 gap-4 lg:gap-8">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">{dept.percentage}%</div>
                        <div className="text-sm text-gray-500">Placement Rate</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-blue-600">{dept.avgPackage}</div>
                        <div className="text-sm text-gray-500">Average Package</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-purple-600">{dept.topPackage}</div>
                        <div className="text-sm text-gray-500">Highest Package</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Placement Process */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Placement Process</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: 1,
                  title: "Pre-placement Training",
                  description: "Comprehensive training programs including aptitude, technical skills, soft skills, and interview preparation",
                  duration: "6 months"
                },
                {
                  step: 2,
                  title: "Company Registration",
                  description: "Companies register with the Training & Placement Cell and share job requirements and selection process",
                  duration: "Ongoing"
                },
                {
                  step: 3,
                  title: "Pre-placement Talks",
                  description: "Companies conduct presentations about their organization, job roles, and career opportunities",
                  duration: "1-2 hours"
                },
                {
                  step: 4,
                  title: "Selection Process",
                  description: "Multi-round selection including aptitude tests, technical interviews, group discussions, and HR rounds",
                  duration: "1-2 days"
                },
                {
                  step: 5,
                  title: "Final Selection & Offer",
                  description: "Selected candidates receive offer letters with compensation details and joining instructions",
                  duration: "1-2 weeks"
                }
              ].map((process, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                      {process.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-lg font-bold text-gray-900">{process.title}</h3>
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm">{process.duration}</span>
                      </div>
                      <p className="text-gray-600">{process.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                batch: "CSE 2023",
                company: "Microsoft",
                package: "₹28 LPA",
                role: "Software Development Engineer",
                quote: "KNIT provided me with strong fundamentals and the placement cell's guidance was invaluable."
              },
              {
                name: "Priya Singh", 
                batch: "ECE 2023",
                company: "Samsung",
                package: "₹22 LPA", 
                role: "Hardware Engineer",
                quote: "The technical training and mock interviews helped me crack my dream job at Samsung."
              },
              {
                name: "Amit Sharma",
                batch: "ME 2023", 
                company: "L&T",
                package: "₹18 LPA",
                role: "Project Engineer", 
                quote: "KNIT's industry connections and practical approach to learning made all the difference."
              }
            ].map((story, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold text-lg">{story.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{story.name}</h3>
                    <p className="text-gray-600 text-sm">{story.batch}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900">{story.company}</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">{story.package}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{story.role}</p>
                </div>
                <blockquote className="text-gray-600 italic">"{story.quote}"</blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training & Placement Cell */}
      <section className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Training & Placement Cell</h2>
            <p className="text-xl text-green-100 mb-8">
              Our dedicated T&P Cell works tirelessly to bridge the gap between academia and industry, 
              ensuring our students are industry-ready and get the best career opportunities.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.84L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Training Programs</h3>
                <p className="text-green-100 text-sm">Comprehensive skill development and career guidance</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Industry Connect</h3>
                <p className="text-green-100 text-sm">Strong relationships with leading companies</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Career Support</h3>
                <p className="text-green-100 text-sm">Personalized guidance and mentorship</p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-green-100">
                <strong>Contact T&P Cell:</strong> placement@knit.ac.in | +91-5362-240465
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg font-semibold transition-colors">
                  For Students
                </button>
                <button className="border-2 border-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                  For Recruiters
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
