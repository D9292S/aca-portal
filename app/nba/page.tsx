import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NBA Accreditation - KNIT Sultanpur',
  description: 'National Board of Accreditation (NBA) program accreditation details for KNIT Sultanpur',
  keywords: 'NBA, program accreditation, engineering accreditation, KNIT NBA status',
};

export default function NBA() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">NBA Accreditation</h1>
            <p className="text-xl md:text-2xl text-green-100 leading-relaxed">
              National Board of Accreditation for Engineering & Technology Programs
            </p>
          </div>
        </div>
      </section>

      {/* Accreditation Status */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-lg mb-6">
              <div className="text-2xl font-bold">NBA Accredited Programs</div>
              <div className="text-green-100">Multiple Engineering Disciplines</div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Program Accreditation Status</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our engineering programs are accredited by the National Board of Accreditation, 
              ensuring quality education that meets international standards.
            </p>
          </div>
        </div>
      </section>

      {/* Accredited Programs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">NBA Accredited Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Engineering programs recognized for their quality and excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">Computer Science & Engineering</h3>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                  Accredited
                </span>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Accreditation Period:</span>
                  <span className="font-semibold">2021-2024</span>
                </div>
                <div className="flex justify-between">
                  <span>Status:</span>
                  <span className="text-green-600 font-semibold">Valid</span>
                </div>
                <div className="flex justify-between">
                  <span>Next Review:</span>
                  <span className="font-semibold">2024</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">Electronics & Communication</h3>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                  Accredited
                </span>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Accreditation Period:</span>
                  <span className="font-semibold">2020-2023</span>
                </div>
                <div className="flex justify-between">
                  <span>Status:</span>
                  <span className="text-green-600 font-semibold">Valid</span>
                </div>
                <div className="flex justify-between">
                  <span>Next Review:</span>
                  <span className="font-semibold">2023</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">Mechanical Engineering</h3>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                  Accredited
                </span>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Accreditation Period:</span>
                  <span className="font-semibold">2022-2025</span>
                </div>
                <div className="flex justify-between">
                  <span>Status:</span>
                  <span className="text-green-600 font-semibold">Valid</span>
                </div>
                <div className="flex justify-between">
                  <span>Next Review:</span>
                  <span className="font-semibold">2025</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">Electrical Engineering</h3>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                  Accredited
                </span>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Accreditation Period:</span>
                  <span className="font-semibold">2021-2024</span>
                </div>
                <div className="flex justify-between">
                  <span>Status:</span>
                  <span className="text-green-600 font-semibold">Valid</span>
                </div>
                <div className="flex justify-between">
                  <span>Next Review:</span>
                  <span className="font-semibold">2024</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-yellow-500">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">Civil Engineering</h3>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-semibold">
                  Under Review
                </span>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Application Status:</span>
                  <span className="font-semibold">Submitted</span>
                </div>
                <div className="flex justify-between">
                  <span>Review Stage:</span>
                  <span className="text-yellow-600 font-semibold">In Progress</span>
                </div>
                <div className="flex justify-between">
                  <span>Expected Decision:</span>
                  <span className="font-semibold">Q2 2024</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">Information Technology</h3>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                  Preparing
                </span>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Preparation Stage:</span>
                  <span className="font-semibold">Documentation</span>
                </div>
                <div className="flex justify-between">
                  <span>Status:</span>
                  <span className="text-blue-600 font-semibold">In Preparation</span>
                </div>
                <div className="flex justify-between">
                  <span>Target Submission:</span>
                  <span className="font-semibold">Q3 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NBA Criteria */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">NBA Assessment Criteria</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key parameters evaluated during NBA accreditation process
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Program Educational Objectives</h3>
              <p className="text-gray-600 text-sm">Clear goals aligned with institutional mission</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📚</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Student Outcomes</h3>
              <p className="text-gray-600 text-sm">Graduate attributes and competency achievement</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">👥</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Continuous Improvement</h3>
              <p className="text-gray-600 text-sm">Systematic assessment and enhancement</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⚙️</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Curriculum Design</h3>
              <p className="text-gray-600 text-sm">Industry-relevant and outcome-based curriculum</p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">👨‍🏫</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Faculty Qualifications</h3>
              <p className="text-gray-600 text-sm">Qualified and experienced teaching staff</p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏢</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Infrastructure & Facilities</h3>
              <p className="text-gray-600 text-sm">Adequate laboratories and learning resources</p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🤝</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Institutional Support</h3>
              <p className="text-gray-600 text-sm">Leadership commitment and resource allocation</p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎓</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Student Performance</h3>
              <p className="text-gray-600 text-sm">Academic achievement and career success</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Benefits of NBA Accreditation</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">For Students</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Quality assurance in education and training</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Enhanced employability and career prospects</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>International recognition and mobility</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Industry-relevant curriculum and practical exposure</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Better preparation for professional practice</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">For Institution</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Enhanced institutional credibility and reputation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Systematic quality improvement process</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Better industry partnerships and collaborations</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Improved faculty development and research culture</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Enhanced student recruitment and placement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">NBA Documents</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access official NBA accreditation documents and reports
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <a href="#" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow group">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                    <span className="text-green-600 text-xl">🏆</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 group-hover:text-blue-600">NBA Certificates</h3>
                    <p className="text-gray-600 text-sm">Accreditation certificates for all programs</p>
                    <span className="text-xs text-gray-500">PDF Bundle • 8.5 MB</span>
                  </div>
                </div>
              </a>

              <a href="#" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow group">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <span className="text-blue-600 text-xl">📋</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 group-hover:text-blue-600">Self Assessment Reports</h3>
                    <p className="text-gray-600 text-sm">Program-wise assessment documentation</p>
                    <span className="text-xs text-gray-500">PDF Bundle • 12.3 MB</span>
                  </div>
                </div>
              </a>

              <a href="#" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow group">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                    <span className="text-purple-600 text-xl">📊</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 group-hover:text-blue-600">Visit Team Reports</h3>
                    <p className="text-gray-600 text-sm">External evaluator assessment reports</p>
                    <span className="text-xs text-gray-500">PDF Bundle • 6.7 MB</span>
                  </div>
                </div>
              </a>

              <a href="#" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow group">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                    <span className="text-orange-600 text-xl">🔄</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 group-hover:text-blue-600">Continuous Improvement Plans</h3>
                    <p className="text-gray-600 text-sm">Quality enhancement action plans</p>
                    <span className="text-xs text-gray-500">PDF Bundle • 4.2 MB</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-green-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">NBA Coordination Office</h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            For inquiries related to NBA accreditation status, documentation, 
            or quality assurance processes, contact our NBA coordination office.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-green-800 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Dr. NBA Coordinator</h3>
              <p className="text-green-200 text-sm mb-2">NBA Accreditation Office</p>
              <p className="text-green-200 text-sm">nba.coordinator@knit.ac.in</p>
              <p className="text-green-200 text-sm">+91-5362-266986</p>
            </div>
            <div className="bg-green-800 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Quality Assurance Cell</h3>
              <p className="text-green-200 text-sm mb-2">Academic Quality Office</p>
              <p className="text-green-200 text-sm">qac@knit.ac.in</p>
              <p className="text-green-200 text-sm">+91-5362-266987</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
