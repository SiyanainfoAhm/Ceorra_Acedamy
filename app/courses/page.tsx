
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
      slug: 'spoken-english',
      title: 'Spoken English',
      category: 'personal',
      description: 'This course focuses on improving your spoken English skills with practical exercises and real-world conversations to build confidence.',
      duration: '2-2.5 months',
      level: 'Beginners, Intermediate, Expert',
      price: '₹9,440 (with GST)',
      image: 'https://readdy.ai/api/search-image?query=professional%20spoken%20English%20language%20learning%20classroom%20with%20students%20practicing%20conversation%20skills%2C%20modern%20educational%20environment%20with%20interactive%20teaching%20methods%2C%20bright%20clean%20background&width=400&height=250&seq=se001&orientation=landscape'
    },
    {
      id: 2,
      slug: 'certified-ms-office-with-ai',
      title: 'Certified MS Office (with AI)',
      category: 'business',
      description: 'Comprehensive course covering MS Office applications enhanced with AI features for modern workplace productivity and efficiency.',
      duration: '2 months',
      level: 'Beginners, Intermediate, Expert',
      price: '₹11,800 (with GST)',
      image: 'https://readdy.ai/api/search-image?query=modern%20Microsoft%20Office%20training%20with%20AI%20integration%20showing%20Excel%20Word%20PowerPoint%20on%20computer%20screens%2C%20professional%20office%20workspace%2C%20clean%20technology%20environment&width=400&height=250&seq=mso001&orientation=landscape'
    },
    {
      id: 3,
      slug: 'certified-ms-office-without-ai',
      title: 'Certified MS Office (without AI)',
      category: 'business',
      description: 'Practical and comprehensive MS Office training covering Word, Excel, PowerPoint and other essential business applications.',
      duration: '2 months',
      level: 'Beginners, Intermediate, Expert',
      price: '₹10,030 (with GST)',
      image: 'https://readdy.ai/api/search-image?query=professional%20Microsoft%20Office%20training%20session%20with%20traditional%20desktop%20applications%2C%20business%20productivity%20workspace%2C%20organized%20clean%20office%20environment&width=400&height=250&seq=mso002&orientation=landscape'
    },
    {
      id: 4,
      slug: 'tally-gst',
      title: 'Tally + GST',
      category: 'business',
      description: 'Learn accounting fundamentals with Tally software including GST compliance for efficient business financial management.',
      duration: '2.5 months',
      level: 'Beginners, Intermediate, Expert',
      price: '₹13,570 (with GST)',
      image: 'https://readdy.ai/api/search-image?query=Tally%20accounting%20software%20training%20with%20GST%20calculations%20on%20computer%20screen%2C%20professional%20accounting%20workspace%2C%20financial%20data%20management%20environment&width=400&height=250&seq=tally001&orientation=landscape'
    },
    {
      id: 5,
      slug: 'digital-marketing',
      title: 'Digital Marketing',
      category: 'digital',
      description: 'Complete guide to digital marketing strategies including SEO, social media, content marketing and online advertising campaigns.',
      duration: '4 months',
      level: 'Beginners, Intermediate, Expert',
      price: '₹26,550 (with GST)',
      image: 'https://readdy.ai/api/search-image?query=digital%20marketing%20workspace%20with%20multiple%20screens%20showing%20social%20media%20analytics%20SEO%20tools%20and%20online%20campaigns%2C%20modern%20marketing%20office%20environment&width=400&height=250&seq=dm002&orientation=landscape'
    },
    {
      id: 6,
      slug: 'web-development-full-stack',
      title: 'Web Development (Full Stack)',
      category: 'technology',
      description: 'Covers both front-end and back-end development technologies to build complete web applications from scratch.',
      duration: '5 months',
      level: 'Beginners, Intermediate, Expert',
      price: '₹35,400 (with GST)',
      image: 'https://readdy.ai/api/search-image?query=full%20stack%20web%20development%20coding%20workspace%20with%20multiple%20monitors%20showing%20HTML%20CSS%20JavaScript%20and%20backend%20code%2C%20modern%20programming%20environment&width=400&height=250&seq=fs001&orientation=landscape'
    },
    {
      id: 7,
      slug: 'python-programming',
      title: 'Python Programming',
      category: 'technology',
      description: 'Foundational programming course covering Python syntax, data structures, algorithms and practical application development.',
      duration: '3 months',
      level: 'Beginners, Intermediate',
      price: '₹18,000 (with GST)',
      image: 'https://readdy.ai/api/search-image?query=Python%20programming%20training%20with%20code%20editor%20showing%20Python%20syntax%20and%20data%20analysis%2C%20professional%20development%20workspace%2C%20clean%20tech%20environment&width=400&height=250&seq=py001&orientation=landscape'
    },
    {
      id: 8,
      slug: 'data-analytics-excel-power-bi',
      title: 'Data Analytics with Excel & Power BI',
      category: 'technology',
      description: 'Training on data analysis using Excel and Power BI for business intelligence and data-driven decision making.',
      duration: '3 months',
      level: 'Intermediate',
      price: '₹20,000 (with GST)',
      image: 'https://readdy.ai/api/search-image?query=data%20analytics%20training%20with%20Excel%20spreadsheets%20and%20Power%20BI%20dashboards%20showing%20charts%20and%20graphs%2C%20professional%20data%20analysis%20workspace&width=400&height=250&seq=da001&orientation=landscape'
    },
    {
      id: 9,
      slug: 'graphic-design-photoshop-ai',
      title: 'Graphic Design (Photoshop & AI)',
      category: 'digital',
      description: 'Creative design training covering Photoshop and AI tools for professional graphic design and digital art creation.',
      duration: '3 months',
      level: 'Beginners, Intermediate',
      price: '₹20,600 (with GST)',
      image: 'https://readdy.ai/api/search-image?query=graphic%20design%20studio%20with%20Photoshop%20and%20AI%20design%20tools%20on%20computer%20screens%2C%20creative%20workspace%20with%20digital%20art%20and%20design%20elements&width=400&height=250&seq=gd001&orientation=landscape'
    },
    {
      id: 10,
      slug: 'cybersecurity-fundamentals',
      title: 'Cybersecurity Fundamentals',
      category: 'technology',
      description: 'An introduction to cybersecurity principles, threat detection, and protection strategies for digital security professionals.',
      duration: '3 months',
      level: 'Beginners, Intermediate',
      price: '₹24,000 (with GST)',
      image: 'https://readdy.ai/api/search-image?query=cybersecurity%20training%20environment%20with%20security%20monitoring%20screens%20and%20digital%20protection%20interfaces%2C%20professional%20cyber%20defense%20workspace&width=400&height=250&seq=cs001&orientation=landscape'
    },
    {
      id: 11,
      slug: 'artificial-intelligence-ai-basics',
      title: 'Artificial Intelligence (AI) Basics',
      category: 'technology',
      description: 'A beginner-friendly introduction to AI concepts, machine learning basics, and practical AI applications in business.',
      duration: '4 months',
      level: 'Intermediate',
      price: '₹28,000 (with GST)',
      image: 'https://readdy.ai/api/search-image?query=artificial%20intelligence%20training%20workspace%20with%20AI%20algorithms%20and%20machine%20learning%20models%20on%20computer%20screens%2C%20futuristic%20tech%20learning%20environment&width=400&height=250&seq=ai001&orientation=landscape'
    },
    {
      id: 12,
      slug: 'entrepreneurship-startup-skills',
      title: 'Entrepreneurship & Startup Skills',
      category: 'business',
      description: 'Teaches core entrepreneurial skills including business planning, startup strategies, and essential management techniques.',
      duration: '2 months',
      level: 'Beginners, Intermediate',
      price: '₹15,000 (with GST)',
      image: 'https://readdy.ai/api/search-image?query=entrepreneurship%20training%20session%20with%20business%20planning%20materials%20and%20startup%20strategy%20discussions%2C%20professional%20business%20development%20environment&width=400&height=250&seq=es001&orientation=landscape'
    },
    {
      id: 13,
      slug: 'soft-skills-personality-development',
      title: 'Soft Skills & Personality Development',
      category: 'personal',
      description: 'Focused on communication skills, leadership development, and personality enhancement for professional and personal growth.',
      duration: '1.5 months',
      level: 'Beginners',
      price: '₹8,000 (with GST)',
      image: 'https://readdy.ai/api/search-image?query=soft%20skills%20training%20workshop%20with%20people%20practicing%20communication%20and%20leadership%20skills%2C%20professional%20development%20seminar%20environment&width=400&height=250&seq=ss001&orientation=landscape'
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
                    href={`/courses/${course.id}/${course.slug}`}
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