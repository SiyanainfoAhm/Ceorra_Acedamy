
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CoursesPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const filters = [
    { id: 'all', label: 'All Courses' },
    { id: 'business', label: 'Business' },
    { id: 'digital', label: 'Digital Skills' },
    { id: 'technology', label: 'Technology' },
    { id: 'personal', label: 'Personal Development' }
  ];

  const courses = [
    {
      id: 1,
      title: 'Digital Marketing Mastery',
      category: 'digital',
      description: 'Master the art of digital marketing with hands-on training in SEO, social media, and content strategy.',
      duration: '8 weeks',
      level: 'Intermediate',
      image: 'https://readdy.ai/api/search-image?query=professional%20digital%20marketing%20workspace%20with%20laptop%20showing%20analytics%20dashboards%2C%20modern%20office%20environment%2C%20clean%20minimal%20background%2C%20bright%20lighting%2C%20business%20professional%20atmosphere&width=400&height=250&seq=dm001&orientation=landscape'
    },
    {
      id: 2,
      title: 'Business Leadership Excellence',
      category: 'business',
      description: 'Develop essential leadership skills and strategic thinking to excel in today\'s competitive business environment.',
      duration: '6 weeks',
      level: 'Advanced',
      image: 'https://readdy.ai/api/search-image?query=business%20leadership%20training%20session%20with%20professional%20executives%20in%20modern%20conference%20room%2C%20leadership%20development%20concept%2C%20clean%20corporate%20environment%2C%20inspiring%20atmosphere&width=400&height=250&seq=ble001&orientation=landscape'
    },
    {
      id: 3,
      title: 'Data Analytics Foundations',
      category: 'technology',
      description: 'Learn to analyze and interpret data using industry-standard tools and techniques for informed decision making.',
      duration: '10 weeks',
      level: 'Beginner',
      image: 'https://readdy.ai/api/search-image?query=data%20analytics%20workspace%20with%20charts%20graphs%20and%20computer%20screens%20showing%20data%20visualization%2C%20modern%20tech%20office%2C%20clean%20professional%20setup%2C%20bright%20ambient%20lighting&width=400&height=250&seq=daf001&orientation=landscape'
    },
    {
      id: 4,
      title: 'Project Management Professional',
      category: 'business',
      description: 'Master project management methodologies and tools to lead successful projects from conception to completion.',
      duration: '12 weeks',
      level: 'Intermediate',
      image: 'https://readdy.ai/api/search-image?query=project%20management%20team%20working%20on%20planning%20boards%20and%20digital%20tools%2C%20collaborative%20workspace%2C%20professional%20business%20environment%2C%20organized%20clean%20setting&width=400&height=250&seq=pmp001&orientation=landscape'
    },
    {
      id: 5,
      title: 'Creative Design Thinking',
      category: 'personal',
      description: 'Unlock your creative potential and learn design thinking processes to solve complex problems innovatively.',
      duration: '5 weeks',
      level: 'Beginner',
      image: 'https://readdy.ai/api/search-image?query=creative%20design%20workshop%20with%20colorful%20sticky%20notes%20sketches%20and%20brainstorming%20materials%2C%20inspiring%20creative%20workspace%2C%20bright%20natural%20lighting%2C%20artistic%20professional%20environment&width=400&height=250&seq=cdt001&orientation=landscape'
    },
    {
      id: 6,
      title: 'Web Development Bootcamp',
      category: 'technology',
      description: 'Build modern websites and web applications using the latest technologies and best practices.',
      duration: '16 weeks',
      level: 'Beginner',
      image: 'https://readdy.ai/api/search-image?query=web%20development%20coding%20workspace%20with%20multiple%20monitors%20showing%20code%20and%20websites%2C%20modern%20tech%20setup%2C%20clean%20minimal%20office%20environment%2C%20professional%20atmosphere&width=400&height=250&seq=wdb001&orientation=landscape'
    },
    {
      id: 7,
      title: 'Financial Planning & Analysis',
      category: 'business',
      description: 'Develop expertise in financial planning, budgeting, and analysis to drive business growth and profitability.',
      duration: '8 weeks',
      level: 'Intermediate',
      image: 'https://readdy.ai/api/search-image?query=financial%20analysis%20workspace%20with%20charts%20spreadsheets%20and%20calculator%2C%20professional%20business%20office%2C%20clean%20organized%20desk%20setup%2C%20bright%20professional%20lighting&width=400&height=250&seq=fpa001&orientation=landscape'
    },
    {
      id: 8,
      title: 'Communication Excellence',
      category: 'personal',
      description: 'Enhance your communication skills for professional success in presentations, meetings, and networking.',
      duration: '4 weeks',
      level: 'Beginner',
      image: 'https://readdy.ai/api/search-image?query=professional%20communication%20training%20session%20with%20people%20presenting%20and%20engaging%2C%20modern%20conference%20room%2C%20inspiring%20learning%20environment%2C%20bright%20professional%20atmosphere&width=400&height=250&seq=ce001&orientation=landscape'
    },
    {
      id: 9,
      title: 'Cybersecurity Fundamentals',
      category: 'technology',
      description: 'Learn essential cybersecurity principles and practices to protect digital assets and information systems.',
      duration: '7 weeks',
      level: 'Intermediate',
      image: 'https://readdy.ai/api/search-image?query=cybersecurity%20training%20setup%20with%20security%20monitoring%20screens%20and%20digital%20protection%20interfaces%2C%20high-tech%20professional%20environment%2C%20clean%20modern%20office%20space&width=400&height=250&seq=cf001&orientation=landscape'
    }
  ];

  const filteredCourses = activeFilter === 'all' 
    ? courses 
    : courses.filter(course => course.category === activeFilter);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0097A7] to-[#006B7A] text-white py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 lg:px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">Explore Our Courses</h1>
          <p className="text-lg lg:text-xl max-w-3xl mx-auto opacity-90 leading-relaxed animate-fade-in-delayed">
            Discover comprehensive training programs designed to advance your career and unlock new opportunities in today's dynamic industries.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 lg:py-16 bg-gray-50 fade-in-section">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex flex-wrap justify-center gap-3 lg:gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 lg:px-6 py-2 lg:py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap hover:-translate-y-0.5 ${
                  activeFilter === filter.id
                    ? 'bg-[#0097A7] text-white shadow-lg scale-105'
                    : 'bg-white text-[#4D4D4D] hover:bg-[#0097A7] hover:text-white border border-gray-200 hover:shadow-md'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredCourses.map((course, index) => (
              <div
                key={course.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-2 hover:border-2 hover:border-[#0097A7] transition-all duration-300 overflow-hidden group course-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#0097A7] text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                      {course.level}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg lg:text-xl font-bold text-[#4D4D4D] mb-3 group-hover:text-[#0097A7] transition-colors duration-300">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {course.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center text-sm text-gray-500">
                      <i className="ri-time-line w-4 h-4 flex items-center justify-center mr-2"></i>
                      {course.duration}
                    </div>
                    <div className="text-sm text-[#0097A7] font-medium capitalize">
                      {course.category}
                    </div>
                  </div>
                  
                  <Link
                    href={`/courses/${course.id}`}
                    className="w-full bg-[#0097A7] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#006B7A] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 text-center block whitespace-nowrap"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <i className="ri-search-line w-16 h-16 flex items-center justify-center mx-auto text-gray-400 mb-4 text-4xl"></i>
              <h3 className="text-xl font-medium text-gray-600 mb-2">No courses found</h3>
              <p className="text-gray-500">Try selecting a different category to see available courses.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-[#0097A7] text-white fade-in-section">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-6">Ready to Start Your Learning Journey?</h2>
          <p className="text-lg lg:text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Join thousands of professionals who have transformed their careers with Ceorra Academy's expert-led training programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center">
            <Link
              href="/contact"
              className="bg-white text-[#0097A7] px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-bold hover:bg-gray-100 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 whitespace-nowrap"
            >
              Contact Our Team
            </Link>
            <Link
              href="/schedule"
              className="border-2 border-white text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-bold hover:bg-white hover:text-[#0097A7] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 whitespace-nowrap"
            >
              Schedule a Call
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
        
        .animate-fade-in-delayed {
          animation: fadeIn 0.8s ease-out 0.2s both;
        }
        
        .fade-in-section {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .fade-in-section.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .course-card {
          opacity: 0;
          transform: translateY(20px);
          animation: slideUp 0.5s ease-out forwards;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}