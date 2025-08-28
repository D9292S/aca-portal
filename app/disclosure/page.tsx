import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclosures - KNIT Sultanpur',
  description: 'Mandatory disclosures, transparency information, and regulatory compliance details for KNIT Sultanpur',
  keywords: 'disclosure, transparency, mandatory disclosure, KNIT compliance, regulatory information',
};

export default function Disclosure() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 to-indigo-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Mandatory Disclosures</h1>
            <p className="text-xl md:text-2xl text-indigo-100 leading-relaxed">
              Transparency & Regulatory Compliance Information
            </p>
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="#basic-info" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow group">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <span className="text-blue-600 text-2xl">🏫</span>
                </div>
                <h3 className="font-bold text-gray-900 group-hover:text-blue-600">Basic Information</h3>
                <p className="text-gray-600 text-sm mt-2">Institution details and legal status</p>
              </div>
            </a>

            <a href="#academic-info" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow group">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <span className="text-green-600 text-2xl">📚</span>
                </div>
                <h3 className="font-bold text-gray-900 group-hover:text-blue-600">Academic Information</h3>
                <p className="text-gray-600 text-sm mt-2">Programs, admissions and academic policies</p>
              </div>
            </a>

            <a href="#financial-info" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow group">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-200 transition-colors">
                  <span className="text-yellow-600 text-2xl">💰</span>
                </div>
                <h3 className="font-bold text-gray-900 group-hover:text-blue-600">Financial Information</h3>
                <p className="text-gray-600 text-sm mt-2">Fee structure, financial statements</p>
              </div>
            </a>

            <a href="#faculty-info" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow group">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <span className="text-purple-600 text-2xl">👨‍🏫</span>
                </div>
                <h3 className="font-bold text-gray-900 group-hover:text-blue-600">Faculty Information</h3>
                <p className="text-gray-600 text-sm mt-2">Faculty profiles and qualifications</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Basic Information */}
      <section id="basic-info" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Basic Information</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fundamental institutional details and legal compliance information
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Institution Details</h3>
                <div className="space-y-4">
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">Name of Institution:</span>
                    <span className="font-semibold text-gray-900">Kamla Nehru Institute of Technology</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">Abbreviation:</span>
                    <span className="font-semibold text-gray-900">KNIT</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">Type of Institution:</span>
                    <span className="font-semibold text-gray-900">Government</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">University Affiliation:</span>
                    <span className="font-semibold text-gray-900">Dr. A.P.J. Abdul Kalam Technical University</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">Establishment Year:</span>
                    <span className="font-semibold text-gray-900">1976</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">Recognition Status:</span>
                    <span className="font-semibold text-green-600">Recognized by AICTE & UGC</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex flex-col border-b pb-2">
                    <span className="text-gray-600">Address:</span>
                    <span className="font-semibold text-gray-900">Sultanpur, Uttar Pradesh - 228118, India</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">Phone:</span>
                    <span className="font-semibold text-gray-900">+91-5362-240454</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">Fax:</span>
                    <span className="font-semibold text-gray-900">+91-5362-240456</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">Email:</span>
                    <span className="font-semibold text-gray-900">director@knit.ac.in</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">Website:</span>
                    <span className="font-semibold text-gray-900">www.knit.ac.in</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">Campus Area:</span>
                    <span className="font-semibold text-gray-900">208 Acres</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Information */}
      <section id="academic-info" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Academic Information</h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Programs Offered</h3>
                <div className="space-y-3 text-sm">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-900">B.Tech Programs</h4>
                    <p className="text-gray-600">8 Undergraduate Engineering Programs</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-gray-900">M.Tech Programs</h4>
                    <p className="text-gray-600">12 Postgraduate Engineering Programs</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-gray-900">PhD Programs</h4>
                    <p className="text-gray-600">Research Programs in All Departments</p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-semibold text-gray-900">MCA Program</h4>
                    <p className="text-gray-600">Master of Computer Applications</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Admission Information</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">B.Tech Admission</h4>
                    <p className="text-gray-600">Through JEE Main & UP JEE</p>
                    <p className="text-gray-600">Annual Intake: 440 students</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">M.Tech Admission</h4>
                    <p className="text-gray-600">Through GATE Score</p>
                    <p className="text-gray-600">Annual Intake: 108 students</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">PhD Admission</h4>
                    <p className="text-gray-600">Through Written Test & Interview</p>
                    <p className="text-gray-600">Annual Intake: 40+ students</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">MCA Admission</h4>
                    <p className="text-gray-600">Through UPCET</p>
                    <p className="text-gray-600">Annual Intake: 60 students</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Academic Policies</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Examination System</h4>
                    <p className="text-gray-600">Semester-based with continuous assessment</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Grading System</h4>
                    <p className="text-gray-600">10-point SGPA/CGPA system</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Minimum Attendance</h4>
                    <p className="text-gray-600">75% in theory and practical classes</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Academic Calendar</h4>
                    <p className="text-gray-600">Two semesters per academic year</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Anti-Ragging Policy</h4>
                    <p className="text-gray-600">Strictly enforced zero-tolerance policy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Information */}
      <section id="financial-info" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Financial Information</h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Fee Structure (Annual)</h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">B.Tech Programs</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tuition Fee:</span>
                        <span className="font-semibold">₹87,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Hostel Fee:</span>
                        <span className="font-semibold">₹18,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Mess Fee:</span>
                        <span className="font-semibold">₹36,000</span>
                      </div>
                      <div className="flex justify-between border-t pt-2">
                        <span className="text-gray-900 font-semibold">Total:</span>
                        <span className="font-bold text-blue-600">₹1,41,000</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">M.Tech Programs</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tuition Fee:</span>
                        <span className="font-semibold">₹62,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Hostel Fee:</span>
                        <span className="font-semibold">₹18,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Mess Fee:</span>
                        <span className="font-semibold">₹36,000</span>
                      </div>
                      <div className="flex justify-between border-t pt-2">
                        <span className="text-gray-900 font-semibold">Total:</span>
                        <span className="font-bold text-green-600">₹1,16,000</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">MCA Program</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tuition Fee:</span>
                        <span className="font-semibold">₹42,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Hostel Fee:</span>
                        <span className="font-semibold">₹18,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Mess Fee:</span>
                        <span className="font-semibold">₹36,000</span>
                      </div>
                      <div className="flex justify-between border-t pt-2">
                        <span className="text-gray-900 font-semibold">Total:</span>
                        <span className="font-bold text-purple-600">₹96,000</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Financial Assistance</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Government Scholarships</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• UP Government Scholarship for SC/ST/OBC</li>
                      <li>• Central Government Post Matric Scholarship</li>
                      <li>• Merit-cum-Means Scholarship</li>
                      <li>• Minority Scholarship Schemes</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Fee Concessions</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Free education for EWS category (100%)</li>
                      <li>• Fee waiver for meritorious students</li>
                      <li>• Defense personnel ward concession</li>
                      <li>• Girl child fee concession</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Educational Loans</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Tie-ups with major nationalized banks</li>
                      <li>• Simplified loan processing</li>
                      <li>• Interest subsidy schemes available</li>
                      <li>• Collateral-free loans up to ₹7.5 lakh</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Emergency Financial Support</h4>
                    <p className="text-sm text-gray-600">
                      Student welfare fund available for genuine hardship cases. 
                      Contact Student Affairs Office for assistance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Information */}
      <section id="faculty-info" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Faculty Information</h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">120+</div>
                <div className="text-gray-900 font-semibold">Total Faculty</div>
                <div className="text-gray-600 text-sm">All Departments</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">65%</div>
                <div className="text-gray-900 font-semibold">PhD Holders</div>
                <div className="text-gray-600 text-sm">Qualified Faculty</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">15:1</div>
                <div className="text-gray-900 font-semibold">Student-Faculty Ratio</div>
                <div className="text-gray-600 text-sm">Optimal Learning</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">12+</div>
                <div className="text-gray-900 font-semibold">Average Experience</div>
                <div className="text-gray-600 text-sm">Years in Teaching</div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Department-wise Faculty Strength</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="font-semibold text-gray-900">Computer Science & Engineering</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">18</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="font-semibold text-gray-900">Electronics & Communication</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">16</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="font-semibold text-gray-900">Mechanical Engineering</span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">15</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="font-semibold text-gray-900">Electrical Engineering</span>
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">14</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="font-semibold text-gray-900">Civil Engineering</span>
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">12</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="font-semibold text-gray-900">Information Technology</span>
                    <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-semibold">11</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="font-semibold text-gray-900">Basic Sciences</span>
                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-semibold">20</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="font-semibold text-gray-900">Master of Computer Applications</span>
                    <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-semibold">8</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Documents */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Important Documents</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access mandatory disclosure documents and regulatory compliance certificates
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <a href="#" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow group">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <span className="text-blue-600 text-xl">📜</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 group-hover:text-blue-600">AICTE Approval Letter</h3>
                    <p className="text-gray-600 text-sm">Current academic year approval</p>
                    <span className="text-xs text-gray-500">PDF • 2.1 MB</span>
                  </div>
                </div>
              </a>

              <a href="#" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow group">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                    <span className="text-green-600 text-xl">🏆</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 group-hover:text-blue-600">University Affiliation</h3>
                    <p className="text-gray-600 text-sm">AKTU affiliation certificate</p>
                    <span className="text-xs text-gray-500">PDF • 1.8 MB</span>
                  </div>
                </div>
              </a>

              <a href="#" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow group">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                    <span className="text-purple-600 text-xl">📊</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 group-hover:text-blue-600">Annual Report</h3>
                    <p className="text-gray-600 text-sm">Comprehensive annual performance report</p>
                    <span className="text-xs text-gray-500">PDF • 8.5 MB</span>
                  </div>
                </div>
              </a>

              <a href="#" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow group">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                    <span className="text-orange-600 text-xl">💰</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 group-hover:text-blue-600">Audited Financial Statement</h3>
                    <p className="text-gray-600 text-sm">Annual financial audit report</p>
                    <span className="text-xs text-gray-500">PDF • 4.2 MB</span>
                  </div>
                </div>
              </a>

              <a href="#" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow group">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-200 transition-colors">
                    <span className="text-red-600 text-xl">⚖️</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 group-hover:text-blue-600">Grievance Policy</h3>
                    <p className="text-gray-600 text-sm">Student grievance redressal mechanism</p>
                    <span className="text-xs text-gray-500">PDF • 1.2 MB</span>
                  </div>
                </div>
              </a>

              <a href="#" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow group">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center group-hover:bg-teal-200 transition-colors">
                    <span className="text-teal-600 text-xl">🔒</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 group-hover:text-blue-600">Anti-Ragging Certificate</h3>
                    <p className="text-gray-600 text-sm">Compliance with anti-ragging regulations</p>
                    <span className="text-xs text-gray-500">PDF • 0.8 MB</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Disclosures */}
      <section className="py-16 bg-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Information Request</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            For additional information or clarification regarding disclosures, 
            contact our transparency and compliance office.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-indigo-800 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Registrar Office</h3>
              <p className="text-indigo-200 text-sm mb-2">Academic & Administrative Queries</p>
              <p className="text-indigo-200 text-sm">registrar@knit.ac.in</p>
              <p className="text-indigo-200 text-sm">+91-5362-240455</p>
            </div>
            <div className="bg-indigo-800 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Public Information Officer</h3>
              <p className="text-indigo-200 text-sm mb-2">RTI & Transparency Queries</p>
              <p className="text-indigo-200 text-sm">pio@knit.ac.in</p>
              <p className="text-indigo-200 text-sm">+91-5362-240457</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
