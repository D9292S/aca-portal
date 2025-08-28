import Link from 'next/link';

const Footer = () => {
  return (
    <>
      {/* Footer Links */}
      <footer className="bg-blue-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="w-80 bg-white rounded-lg shadow-lg p-6">
              <div className="text-center mb-6">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">KNIT</span>
                </div>
                <h3 className="text-red-800 font-bold text-lg">Estd : 1979</h3>
                <p className="text-sm text-gray-600 mb-2">Aktu College Code : 104</p>
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-gray-600">
                  <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3">
                    📍
                  </span>
                  <div>
                    <p className="font-medium">Sultanpur - Kadipur Road,</p>
                    <p>Sultanpur, Uttar Pradesh 228118</p>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-600">
                  <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3">
                    📞
                  </span>
                  <p>05362 240 454</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div>
              <h3 className="font-bold text-red-800 mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/vision-mission" className="block text-gray-600 hover:text-red-800 text-sm">Vision & Mission</Link>
                <Link href="/downloads" className="block text-gray-600 hover:text-red-800 text-sm">Downloads</Link>
                <Link href="/sitemap" className="block text-gray-600 hover:text-red-800 text-sm">Sitemap</Link>
                <Link href="/locate-us" className="block text-gray-600 hover:text-red-800 text-sm">Locate Us</Link>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-red-800 mb-4">Support</h3>
              <div className="space-y-2">
                <Link href="/help" className="block text-gray-600 hover:text-red-800 text-sm">Help</Link>
                <Link href="/support" className="block text-gray-600 hover:text-red-800 text-sm">Support</Link>
                <Link href="/disclaimer" className="block text-gray-600 hover:text-red-800 text-sm">Disclaimer</Link>
                <Link href="/terms" className="block text-gray-600 hover:text-red-800 text-sm">Terms and Conditions</Link>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-red-800 mb-4">Policies</h3>
              <div className="space-y-2">
                <Link href="/privacy-policy" className="block text-gray-600 hover:text-red-800 text-sm">Privacy Policy</Link>
                <Link href="/hyperlinking-policy" className="block text-gray-600 hover:text-red-800 text-sm">Hyperlinking Policy</Link>
                <Link href="/copyright-policy" className="block text-gray-600 hover:text-red-800 text-sm">Copyright Policy</Link>
                <Link href="/security-policy" className="block text-gray-600 hover:text-red-800 text-sm">Security Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Bottom Footer */}
      <div className="bg-blue-900 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div>
              © Kamla Nehru Institute of Technology, Sultanpur (U.P.)
              <br />
              <span className="text-blue-300">
                For any query regarding this website, please contact the "Web Information Manager"
              </span>
            </div>
            <div className="mt-2 md:mt-0 text-right">
              <div className="mb-1">
                <span className="text-blue-300">Number of Visitors:</span> <span className="font-bold">674,695</span>
              </div>
              <div className="text-xs text-blue-400">
                Last Updated On: 25 August 2025 | 04:58 PM
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
