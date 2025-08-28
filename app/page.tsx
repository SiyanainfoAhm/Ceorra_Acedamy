'use client';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const coursesRef = useRef<HTMLDivElement>(null);

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

    // Observe sections for scroll animations
    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: 'ri-graduation-cap-line',
      title: 'Industry-Aligned Curriculum',
      description: 'Courses designed with current industry needs and latest technologies in mind.'
    },
    {
      icon: 'ri-user-star-line',
      title: 'Expert Trainers',
      description: 'Learn from industry professionals with years of real-world experience.'
    },
    {
      icon: 'ri-tools-line',
      title: 'Hands-On Projects',
      description: 'Build your portfolio with practical projects that showcase your skills.'
    },
    {
      icon: 'ri-rocket-line',
      title: 'Career Growth Support',
      description: 'Get personalized career guidance and job placement assistance.'
    }
  ];

  const courses = [
    {
      id: 1,
      slug: 'spoken-english',
      title: 'Spoken English',
      description: 'Improve your spoken English skills with practical exercises and real-world conversations.',
      duration: '2-2.5 months',
      image: 'https://readdy.ai/api/search-image?query=professional%20spoken%20English%20language%20learning%20classroom%20with%20students%20practicing%20conversation%20skills%2C%20modern%20educational%20environment%20with%20interactive%20teaching%20methods%2C%20bright%20clean%20background&width=400&height=250&seq=se001h&orientation=landscape'
    },
    {
      id: 5,
      slug: 'digital-marketing',
      title: 'Digital Marketing',
      description: 'Complete guide to digital marketing strategies including SEO, social media, and online advertising.',
      duration: '4 months',
      image: 'https://readdy.ai/api/search-image?query=digital%20marketing%20workspace%20with%20multiple%20screens%20showing%20social%20media%20analytics%20SEO%20tools%20and%20online%20campaigns%2C%20modern%20marketing%20office%20environment&width=400&height=250&seq=dm002h&orientation=landscape'
    },
    {
      id: 6,
      slug: 'web-development-full-stack',
      title: 'Web Development (Full Stack)',
      description: 'Build responsive websites and web applications using modern frameworks and technologies.',
      duration: '5 months',
      image: 'https://readdy.ai/api/search-image?query=full%20stack%20web%20development%20coding%20workspace%20with%20multiple%20monitors%20showing%20HTML%20CSS%20JavaScript%20and%20backend%20code%2C%20modern%20programming%20environment&width=400&height=250&seq=fs001h&orientation=landscape'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative bg-gradient-to-r from-white/95 to-white/90 min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=modern%20educational%20environment%20with%20diverse%20students%20collaborating%20on%20laptops%20and%20digital%20devices%2C%20bright%20contemporary%20learning%20space%20with%20natural%20lighting%2C%20clean%20white%20and%20teal%20color%20scheme%2C%20inspiring%20atmosphere%20of%20growth%20and%20learning&width=1920&height=1080&seq=hero1&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-white/80"></div>
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#4D4D4D] mb-6 lg:mb-8 leading-tight hero-title">
              Empowering Students, <span className="text-[#0097A7]">Building Careers</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-[#4D4D4D] mb-8 lg:mb-12 leading-relaxed hero-subtitle">
              Join Ceorra Academy to master skills that uplift your career in today's fast-changing industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 hero-buttons">
              <Link href="/courses" className="bg-[#0097A7] text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full hover:bg-[#007B87] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 font-semibold text-lg whitespace-nowrap cursor-pointer text-center">
                Explore Courses
              </Link>
              <Link href="/contact" className="border-2 border-[#4D4D4D] text-[#4D4D4D] px-6 lg:px-8 py-3 lg:py-4 rounded-full hover:bg-[#4D4D4D] hover:text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 font-semibold text-lg whitespace-nowrap cursor-pointer text-center">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Highlights */}
      <section className="py-16 lg:py-20 bg-gray-50 fade-in-section">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#4D4D4D] mb-4 lg:mb-6">What Ceorra Academy Offers</h2>
            <p className="text-lg lg:text-xl text-[#4D4D4D] max-w-3xl mx-auto leading-relaxed">
              We provide comprehensive training programs, skill development workshops, and career guidance to help you succeed.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-white p-6 lg:p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-2 hover:border-[#0097A7]/20 transition-all duration-300 text-center group">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-[#0097A7]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#0097A7] transition-colors duration-300">
                <i className="ri-book-open-line text-2xl lg:text-3xl text-[#0097A7] group-hover:text-white transition-colors duration-300"></i>
              </div>
              <h3 className="text-lg lg:text-xl font-semibold text-[#4D4D4D] mb-4">Training Programs</h3>
              <p className="text-[#4D4D4D] leading-relaxed">Comprehensive courses designed to build expertise in high-demand skills.</p>
            </div>
            <div className="bg-white p-6 lg:p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-2 hover:border-[#0097A7]/20 transition-all duration-300 text-center group">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-[#0097A7]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#0097A7] transition-colors duration-300">
                <i className="ri-lightbulb-line text-2xl lg:text-3xl text-[#0097A7] group-hover:text-white transition-colors duration-300"></i>
              </div>
              <h3 className="text-lg lg:text-xl font-semibold text-[#4D4D4D] mb-4">Skill Development</h3>
              <p className="text-[#4D4D4D] leading-relaxed">Interactive workshops to enhance your professional capabilities.</p>
            </div>
            <div className="bg-white p-6 lg:p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-2 hover:border-[#0097A7]/20 transition-all duration-300 text-center group md:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-[#0097A7]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#0097A7] transition-colors duration-300">
                <i className="ri-compass-line text-2xl lg:text-3xl text-[#0097A7] group-hover:text-white transition-colors duration-300"></i>
              </div>
              <h3 className="text-lg lg:text-xl font-semibold text-[#4D4D4D] mb-4">Career Guidance</h3>
              <p className="text-[#4D4D4D] leading-relaxed">Personalized support to help you navigate your career path successfully.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-20 bg-white fade-in-section" ref={featuresRef}>
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#4D4D4D] mb-4 lg:mb-6">Why Choose Ceorra Academy?</h2>
            <p className="text-lg lg:text-xl text-[#4D4D4D] max-w-3xl mx-auto leading-relaxed">
              We're committed to providing exceptional education that prepares you for real-world success.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300 p-4">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-[#0097A7] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#006B7A] group-hover:shadow-lg transition-all duration-300">
                  <i className={`${feature.icon} text-2xl lg:text-3xl text-white`}></i>
                </div>
                <h3 className="text-lg lg:text-xl font-semibold text-[#4D4D4D] mb-4">{feature.title}</h3>
                <p className="text-[#4D4D4D] leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Preview */}
      <section className="py-16 lg:py-20 bg-gray-50 fade-in-section" ref={coursesRef}>
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#4D4D4D] mb-4 lg:mb-6">Featured Courses</h2>
            <p className="text-lg lg:text-xl text-[#4D4D4D] max-w-3xl mx-auto leading-relaxed">
              Explore our most popular training programs designed to boost your career prospects.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {courses.map((course, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-2 hover:border-[#0097A7] transition-all duration-300 overflow-hidden group">
                <div className="aspect-[16/10] overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-[#0097A7]/10 text-[#0097A7] px-3 py-1 rounded-full text-sm font-medium group-hover:bg-[#0097A7] group-hover:text-white transition-colors duration-300">
                      {course.duration}
                    </span>
                  </div>
                  <h3 className="text-lg lg:text-xl font-semibold text-[#4D4D4D] mb-3 group-hover:text-[#0097A7] transition-colors duration-300">{course.title}</h3>
                  <p className="text-[#4D4D4D] mb-6 leading-relaxed">{course.description}</p>
                  <Link href={`/courses/${course.id}/${course.slug}`} className="bg-[#0097A7] text-white px-6 py-3 rounded-full hover:bg-[#007B87] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 font-medium whitespace-nowrap cursor-pointer inline-block">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/courses" className="border-2 border-[#0097A7] text-[#0097A7] px-6 lg:px-8 py-3 lg:py-4 rounded-full hover:bg-[#0097A7] hover:text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 font-semibold text-lg whitespace-nowrap cursor-pointer">
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-[#0097A7] fade-in-section">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 lg:mb-8">Ready to Transform Your Career?</h2>
          <p className="text-lg lg:text-xl text-white/90 mb-8 lg:mb-12 max-w-2xl mx-auto leading-relaxed">
            Join thousands of students who have successfully advanced their careers through our comprehensive training programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center">
            <Link href="/schedule" className="bg-white text-[#0097A7] px-6 lg:px-8 py-3 lg:py-4 rounded-full hover:bg-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 font-semibold text-lg whitespace-nowrap cursor-pointer">
              Schedule Consultation
            </Link>
            <Link href="/courses" className="border-2 border-white text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full hover:bg-white hover:text-[#0097A7] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 font-semibold text-lg whitespace-nowrap cursor-pointer">
              Browse Courses
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero-title {
          animation: slideInLeft 0.8s ease-out;
        }

        .hero-subtitle {
          animation: slideInLeft 0.8s ease-out 0.2s both;
        }

        .hero-buttons {
          animation: fadeInUp 0.8s ease-out 0.4s both;
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

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}