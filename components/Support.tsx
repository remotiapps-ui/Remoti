import React, { useState } from 'react';
import { Phone, Mail, Send, CheckCircle, MapPin } from 'lucide-react';

export const Support: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call to send email
    console.log(`Sending email to remotiapps@gmail.com from ${formState.email}`);
    console.log(`Message: ${formState.message}`);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds to allow another submission
      setTimeout(() => setIsSubmitted(false), 8000);
    }, 1500);
  };

  return (
    <section id="support" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-saffron-600 font-bold tracking-wide uppercase text-sm mb-3">Support</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
            We're Here to Help
          </h3>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Have questions about Project Genie? Reach out to our team directly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="bg-emerald-50 rounded-2xl p-8 md:p-10 border border-emerald-100 h-full">
            <h4 className="text-2xl font-bold text-emerald-900 mb-8">Contact Information</h4>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-lg shadow-sm text-emerald-700 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-emerald-900 uppercase tracking-wide mb-1">Phone</p>
                  <a href="tel:+917406145333" className="text-lg text-gray-700 font-medium hover:text-emerald-800 transition-colors">+91 74061 45333</a>
                  <p className="text-sm text-gray-500 mt-1">Mon-Fri, 9am - 6pm IST</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-lg shadow-sm text-emerald-700 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-emerald-900 uppercase tracking-wide mb-1">Email</p>
                  <a href="mailto:remotiapps@gmail.com" className="text-lg text-gray-700 font-medium hover:text-emerald-800 transition-colors break-all">remotiapps@gmail.com</a>
                  <p className="text-sm text-gray-500 mt-1">We reply within 24 hours</p>
                </div>
              </div>
              
               <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-lg shadow-sm text-emerald-700 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-emerald-900 uppercase tracking-wide mb-1">Office</p>
                  <p className="text-lg text-gray-700 font-medium">Bengaluru, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 min-h-[400px] animate-fade-in-up">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h4>
                <p className="text-gray-600 mb-8 max-w-sm mx-auto">
                  Thank you for contacting us. We have received your message and will get back to you at <strong>remotiapps@gmail.com</strong> shortly.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-emerald-700 font-semibold hover:text-emerald-800 underline decoration-2 underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all bg-gray-50 focus:bg-white"
                    placeholder="Enter your name"
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all bg-gray-50 focus:bg-white"
                    placeholder="Enter your email"
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all bg-gray-50 focus:bg-white resize-none"
                    placeholder="How can we help you?"
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center space-x-2 bg-emerald-800 text-white px-8 py-4 rounded-lg font-bold transition-all ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-emerald-900 hover:shadow-lg hover:-translate-y-0.5'}`}
                >
                  {isSubmitting ? (
                    <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
                <p className="text-xs text-center text-gray-500 mt-4">
                  Secure and confidential.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};