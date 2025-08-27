
import Link from 'next/link';

const articleData = {
  1: {
    title: '10 Essential Digital Skills Every Professional Needs in 2024',
    category: 'Skill Development',
    author: 'Sarah Johnson',
    date: '2024-01-15',
    readTime: '5 min read',
    image: 'https://readdy.ai/api/search-image?query=professional%20working%20on%20laptop%20with%20digital%20interfaces%20and%20modern%20technology%2C%20bright%20office%20environment%2C%20career%20development%20concept%2C%20clean%20minimal%20setup&width=800&height=400&seq=ds001d&orientation=landscape',
    content: `
      <p>In today's rapidly evolving digital landscape, professionals across all industries need to adapt and acquire new skills to remain competitive. The digital transformation has accelerated dramatically, especially in the wake of global changes in work patterns and business operations.</p>
      
      <h2>The Digital Skills Revolution</h2>
      <p>Digital skills are no longer optional add-ons to traditional job roles – they've become fundamental requirements for professional success. From basic digital literacy to advanced technical competencies, these skills determine career trajectories and organizational effectiveness.</p>
      
      <h2>Top 10 Essential Digital Skills</h2>
      <h3>1. Data Analysis and Interpretation</h3>
      <p>The ability to collect, analyze, and draw meaningful insights from data is crucial in virtually every field. Professionals who can interpret data trends and make data-driven decisions are highly valued across industries.</p>
      
      <h3>2. Digital Communication</h3>
      <p>Mastering various digital communication platforms, from video conferencing to collaborative tools, ensures effective remote and hybrid work capabilities.</p>
      
      <h3>3. Cloud Computing Proficiency</h3>
      <p>Understanding cloud-based systems and software-as-a-service (SaaS) platforms is essential for modern business operations and collaboration.</p>
      
      <h3>4. Cybersecurity Awareness</h3>
      <p>With increasing digital threats, all professionals need basic cybersecurity knowledge to protect organizational and personal data.</p>
      
      <h3>5. Social Media Marketing</h3>
      <p>Whether for personal branding or business promotion, understanding social media strategies and analytics is valuable across many roles.</p>
      
      <h2>Building Your Digital Skill Set</h2>
      <p>Developing these skills requires a combination of formal training, hands-on practice, and continuous learning. Consider enrolling in specialized courses, participating in online workshops, and applying new skills in real-world projects.</p>
      
      <p>Remember that digital skills are constantly evolving. What's relevant today may be outdated tomorrow, making continuous learning and adaptation essential for long-term career success.</p>
    `
  },
  2: {
    title: 'The Future of Remote Work: Adapting Your Skills for Success',
    category: 'Career Tips',
    author: 'Michael Chen',
    date: '2024-01-12',
    readTime: '7 min read',
    image: 'https://readdy.ai/api/search-image?query=remote%20work%20setup%20with%20person%20working%20from%20home%20office%2C%20modern%20workspace%20with%20technology%20tools%2C%20professional%20home%20environment%2C%20natural%20lighting&width=800&height=400&seq=rw001d&orientation=landscape',
    content: `
      <p>Remote work has transformed from a temporary pandemic solution to a permanent fixture in the modern workplace. As organizations embrace flexible work arrangements, professionals must develop new skills and adapt existing ones to thrive in virtual environments.</p>
      
      <h2>The Remote Work Landscape</h2>
      <p>The shift to remote work has fundamentally changed how we communicate, collaborate, and deliver results. This new paradigm requires different approaches to productivity, team management, and professional development.</p>
      
      <h2>Essential Remote Work Skills</h2>
      <h3>Self-Management and Discipline</h3>
      <p>Working independently requires strong self-discipline, time management, and the ability to maintain productivity without direct supervision.</p>
      
      <h3>Digital Communication Mastery</h3>
      <p>Effective remote communication goes beyond video calls. It involves mastering asynchronous communication, written clarity, and digital body language.</p>
      
      <h3>Technology Proficiency</h3>
      <p>Remote workers must be comfortable with various digital tools, from project management platforms to collaboration software and communication apps.</p>
      
      <h2>Building Remote Relationships</h2>
      <p>Creating meaningful professional relationships in virtual environments requires intentional effort and new strategies for networking and team building.</p>
      
      <p>Success in remote work isn't just about adapting to technology – it's about developing a new mindset and skill set that embraces flexibility, autonomy, and digital-first approaches to professional excellence.</p>
    `
  },
  3: {
    title: 'Data Analytics: Transforming Business Decision-Making',
    category: 'Industry Insights',
    author: 'Emily Rodriguez',
    date: '2024-01-10',
    readTime: '6 min read',
    image: 'https://readdy.ai/api/search-image?query=business%20analytics%20dashboard%20with%20charts%20and%20graphs%20on%20computer%20screens%2C%20data%20visualization%20workspace%2C%20professional%20business%20environment%2C%20modern%20office&width=800&height=400&seq=da001d&orientation=landscape',
    content: `
      <p>Data analytics has emerged as one of the most transformative forces in modern business, revolutionizing how organizations make decisions, understand customers, and drive growth. The ability to extract meaningful insights from vast amounts of data has become a critical competitive advantage.</p>
      
      <h2>The Analytics Revolution</h2>
      <p>Every digital interaction generates data, creating unprecedented opportunities for businesses to understand patterns, predict trends, and optimize operations. Organizations that effectively leverage this data are outperforming their competitors across all key metrics.</p>
      
      <h2>Key Areas of Impact</h2>
      <h3>Customer Understanding</h3>
      <p>Advanced analytics helps businesses understand customer behavior, preferences, and journey patterns, enabling personalized experiences and improved satisfaction.</p>
      
      <h3>Operational Efficiency</h3>
      <p>Data-driven insights identify bottlenecks, inefficiencies, and optimization opportunities across all business processes.</p>
      
      <h3>Strategic Planning</h3>
      <p>Predictive analytics enables organizations to forecast market trends, demand patterns, and potential risks, informing strategic decision-making.</p>
      
      <h2>The Skills Gap Challenge</h2>
      <p>While the demand for analytics capabilities grows, organizations face a significant skills gap. Professionals who can bridge the gap between technical analysis and business insights are increasingly valuable.</p>
      
      <p>The future belongs to organizations and professionals who can effectively harness the power of data to drive innovation, efficiency, and growth in an increasingly competitive marketplace.</p>
    `
  }
};

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
    { id: '7' },
    { id: '8' },
    { id: '9' }
  ];
}

