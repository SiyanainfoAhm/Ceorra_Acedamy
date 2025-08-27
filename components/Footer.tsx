
'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#4D4D4D] text-white">
      <div className="container mx-auto px-4 lg:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6 group">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#0097A7] rounded-lg flex items-center justify-center group-hover:bg-[#006B7A] transition-colors duration-300">
                <span className="text-white font-bold text-lg lg:text-xl">C</span>
              </div>
              <span className="font-['Pacifico'] text-xl lg:text-2xl text-[#0097A7] group-hover:text-white transition-colors duration-300">
                Ceorra Academy
              </span>
            </Link>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Empowering students with industry-relevant skills and professional training for career success.
            </p>
            <p className="text-[#0097A7] font-medium text-sm mb-6 italic">
              "Quietly Brilliant in Education"
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 flex items-center justify-center cursor-pointer rounded-full hover:bg-[#0097A7] transition-all duration-300 group">
                <i className="ri-facebook-fill text-xl text-[#0097A7] group-hover:text-white transition-colors duration-300"></i>
              </div>
              <div className="w-10 h-10 flex items-center justify-center cursor-pointer rounded-full hover:bg-[#0097A7] transition-all duration-300 group">
                <i className="ri-twitter-fill text-xl text-[#0097A7] group-hover:text-white transition-colors duration-300"></i>
              </div>
              <div className="w-10 h-10 flex items-center justify-center cursor-pointer rounded-full hover:bg-[#0097A7] transition-all duration-300 group">
                <i className="ri-linkedin-fill text-xl text-[#0097A7] group-hover:text-white transition-colors duration-300"></i>
              </div>
              <div className="w-10 h-10 flex items-center justify-center cursor-pointer rounded-full hover:bg-[#0097A7] transition-all duration-300 group">
                <i className="ri-instagram-fill text-xl text-[#0097A7] group-hover:text-white transition-colors duration-300"></i>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg lg:text-xl font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-[#0097A7] transition-colors duration-300 hover:translate-x-1 inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#0097A7] transition-colors duration-300 hover:translate-x-1 inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-300 hover:text-[#0097A7] transition-colors duration-300 hover:translate-x-1 inline-block">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-[#0097A7] transition-colors duration-300 hover:translate-x-1 inline-block">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-300 hover:text-[#0097A7] transition-colors duration-300 hover:translate-x-1 inline-block">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-[#0097A7] transition-colors duration-300 hover:translate-x-1 inline-block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg lg:text-xl mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><span className="text-gray-300 hover:text-white transition-colors duration-300">Training & Development</span></li>
              <li><span className="text-gray-300 hover:text-white transition-colors duration-300">Digital Skills Academy</span></li>
              <li><span className="text-gray-300 hover:text-white transition-colors duration-300">ERP & Business Tools</span></li>
              <li><span className="text-gray-300 hover:text-white transition-colors duration-300">Career Guidance</span></li>
              <li><span className="text-gray-300 hover:text-white transition-colors duration-300">Corporate Training</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg lg:text-xl mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group cursor-pointer">
                <div className="w-6 h-6 flex items-center justify-center mt-0.5">
                  <i className="ri-mail-line text-[#0097A7] group-hover:text-white transition-colors duration-300"></i>
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">info@ceorraacademy.com</span>
              </div>
              <div className="flex items-start space-x-3 group cursor-pointer">
                <div className="w-6 h-6 flex items-center justify-center mt-0.5">
                  <i className="ri-phone-line text-[#0097A7] group-hover:text-white transition-colors duration-300"></i>
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="w-6 h-6 flex items-center justify-center mt-0.5">
                  <i className="ri-map-pin-line text-[#0097A7] group-hover:text-white transition-colors duration-300"></i>
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">123 Education Street, Learning City, LC 12345</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-12 pt-8 text-center">
          <p className="text-gray-300">&copy; 2024 Ceorra Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}