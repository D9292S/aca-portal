import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Departments - KNIT Sultanpur',
  description: 'Academic departments and engineering programs at Kamla Nehru Institute of Technology, Sultanpur',
  keywords: 'departments, engineering programs, CSE, mechanical, electrical, civil, ECE, chemical',
};

export default function Departments() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Academic Departments</h1>
            <p className="text-xl md:text-2xl text-green-100 leading-relaxed">
              Six distinguished engineering departments offering comprehensive undergraduate and postgraduate programs
            </p>
          </div>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Computer Science & Engineering */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-blue-600 text-white p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">💻</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Computer Science & Engineering</h2>
                    <p className="text-blue-100">Established: 1979</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Programs Offered</h3>
                <ul className="text-gray-600 space-y-1 mb-4">
                  <li>• B.Tech in Computer Science & Engineering</li>
                  <li>• M.Tech in Computer Science & Engineering</li>
                  <li>• MCA (Master of Computer Applications)</li>
                </ul>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Specializations</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Artificial Intelligence</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Machine Learning</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Data Science</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Cybersecurity</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Software Engineering</span>
                </div>
                <p className="text-gray-600 text-sm">
                  <strong>Faculty:</strong> 25+ experienced faculty members | <strong>Intake:</strong> 120 (B.Tech), 18 (M.Tech), 60 (MCA)
                </p>
              </div>
            </div>

            {/* Mechanical Engineering */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-green-600 text-white p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">⚙️</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Mechanical Engineering</h2>
                    <p className="text-green-100">Established: 1979</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Programs Offered</h3>
                <ul className="text-gray-600 space-y-1 mb-4">
                  <li>• B.Tech in Mechanical Engineering</li>
                  <li>• M.Tech in Mechanical Engineering</li>
                  <li>• M.Tech in Production Engineering</li>
                </ul>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Specializations</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Manufacturing</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Thermal Engineering</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Design Engineering</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Robotics</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">CAD/CAM</span>
                </div>
                <p className="text-gray-600 text-sm">
                  <strong>Faculty:</strong> 22+ experienced faculty members | <strong>Intake:</strong> 120 (B.Tech), 18 (M.Tech)
                </p>
              </div>
            </div>

            {/* Electrical Engineering */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-yellow-600 text-white p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-yellow-500 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Electrical Engineering</h2>
                    <p className="text-yellow-100">Established: 1979</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Programs Offered</h3>
                <ul className="text-gray-600 space-y-1 mb-4">
                  <li>• B.Tech in Electrical Engineering</li>
                  <li>• M.Tech in Electrical Engineering</li>
                  <li>• M.Tech in Power Systems</li>
                </ul>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Specializations</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Power Systems</span>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Renewable Energy</span>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Control Systems</span>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Electrical Machines</span>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Power Electronics</span>
                </div>
                <p className="text-gray-600 text-sm">
                  <strong>Faculty:</strong> 20+ experienced faculty members | <strong>Intake:</strong> 60 (B.Tech), 18 (M.Tech)
                </p>
              </div>
            </div>

            {/* Civil Engineering */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-purple-600 text-white p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🏗️</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Civil Engineering</h2>
                    <p className="text-purple-100">Established: 1979</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Programs Offered</h3>
                <ul className="text-gray-600 space-y-1 mb-4">
                  <li>• B.Tech in Civil Engineering</li>
                  <li>• M.Tech in Structural Engineering</li>
                  <li>• M.Tech in Environmental Engineering</li>
                </ul>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Specializations</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Structural Design</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Environmental Eng.</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Geotechnical Eng.</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Water Resources</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Construction Mgmt.</span>
                </div>
                <p className="text-gray-600 text-sm">
                  <strong>Faculty:</strong> 18+ experienced faculty members | <strong>Intake:</strong> 60 (B.Tech), 18 (M.Tech)
                </p>
              </div>
            </div>

            {/* Electronics & Communication Engineering */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-red-600 text-white p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📡</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Electronics & Communication Engineering</h2>
                    <p className="text-red-100">Established: 1988</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Programs Offered</h3>
                <ul className="text-gray-600 space-y-1 mb-4">
                  <li>• B.Tech in Electronics & Communication Engineering</li>
                  <li>• M.Tech in Electronics & Communication Engineering</li>
                  <li>• M.Tech in VLSI Design</li>
                </ul>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Specializations</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">VLSI Design</span>
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">Communication Systems</span>
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">Signal Processing</span>
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">Embedded Systems</span>
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">IoT</span>
                </div>
                <p className="text-gray-600 text-sm">
                  <strong>Faculty:</strong> 16+ experienced faculty members | <strong>Intake:</strong> 60 (B.Tech), 18 (M.Tech)
                </p>
              </div>
            </div>

            {/* Chemical Engineering */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-indigo-600 text-white p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-indigo-500 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🧪</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Chemical Engineering</h2>
                    <p className="text-indigo-100">Established: 1995</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Programs Offered</h3>
                <ul className="text-gray-600 space-y-1 mb-4">
                  <li>• B.Tech in Chemical Engineering</li>
                  <li>• M.Tech in Chemical Engineering</li>
                  <li>• M.Tech in Biotechnology</li>
                </ul>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Specializations</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs">Process Engineering</span>
                  <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs">Biotechnology</span>
                  <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs">Materials Science</span>
                  <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs">Petroleum Engineering</span>
                  <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs">Environmental Tech.</span>
                </div>
                <p className="text-gray-600 text-sm">
                  <strong>Faculty:</strong> 14+ experienced faculty members | <strong>Intake:</strong> 60 (B.Tech), 18 (M.Tech)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Academic Strength</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">115+</div>
              <div className="text-gray-600">Faculty Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">2000+</div>
              <div className="text-gray-600">Students</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">15</div>
              <div className="text-gray-600">Academic Programs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">85%+</div>
              <div className="text-gray-600">Placement Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Labs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Research & Laboratories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              State-of-the-art laboratories and research facilities across all departments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Advanced Computing Lab</h3>
              <p className="text-gray-600 text-sm mb-3">High-performance computing systems for AI/ML research and software development</p>
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">CSE Department</span>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Manufacturing Lab</h3>
              <p className="text-gray-600 text-sm mb-3">CNC machines, 3D printers, and advanced manufacturing equipment</p>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Mechanical Dept</span>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Power Systems Lab</h3>
              <p className="text-gray-600 text-sm mb-3">Electrical machines, power electronics, and renewable energy systems</p>
              <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Electrical Dept</span>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Structural Testing Lab</h3>
              <p className="text-gray-600 text-sm mb-3">Material testing equipment and structural analysis facilities</p>
              <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">Civil Department</span>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">VLSI Design Lab</h3>
              <p className="text-gray-600 text-sm mb-3">IC design tools and embedded systems development platforms</p>
              <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">ECE Department</span>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Process Control Lab</h3>
              <p className="text-gray-600 text-sm mb-3">Chemical process simulation and control system experiments</p>
              <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded">Chemical Dept</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
