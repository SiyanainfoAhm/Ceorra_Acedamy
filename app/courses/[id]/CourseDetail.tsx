
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const courseData = {
  1: {
    title: 'Spoken English',
    category: 'Personal Development',
    duration: '2-2.5 months',
    level: 'Beginners, Intermediate, Expert',
    price: '₹9,440 (with GST)',
    image: 'https://readdy.ai/api/search-image?query=professional%20spoken%20English%20language%20learning%20classroom%20with%20students%20practicing%20conversation%20skills%2C%20modern%20educational%20environment%20with%20interactive%20teaching%20methods%2C%20bright%20clean%20background&width=800&height=400&seq=se001d&orientation=landscape',
    overview:
      "This course focuses on improving your spoken English skills with practical exercises and real-world conversations. You'll learn proper pronunciation, grammar usage in speech, and build confidence in communicating effectively in English for both personal and professional settings.",
    objectives: [
      'Improve pronunciation and accent clarity',
      'Build confidence in English conversations',
      'Master grammar usage in spoken English',
      'Develop vocabulary for daily communication',
      'Practice real-world conversation scenarios',
      'Enhance listening and comprehension skills'
    ],
    targetAudience: [
      'Beginners wanting to start speaking English',
      'Intermediate learners seeking fluency',
      'Professionals needing English communication',
      'Students preparing for interviews',
      'Anyone wanting to improve conversation skills'
    ],
    syllabus: [
      {
        week: 'Month 1',
        title: 'Foundation & Pronunciation',
        topics: [
          'Basic pronunciation rules',
          'Common sounds and phonetics',
          'Simple conversation starters',
          'Grammar basics in speech'
        ]
      },
      {
        week: 'Month 2',
        title: 'Conversation Skills & Fluency',
        topics: [
          'Advanced conversation techniques',
          'Business English communication',
          'Presentation skills',
          'Interview preparation'
        ]
      }
    ]
  },
  2: {
    title: 'Certified MS Office (with AI)',
    category: 'Business Skills',
    duration: '2 months',
    level: 'Beginners, Intermediate, Expert',
    price: '₹11,800 (with GST)',
    image: 'https://readdy.ai/api/search-image?query=modern%20Microsoft%20Office%20training%20with%20AI%20integration%20showing%20Excel%20Word%20PowerPoint%20on%20computer%20screens%2C%20professional%20office%20workspace%2C%20clean%20technology%22environment&width=800&height=400&seq=mso001d&orientation=landscape',
    overview:
      'Comprehensive course covering MS Office applications enhanced with AI features. Learn to leverage artificial intelligence in Word, Excel, PowerPoint, and other Office applications for maximum productivity and efficiency in the modern workplace.',
    objectives: [
      'Master all MS Office applications with AI features',
      'Automate tasks using AI-powered tools',
      'Create professional documents and presentations',
      'Utilize advanced Excel functions with AI assistance',
      'Implement AI-driven data analysis',
      'Optimize workflow with intelligent features'
    ],
    targetAudience: [
      'Business professionals seeking productivity',
      'Students needing office skills',
      'Career changers entering office environments',
      'Entrepreneurs managing business operations',
      'Anyone wanting to modernize office skills'
    ],
    syllabus: [
      {
        week: 'Month 1',
        title: 'Office Fundamentals with AI',
        topics: [
          'Word with AI writing assistance',
          'Excel with intelligent formulas',
          'PowerPoint with design AI',
          'Outlook automation'
        ]
      },
      {
        week: 'Month 2',
        title: 'Advanced AI Integration',
        topics: [
          'Data analysis with AI',
          'Automated reporting',
          'AI-powered presentations',
          'Workflow optimization'
        ]
      }
    ]
  },
  3: {
    title: 'Certified MS Office (without AI)',
    category: 'Business Skills',
    duration: '2 months',
    level: 'Beginners, Intermediate, Expert',
    price: '₹10,030 (with GST)',
    image: 'https://readdy.ai/api/search-image?query=professional%20Microsoft%20Office%20training%20session%20with%20traditional%20desktop%20applications%2C%20business%20productivity%20workspace%2C%20organized%20clean%20office%20environment&width=800&height=400&seq=mso002d&orientation=landscape',
    overview:
      'Practical and comprehensive MS Office training covering Word, Excel, PowerPoint and other essential business applications. Master traditional office productivity tools for professional document creation and data management.',
    objectives: [
      'Master Word document creation and formatting',
      'Excel data analysis and spreadsheet management',
      'Professional PowerPoint presentations',
      'Outlook email and calendar management',
      'Integration between Office applications',
      'Business document standards and best practices'
    ],
    targetAudience: [
      'Office workers needing essential skills',
      'Students entering the workforce',
      'Small business owners',
      'Administrative professionals',
      'Anyone needing fundamental office skills'
    ],
    syllabus: [
      {
        week: 'Month 1',
        title: 'Core Applications',
        topics: [
          'Word processing and formatting',
          'Excel basics and formulas',
          'PowerPoint design principles',
          'Outlook management'
        ]
      },
      {
        week: 'Month 2',
        title: 'Advanced Features',
        topics: [
          'Advanced Excel functions',
          'Professional presentations',
          'Document collaboration',
          'Business templates'
        ]
      }
    ]
  },
  4: {
    title: 'Tally + GST',
    category: 'Business Skills',
    duration: '2.5 months',
    level: 'Beginners, Intermediate, Expert',
    price: '₹13,570 (with GST)',
    image: 'https://readdy.ai/api/search-image?query=Tally%20accountingsoftware%20training%20with%20GST%20calculations%20on%20computer%20screen%2C%20professional%20accounting%20workspace%2C%20financial%20data%20management%20environment&width=800&height=400&seq=tally001d&orientation=landscape',
    overview:
      'Learn accounting fundamentals with Tally software including GST compliance for efficient business financial management. This course covers everything from basic accounting principles to advanced GST implementation.',
    objectives: [
      'Master Tally software for accounting',
      'Understand GST compliance requirements',
      'Create and manage financial reports',
      'Handle inventory management',
      'Process payroll and taxation',
      'Implement business accounting systems'
    ],
    targetAudience: [
      'Accounting professionals',
      'Small business owners',
      'Finance students',
      'Bookkeepers and accountants',
      'Anyone handling business finances'
    ],
    syllabus: [
      {
        week: 'Month 1-1.5',
        title: 'Tally Fundamentals',
        topics: [
          'Tally installation and setup',
          'Company creation',
          'Ledger management',
          'Basic voucher entries'
        ]
      },
      {
        week: 'Month 2-2.5',
        title: 'GST & Advanced Features',
        topics: [
          'GST configuration in Tally',
          'GST returns and compliance',
          'Advanced reporting',
          'Inventory with GST'
        ]
      }
    ]
  },
  5: {
    title: 'Digital Marketing',
    category: 'Digital Skills',
    duration: '4 months',
    level: 'Beginners, Intermediate, Expert',
    price: '₹26,550 (with GST)',
    image: 'https://readdy.ai/api/search-image?query=digital%20marketing%20workspace%20with%20multiple%20screens%20showing%20social%20media%20analytics%20SEO%20tools%20and%20online%20campaigns%2C%20modern%20marketingoffice%20environment&width=800&height=400&seq=dm002d&orientation=landscape',
    overview:
      'Complete guide to digital marketing strategies including SEO, social media, content marketing and online advertising campaigns. Master the digital landscape and learn to create effective marketing campaigns that drive results.',
    objectives: [
      'Master SEO and search engine marketing',
      'Create effective social media campaigns',
      'Develop content marketing strategies',
      'Understand PPC and online advertising',
      'Analyze marketing data and metrics',
      'Build comprehensive digital marketing plans'
    ],
    targetAudience: [
      'Marketing professionals',
      'Business owners and entrepreneurs',
      'Students entering marketing field',
      'Freelancers offering marketing services',
      'Anyone interested in digital marketing'
    ],
    syllabus: [
      {
        week: 'Month 1',
        title: 'Digital Marketing Foundations',
        topics: [
          'Digital marketing overview',
          'Website optimization basics',
          'Content creation fundamentals',
          'Marketing analytics introduction'
        ]
      },
      {
        week: 'Month 2-4',
        title: 'Advanced Marketing Strategies',
        topics: [
          'SEO and SEM mastery',
          'Social media marketing',
          'Email marketing campaigns',
          'PPC advertising and ROI optimization'
        ]
      }
    ]
  },
  6: {
    title: 'Web Development (Full Stack)',
    category: 'Technology',
    duration: '5 months',
    level: 'Beginners, Intermediate, Expert',
    price: '₹35,400 (with GST)',
    image: 'https://readdy.ai/api/search-image?query=full%20stack%20web%20development%20coding%20workspace%20with%20multiple%20monitors%20showing%20HTML%20CSS%20JavaScript%20and%20backend%20code%2C%20modern%20programming%22environment&width=800&height=400&seq=fs001d&orientation=landscape',
    overview:
      'Covers both front-end and back-end development technologies to build complete web applications from scratch. Learn modern web development frameworks and tools used in the industry.',
    objectives: [
      'Master HTML, CSS, and JavaScript',
      'Learn modern frontend frameworks',
      'Understand backend development',
      'Work with databases and APIs',
      'Deploy applications to production',
      'Follow best practices and industry standards'
    ],
    targetAudience: [
      'Aspiring web developers',
      'Career changers entering tech',
      'Students pursuing programming careers',
      'Entrepreneurs building web products',
      'Anyone interested in web development'
    ],
    syllabus: [
      {
        week: 'Month 1-2',
        title: 'Frontend Development',
        topics: [
          'HTML5 and CSS3',
          'JavaScript fundamentals',
          'Responsive design',
          'Modern frontend frameworks'
        ]
      },
      {
        week: 'Month 3-5',
        title: 'Backend & Full Stack',
        topics: [
          'Backend programming',
          'Database management',
          'API development',
          'Deployment and hosting'
        ]
      }
    ]
  },
  7: {
    title: 'Python Programming',
    category: 'Technology',
    duration: '3 months',
    level: 'Beginners, Intermediate',
    price: '₹18,000 (with GST)',
    image: 'https://readdy.ai/api/search-image?query=Python%20programming%20training%20with%20code%20editor%20showing%20Python%20syntax%20and%20data%20analysis%2C%20professional%20development%20workspace%2C%20clean%20tech%20environment&width=800&height=400&seq=py001d&orientation=landscape',
    overview:
      'Foundational programming course covering Python syntax, data structures, algorithms and practical application development. Perfect for beginners starting their programming journey.',
    objectives: [
      'Master Python syntax and fundamentals',
      'Understand data structures and algorithms',
      'Build practical Python applications',
      'Learn object-oriented programming',
      'Work with libraries and frameworks',
      'Develop problem-solving skills'
    ],
    targetAudience: [
      'Programming beginners',
      'Students learning to code',
      'Professionals entering tech field',
      'Data analysis enthusiasts',
      'Anyone interested in Python programming'
    ],
    syllabus: [
      {
        week: 'Month 1',
        title: 'Python Basics',
        topics: [
          'Python syntax and variables',
          'Control structures',
          'Functions and modules',
          'Data types and collections'
        ]
      },
      {
        week: 'Month 2-3',
        title: 'Advanced Python',
        topics: [
          'Object-oriented programming',
          'File handling and databases',
          'Libraries and frameworks',
          'Project development'
        ]
      }
    ]
  },
  8: {
    title: 'Data Analytics with Excel & Power BI',
    category: 'Technology',
    duration: '3 months',
    level: 'Intermediate',
    price: '₹20,000 (with GST)',
    image: 'https://readdy.ai/api/search-image?query=data%20analytics%20training%20with%20Excel%20spreadsheets%20and%20Power%20BI%20dashboards%20showing%20charts%20and%20graphs%22C%20professional%20data%20analysis%20workspace&width=800&height=400&seq=da001d&orientation=landscape',
    overview:
      'Training on data analysis using Excel and Power BI for business intelligence and data-driven decision making. Learn to transform raw data into actionable insights.',
    objectives: [
      'Advanced Excel data analysis techniques',
      'Master Power BI for business intelligence',
      'Create interactive dashboards and reports',
      'Understand data visualization principles',
      'Develop data storytelling skills',
      'Implement data-driven decision making'
    ],
    targetAudience: [
      'Business analysts',
      'Data enthusiasts',
      'Professionals working with data',
      'Managers needing data insights',
      'Anyone interested in business intelligence'
    ],
    syllabus: [
      {
        week: 'Month 1',
        title: 'Advanced Excel Analytics',
        topics: [
          'Excel advanced functions',
          'Pivot tables and charts',
          'Data modeling',
          'Statistical analysis'
        ]
      },
      {
        week: 'Month 2-3',
        title: 'Power BI Mastery',
        topics: [
          'Power BI fundamentals',
          'Dashboard creation',
          'Data visualization',
          'Business intelligence reporting'
        ]
      }
    ]
  },
  9: {
    title: 'Graphic Design (Photoshop & AI)',
    category: 'Digital Skills',
    duration: '3 months',
    level: 'Beginners, Intermediate',
    price: '₹20,600 (with GST)',
    image: 'https://readdy.ai/api/search-image?query=graphic%20design%20studio%20with%20Photoshop%20and%20AI%20design%20tools%20on%20computer%20screens%2C%20creative%20workspace%20with%20digital%20art%20and%20design%20elements&width=800&height=400&seq=gd001d&orientation=landscape',
    overview:
      'Creative design training covering Photoshop and AI tools for professional graphic design and digital art creation. Learn industry-standard design techniques and software.',
    objectives: [
      'Master Adobe Photoshop tools and techniques',
      'Learn AI-powered design tools',
      'Develop professional design portfolio',
      'Understand design principles and theory',
      'Create various design projects',
      'Build client-ready design skills'
    ],
    targetAudience: [
      'Aspiring graphic designers',
      'Creative professionals',
      'Marketing professionals needing design skills',
      'Freelancers offering design services',
      'Anyone interested in digital design'
    ],
    syllabus: [
      {
        week: 'Month 1',
        title: 'Photoshop Fundamentals',
        topics: [
          'Photoshop interface and tools',
          'Image editing basics',
          'Layers and effects',
          'Color correction and retouching'
        ]
      },
      {
        week: 'Month 2-3',
        title: 'Advanced Design & AI Tools',
        topics: [
          'Advanced Photoshop techniques',
          'AI design tools integration',
          'Brand design projects',
          'Portfolio development'
        ]
      }
    ]
  },
  10: {
    title: 'Cybersecurity Fundamentals',
    category: 'Technology',
    duration: '3 months',
    level: 'Beginners, Intermediate',
    price: '₹24,000 (with GST)',
    image: 'https://readdy.ai/api/search-image?query=cybersecurity%20training%20environment%20with%20security%20monitoring%20screens%20and%20digital%20protection%20interfaces%2C%20professional%20cyber%20defense%20workspace&width=800&height=400&seq=cs001d&orientation=landscape',
    overview:
      'An introduction to cybersecurity principles, threat detection, and protection strategies for digital security professionals. Learn to protect systems and data from cyber threats.',
    objectives: [
      'Understand cybersecurity fundamentals',
      'Learn threat detection and analysis',
      'Implement security best practices',
      'Master security tools and technologies',
      'Develop incident response skills',
      'Build security awareness and culture'
    ],
    targetAudience: [
      'IT professionals',
      'Security enthusiasts',
      'System administrators',
      'Business owners concerned about security',
      'Anyone interested in cybersecurity'
    ],
    syllabus: [
      {
        week: 'Month 1',
        title: 'Security Fundamentals',
        topics: [
          'Cybersecurity overview',
          'Threat landscape',
          'Risk assessment',
          'Security policies and procedures'
        ]
      },
      {
        week: 'Month 2-3',
        title: 'Advanced Security Concepts',
        topics: [
          'Network security',
          'Incident response',
          'Security tools and technologies',
          'Compliance and governance'
        ]
      }
    ]
  },
  11: {
    title: 'Artificial Intelligence (AI) Basics',
    category: 'Technology',
    duration: '4 months',
    level: 'Intermediate',
    price: '₹28,000 (with GST)',
    image: 'https://readdy.ai/api/search-image?query=artificial%20intelligence%20training%20workspace%20with%20AI%20algorithms%20and%20machine%20learning%20models%20on%20computer%20screens%2C%20futuristic%20tech%20learning%20environment&width=800&height=400&seq=ai001d&orientation=landscape',
    overview:
      'A beginner-friendly introduction to AI concepts, machine learning basics, and practical AI applications in business. Understand the fundamentals of artificial intelligence and its real-world applications.',
    objectives: [
      'Understand AI and machine learning concepts',
      'Learn practical AI applications',
      'Explore AI tools and platforms',
      'Develop AI-powered solutions',
      'Understand ethical AI considerations',
      'Build AI project experience'
    ],
    targetAudience: [
      'Tech professionals exploring AI',
      'Business leaders implementing AI',
      'Students interested in AI field',
      'Entrepreneurs using AI for business',
      'Anyone curious about artificial intelligence'
    ],
    syllabus: [
      {
        week: 'Month 1-2',
        title: 'AI Fundamentals',
        topics: [
          'Introduction to AI and ML',
          'AI applications and use cases',
          'Data for AI systems',
          'Basic AI algorithms'
        ]
      },
      {
        week: 'Month 3-4',
        title: 'Practical AI Implementation',
        topics: [
          'AI tools and platforms',
          'Building AI solutions',
          'AI project management',
          'Ethics and future of AI'
        ]
      }
    ]
  },
  12: {
    title: 'Entrepreneurship & Startup Skills',
    category: 'Business',
    duration: '2 months',
    level: 'Beginners, Intermediate',
    price: '₹15,000 (with GST)',
    image: 'https://readdy.ai/api/search-image?query=entrepreneurship%20training%20session%20with%20business%20planning%20materials%20and%20startup%20strategy%20discussions%2C%20professional%20business%20development%20environment&width=800&height=400&seq=es001d&orientation=landscape',
    overview:
      'Teaches core entrepreneurial skills including business planning, startup strategies, and essential management techniques. Perfect for aspiring entrepreneurs and business leaders.',
    objectives: [
      'Develop business planning skills',
      'Learn startup strategies and methodologies',
      'Understand market research and validation',
      'Master financial planning for startups',
      'Build leadership and management skills',
      'Create actionable business plans'
    ],
    targetAudience: [
      'Aspiring entrepreneurs',
      'Business students',
      'Professionals starting businesses',
      'Innovation managers',
      'Anyone interested in entrepreneurship'
    ],
    syllabus: [
      {
        week: 'Month 1',
        title: 'Entrepreneurship Foundations',
        topics: [
          'Entrepreneurial mindset',
          'Business idea generation',
          'Market research and validation',
          'Business model development'
        ]
      },
      {
        week: 'Month 2',
        title: 'Startup Execution',
        topics: [
          'Business plan creation',
          'Financial planning and funding',
          'Team building and leadership',
          'Marketing and growth strategies'
        ]
      }
    ]
  },
  13: {
    title: 'Soft Skills & Personality Development',
    category: 'Personal Development',
    duration: '1.5 months',
    level: 'Beginners',
    price: '₹8,000 (with GST)',
    image: 'https://readdy.ai/api/search-image?query=soft%20skills%20training%20workshop%20with%20people%20practicing%20communication%20and%20leadership%20skills%2C%20professional%20development%20seminar%20environment&width=800&height=400&seq=ss001d&orientation=landscape',
    overview:
      'Focused on communication skills, leadership development, and personality enhancement for professional and personal growth. Build confidence and improve interpersonal effectiveness.',
    objectives: [
      'Improve communication and presentation skills',
      'Develop leadership and teamwork abilities',
      'Build confidence and self-awareness',
      'Master time management and productivity',
      'Enhance problem-solving skills',
      'Strengthen professional relationships'
    ],
    targetAudience: [
      'Working professionals',
      'Students entering workforce',
      'Team leaders and managers',
      'Anyone seeking personal development',
      'Individuals wanting career advancement'
    ],
    syllabus: [
      {
        week: 'Month 1',
        title: 'Communication & Interpersonal Skills',
        topics: [
          'Effective communication',
          'Active listening',
          'Public speaking',
          'Interpersonal relationships'
        ]
      },
      {
        week: 'Month 1.5',
        title: 'Leadership & Personal Growth',
        topics: [
          'Leadership skills',
          'Time management',
          'Emotional intelligence',
          'Personal branding'
        ]
      }
    ]
  }
};

