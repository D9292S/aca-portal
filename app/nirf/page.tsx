import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NIRF Ranking - KNIT Sultanpur',
  description: 'National Institutional Ranking Framework (NIRF) performance and rankings of KNIT Sultanpur',
  keywords: 'NIRF, ranking, institutional ranking, KNIT ranking, engineering ranking',
};

export default function NIRF() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-purple-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">NIRF Rankings</h1>
            <p className="text-xl md:text-2xl text-purple-100 leading-relaxed">
              National Institutional Ranking Framework Performance & Recognition
            </p>
          </div>
        </div>
      </section>

      {/* Current Rankings */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Current NIRF Rankings</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              KNIT Sultanpur's performance in national institutional rankings across different categories
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-8 rounded-lg text-center">
              <div className="text-5xl font-bold mb-2">151-200</div>
              <div className="text-orange-100 text-lg font-semibold">Engineering Category</div>
              <div className="text-orange-200 text-sm mt-2">NIRF 2023</div>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 rounded-lg text-center">
              <div className="text-5xl font-bold mb-2">301-400</div>
              <div className="text-blue-100 text-lg font-semibold">Overall Category</div>
              <div className="text-blue-200 text-sm mt-2">NIRF 2023</div>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-8 rounded-lg text-center">
              <div className="text-5xl font-bold mb-2">201-250</div>
              <div className="text-green-100 text-lg font-semibold">Innovation Category</div>
              <div className="text-green-200 text-sm mt-2">NIRF 2023</div>
            </div>
          </div>
        </div>
      </section>

      {/* Ranking Trends */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ranking Progress</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Year-on-year improvement in NIRF rankings demonstrates our commitment to excellence
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Engineering Category Trend</h3>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      2023
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-gray-900">Rank 151-200</div>
                      <div className="text-purple-600 text-sm">Engineering Category</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-green-600 font-semibold">↑ Improved</div>
                    <div className="text-gray-500 text-sm">vs. Previous Year</div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                      2022
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-gray-900">Rank 201-250</div>
                      <div className="text-blue-600 text-sm">Engineering Category</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-green-600 font-semibold">↑ Improved</div>
                    <div className="text-gray-500 text-sm">vs. 2021</div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center text-white font-bold">
                      2021
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-gray-900">Rank 251-300</div>
                      <div className="text-gray-600 text-sm">Engineering Category</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-blue-600 font-semibold">First Entry</div>
                    <div className="text-gray-500 text-sm">In this range</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NIRF Parameters */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">NIRF Assessment Parameters</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Five key parameters used in NIRF ranking methodology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-blue-500 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl">🎓</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Teaching, Learning & Resources</h3>
              <div className="text-3xl font-bold text-blue-600 mb-1">30%</div>
              <p className="text-gray-600 text-sm">Faculty-student ratio, infrastructure, financial resources</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-green-500 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">🔬</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Research & Professional Practice</h3>
              <div className="text-3xl font-bold text-green-600 mb-1">30%</div>
              <p className="text-gray-600 text-sm">Publications, patents, research projects, consultancy</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-purple-500 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Graduation Outcomes</h3>
              <div className="text-3xl font-bold text-purple-600 mb-1">20%</div>
              <p className="text-gray-600 text-sm">Graduation rate, placement, higher studies, entrepreneurship</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-orange-500 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 text-2xl">🌍</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Outreach & Inclusivity</h3>
              <div className="text-3xl font-bold text-orange-600 mb-1">10%</div>
              <p className="text-gray-600 text-sm">Diversity, social inclusion, regional engagement</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-red-500 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 text-2xl">👁️</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Perception</h3>
              <div className="text-3xl font-bold text-red-600 mb-1">10%</div>
              <p className="text-gray-600 text-sm">Peer perception, employer feedback, public perception</p>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Performance Highlights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key strengths contributing to our NIRF ranking performance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600">📊</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Faculty Strength</h3>
              </div>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Faculty with PhD:</span>
                  <span className="font-semibold text-blue-600">65%</span>
                </div>
                <div className="flex justify-between">
                  <span>Student-Faculty Ratio:</span>
                  <span className="font-semibold text-blue-600">15:1</span>
                </div>
                <div className="flex justify-between">
                  <span>Experience {'>'}10 years:</span>
                  <span className="font-semibold text-blue-600">45%</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-green-600">🔬</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Research Output</h3>
              </div>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Publications (2022-23):</span>
                  <span className="font-semibold text-green-600">150+</span>
                </div>
                <div className="flex justify-between">
                  <span>Indexed Publications:</span>
                  <span className="font-semibold text-green-600">120+</span>
                </div>
                <div className="flex justify-between">
                  <span>Research Projects:</span>
                  <span className="font-semibold text-green-600">25+</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-purple-600">🎯</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Placement Success</h3>
              </div>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Placement Rate:</span>
                  <span className="font-semibold text-purple-600">85%+</span>
                </div>
                <div className="flex justify-between">
                  <span>Average Package:</span>
                  <span className="font-semibold text-purple-600">₹6.5L</span>
                </div>
                <div className="flex justify-between">
                  <span>Highest Package:</span>
                  <span className="font-semibold text-purple-600">₹25L</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <span className="text-orange-600">🏢</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Infrastructure</h3>
              </div>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Campus Area:</span>
                  <span className="font-semibold text-orange-600">208 Acres</span>
                </div>
                <div className="flex justify-between">
                  <span>Laboratories:</span>
                  <span className="font-semibold text-orange-600">45+</span>
                </div>
                <div className="flex justify-between">
                  <span>Library Books:</span>
                  <span className="font-semibold text-orange-600">75,000+</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                  <span className="text-teal-600">🌍</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Diversity & Inclusion</h3>
              </div>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>States Represented:</span>
                  <span className="font-semibold text-teal-600">15+</span>
                </div>
                <div className="flex justify-between">
                  <span>Female Students:</span>
                  <span className="font-semibold text-teal-600">20%</span>
                </div>
                <div className="flex justify-between">
                  <span>International Students:</span>
                  <span className="font-semibold text-teal-600">25+</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <span className="text-red-600">👁️</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Recognition</h3>
              </div>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>NAAC Grade:</span>
                  <span className="font-semibold text-red-600">A</span>
                </div>
                <div className="flex justify-between">
                  <span>NBA Accreditation:</span>
                  <span className="font-semibold text-red-600">4 Programs</span>
                </div>
                <div className="flex justify-between">
                  <span>Industry Rating:</span>
                  <span className="font-semibold text-red-600">4.2/5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Improvement Initiatives */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Continuous Improvement Initiatives</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic actions to enhance our NIRF ranking performance
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Academic Excellence</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                    <span>Faculty development and PhD enrollment programs</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                    <span>Industry-aligned curriculum updates and certifications</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                    <span>Advanced laboratory and infrastructure upgrades</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                    <span>International collaborations and exchange programs</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Research & Innovation</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                    <span>Research funding and grant application support</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                    <span>Publication incentives and quality improvement</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                    <span>Innovation and incubation center development</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                    <span>Industry-academia research partnerships</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Student Success</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mt-2"></span>
                    <span>Enhanced placement support and career guidance</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mt-2"></span>
                    <span>Entrepreneurship development and startup support</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mt-2"></span>
                    <span>Higher studies and competitive exam coaching</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mt-2"></span>
                    <span>Alumni engagement and mentorship programs</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Institutional Development</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mt-2"></span>
                    <span>Digital transformation and e-governance initiatives</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mt-2"></span>
                    <span>Quality assurance and accreditation processes</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mt-2"></span>
                    <span>Sustainable campus and environmental initiatives</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mt-2"></span>
                    <span>Community engagement and social responsibility</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">NIRF Documents</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access official NIRF ranking data and institutional reports
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <a href="#" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow group">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                    <span className="text-purple-600 text-xl">📊</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 group-hover:text-blue-600">NIRF Data Template 2023</h3>
                    <p className="text-gray-600 text-sm">Complete institutional data submission</p>
                    <span className="text-xs text-gray-500">Excel • 2.8 MB</span>
                  </div>
                </div>
              </a>

              <a href="#" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow group">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                    <span className="text-orange-600 text-xl">🏆</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 group-hover:text-blue-600">Ranking Results</h3>
                    <p className="text-gray-600 text-sm">Official NIRF ranking certificates</p>
                    <span className="text-xs text-gray-500">PDF Bundle • 3.2 MB</span>
                  </div>
                </div>
              </a>

              <a href="#" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow group">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                    <span className="text-green-600 text-xl">📈</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 group-hover:text-blue-600">Performance Analysis</h3>
                    <p className="text-gray-600 text-sm">Detailed parameter-wise analysis</p>
                    <span className="text-xs text-gray-500">PDF • 1.9 MB</span>
                  </div>
                </div>
              </a>

              <a href="#" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow group">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <span className="text-blue-600 text-xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 group-hover:text-blue-600">Improvement Action Plan</h3>
                    <p className="text-gray-600 text-sm">Strategic roadmap for ranking improvement</p>
                    <span className="text-xs text-gray-500">PDF • 2.5 MB</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Target */}
      <section className="py-16 bg-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our NIRF Vision</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            We are committed to achieving top 100 position in NIRF Engineering 
            category by 2026 through strategic improvements in all assessment parameters.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-purple-800 p-6 rounded-lg">
              <div className="text-3xl font-bold mb-2">100</div>
              <div className="text-purple-200">Target Engineering Rank</div>
              <div className="text-purple-300 text-sm">by 2026</div>
            </div>
            <div className="bg-purple-800 p-6 rounded-lg">
              <div className="text-3xl font-bold mb-2">200</div>
              <div className="text-purple-200">Target Overall Rank</div>
              <div className="text-purple-300 text-sm">by 2027</div>
            </div>
            <div className="bg-purple-800 p-6 rounded-lg">
              <div className="text-3xl font-bold mb-2">75</div>
              <div className="text-purple-200">Target Innovation Rank</div>
              <div className="text-purple-300 text-sm">by 2025</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
