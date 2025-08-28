import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Research - KNIT Sultanpur',
  description: 'Research activities, projects, and collaborations at Kamla Nehru Institute of Technology, Sultanpur',
  keywords: 'research, projects, publications, collaborations, KNIT research, engineering research',
};

export default function Research() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Research & Innovation</h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Advancing knowledge through cutting-edge research in engineering, technology, and applied sciences
            </p>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Research Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our faculty and students are engaged in innovative research across multiple disciplines
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-blue-600 text-xl">⚙️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mechanical Engineering</h3>
              <p className="text-gray-600">Advanced manufacturing, thermal systems, and mechanical design</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-green-600 text-xl">💻</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Computer Science</h3>
              <p className="text-gray-600">AI/ML, data science, cybersecurity, and software engineering</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-yellow-600 text-xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Electrical Engineering</h3>
              <p className="text-gray-600">Power systems, renewable energy, and electronics</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-purple-600 text-xl">🏗️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Civil Engineering</h3>
              <p className="text-gray-600">Structural engineering, environmental engineering, and infrastructure</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-red-600 text-xl">🧪</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Chemical Engineering</h3>
              <p className="text-gray-600">Process engineering, materials science, and biotechnology</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-indigo-600 text-xl">📡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Electronics & Communication</h3>
              <p className="text-gray-600">Wireless communication, embedded systems, and signal processing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Statistics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Research Impact</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
              <div className="text-gray-600">Research Papers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">25+</div>
              <div className="text-gray-600">Ongoing Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">50+</div>
              <div className="text-gray-600">Patents Filed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">₹5Cr+</div>
              <div className="text-gray-600">Research Funding</div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Facilities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Research Facilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              State-of-the-art laboratories and equipment to support cutting-edge research
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Central Research Laboratory</h3>
              <p className="text-gray-600 mb-4">Advanced instrumentation and analytical facilities</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• SEM/TEM facilities</li>
                <li>• XRD and spectroscopy</li>
                <li>• Material testing equipment</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Computer Center</h3>
              <p className="text-gray-600 mb-4">High-performance computing resources</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• GPU clusters for AI/ML</li>
                <li>• Simulation software</li>
                <li>• Cloud computing access</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation Hub</h3>
              <p className="text-gray-600 mb-4">Startup incubation and prototype development</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 3D printing facilities</li>
                <li>• Electronics lab</li>
                <li>• Mentorship programs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Publications & Collaborations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Recent Publications</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="font-bold text-gray-900 mb-2">Machine Learning Applications in Smart Cities</h3>
                  <p className="text-gray-600 text-sm mb-2">Dr. Rajesh Kumar et al. - IEEE Transactions on Smart Grid (2024)</p>
                  <p className="text-gray-700 text-sm">Advanced ML algorithms for urban infrastructure optimization and energy management systems.</p>
                </div>
                
                <div className="border-l-4 border-green-600 pl-6">
                  <h3 className="font-bold text-gray-900 mb-2">Sustainable Manufacturing Processes</h3>
                  <p className="text-gray-600 text-sm mb-2">Dr. Priya Sharma et al. - Journal of Manufacturing Science (2024)</p>
                  <p className="text-gray-700 text-sm">Innovative approaches to reduce environmental impact in manufacturing industries.</p>
                </div>
                
                <div className="border-l-4 border-yellow-600 pl-6">
                  <h3 className="font-bold text-gray-900 mb-2">Renewable Energy Systems Integration</h3>
                  <p className="text-gray-600 text-sm mb-2">Dr. Amit Singh et al. - Renewable Energy Journal (2023)</p>
                  <p className="text-gray-700 text-sm">Grid integration challenges and solutions for renewable energy sources.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Industry Collaborations</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">DRDO Partnership</h3>
                  <p className="text-gray-600 mb-2">Defense technology research and development</p>
                  <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Active</span>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">Industry 4.0 Initiative</h3>
                  <p className="text-gray-600 mb-2">Collaboration with leading manufacturing companies</p>
                  <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Ongoing</span>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">Smart City Projects</h3>
                  <p className="text-gray-600 mb-2">IoT and AI solutions for urban development</p>
                  <span className="inline-block bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Planning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