export default async function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const article = articleData[parseInt(id) as keyof typeof articleData];

  if (!article) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#4D4D4D] mb-4">Article Not Found</h1>
          <Link href="/resources" className="text-[#0097A7] hover:underline">
            Return to Resources
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Article Header */}
      <section className="relative py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Link
                href="/resources"
                className="text-[#0097A7] hover:text-[#006B7A] flex items-center gap-2"
              >
                <i className="ri-arrow-left-line w-4 h-4 flex items-center justify-center"></i>
                Back to Resources
              </Link>
              <span className="text-gray-400">|</span>
              <span className="text-[#0097A7] font-medium">{article.category}</span>
            </div>
            
            <h1 className="text-4xl font-bold text-[#4D4D4D] mb-6 leading-tight">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#0097A7] rounded-full flex items-center justify-center">
                  <i className="ri-user-line w-5 h-5 flex items-center justify-center text-white"></i>
                </div>
                <div>
                  <div className="font-medium text-[#4D4D4D]">{article.author}</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <i className="ri-calendar-line w-4 h-4 flex items-center justify-center"></i>
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <i className="ri-time-line w-4 h-4 flex items-center justify-center"></i>
                <span>{article.readTime}</span>
              </div>
            </div>
            
            <div className="relative mb-12">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-80 object-cover object-top rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div 
              className="prose prose-lg max-w-none text-gray-600 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: article.content }}
              style={{
                fontSize: '18px',
                lineHeight: '1.8'
              }}
            />
            
            {/* Social Share */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-[#4D4D4D] mb-2">Share this article</h3>
                </div>
                <div className="flex items-center gap-4">
                  <button className="w-10 h-10 bg-[#0097A7] text-white rounded-full flex items-center justify-center hover:bg-[#006B7A] transition-colors">
                    <i className="ri-facebook-fill w-5 h-5 flex items-center justify-center"></i>
                  </button>
                  <button className="w-10 h-10 bg-[#0097A7] text-white rounded-full flex items-center justify-center hover:bg-[#006B7A] transition-colors">
                    <i className="ri-twitter-fill w-5 h-5 flex items-center justify-center"></i>
                  </button>
                  <button className="w-10 h-10 bg-[#0097A7] text-white rounded-full flex items-center justify-center hover:bg-[#006B7A] transition-colors">
                    <i className="ri-linkedin-fill w-5 h-5 flex items-center justify-center"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-[#4D4D4D] mb-8 text-center">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Building Leadership Skills: From Manager to Executive',
                  category: 'Career Tips',
                  readTime: '8 min read',
                  image: 'https://readdy.ai/api/search-image?query=business%20leadership%20meeting%20with%20executives%20discussing%20strategy%2C%20professional%20conference%20room%2C%20collaborative%20leadership%20environment%2C%20corporate%20setting&width=300&height=200&seq=ls001r&orientation=landscape'
                },
                {
                  title: 'The Rise of AI in Workplace Automation',
                  category: 'Technology',
                  readTime: '9 min read',
                  image: 'https://readdy.ai/api/search-image?query=AI%20technology%20workspace%20with%20robots%20and%20human%20collaboration%2C%20futuristic%20office%20environment%2C%20artificial%20intelligence%20concept%2C%20modern%20technology%20setup&width=300&height=200&seq=ai001r&orientation=landscape'
                },
                {
                  title: 'Communication Skills for Professional Success',
                  category: 'Skill Development',
                  readTime: '5 min read',
                  image: 'https://readdy.ai/api/search-image?query=professional%20presentation%20and%20communication%20training%20session%2C%20business%20meeting%20with%20effective%20speakers%2C%20modern%20conference%20setting%2C%20engaging%20communication&width=300&height=200&seq=com001r&orientation=landscape'
                }
              ].map((relatedArticle, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                  <img
                    src={relatedArticle.image}
                    alt={relatedArticle.title}
                    className="w-full h-40 object-cover object-top"
                  />
                  <div className="p-6">
                    <div className="text-sm text-[#0097A7] font-medium mb-2">{relatedArticle.category}</div>
                    <h3 className="font-semibold text-[#4D4D4D] mb-3 line-clamp-2">{relatedArticle.title}</h3>
                    <div className="text-sm text-gray-500">{relatedArticle.readTime}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-[#0097A7] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Updated with Our Latest Insights</h2>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Subscribe to receive expert tips, industry insights, and career guidance directly in your inbox.
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
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
    </div>
  );
}
