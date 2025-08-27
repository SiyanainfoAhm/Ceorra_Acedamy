
'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`bg-white sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'shadow-lg backdrop-blur-sm bg-white/95' : 'shadow-sm'
    }`}>
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 lg:h-18">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#0097A7] rounded-lg flex items-center justify-center group-hover:bg-[#006B7A] transition-colors duration-300">
              <span className="text-white font-bold text-lg lg:text-xl">C</span>
            </div>
            <span className="font-['Pacifico'] text-xl lg:text-2xl text-[#0097A7] group-hover:text-[#006B7A] transition-colors duration-300">
              Ceorra Academy
            </span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-12">
            <Link href="/" className="text-[#4D4D4D] hover:text-[#0097A7] font-medium transition-all duration-300 relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0097A7] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/about" className="text-[#4D4D4D] hover:text-[#0097A7] font-medium transition-all duration-300 relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0097A7] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/courses" className="text-[#4D4D4D] hover:text-[#0097A7] font-medium transition-all duration-300 relative group">
              Courses
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0097A7] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/services" className="text-[#4D4D4D] hover:text-[#0097A7] font-medium transition-all duration-300 relative group">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0097A7] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/resources" className="text-[#4D4D4D] hover:text-[#0097A7] font-medium transition-all duration-300 relative group">
              Resources
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0097A7] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/contact" className="text-[#4D4D4D] hover:text-[#0097A7] font-medium transition-all duration-300 relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0097A7] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          <Link
            href="/schedule"
            className="hidden lg:block bg-[#0097A7] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#006B7A] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
          >
            Schedule a Call
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center cursor-pointer rounded-lg hover:bg-gray-100 transition-colors duration-300"
            aria-label="Toggle navigation menu"
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-2xl text-[#4D4D4D] transition-transform duration-300 ${
              isMenuOpen ? 'rotate-90' : ''
            }`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="px-2 pt-2 pb-6 space-y-1 bg-white border-t border-gray-200">
            <Link
              href="/"
              className="block px-4 py-3 text-[#4D4D4D] hover:text-[#0097A7] hover:bg-[#0097A7]/5 font-medium transition-all duration-300 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-4 py-3 text-[#4D4D4D] hover:text-[#0097A7] hover:bg-[#0097A7]/5 font-medium transition-all duration-300 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/courses"
              className="block px-4 py-3 text-[#4D4D4D] hover:text-[#0097A7] hover:bg-[#0097A7]/5 font-medium transition-all duration-300 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </Link>
            <Link
              href="/services"
              className="block px-4 py-3 text-[#4D4D4D] hover:text-[#0097A7] hover:bg-[#0097A7]/5 font-medium transition-all duration-300 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/resources"
              className="block px-4 py-3 text-[#4D4D4D] hover:text-[#0097A7] hover:bg-[#0097A7]/5 font-medium transition-all duration-300 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-3 text-[#4D4D4D] hover:text-[#0097A7] hover:bg-[#0097A7]/5 font-medium transition-all duration-300 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4">
              <Link
                href="/schedule"
                className="block mx-4 bg-[#0097A7] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#006B7A] transition-all duration-300 text-center whitespace-nowrap"
                onClick={() => setIsMenuOpen(false)}
              >
                Schedule a Call
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}