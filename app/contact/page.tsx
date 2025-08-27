
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0097A7] to-[#006B7A] text-white py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Let's Connect</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Ready to take the next step in your career journey? We're here to help you discover the perfect training program and answer any questions you may have.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-[#4D4D4D] mb-8">Send Us a Message</h2>
              
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center gap-3">
                    <i className="ri-check-circle-line w-5 h-5 flex items-center justify-center text-green-600"></i>
                    <span className="text-green-700 font-medium">Message sent successfully! We'll get back to you soon.</span>
                  </div>
                </div>
              )}

              <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#4D4D4D] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0097A7] focus:border-transparent"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0097A7] focus:border-transparent"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#4D4D4D] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0097A7] focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#4D4D4D] mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0097A7] focus:border-transparent resize-none"
                    placeholder="Tell us about your training needs or ask any questions..."
                  />
                  <div className="text-right text-sm text-gray-500 mt-1">
                    {formData.message.length}/500 characters
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#0097A7] text-white py-4 px-6 rounded-lg font-bold hover:bg-[#006B7A] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <i className="ri-loader-4-line w-5 h-5 flex items-center justify-center animate-spin"></i>
                      Sending Message...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-[#4D4D4D] mb-8">Get in Touch</h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0097A7]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-mail-line w-6 h-6 flex items-center justify-center text-[#0097A7]"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#4D4D4D] mb-2">Email Us</h3>
                    <p className="text-gray-600 mb-2">Send us an email and we'll respond within 24 hours</p>
                    <a href="mailto:info@ceorraacademy.com" className="text-[#0097A7] hover:text-[#006B7A] font-medium">
                      info@ceorraacademy.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0097A7]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-phone-line w-6 h-6 flex items-center justify-center text-[#0097A7]"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#4D4D4D] mb-2">Call Us</h3>
                    <p className="text-gray-600 mb-2">Speak with our team during business hours</p>
                    <a href="tel:+1234567890" className="text-[#0097A7] hover:text-[#006B7A] font-medium">
                      +1 (234) 567-8900
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Mon - Fri: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0097A7]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-map-pin-line w-6 h-6 flex items-center justify-center text-[#0097A7]"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#4D4D4D] mb-2">Visit Us</h3>
                    <p className="text-gray-600 mb-2">Come visit our training center</p>
                    <address className="text-[#0097A7] not-italic">
                      1234 Learning Boulevard<br />
                      Education District<br />
                      Professional City, PC 12345
                    </address>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.279909073!2d-74.25987368715491!3d40.697670063840744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1641234567890!5m2!1sen!2s"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ceorra Academy Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#4D4D4D] mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find quick answers to common questions about our training programs and services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: 'What types of training programs do you offer?',
                answer: 'We offer comprehensive training in digital skills, business leadership, technology, and personal development across various industries.'
              },
              {
                question: 'How long are your courses?',
                answer: 'Course duration varies from 4 weeks to 16 weeks depending on the program complexity and depth of content covered.'
              },
              {
                question: 'Do you provide certification?',
                answer: 'Yes, we provide industry-recognized certificates upon successful completion of our training programs.'
              },
              {
                question: 'Can I get corporate training for my team?',
                answer: 'Absolutely! We offer customized corporate training solutions tailored to your organization\'s specific needs and goals.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-semibold text-[#4D4D4D] mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0097A7] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Learning Journey?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Don't wait to advance your career. Schedule a consultation today and discover how Ceorra Academy can help you achieve your professional goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/schedule"
              className="bg-white text-[#0097A7] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              Schedule a Call
            </Link>
            <Link
              href="/courses"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-[#0097A7] transition-colors whitespace-nowrap"
            >
              Browse Courses
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
