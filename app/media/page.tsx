import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Media Center - KNIT Sultanpur',
  description: 'Latest news, press releases, media coverage, and multimedia content from KNIT Sultanpur',
  keywords: 'KNIT news, media coverage, press release, photo gallery, video gallery, achievements',
};

export default function Media() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-900 to-red-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Media Center</h1>
            <p className="text-xl md:text-2xl text-red-100 leading-relaxed">
              Latest News, Updates & Multimedia from KNIT Sultanpur
            </p>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="#latest-news" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow group">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                  <span className="text-red-600 text-2xl">📰</span>
                </div>
                <h3 className="font-bold text-gray-900 group-hover:text-red-600">Latest News</h3>
                <p className="text-gray-600 text-sm mt-2">Recent updates and announcements</p>
              </div>
            </a>

            <a href="#press-releases" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow group">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <span className="text-blue-600 text-2xl">📢</span>
                </div>
                <h3 className="font-bold text-gray-900 group-hover:text-blue-600">Press Releases</h3>
                <p className="text-gray-600 text-sm mt-2">Official statements and announcements</p>
              </div>
            </a>

            <a href="#photo-gallery" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow group">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <span className="text-green-600 text-2xl">📸</span>
                </div>
                <h3 className="font-bold text-gray-900 group-hover:text-green-600">Photo Gallery</h3>
                <p className="text-gray-600 text-sm mt-2">Campus events and activities</p>
              </div>
            </a>

            <a href="#video-gallery" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow group">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <span className="text-purple-600 text-2xl">🎥</span>
                </div>
                <h3 className="font-bold text-gray-900 group-hover:text-purple-600">Video Gallery</h3>
                <p className="text-gray-600 text-sm mt-2">Campus tours and event highlights</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section id="latest-news" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest News</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest developments, achievements, and events at KNIT Sultanpur
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Featured News */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="h-64 bg-gradient-to-r from-blue-500 to-blue-600"></div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-semibold">
                        FEATURED
                      </span>
                      <span className="text-gray-500 text-sm">January 15, 2024</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      KNIT Achieves Remarkable Placement Success in 2024
                    </h3>
                    <p className="text-gray-600 mb-4">
                      The institute recorded highest ever placement statistics with 95% students securing positions 
                      in top-tier companies. The highest package offered was ₹45 LPA from a leading technology firm.
                    </p>
                    <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold">
                      Read Full Story
                      <span className="ml-2">→</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Recent News List */}
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">NEW</span>
                    <span className="text-gray-500 text-sm">Jan 12, 2024</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    Research Paper Published in Nature Communications
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Faculty from Electronics Department co-authored groundbreaking research on quantum computing applications.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold">EVENT</span>
                    <span className="text-gray-500 text-sm">Jan 10, 2024</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    Annual Techno-Cultural Fest 'KNIT-FEST 2024' Announced
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Three-day mega event featuring technical competitions, cultural programs, and industry exhibitions.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-semibold">ACHIEVEMENT</span>
                    <span className="text-gray-500 text-sm">Jan 8, 2024</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    Students Win National Level Hackathon
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Team of CSE students secured first position in Smart India Hackathon 2024 with innovative AI solution.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-semibold">COLLABORATION</span>
                    <span className="text-gray-500 text-sm">Jan 5, 2024</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    MOU Signed with Leading Tech Companies
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Strategic partnerships established for internships, placements, and joint research initiatives.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <a href="#" className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold">
                View All News
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section id="press-releases" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Press Releases</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Official statements and announcements from KNIT Sultanpur administration
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-semibold">
                      PRESS RELEASE
                    </span>
                    <span className="text-gray-500">PR/2024/001</span>
                  </div>
                  <span className="text-gray-500 text-sm">January 15, 2024</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  KNIT Sultanpur Announces Record Placement Season 2024
                </h3>
                <p className="text-gray-600 mb-4">
                  Kamla Nehru Institute of Technology, Sultanpur is proud to announce exceptional placement results 
                  for the academic year 2023-24. With 95% placement rate and highest package of ₹45 LPA, 
                  the institute has set new benchmarks in engineering education outcomes.
                </p>
                <div className="flex items-center justify-between">
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold">Download PDF</a>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>Media Contact: pr@knit.ac.in</span>
                    <span>|</span>
                    <span>+91-5362-240458</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                      PRESS RELEASE
                    </span>
                    <span className="text-gray-500">PR/2024/002</span>
                  </div>
                  <span className="text-gray-500 text-sm">January 10, 2024</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  KNIT-FEST 2024: Annual Techno-Cultural Extravaganza
                </h3>
                <p className="text-gray-600 mb-4">
                  KNIT Sultanpur cordially invites participation in KNIT-FEST 2024, the annual techno-cultural 
                  festival scheduled from March 15-17, 2024. The event will feature technical competitions, 
                  cultural programs, industry exhibitions, and keynote sessions by industry leaders.
                </p>
                <div className="flex items-center justify-between">
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold">Download PDF</a>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>Event Contact: events@knit.ac.in</span>
                    <span>|</span>
                    <span>+91-5362-240459</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                      PRESS RELEASE
                    </span>
                    <span className="text-gray-500">PR/2024/003</span>
                  </div>
                  <span className="text-gray-500 text-sm">January 8, 2024</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  KNIT Students Excel in Smart India Hackathon 2024
                </h3>
                <p className="text-gray-600 mb-4">
                  A team of Computer Science Engineering students from KNIT Sultanpur has won the first prize 
                  in Smart India Hackathon 2024. Their innovative AI-based solution for traffic management 
                  impressed the jury and demonstrated the institute's commitment to practical innovation.
                </p>
                <div className="flex items-center justify-between">
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold">Download PDF</a>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>Academic Contact: academics@knit.ac.in</span>
                    <span>|</span>
                    <span>+91-5362-240460</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <a href="#" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                View All Press Releases
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section id="photo-gallery" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Photo Gallery</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Capturing memorable moments and milestones at KNIT Sultanpur
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Gallery Categories */}
            <div className="flex flex-wrap justify-center space-x-4 mb-8">
              <button className="bg-green-100 text-green-800 px-4 py-2 rounded-lg mb-2 hover:bg-green-200 transition-colors">
                All Events
              </button>
              <button className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg mb-2 hover:bg-gray-200 transition-colors">
                Convocation
              </button>
              <button className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg mb-2 hover:bg-gray-200 transition-colors">
                Cultural Events
              </button>
              <button className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg mb-2 hover:bg-gray-200 transition-colors">
                Technical Events
              </button>
              <button className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg mb-2 hover:bg-gray-200 transition-colors">
                Campus Life
              </button>
              <button className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg mb-2 hover:bg-gray-200 transition-colors">
                Infrastructure
              </button>
            </div>

            {/* Photo Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 h-64 rounded-lg shadow-lg overflow-hidden group cursor-pointer">
                <div className="w-full h-full flex items-end">
                  <div className="p-4 bg-gradient-to-t from-black/50 to-transparent w-full text-white">
                    <h4 className="font-semibold">Annual Convocation 2024</h4>
                    <p className="text-sm opacity-90">Graduation ceremony highlights</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-400 to-green-600 h-64 rounded-lg shadow-lg overflow-hidden group cursor-pointer">
                <div className="w-full h-full flex items-end">
                  <div className="p-4 bg-gradient-to-t from-black/50 to-transparent w-full text-white">
                    <h4 className="font-semibold">KNIT-FEST 2024</h4>
                    <p className="text-sm opacity-90">Cultural night performances</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-400 to-purple-600 h-64 rounded-lg shadow-lg overflow-hidden group cursor-pointer">
                <div className="w-full h-full flex items-end">
                  <div className="p-4 bg-gradient-to-t from-black/50 to-transparent w-full text-white">
                    <h4 className="font-semibold">Smart India Hackathon</h4>
                    <p className="text-sm opacity-90">Winning team celebration</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-400 to-orange-600 h-64 rounded-lg shadow-lg overflow-hidden group cursor-pointer">
                <div className="w-full h-full flex items-end">
                  <div className="p-4 bg-gradient-to-t from-black/50 to-transparent w-full text-white">
                    <h4 className="font-semibold">Campus Infrastructure</h4>
                    <p className="text-sm opacity-90">Modern facilities and laboratories</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-400 to-red-600 h-64 rounded-lg shadow-lg overflow-hidden group cursor-pointer">
                <div className="w-full h-full flex items-end">
                  <div className="p-4 bg-gradient-to-t from-black/50 to-transparent w-full text-white">
                    <h4 className="font-semibold">Industry Visit</h4>
                    <p className="text-sm opacity-90">Students at leading tech companies</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-teal-400 to-teal-600 h-64 rounded-lg shadow-lg overflow-hidden group cursor-pointer">
                <div className="w-full h-full flex items-end">
                  <div className="p-4 bg-gradient-to-t from-black/50 to-transparent w-full text-white">
                    <h4 className="font-semibold">Sports Tournament</h4>
                    <p className="text-sm opacity-90">Inter-department competitions</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-400 to-indigo-600 h-64 rounded-lg shadow-lg overflow-hidden group cursor-pointer">
                <div className="w-full h-full flex items-end">
                  <div className="p-4 bg-gradient-to-t from-black/50 to-transparent w-full text-white">
                    <h4 className="font-semibold">Research Presentation</h4>
                    <p className="text-sm opacity-90">National conference proceedings</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-pink-400 to-pink-600 h-64 rounded-lg shadow-lg overflow-hidden group cursor-pointer">
                <div className="w-full h-full flex items-end">
                  <div className="p-4 bg-gradient-to-t from-black/50 to-transparent w-full text-white">
                    <h4 className="font-semibold">Alumni Meet</h4>
                    <p className="text-sm opacity-90">Networking and mentorship sessions</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 h-64 rounded-lg shadow-lg overflow-hidden group cursor-pointer">
                <div className="w-full h-full flex items-end">
                  <div className="p-4 bg-gradient-to-t from-black/50 to-transparent w-full text-white">
                    <h4 className="font-semibold">Hostel Life</h4>
                    <p className="text-sm opacity-90">Student accommodation and activities</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <a href="#" className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">
                View Full Gallery
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <section id="video-gallery" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Video Gallery</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience KNIT Sultanpur through our video content and virtual tours
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-red-500 to-red-600 relative flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <span className="text-white text-2xl ml-1">▶</span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Campus Virtual Tour</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Take a comprehensive virtual tour of our modern campus facilities and infrastructure.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">Duration: 12:45</span>
                    <a href="#" className="text-red-600 hover:text-red-800 font-semibold">Watch Now</a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600 relative flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <span className="text-white text-2xl ml-1">▶</span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Convocation 2024 Highlights</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Key moments from the annual convocation ceremony celebrating our graduates' achievements.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">Duration: 8:30</span>
                    <a href="#" className="text-red-600 hover:text-red-800 font-semibold">Watch Now</a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-green-500 to-green-600 relative flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <span className="text-white text-2xl ml-1">▶</span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Student Life at KNIT</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Experience the vibrant student life, extracurricular activities, and campus culture.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">Duration: 15:20</span>
                    <a href="#" className="text-red-600 hover:text-red-800 font-semibold">Watch Now</a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-purple-500 to-purple-600 relative flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <span className="text-white text-2xl ml-1">▶</span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Research & Innovation</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Discover cutting-edge research projects and innovative solutions by our faculty and students.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">Duration: 10:15</span>
                    <a href="#" className="text-red-600 hover:text-red-800 font-semibold">Watch Now</a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-orange-500 to-orange-600 relative flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <span className="text-white text-2xl ml-1">▶</span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Placement Success Stories</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Hear from our successful alumni about their career journeys and industry experiences.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">Duration: 18:45</span>
                    <a href="#" className="text-red-600 hover:text-red-800 font-semibold">Watch Now</a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-teal-500 to-teal-600 relative flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <span className="text-white text-2xl ml-1">▶</span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">KNIT-FEST 2024</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Highlights from our annual techno-cultural festival showcasing talent and innovation.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">Duration: 22:10</span>
                    <a href="#" className="text-red-600 hover:text-red-800 font-semibold">Watch Now</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <a href="#" className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold">
                Visit YouTube Channel
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Media Contact */}
      <section className="py-16 bg-red-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Media Inquiries</h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            For media inquiries, press releases, interview requests, or additional information, 
            contact our Public Relations Office.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-red-800 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Public Relations Office</h3>
              <p className="text-red-200 text-sm mb-2">Media Relations & Communications</p>
              <p className="text-red-200 text-sm">pr@knit.ac.in</p>
              <p className="text-red-200 text-sm">+91-5362-240458</p>
            </div>
            <div className="bg-red-800 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Director's Office</h3>
              <p className="text-red-200 text-sm mb-2">Official Statements & Policy Matters</p>
              <p className="text-red-200 text-sm">director@knit.ac.in</p>
              <p className="text-red-200 text-sm">+91-5362-240454</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
