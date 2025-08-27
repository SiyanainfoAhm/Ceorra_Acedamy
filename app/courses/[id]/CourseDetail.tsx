
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const courseData = {
  1: {
    title: 'Digital Marketing Mastery',
    category: 'Digital Skills',
    duration: '8 weeks',
    level: 'Intermediate',
    price: '$599',
    rating: 4.8,
    students: 1247,
    image: 'https://readdy.ai/api/search-image?query=professional%20digital%20marketing%20workspace%20with%20laptop%20showing%20analytics%20dashboards%2C%20modern%20office%20environment%2C%20clean%20minimal%20background%2C%20bright%20lighting%2C%20business%20professional%20atmosphere&width=800&height=400&seq=dm001d&orientation=landscape',
    overview: 'Master the art of digital marketing with our comprehensive 8-week program. This course covers everything from SEO and social media marketing to content strategy and analytics. You\'ll learn industry-proven techniques used by leading digital marketing professionals and gain hands-on experience with real-world projects.',
    objectives: [
      'Develop comprehensive digital marketing strategies',
      'Master SEO techniques for improved search rankings',
      'Create engaging social media campaigns',
      'Understand analytics and ROI measurement',
      'Build effective content marketing funnels',
      'Implement email marketing automation'
    ],
    targetAudience: [
      'Marketing professionals seeking digital skills',
      'Small business owners wanting to grow online',
      'Recent graduates entering the marketing field',
      'Career changers interested in digital marketing',
      'Entrepreneurs building their online presence'
    ],
    syllabus: [
      {
        week: 'Week 1-2',
        title: 'Digital Marketing Foundations',
        topics: ['Digital marketing landscape', 'Consumer behavior online', 'Marketing funnel basics', 'Goal setting and KPIs']
      },
      {
        week: 'Week 3-4',
        title: 'Search Engine Optimization',
        topics: ['Keyword research', 'On-page optimization', 'Technical SEO', 'Link building strategies']
      },
      {
        week: 'Week 5-6',
        title: 'Social Media & Content Marketing',
        topics: ['Platform-specific strategies', 'Content creation', 'Community management', 'Influencer partnerships']
      },
      {
        week: 'Week 7-8',
        title: 'Analytics & Optimization',
        topics: ['Google Analytics setup', 'Campaign measurement', 'A/B testing', 'ROI calculation']
      }
    ]
  },
  2: {
    title: 'Business Leadership Excellence',
    category: 'Business',
    duration: '6 weeks',
    level: 'Advanced',
    price: '$799',
    rating: 4.9,
    students: 892,
    image: 'https://readdy.ai/api/search-image?query=business%20leadership%20training%20session%20with%20professional%20executives%20in%20modern%20conference%20room%2C%20leadership%20development%20concept%2C%20clean%20corporate%20environment%2C%20inspiring%20atmosphere&width=800&height=400&seq=ble001d&orientation=landscape',
    overview: 'Elevate your leadership capabilities with our advanced 6-week program designed for experienced professionals. This course focuses on strategic thinking, team management, and executive presence to help you excel in senior leadership roles.',
    objectives: [
      'Develop strategic leadership mindset',
      'Master effective team management',
      'Build executive presence and communication',
      'Learn conflict resolution strategies',
      'Understand organizational change management',
      'Create high-performance team cultures'
    ],
    targetAudience: [
      'Mid to senior-level managers',
      'Team leaders seeking advancement',
      'Entrepreneurs scaling their businesses',
      'Department heads and directors',
      'Professionals transitioning to leadership roles'
    ],
    syllabus: [
      {
        week: 'Week 1',
        title: 'Leadership Fundamentals',
        topics: ['Leadership styles', 'Self-assessment', 'Vision and mission development', 'Leadership presence']
      },
      {
        week: 'Week 2-3',
        title: 'Team Management',
        topics: ['Team dynamics', 'Performance management', 'Delegation strategies', 'Motivation techniques']
      },
      {
        week: 'Week 4-5',
        title: 'Strategic Thinking',
        topics: ['Strategic planning', 'Decision-making frameworks', 'Risk management', 'Innovation leadership']
      },
      {
        week: 'Week 6',
        title: 'Change Leadership',
        topics: ['Change management', 'Communication strategies', 'Stakeholder engagement', 'Implementation planning']
      }
    ]
  },
  3: {
    title: 'Data Analytics Foundations',
    category: 'Technology',
    duration: '10 weeks',
    level: 'Beginner',
    price: '$699',
    rating: 4.7,
    students: 2156,
    image: 'https://readdy.ai/api/search-image?query=data%20analytics%20workspace%20with%20charts%20graphs%20and%20computer%20screens%20showing%20data%20visualization%2C%20modern%20tech%20office%2C%20clean%20professional%20setup%2C%20bright%20ambient%20lighting&width=800&height=400&seq=daf001d&orientation=landscape',
    overview: 'Begin your data analytics journey with our comprehensive 10-week foundation course. Learn to collect, analyze, and interpret data using industry-standard tools and techniques for informed decision making.',
    objectives: [
      'Master data collection and cleaning techniques',
      'Learn statistical analysis fundamentals',
      'Create compelling data visualizations',
      'Understand database management basics',
      'Apply analytics to business problems',
      'Use Excel, SQL, and visualization tools'
    ],
    targetAudience: [
      'Business professionals seeking data skills',
      'Career changers entering analytics',
      'Students pursuing data-related careers',
      'Managers needing data-driven insights',
      'Entrepreneurs wanting to understand metrics'
    ],
    syllabus: [
      {
        week: 'Week 1-2',
        title: 'Data Analytics Introduction',
        topics: ['Analytics landscape', 'Data types and sources', 'Basic statistics', 'Excel fundamentals']
      },
      {
        week: 'Week 3-4',
        title: 'Data Collection & Cleaning',
        topics: ['Data gathering methods', 'Data quality assessment', 'Cleaning techniques', 'Data preparation']
      },
      {
        week: 'Week 5-7',
        title: 'Analysis Techniques',
        topics: ['Descriptive analytics', 'Statistical methods', 'Correlation analysis', 'Trend identification']
      },
      {
        week: 'Week 8-10',
        title: 'Visualization & Reporting',
        topics: ['Chart selection', 'Dashboard creation', 'Storytelling with data', 'Presentation techniques']
      }
    ]
  }
};

