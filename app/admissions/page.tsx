import Link from 'next/link';

export default function AdmissionsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Admissions 2025</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Join KNIT and embark on a journey of excellence in engineering education. 
            Applications are now open for the academic year 2025-26.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg font-semibold transition-colors">
              Apply Now
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              Download Prospectus
            </button>
          </div>
        </div>
      </section>

      {/* Application Timeline */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Admission Timeline 2025</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  date: "January 15, 2025",
                  title: "Application Opens",
                  description: "Online application portal opens for all programs",
                  status: "upcoming"
                },
                {
                  date: "April 30, 2025",
                  title: "Application Deadline",
                  description: "Last date for online application submission",
                  status: "upcoming"
                },
                {
                  date: "May 15, 2025",
                  title: "Entrance Examination",
                  description: "JEE Main / UPSEE examination results",
                  status: "upcoming"
                },
                {
                  date: "June 1-15, 2025",
                  title: "Counseling Process",
                  description: "Online counseling and seat allocation",
                  status: "upcoming"
                },
                {
                  date: "July 1, 2025",
                  title: "Classes Begin",
                  description: "First day of academic session 2025-26",
                  status: "upcoming"
                }
              ].map((timeline, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      timeline.status === 'completed' ? 'bg-green-500' : 
                      timeline.status === 'current' ? 'bg-blue-500' : 'bg-gray-300'
                    }`}>
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{timeline.title}</h3>
                      <span className="text-sm text-gray-500">{timeline.date}</span>
                    </div>
                    <p className="text-gray-600">{timeline.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Admission Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Online Application",
                description: "Fill and submit the online application form with required documents",
                icon: "📝"
              },
              {
                step: "2",
                title: "Entrance Exam",
                description: "Qualify JEE Main or UPSEE examination with minimum required percentile",
                icon: "📚"
              },
              {
                step: "3",
                title: "Counseling",
                description: "Participate in online counseling process and choose your preferred branch",
                icon: "💻"
              },
              {
                step: "4",
                title: "Admission",
                description: "Complete admission formalities and pay fees to secure your seat",
                icon: "🎓"
              }
            ].map((process, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md">
                <div className="text-4xl mb-4">{process.icon}</div>
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold">{process.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Eligibility Criteria</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* B.Tech Eligibility */}
            <div className="bg-blue-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-blue-600 mb-6">B.Tech Programs</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Educational Qualification:</h4>
                  <p className="text-gray-600">
                    Passed 10+2 examination with Physics, Chemistry, and Mathematics as compulsory subjects
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Minimum Marks:</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• General/OBC: 45% aggregate in PCM</li>
                    <li>• SC/ST: 40% aggregate in PCM</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Entrance Exam:</h4>
                  <p className="text-gray-600">
                    Valid JEE Main or UPSEE score required
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Age Limit:</h4>
                  <p className="text-gray-600">
                    Maximum 25 years (relaxation for reserved categories)
                  </p>
                </div>
              </div>
            </div>

            {/* M.Tech Eligibility */}
            <div className="bg-green-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-green-600 mb-6">M.Tech Programs</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Educational Qualification:</h4>
                  <p className="text-gray-600">
                    B.Tech/B.E. degree in relevant engineering discipline from recognized university
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Minimum Marks:</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• General/OBC: 60% or 6.5 CGPA</li>
                    <li>• SC/ST: 55% or 6.0 CGPA</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Entrance Exam:</h4>
                  <p className="text-gray-600">
                    Valid GATE score preferred (or university entrance exam)
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Work Experience:</h4>
                  <p className="text-gray-600">
                    Relevant industry experience preferred but not mandatory
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Fee Structure (Annual)</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* B.Tech Fees */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-blue-600 text-white p-6">
                  <h3 className="text-2xl font-bold text-center">B.Tech Programs</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-gray-600">Tuition Fee</span>
                      <span className="font-semibold">₹1,25,000</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-gray-600">Development Fee</span>
                      <span className="font-semibold">₹15,000</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-gray-600">Lab Fee</span>
                      <span className="font-semibold">₹10,000</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-gray-600">Library Fee</span>
                      <span className="font-semibold">₹5,000</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-gray-600">Other Charges</span>
                      <span className="font-semibold">₹5,000</span>
                    </div>
                    <div className="flex justify-between items-center py-2 pt-4 border-t-2 border-blue-200">
                      <span className="text-lg font-bold text-gray-900">Total Annual Fee</span>
                      <span className="text-lg font-bold text-blue-600">₹1,60,000</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* M.Tech Fees */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-green-600 text-white p-6">
                  <h3 className="text-2xl font-bold text-center">M.Tech Programs</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-gray-600">Tuition Fee</span>
                      <span className="font-semibold">₹1,50,000</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-gray-600">Development Fee</span>
                      <span className="font-semibold">₹20,000</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-gray-600">Research Fee</span>
                      <span className="font-semibold">₹15,000</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-gray-600">Library Fee</span>
                      <span className="font-semibold">₹5,000</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-gray-600">Other Charges</span>
                      <span className="font-semibold">₹5,000</span>
                    </div>
                    <div className="flex justify-between items-center py-2 pt-4 border-t-2 border-green-200">
                      <span className="text-lg font-bold text-gray-900">Total Annual Fee</span>
                      <span className="text-lg font-bold text-green-600">₹1,95,000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h4 className="font-semibold text-yellow-800 mb-2">Fee Concessions Available:</h4>
              <ul className="text-yellow-700 space-y-1">
                <li>• SC/ST students: 50% fee concession</li>
                <li>• Economically weaker sections: Up to 75% fee waiver</li>
                <li>• Merit scholarships: Based on JEE Main/GATE rank</li>
                <li>• Need-based financial aid available</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Required Documents</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">For B.Tech Admission</h3>
                <div className="space-y-3">
                  {[
                    "Class 10th Mark Sheet and Certificate",
                    "Class 12th Mark Sheet and Certificate",
                    "JEE Main/UPSEE Score Card",
                    "Transfer Certificate",
                    "Character Certificate",
                    "Category Certificate (if applicable)",
                    "Income Certificate (if applicable)",
                    "Passport Size Photographs (6 copies)",
                    "Aadhar Card Copy",
                    "Medical Certificate"
                  ].map((doc, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-gray-600">{doc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-green-600 mb-4">For M.Tech Admission</h3>
                <div className="space-y-3">
                  {[
                    "B.Tech Degree Certificate",
                    "All Semester Mark Sheets",
                    "GATE Score Card (if applicable)",
                    "Final Year Project Report",
                    "Experience Certificate (if applicable)",
                    "Category Certificate (if applicable)",
                    "Income Certificate (if applicable)",
                    "Passport Size Photographs (6 copies)",
                    "Aadhar Card Copy",
                    "Research Proposal (for some programs)"
                  ].map((doc, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-gray-600">{doc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Admission */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Need Help with Admissions?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our admission counselors are here to guide you through the entire process.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-blue-100">+91-5362-240455</p>
              <p className="text-blue-100">+91-5362-240456</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-blue-100">admissions@knit.ac.in</p>
              <p className="text-blue-100">info@knit.ac.in</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Visit</h3>
              <p className="text-blue-100">Admission Office</p>
              <p className="text-blue-100">Ground Floor, Main Building</p>
            </div>
          </div>
          <div className="mt-8">
            <Link
              href="/contact"
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
            >
              Contact Admission Office
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
