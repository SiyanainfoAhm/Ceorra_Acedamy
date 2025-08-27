
'use client';

import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      icon: 'ri-graduation-cap-line',
      title: 'Training & Development',
      description: 'Comprehensive training programs designed to enhance professional skills and accelerate career growth through hands-on learning experiences.',
      features: ['Customized curriculum', 'Expert instructors', 'Practical workshops', 'Certification programs']
    },
    {
      icon: 'ri-computer-line',
      title: 'Digital Skills Academy',
      description: 'Modern digital literacy programs covering essential technologies and tools needed to thrive in today\'s digital workplace environment.',
      features: ['Technology training', 'Digital tools mastery', 'Online collaboration', 'Digital transformation']
    },
    {
      icon: 'ri-organization-chart',
      title: 'ERP & Business Tools',
      description: 'Specialized training on enterprise resource planning systems and business productivity tools to optimize organizational efficiency.',
      features: ['System implementation', 'Process optimization', 'Data management', 'Workflow automation']
    },
    {
      icon: 'ri-lightbulb-line',
      title: 'Career Guidance Workshops',
      description: 'Professional development workshops focusing on career planning, skill assessment, and strategic career advancement opportunities.',
      features: ['Career planning', 'Skill assessment', 'Resume building', 'Interview preparation']
    },
    {
      icon: 'ri-building-line',
      title: 'Corporate Training Solutions',
      description: 'Tailored training solutions for organizations seeking to upskill their workforce and enhance team performance across departments.',
      features: ['Team development', 'Leadership training', 'Skill enhancement', 'Performance improvement']
    },
    {
      icon: 'ri-user-star-line',
      title: 'Professional Mentoring',
      description: 'One-on-one mentoring programs connecting learners with industry experts for personalized guidance and career development support.',
      features: ['Expert mentorship', 'Personalized guidance', 'Industry insights', 'Career coaching']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0097A7] to-[#006B7A] text-white py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Comprehensive training solutions designed to empower individuals and organizations with the skills needed to excel in today's competitive landscape.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#4D4D4D] mb-6">What We Offer</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From individual skill development to comprehensive corporate training programs, we provide flexible solutions tailored to meet diverse learning needs and professional goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group border border-gray-100 hover:border-[#0097A7]/20"
              >
                <div className="w-16 h-16 bg-[#0097A7]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#0097A7] transition-colors">
                  <i className={`${service.icon} w-8 h-8 flex items-center justify-center text-2xl text-[#0097A7] group-hover:text-white transition-colors`}></i>
                </div>
                
                <h3 className="text-xl font-bold text-[#4D4D4D] mb-4 group-hover:text-[#0097A7] transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <i className="ri-check-line w-4 h-4 flex items-center justify-center text-[#0097A7] flex-shrink-0"></i>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className="w-full bg-[#0097A7] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#006B7A] transition-colors whitespace-nowrap">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#4D4D4D] mb-6">Our Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A structured approach to learning that ensures maximum knowledge retention and practical application in real-world scenarios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Assessment',
                description: 'Evaluate current skills and identify learning objectives'
              },
              {
                step: '02',
                title: 'Customization',
                description: 'Tailor programs to meet specific needs and goals'
              },
              {
                step: '03',
                title: 'Implementation',
                description: 'Deliver engaging training through expert instruction'
              },
              {
                step: '04',
                title: 'Support',
                description: 'Provide ongoing guidance and career development'
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-[#0097A7] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-lg font-bold text-[#4D4D4D] mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '5000+', label: 'Students Trained' },
              { number: '150+', label: 'Corporate Clients' },
              { number: '95%', label: 'Success Rate' },
              { number: '50+', label: 'Training Programs' }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-[#0097A7] mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0097A7] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss how our training services can help you or your organization achieve professional excellence and career growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-[#0097A7] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              Contact Us Today
            </Link>
            <Link
              href="/schedule"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-[#0097A7] transition-colors whitespace-nowrap"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
