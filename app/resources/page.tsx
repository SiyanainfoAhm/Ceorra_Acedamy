
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Articles' },
    { id: 'career', label: 'Career Tips' },
    { id: 'skills', label: 'Skill Development' },
    { id: 'industry', label: 'Industry Insights' },
    { id: 'technology', label: 'Technology' },
    { id: 'business', label: 'Business' }
  ];

  const articles = [
    {
      id: 1,
      title: '10 Essential Digital Skills Every Professional Needs in 2024',
      category: 'skills',
      excerpt: 'Discover the most in-demand digital skills that can accelerate your career growth and keep you competitive in today\'s evolving job market.',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      readTime: '5 min read',
      image: 'https://readdy.ai/api/search-image?query=professional%20working%20on%20laptop%20with%20digital%20interfaces%20and%20modern%20technology%2C%20bright%20office%20environment%2C%20career%20development%20concept%2C%20clean%20minimal%20setup&width=400&height=250&seq=ds001&orientation=landscape'
    },
    {
      id: 2,
      title: 'The Future of Remote Work: Adapting Your Skills for Success',
      category: 'career',
      excerpt: 'Learn how to thrive in remote work environments and develop the skills necessary for effective virtual collaboration and productivity.',
      author: 'Michael Chen',
      date: '2024-01-12',
      readTime: '7 min read',
      image: 'https://readdy.ai/api/search-image?query=remote%20work%20setup%20with%20person%20working%20from%20home%20office%2C%20modern%20workspace%20with%20technology%20tools%2C%20professional%20home%20environment%2C%20natural%20lighting&width=400&height=250&seq=rw001&orientation=landscape'
    },
    {
      id: 3,
      title: 'Data Analytics: Transforming Business Decision-Making',
      category: 'industry',
      excerpt: 'Explore how data analytics is revolutionizing business strategies and why analytical skills are becoming essential across all industries.',
      author: 'Emily Rodriguez',
      date: '2024-01-10',
      readTime: '6 min read',
      image: 'https://readdy.ai/api/search-image?query=business%20analytics%20dashboard%20with%20charts%20and%20graphs%20on%20computer%20screens%2C%20data%20visualization%20workspace%2C%20professional%20business%20environment%2C%20modern%20office&width=400&height=250&seq=da001&orientation=landscape'
    },
    {
      id: 4,
      title: 'Building Leadership Skills: From Manager to Executive',
      category: 'career',
      excerpt: 'Understand the key competencies and strategies needed to transition from management roles to executive leadership positions successfully.',
      author: 'David Park',
      date: '2024-01-08',
      readTime: '8 min read',
      image: 'https://readdy.ai/api/search-image?query=business%20leadership%20meeting%20with%20executives%20discussing%20strategy%2C%20professional%20conference%20room%2C%20collaborative%20leadership%20environment%2C%20corporate%20setting&width=400&height=250&seq=ls001&orientation=landscape'
    },
    {
      id: 5,
      title: 'The Rise of AI in Workplace Automation',
      category: 'technology',
      excerpt: 'Discover how artificial intelligence is reshaping work processes and what skills professionals need to stay relevant in an AI-driven world.',
      author: 'Lisa Wang',
      date: '2024-01-05',
      readTime: '9 min read',
      image: 'https://readdy.ai/api/search-image?query=AI%20technology%20workspace%20with%20robots%20and%20human%20collaboration%2C%20futuristic%20office%20environment%2C%20artificial%20intelligence%20concept%2C%20modern%20technology%20setup&width=400&height=250&seq=ai001&orientation=landscape'
    },
    {
      id: 6,
      title: 'Effective Project Management in Agile Environments',
      category: 'business',
      excerpt: 'Master agile project management methodologies and learn how to lead successful projects in fast-paced, dynamic business environments.',
      author: 'James Thompson',
      date: '2024-01-03',
      readTime: '6 min read',
      image: 'https://readdy.ai/api/search-image?query=agile%20project%20management%20team%20working%20with%20scrum%20boards%20and%20planning%20tools%2C%20collaborative%20workspace%2C%20modern%20business%20environment%2C%20organized%20team%20setting&width=400&height=250&seq=pm001&orientation=landscape'
    },
    {
      id: 7,
      title: 'Cybersecurity Awareness: Protecting Your Digital Assets',
      category: 'technology',
      excerpt: 'Learn essential cybersecurity practices and understand the importance of digital security in protecting personal and organizational data.',
      author: 'Rachel Kim',
      date: '2024-01-01',
      readTime: '7 min read',
      image: 'https://readdy.ai/api/search-image?query=cybersecurity%20professional%20working%20with%20security%20monitoring%20systems%2C%20high-tech%20security%20operations%20center%2C%20digital%20protection%20concept%2C%20modern%20tech%20environment&width=400&height=250&seq=cs001&orientation=landscape'
    },
    {
      id: 8,
      title: 'Entrepreneurship in the Digital Age: Building Your Startup',
      category: 'business',
      excerpt: 'Explore the fundamentals of digital entrepreneurship and learn how to build and scale a successful startup in today\'s competitive market.',
      author: 'Alex Rivera',
      date: '2023-12-28',
      readTime: '10 min read',
      image: 'https://readdy.ai/api/search-image?query=startup%20entrepreneur%20working%20in%20modern%20co-working%20space%20with%20laptops%20and%20business%20planning%20materials%2C%20innovative%20workspace%2C%20entrepreneurial%20environment&width=400&height=250&seq=en001&orientation=landscape'
    },
    {
      id: 9,
      title: 'Communication Skills for Professional Success',
      category: 'skills',
      excerpt: 'Develop effective communication strategies that enhance your professional relationships and accelerate your career advancement.',
      author: 'Maria Santos',
      date: '2023-12-25',
      readTime: '5 min read',
      image: 'https://readdy.ai/api/search-image?query=professional%20presentation%20and%20communication%20training%20session%2C%20business%20meeting%20with%20effective%20speakers%2C%20modern%20conference%20setting%2C%20engaging%20communication&width=400&height=250&seq=com001&orientation=landscape'
    }
  ];

  const filteredArticles = activeCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0097A7] to-[#006B7A] text-white py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Resources & Insights</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Stay ahead with expert insights, career tips, and industry knowledge to accelerate your professional growth and success.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all whitespace-nowrap ${
                  activeCategory === category.id
                    ? 'bg-[#0097A7] text-white shadow-lg'
                    : 'bg-white text-[#4D4D4D] hover:bg-[#0097A7] hover:text-white border border-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#0097A7] text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h2 className="text-xl font-bold text-[#4D4D4D] mb-3 group-hover:text-[#0097A7] transition-colors line-clamp-2">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <i className="ri-user-line w-4 h-4 flex items-center justify-center"></i>
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span>{article.date}</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                  <Link
                    href={`/resources/${article.id}`}
                    className="inline-flex items-center gap-2 text-[#0097A7] font-medium hover:text-[#006B7A] transition-colors"
                  >
                    Read More
                    <i className="ri-arrow-right-s-line w-4 h-4 flex items-center justify-center"></i>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <i className="ri-file-text-line w-16 h-16 flex items-center justify-center mx-auto text-gray-400 mb-4 text-4xl"></i>
              <h3 className="text-xl font-medium text-gray-600 mb-2">No articles found</h3>
              <p className="text-gray-500">Try selecting a different category to see available articles.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-[#0097A7] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Subscribe to our newsletter and receive the latest insights, career tips, and industry updates directly in your inbox.
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-[#4D4D4D] focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="bg-white text-[#0097A7] px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#4D4D4D] mb-6">Featured Resources</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Access our most popular resources and tools designed to accelerate your professional development journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: 'ri-book-open-line',
                title: 'Career Guide',
                description: 'Comprehensive guide to career planning and professional development strategies.',
                link: '#'
              },
              {
                icon: 'ri-file-download-line',
                title: 'Skill Assessment',
                description: 'Evaluate your current skills and identify areas for improvement and growth.',
                link: '#'
              },
              {
                icon: 'ri-video-line',
                title: 'Video Tutorials',
                description: 'Access our library of instructional videos covering various professional topics.',
                link: '#'
              }
            ].map((resource, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center border border-gray-100"
              >
                <div className="w-16 h-16 bg-[#0097A7]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${resource.icon} w-8 h-8 flex items-center justify-center text-2xl text-[#0097A7]`}></i>
                </div>
                <h3 className="text-xl font-bold text-[#4D4D4D] mb-4">{resource.title}</h3>
                <p className="text-gray-600 mb-6">{resource.description}</p>
                <Link
                  href={resource.link}
                  className="inline-flex items-center gap-2 text-[#0097A7] font-medium hover:text-[#006B7A] transition-colors"
                >
                  Access Resource
                  <i className="ri-external-link-line w-4 h-4 flex items-center justify-center"></i>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
