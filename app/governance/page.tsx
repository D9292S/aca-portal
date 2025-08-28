import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Governance - KNIT Sultanpur',
  description: 'Governance structure, Board of Governors, and administrative framework at Kamla Nehru Institute of Technology, Sultanpur',
  keywords: 'governance, board of governors, administration, KNIT governance, academic council',
};

export default function Governance() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Governance</h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Transparent and effective governance structure ensuring academic excellence and institutional growth
            </p>
          </div>
        </div>
      </section>

      {/* Board of Governors */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Board of Governors</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The apex governing body providing strategic direction and oversight
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Shri Pankaj Patel</h3>
              <p className="text-blue-600 font-semibold mb-2">Chairman</p>
              <p className="text-gray-600 text-sm">Board of Governors</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. R.K. Upadhyay</h3>
              <p className="text-blue-600 font-semibold mb-2">Director</p>
              <p className="text-gray-600 text-sm">Ex-officio Member</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Prof. J. P. Pandey</h3>
              <p className="text-blue-600 font-semibold mb-2">Vice Chancellor</p>
              <p className="text-gray-600 text-sm">Dr. APJAKTU, Ex-officio Member</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Government Nominee</h3>
              <p className="text-blue-600 font-semibold mb-2">Secretary</p>
              <p className="text-gray-600 text-sm">Technical Education Department</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Industry Expert</h3>
              <p className="text-blue-600 font-semibold mb-2">Member</p>
              <p className="text-gray-600 text-sm">Industry Representative</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Faculty Representative</h3>
              <p className="text-blue-600 font-semibold mb-2">Member</p>
              <p className="text-gray-600 text-sm">Elected Faculty Member</p>
            </div>
          </div>
        </div>
      </section>

      {/* Governance Structure */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Governance Structure</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Academic Council</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Chairman: Director</h4>
                    <p className="text-gray-600 text-sm">Overall academic leadership and policy formulation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">All Heads of Departments</h4>
                    <p className="text-gray-600 text-sm">Departmental academic administration</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Senior Faculty Members</h4>
                    <p className="text-gray-600 text-sm">Curriculum and academic policy decisions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">External Experts</h4>
                    <p className="text-gray-600 text-sm">Industry and academic advisory members</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Finance Committee</h3>
                <p className="text-gray-600 mb-4">
                  Oversees financial planning, budgeting, and resource allocation for the institute.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Budget preparation and approval</li>
                  <li>• Financial audit oversight</li>
                  <li>• Infrastructure investment decisions</li>
                  <li>• Fee structure recommendations</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Building & Works Committee</h3>
                <p className="text-gray-600 mb-4">
                  Manages campus infrastructure development and maintenance activities.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Campus development planning</li>
                  <li>• Construction project oversight</li>
                  <li>• Maintenance and utilities management</li>
                  <li>• Safety and security infrastructure</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Committees */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Statutory Committees</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Various committees ensuring comprehensive governance and administration
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Admission Committee</h3>
              <p className="text-gray-600 text-sm">Manages admission processes and policies for all programs</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Examination Committee</h3>
              <p className="text-gray-600 text-sm">Oversees examination conduct and evaluation processes</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Discipline Committee</h3>
              <p className="text-gray-600 text-sm">Maintains discipline and addresses student grievances</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Anti-Ragging Committee</h3>
              <p className="text-gray-600 text-sm">Ensures ragging-free campus environment</p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Library Committee</h3>
              <p className="text-gray-600 text-sm">Manages library policies and resource acquisition</p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Research Committee</h3>
              <p className="text-gray-600 text-sm">Promotes research activities and funding opportunities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Policies & Guidelines */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Policies & Guidelines</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Academic Policies</h3>
              <div className="space-y-3">
                <a href="#" className="block text-blue-600 hover:text-blue-800 transition-colors">
                  Academic Regulations 2024-25 →
                </a>
                <a href="#" className="block text-blue-600 hover:text-blue-800 transition-colors">
                  Examination Guidelines →
                </a>
                <a href="#" className="block text-blue-600 hover:text-blue-800 transition-colors">
                  Admission Policy →
                </a>
                <a href="#" className="block text-blue-600 hover:text-blue-800 transition-colors">
                  Research Policy →
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Administrative Policies</h3>
              <div className="space-y-3">
                <a href="#" className="block text-blue-600 hover:text-blue-800 transition-colors">
                  Faculty Recruitment Policy →
                </a>
                <a href="#" className="block text-blue-600 hover:text-blue-800 transition-colors">
                  Financial Guidelines →
                </a>
                <a href="#" className="block text-blue-600 hover:text-blue-800 transition-colors">
                  Campus Safety Policy →
                </a>
                <a href="#" className="block text-blue-600 hover:text-blue-800 transition-colors">
                  IT & Data Security Policy →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
