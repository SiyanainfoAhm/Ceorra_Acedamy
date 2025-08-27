
'use client';
import Link from 'next/link';

export default function About() {
  const values = [
    {
      icon: 'ri-award-line',
      title: 'Quality Training',
      description: 'We deliver exceptional educational experiences that meet the highest industry standards.'
    },
    {
      icon: 'ri-lightbulb-flash-line',
      title: 'Innovation',
      description: 'We continuously evolve our methods and content to stay ahead of industry trends.'
    },
    {
      icon: 'ri-user-heart-line',
      title: 'Student-Centered Growth',
      description: 'Every decision we make prioritizes the success and development of our students.'
    },
    {
      icon: 'ri-building-line',
      title: 'Industry Upliftment',
      description: 'We bridge the gap between education and industry needs to create meaningful impact.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative bg-gradient-to-br from-[#0097A7]/10 via-white to-[#4D4D4D]/5 py-20 lg:py-32"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#0097A7]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#4D4D4D]/10 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-1/4 w-24 h-24 bg-[#0097A7]/15 rounded-full blur-2xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-[#4D4D4D] mb-6 leading-tight">
              Who <span className="text-[#0097A7]">We Are</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#4D4D4D] leading-relaxed">
              Transforming careers through exceptional education and industry-aligned training programs.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#0097A7] rounded-full flex items-center justify-center mr-4">
                    <i className="ri-compass-3-line text-xl text-white"></i>
                  </div>
                  <h2 className="text-3xl font-bold text-[#4D4D4D]">Our Mission</h2>
                </div>
                <p className="text-lg text-[#4D4D4D] leading-relaxed">
                  To uplift careers by providing transformative learning experiences that bridge the gap between traditional education and industry demands. We empower individuals with practical skills, innovative thinking, and the confidence to excel in today's dynamic professional landscape.
                </p>
              </div>
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#0097A7] rounded-full flex items-center justify-center mr-4">
                    <i className="ri-eye-line text-xl text-white"></i>
                  </div>
                  <h2 className="text-3xl font-bold text-[#4D4D4D]">Our Vision</h2>
                </div>
                <p className="text-lg text-[#4D4D4D] leading-relaxed">
                  To be the leading academy that prepares students for industry challenges through cutting-edge curriculum, expert guidance, and hands-on learning. We envision a future where every graduate is equipped with the skills and mindset to drive innovation and success in their chosen field.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl font-bold text-[#4D4D4D] mb-6 text-center">Our Approach</h3>
              <p className="text-lg text-[#4D4D4D] leading-relaxed text-center max-w-3xl mx-auto">
                We believe in delivering high-quality training that combines theoretical knowledge with practical application. Our programs are designed by industry experts, taught by experienced professionals, and continuously updated to reflect the latest trends and technologies. Every student receives personalized attention and career guidance to ensure their success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#4D4D4D] mb-4">Our Values</h2>
            <p className="text-xl text-[#4D4D4D] max-w-3xl mx-auto">
              These core principles guide everything we do and shape the learning environment we create.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-center group">
                <div className="w-16 h-16 bg-[#0097A7] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#007B87] transition-colors">
                  <i className={`${value.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-semibold text-[#4D4D4D] mb-4">{value.title}</h3>
                <p className="text-[#4D4D4D]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#0097A7]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">5000+</div>
              <div className="text-white/90">Students Trained</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-white/90">Expert Instructors</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">95%</div>
              <div className="text-white/90">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">8+</div>
              <div className="text-white/90">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-[#4D4D4D] mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-[#4D4D4D] mb-8 max-w-2xl mx-auto">
            Join our community of learners and take the first step toward transforming your career with industry-relevant skills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/courses" className="bg-[#0097A7] text-white px-8 py-4 rounded-full hover:bg-[#007B87] transition-colors font-semibold text-lg whitespace-nowrap cursor-pointer">
              Explore Courses
            </Link>
            <Link href="/schedule" className="border-2 border-[#0097A7] text-[#0097A7] px-8 py-4 rounded-full hover:bg-[#0097A7] hover:text-white transition-colors font-semibold text-lg whitespace-nowrap cursor-pointer">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
