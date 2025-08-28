export default function FacultyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-purple-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Faculty</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Meet our distinguished faculty members who bring decades of academic excellence, 
            industry experience, and research expertise to guide the next generation of engineers.
          </p>
        </div>
      </section>

      {/* Faculty Stats */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">200+</div>
              <div className="text-gray-600">Total Faculty</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">85%</div>
              <div className="text-gray-600">With Ph.D</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">150+</div>
              <div className="text-gray-600">Research Publications</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">25+</div>
              <div className="text-gray-600">Years Avg Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Heads */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Department Heads</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. [Name]",
                department: "Computer Science & Engineering",
                qualification: "Ph.D in Computer Science",
                experience: "20 Years",
                specialization: "Artificial Intelligence, Machine Learning"
              },
              {
                name: "Dr. [Name]", 
                department: "Mechanical Engineering",
                qualification: "Ph.D in Mechanical Engineering",
                experience: "18 Years",
                specialization: "Thermal Engineering, Manufacturing"
              },
              {
                name: "Dr. [Name]",
                department: "Electrical Engineering", 
                qualification: "Ph.D in Electrical Engineering",
                experience: "22 Years",
                specialization: "Power Systems, Renewable Energy"
              },
              {
                name: "Dr. [Name]",
                department: "Electronics & Communication",
                qualification: "Ph.D in Electronics Engineering",
                experience: "19 Years", 
                specialization: "VLSI Design, Signal Processing"
              },
              {
                name: "Dr. [Name]",
                department: "Civil Engineering",
                qualification: "Ph.D in Civil Engineering", 
                experience: "21 Years",
                specialization: "Structural Engineering, Construction"
              },
              {
                name: "Dr. [Name]",
                department: "Information Technology",
                qualification: "Ph.D in Computer Science",
                experience: "17 Years",
                specialization: "Cybersecurity, Database Systems"
              }
            ].map((hod, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{hod.name}</h3>
                  <p className="text-purple-600 font-medium mb-3">{hod.department}</p>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p><strong>Qualification:</strong> {hod.qualification}</p>
                    <p><strong>Experience:</strong> {hod.experience}</p>
                    <p><strong>Specialization:</strong> {hod.specialization}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Categories */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Faculty Distribution</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Professors</h3>
              <p className="text-blue-600 text-3xl font-bold mb-2">45</p>
              <p className="text-gray-600">Senior faculty with extensive research experience</p>
            </div>
            
            <div className="bg-green-50 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Associate Professors</h3>
              <p className="text-green-600 text-3xl font-bold mb-2">85</p>
              <p className="text-gray-600">Experienced faculty with proven teaching excellence</p>
            </div>

            <div className="bg-purple-50 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Assistant Professors</h3>
              <p className="text-purple-600 text-3xl font-bold mb-2">70</p>
              <p className="text-gray-600">Young faculty bringing fresh perspectives</p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Research Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                area: "Artificial Intelligence & ML",
                faculty: "15 Faculty",
                projects: "25+ Projects",
                color: "bg-blue-100 text-blue-800"
              },
              {
                area: "Renewable Energy",
                faculty: "12 Faculty", 
                projects: "20+ Projects",
                color: "bg-green-100 text-green-800"
              },
              {
                area: "Advanced Materials",
                faculty: "10 Faculty",
                projects: "15+ Projects", 
                color: "bg-purple-100 text-purple-800"
              },
              {
                area: "IoT & Embedded Systems",
                faculty: "8 Faculty",
                projects: "18+ Projects",
                color: "bg-orange-100 text-orange-800"
              },
              {
                area: "Data Science & Analytics",
                faculty: "11 Faculty",
                projects: "22+ Projects",
                color: "bg-indigo-100 text-indigo-800"
              },
              {
                area: "Structural Engineering",
                faculty: "9 Faculty",
                projects: "12+ Projects",
                color: "bg-red-100 text-red-800"
              },
              {
                area: "Communication Networks",
                faculty: "7 Faculty", 
                projects: "16+ Projects",
                color: "bg-cyan-100 text-cyan-800"
              },
              {
                area: "Manufacturing Technology",
                faculty: "13 Faculty",
                projects: "19+ Projects",
                color: "bg-yellow-100 text-yellow-800"
              }
            ].map((research, index) => (
              <div key={index} className="bg-white rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${research.color}`}>
                  {research.area}
                </div>
                <div className="space-y-2">
                  <p className="text-gray-600 text-sm">{research.faculty}</p>
                  <p className="text-gray-600 text-sm">{research.projects}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Awards & Recognition</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  award: "Best Teacher Award 2024",
                  recipient: "Dr. [Faculty Name]",
                  department: "Computer Science & Engineering",
                  organization: "AKTU"
                },
                {
                  award: "Outstanding Research Award",
                  recipient: "Dr. [Faculty Name]",
                  department: "Mechanical Engineering", 
                  organization: "Indian Society of Technical Education"
                },
                {
                  award: "Excellence in Innovation",
                  recipient: "Prof. [Faculty Name]",
                  department: "Electrical Engineering",
                  organization: "Institution of Engineers (India)"
                },
                {
                  award: "Young Scientist Award",
                  recipient: "Dr. [Faculty Name]",
                  department: "Electronics & Communication",
                  organization: "UP State Science & Technology Council"
                }
              ].map((award, index) => (
                <div key={index} className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-yellow-800" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{award.award}</h3>
                      <p className="text-gray-700 font-medium">{award.recipient}</p>
                      <p className="text-gray-600 text-sm">{award.department}</p>
                      <p className="text-gray-500 text-sm italic">- {award.organization}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join Faculty */}
      <section className="bg-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Faculty Team</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Are you a passionate educator and researcher? Join KNIT and be part of our mission 
            to shape the future of engineering education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg font-semibold transition-colors">
              Current Openings
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              Apply Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
