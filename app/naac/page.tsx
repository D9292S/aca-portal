import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NAAC Accreditation - KNIT Sultanpur',
  description: 'National Assessment and Accreditation Council (NAAC) accreditation details for KNIT Sultanpur',
  keywords: 'NAAC, accreditation, quality assurance, KNIT NAAC grade',
};

export default function NAAC() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">NAAC Accreditation</h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              National Assessment and Accreditation Council Recognition for Quality Education
            </p>
          </div>
        </div>
      </section>

      {/* NAAC Grade */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-lg mb-6">
              <div className="text-4xl font-bold">Grade A</div>
              <div className="text-green-100">NAAC Accredited</div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Quality Assurance Recognition</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              KNIT Sultanpur has been accredited with Grade A by NAAC, reflecting our commitment to academic excellence and quality education.
            </p>
          </div>
        </div>
      </section>

      {/* NAAC Criteria */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Seven Criteria Assessment</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our performance across the seven key criteria of NAAC assessment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Curricular Aspects</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Curriculum design, implementation, and enrichment aligned with industry requirements
              </p>
              <div className="bg-green-100 rounded-full h-2 mb-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
              <span className="text-xs text-green-600 font-semibold">Score: 3.4/4.0</span>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Teaching-Learning & Evaluation</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Student-centric learning approaches and continuous assessment methods
              </p>
              <div className="bg-green-100 rounded-full h-2 mb-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '80%' }}></div>
              </div>
              <span className="text-xs text-green-600 font-semibold">Score: 3.2/4.0</span>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Research, Innovation & Extension</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Research culture, innovation promotion, and community extension activities
              </p>
              <div className="bg-green-100 rounded-full h-2 mb-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
              <span className="text-xs text-green-600 font-semibold">Score: 3.0/4.0</span>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-bold">4</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Infrastructure & Learning Resources</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Physical infrastructure, library resources, and IT facilities
              </p>
              <div className="bg-green-100 rounded-full h-2 mb-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '90%' }}></div>
              </div>
              <span className="text-xs text-green-600 font-semibold">Score: 3.6/4.0</span>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-bold">5</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Student Support & Progression</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Student support services, career guidance, and progression tracking
              </p>
              <div className="bg-green-100 rounded-full h-2 mb-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
              <span className="text-xs text-green-600 font-semibold">Score: 3.4/4.0</span>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-bold">6</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Governance, Leadership & Management</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Institutional governance, leadership quality, and administrative efficiency
              </p>
              <div className="bg-green-100 rounded-full h-2 mb-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '80%' }}></div>
              </div>
              <span className="text-xs text-green-600 font-semibold">Score: 3.2/4.0</span>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg md:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-bold">7</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Institutional Values & Best Practices</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Environmental consciousness, human values, and innovative practices
              </p>
              <div className="bg-green-100 rounded-full h-2 mb-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
              <span className="text-xs text-green-600 font-semibold">Score: 3.4/4.0</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Key Achievements</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Strengths Recognized by NAAC</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                  <span>Strong industry-academia partnerships for practical learning</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                  <span>Excellent placement record with top-tier companies</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                  <span>Well-equipped laboratories and modern infrastructure</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                  <span>Active research culture with significant publications</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                  <span>Comprehensive student support and mentorship programs</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quality Indicators</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Faculty with PhD</span>
                  <span className="font-bold text-green-600">65%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Student-Faculty Ratio</span>
                  <span className="font-bold text-green-600">15:1</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Research Publications</span>
                  <span className="font-bold text-green-600">150+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Industry Collaborations</span>
                  <span className="font-bold text-green-600">25+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Placement Rate</span>
                  <span className="font-bold text-green-600">85%+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Digital Infrastructure</span>
                  <span className="font-bold text-green-600">Excellent</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">NAAC Documents</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access official NAAC accreditation documents and reports
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <a href="#" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow group">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-200 transition-colors">
                    <span className="text-red-600 text-xl">📄</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 group-hover:text-blue-600">Self Study Report (SSR)</h3>
                    <p className="text-gray-600 text-sm">Comprehensive institutional assessment</p>
                    <span className="text-xs text-gray-500">PDF • 5.2 MB</span>
                  </div>
                </div>
              </a>

              <a href="#" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow group">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                    <span className="text-green-600 text-xl">📊</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 group-hover:text-blue-600">NAAC Certificate</h3>
                    <p className="text-gray-600 text-sm">Official Grade A accreditation certificate</p>
                    <span className="text-xs text-gray-500">PDF • 1.8 MB</span>
                  </div>
                </div>
              </a>

              <a href="#" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow group">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <span className="text-blue-600 text-xl">📋</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 group-hover:text-blue-600">Peer Team Report</h3>
                    <p className="text-gray-600 text-sm">External evaluation team assessment</p>
                    <span className="text-xs text-gray-500">PDF • 3.4 MB</span>
                  </div>
                </div>
              </a>

              <a href="#" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow group">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center group-hover:bg-yellow-200 transition-colors">
                    <span className="text-yellow-600 text-xl">📈</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 group-hover:text-blue-600">Quality Enhancement Action Plan</h3>
                    <p className="text-gray-600 text-sm">Continuous improvement roadmap</p>
                    <span className="text-xs text-gray-500">PDF • 2.1 MB</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Commitment to Quality</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            NAAC accreditation reflects our unwavering commitment to academic excellence, 
            continuous improvement, and stakeholder satisfaction. We strive to maintain 
            and enhance our educational quality standards.
          </p>
          <div className="inline-block bg-yellow-500 text-blue-900 px-8 py-3 rounded-lg font-semibold">
            Grade A Accredited Institution
          </div>
        </div>
      </section>
    </div>
  );
}