interface CourseDetailProps {
  courseId: string;
}

export default function CourseDetail({ courseId }: CourseDetailProps) {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);
  const [showEnrollForm, setShowEnrollForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    motivation: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  
  const course = courseData[courseId as keyof typeof courseData];

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

  const handleEnrollClick = () => {
    setShowEnrollForm(true);
  };

  const handleCloseForm = () => {
    setShowEnrollForm(false);
    setSubmitStatus(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      experience: '',
      motivation: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Prepare form data for submission using application/x-www-form-urlencoded format
      const formDataToSubmit = new URLSearchParams();
      formDataToSubmit.append('fullName', formData.fullName);
      formDataToSubmit.append('email', formData.email);
      formDataToSubmit.append('phone', formData.phone);
      formDataToSubmit.append('experience', formData.experience);
      formDataToSubmit.append('motivation', formData.motivation);
      formDataToSubmit.append('courseName', course.title);
      formDataToSubmit.append('coursePrice', course.price);

      const response = await fetch('https://readdy.ai/api/form/d2ntor5d1b0hj0erhvhg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formDataToSubmit.toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setTimeout(() => {
          handleCloseForm();
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
                  <i className="ri-time-line w-4 h-4 flex items-center justify-center text-[#0097A7]"></i>
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="ri-bar-chart-line w-4 h-4 flex items-center justify-center text-[#0097A7]"></i>
                  <span>{course.level}</span>
                </div>
              </div>

              <div className="text-2xl lg:text-3xl font-bold text-[#0097A7] mb-8 animate-fade-in-delayed">{course.price}</div>

              <button 
                onClick={handleEnrollClick}
                className="bg-[#0097A7] text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-bold hover:bg-[#006B7A] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 whitespace-nowrap text-lg animate-fade-in-delayed"
              >
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
                Join thousands of professionals who have already started their journey with this course.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center">
                <button 
                  onClick={handleEnrollClick}
                  className="bg-white text-[#0097A7] px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-bold hover:bg-gray-100 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 whitespace-nowrap"
                >
                  Enroll Now
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

      {/* Enrollment Form Modal */}
      {showEnrollForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-[#4D4D4D]">Enroll in {course.title}</h3>
                <button
                  onClick={handleCloseForm}
                  className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors duration-300"
                >
                  <i className="ri-close-line text-xl"></i>
                </button>
              </div>

              {submitStatus === 'success' ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-check-line text-2xl text-green-600"></i>
                  </div>
                  <h4 className="text-xl font-semibold text-[#4D4D4D] mb-2">Enrollment Submitted!</h4>
                  <p className="text-gray-600">We'll contact you within 24 hours to confirm your enrollment and provide next steps.</p>
                </div>
              ) : (
                <form id="course-enrollment" onSubmit={handleSubmit} className="space-y-4" data-readdy-form>
                  <div>
                    <label htmlFor="courseName" className="block text-sm font-medium text-[#4D4D4D] mb-2">
                      Course Name
                    </label>
                    <input
                      type="text"
                      id="courseName"
                      name="courseName"
                      value={course.title}
                      readOnly
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-600 cursor-not-allowed"
                    />
                  </div>

                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-[#4D4D4D] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0097A7] focus:border-transparent transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#4D4D4D] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0097A7] focus:border-transparent transition-all duration-300"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#4D4D4D] mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0097A7] focus:border-transparent transition-all duration-300"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-[#4D4D4D] mb-2">
                      Current Experience Level
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0097A7] focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select your experience level</option>
                      <option value="Complete Beginner">Complete Beginner</option>
                      <option value="Some Knowledge">Some Knowledge</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="motivation" className="block text-sm font-medium text-[#4D4D4D] mb-2">
                      Why do you want to take this course?
                    </label>
                    <textarea
                      id="motivation"
                      name="motivation"
                      value={formData.motivation}
                      onChange={handleInputChange}
                      rows={3}
                      maxLength={500}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0097A7] focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us about your goals and motivation..."
                    />
                    <div className="text-right text-sm text-gray-500 mt-1">
                      {formData.motivation.length}/500 characters
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting || formData.motivation.length > 500}
                      className="w-full bg-[#0097A7] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#006B7A] disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300 whitespace-nowrap"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Enrollment'}
                    </button>
                  </div>

                  {submitStatus === 'error' && (
                    <div className="text-center text-red-600 mt-4">
                      <p>Something went wrong. Please try again.</p>
                    </div>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      )}

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
      `}</style>
    </div>
  );
}