interface CourseDetailProps {
  courseId: string;
}

export default function CourseDetail({ courseId }: CourseDetailProps) {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);
  const course = courseData[courseId as keyof typeof courseData] || courseData[parseInt(courseId) as keyof typeof courseData];

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

  if (!course) {
    return (
      <div className="min-h-screen bg-white">
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-[#4D4D4D] mb-4">Course Not Found</h1>
            <Link href="/courses" className="text-[#0097A7] hover:underline">
              Return to Courses
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const toggleSection = (index: number) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Course Header */}
      <section className="relative py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex flex-wrap items-center gap-4 mb-6 animate-fade-in">
                <Link
                  href="/courses"
                  className="text-[#0097A7] hover:text-[#006B7A] flex items-center gap-2 transition-colors duration-300"
                >
                  <i className="ri-arrow-left-line w-4 h-4 flex items-center justify-center"></i>
                  Back to Courses
                </Link>
                <span className="text-gray-400 hidden sm:block">|</span>
                <span className="text-[#0097A7] font-medium">{course.category}</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-[#4D4D4D] mb-6 animate-fade-in-delayed">{course.title}</h1>

              <div className="flex flex-wrap items-center gap-4 lg:gap-6 mb-6 animate-fade-in-delayed">
                <div className="flex items-center gap-2">
                  <i className="ri-star-fill w-4 h-4 flex items-center justify-center text-yellow-500"></i>
                  <span className="font-medium">{course.rating}</span>
                  <span className="text-gray-500">({course.students} students)</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="ri-time-line w-4 h-4 flex items-center justify-center text-[#0097A7]"></i>
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="ri-bar-chart-line w-4 h-4 flex items-center justify-center text-[#0097A7]"></i>
                  <span>{course.level}</span>
                </div>
              </div>

              <div className="text-2xl lg:text-3xl font-bold text-[#0097A7] mb-8 animate-fade-in-delayed">{course.price}</div>

              <button className="bg-[#0097A7] text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-bold hover:bg-[#006B7A] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 whitespace-nowrap text-lg animate-fade-in-delayed">
                Enroll Now
              </button>
            </div>

            <div className="relative order-1 lg:order-2 animate-fade-in">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-64 lg:h-80 object-cover object-top rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Overview */}
            <div className="mb-12 fade-in-section">
              <h2 className="text-2xl lg:text-3xl font-bold text-[#4D4D4D] mb-6">Course Overview</h2>
              <p className="text-gray-600 text-lg leading-relaxed">{course.overview}</p>
            </div>

            {/* Learning Objectives */}
            <div className="mb-12 fade-in-section">
              <h2 className="text-2xl lg:text-3xl font-bold text-[#4D4D4D] mb-6">Learning Objectives</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.objectives.map((objective, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                    <i className="ri-check-line w-5 h-5 flex items-center justify-center text-[#0097A7] mt-1 flex-shrink-0"></i>
                    <span className="text-gray-600 leading-relaxed">{objective}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Target Audience */}
            <div className="mb-12 fade-in-section">
              <h2 className="text-2xl lg:text-3xl font-bold text-[#4D4D4D] mb-6">Who Should Attend</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.targetAudience.map((audience, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                    <i className="ri-user-line w-5 h-5 flex items-center justify-center text-[#0097A7] mt-1 flex-shrink-0"></i>
                    <span className="text-gray-600 leading-relaxed">{audience}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Syllabus */}
            <div className="mb-12 fade-in-section">
              <h2 className="text-2xl lg:text-3xl font-bold text-[#4D4D4D] mb-6">Course Syllabus</h2>
              <div className="space-y-4">
                {course.syllabus.map((section, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300">
                    <button
                      onClick={() => toggleSection(index)}
                      className="w-full px-6 py-4 bg-gray-50 hover:bg-gray-100 transition-colors duration-300 flex items-center justify-between"
                    >
                      <div className="text-left">
                        <h3 className="font-semibold text-[#4D4D4D]">{section.week}: {section.title}</h3>
                      </div>
                      <i className={`ri-arrow-down-s-line w-5 h-5 flex items-center justify-center transition-transform duration-300 ${
                        expandedSection === index ? 'rotate-180' : ''
                      }`}></i>
                    </button>

                    <div
                      className={`transition-all duration-300 ease-in-out ${
                        expandedSection === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      } overflow-hidden`}
                    >
                      <div className="px-6 py-4 bg-white">
                        <ul className="space-y-2">
                          {section.topics.map((topic, topicIndex) => (
                            <li key={topicIndex} className="flex items-start gap-3">
                              <i className="ri-arrow-right-s-line w-4 h-4 flex items-center justify-center text-[#0097A7] mt-1 flex-shrink-0"></i>
                              <span className="text-gray-600 leading-relaxed">{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enroll CTA */}
            <div className="bg-[#0097A7] rounded-xl p-6 lg:p-8 text-center text-white shadow-lg fade-in-section">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">Ready to Transform Your Career?</h3>
              <p className="text-lg lg:text-xl mb-6 lg:mb-8 opacity-90 leading-relaxed">
                Join {course.students.toLocaleString()}+ students who have already started their journey with this course.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center">
                <button className="bg-white text-[#0097A7] px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-bold hover:bg-gray-100 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 whitespace-nowrap">
                  Enroll Now - {course.price}
                </button>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-bold hover:bg-white hover:text-[#0097A7] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 whitespace-nowrap"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>
        {`
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
        `}
      </style>
    </div>
  );
}