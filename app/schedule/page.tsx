
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SchedulePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferred_date: '',
    preferred_time: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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
    setSubmitStatus('idle');
    
    try {
      // Prepare form data for submission using application/x-www-form-urlencoded format
      const formDataToSubmit = new URLSearchParams();
      formDataToSubmit.append('name', formData.name);
      formDataToSubmit.append('email', formData.email);
      formDataToSubmit.append('phone', formData.phone);
      formDataToSubmit.append('preferred_date', formData.preferred_date);
      formDataToSubmit.append('preferred_time', formData.preferred_time);
      formDataToSubmit.append('message', formData.message);

      const response = await fetch('https://readdy.ai/api/form/d2nthe1n5f9tmn9vu60g', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formDataToSubmit.toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', preferred_date: '', preferred_time: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get today's date in YYYY-MM-DD format for min date
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0097A7] to-[#006B7A] text-white py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Schedule a Consultation</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Book a personalized consultation with our training experts to discuss your career goals and find the perfect learning path for your success.
          </p>
        </div>
      </section>

      {/* Consultation Form */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Form */}
              <div>
                <h2 className="text-3xl font-bold text-[#4D4D4D] mb-8">Book Your Free Consultation</h2>
                
                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                    <div className="flex items-center gap-3">
                      <i className="ri-check-circle-line w-5 h-5 flex items-center justify-center text-green-600"></i>
                      <span className="text-green-700 font-medium">Consultation scheduled successfully! We'll contact you to confirm the details.</span>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                    <div className="flex items-center gap-3">
                      <i className="ri-error-warning-line w-5 h-5 flex items-center justify-center text-red-600"></i>
                      <span className="text-red-700 font-medium">Something went wrong. Please try again or contact us directly.</span>
                    </div>
                  </div>
                )}

                <form id="schedule-form" data-readdy-form onSubmit={handleSubmit} className="space-y-6">
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
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0097A7] focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="preferred_date" className="block text-sm font-medium text-[#4D4D4D] mb-2">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        id="preferred_date"
                        name="preferred_date"
                        value={formData.preferred_date}
                        onChange={handleInputChange}
                        required
                        min={today}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0097A7] focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="preferred_time" className="block text-sm font-medium text-[#4D4D4D] mb-2">
                        Preferred Time *
                      </label>
                      <select
                        id="preferred_time"
                        name="preferred_time"
                        value={formData.preferred_time}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0097A7] focus:border-transparent appearance-none bg-white"
                      >
                        <option value="">Select a time</option>
                        <option value="09:00">9:00 AM</option>
                        <option value="10:00">10:00 AM</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="14:00">2:00 PM</option>
                        <option value="15:00">3:00 PM</option>
                        <option value="16:00">4:00 PM</option>
                      </select>
                      <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#4D4D4D] mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      maxLength={500}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0097A7] focus:border-transparent resize-none"
                      placeholder="Tell us about your training goals or any specific questions..."
                    />
                    <div className="text-right text-sm text-gray-500 mt-1">
                      {formData.message.length}/500 characters
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting || formData.message.length > 500}
                    className="w-full bg-[#0097A7] text-white py-4 px-6 rounded-lg font-bold hover:bg-[#006B7A] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed whitespace-nowrap"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <i className="ri-loader-4-line w-5 h-5 flex items-center justify-center animate-spin"></i>
                        Scheduling Consultation...
                      </span>
                    ) : (
                      'Schedule Consultation'
                    )}
                  </button>
                </form>
              </div>

              {/* Consultation Benefits */}
              <div>
                <h2 className="text-3xl font-bold text-[#4D4D4D] mb-8">What to Expect</h2>
                
                <div className="space-y-6">
                  {[
                    {
                      icon: 'ri-user-heart-line',
                      title: 'Personalized Assessment',
                      description: 'We\'ll discuss your current skills, career goals, and identify the best training path for your success.'
                    },
                    {
                      icon: 'ri-road-map-line',
                      title: 'Customized Learning Plan',
                      description: 'Receive a tailored recommendation of courses and programs that align with your objectives.'
                    },
                    {
                      icon: 'ri-question-answer-line',
                      title: 'Expert Guidance',
                      description: 'Get answers to all your questions about our programs, pricing, and career development opportunities.'
                    },
                    {
                      icon: 'ri-calendar-check-line',
                      title: 'Flexible Scheduling',
                      description: 'Choose from multiple time slots that work with your schedule for a convenient consultation experience.'
                    }
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#0097A7]/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <i className={`${benefit.icon} w-6 h-6 flex items-center justify-center text-[#0097A7]`}></i>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#4D4D4D] mb-2">{benefit.title}</h3>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 p-6 bg-gray-50 rounded-xl">
                  <h3 className="text-lg font-semibold text-[#4D4D4D] mb-4">Consultation Details</h3>
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-center gap-3">
                      <i className="ri-time-line w-4 h-4 flex items-center justify-center text-[#0097A7]"></i>
                      <span>Duration: 30-45 minutes</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <i className="ri-video-line w-4 h-4 flex items-center justify-center text-[#0097A7]"></i>
                      <span>Format: Video call or phone</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <i className="ri-money-dollar-circle-line w-4 h-4 flex items-center justify-center text-[#0097A7]"></i>
                      <span>Cost: Completely free</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <i className="ri-shield-check-line w-4 h-4 flex items-center justify-center text-[#0097A7]"></i>
                      <span>No commitment required</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-[#4D4D4D] mb-6">Prefer a Different Way to Connect?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We're here to help in whatever way works best for you. Choose your preferred method of communication.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="w-16 h-16 bg-[#0097A7]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-phone-line w-8 h-8 flex items-center justify-center text-[#0097A7]"></i>
              </div>
              <h3 className="text-lg font-semibold text-[#4D4D4D] mb-2">Call Us Directly</h3>
              <p className="text-gray-600 mb-4">Speak with our team right away</p>
              <a 
                href="tel:+916357412888"
                className="text-[#0097A7] hover:text-[#006B7A] font-medium"
              >
                +91 63574 12888
              </a>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="w-16 h-16 bg-[#0097A7]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-mail-line w-8 h-8 flex items-center justify-center text-[#0097A7]"></i>
              </div>
              <h3 className="text-lg font-semibold text-[#4D4D4D] mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">Send us your questions</p>
              <a 
                href="mailto:Inquiry@ceorra.in"
                className="text-[#0097A7] hover:text-[#006B7A] font-medium"
              >
                Inquiry@ceorra.in
              </a>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="w-16 h-16 bg-[#0097A7]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-message-3-line w-8 h-8 flex items-center justify-center text-[#0097A7]"></i>
              </div>
              <h3 className="text-lg font-semibold text-[#4D4D4D] mb-2">Contact Form</h3>
              <p className="text-gray-600 mb-4">Send us a detailed message</p>
              <Link 
                href="/contact"
                className="text-[#0097A7] hover:text-[#006B7A] font-medium"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0097A7] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Take the Next Step in Your Career</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of professionals who have advanced their careers with Ceorra Academy's expert training programs.
          </p>
          <Link
            href="/courses"
            className="bg-white text-[#0097A7] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors whitespace-nowrap"
          >
            Explore Our Courses
          </Link>
        </div>
      </section>
    </div>
  );
}
