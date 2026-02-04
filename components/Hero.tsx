import React from 'react';
import { MessageCircle, CheckCircle2, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white pt-16 pb-20 lg:pt-32 lg:pb-28">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-saffron-500/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-emerald-800/5 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-1.5 rounded-full shadow-sm border border-emerald-100 mb-8 animate-fade-in-up">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-sm font-medium text-emerald-800">Live for 1.4 Billion Indians</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-6 leading-tight">
            Bharat ka <span className="text-emerald-800 relative">
              Apna Assistant
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-saffron-500 opacity-60" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C25.7501 2.99995 83.25 0.250059 200 1.99998" stroke="currentColor" strokeWidth="3"/></svg>
            </span>
          </h1>
          
          <p className="mt-6 text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Education, Agriculture, and Legal help is now just one WhatsApp message away. 
            Empowering every Indian, in their own language.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-emerald-800 hover:bg-emerald-900 text-white px-8 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105 shadow-xl shadow-emerald-800/20 group">
              <MessageCircle className="w-6 h-6" />
              <span>Chat on WhatsApp</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-full text-lg font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 transition-colors border border-emerald-200">
              Watch Demo
            </button>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-gray-500">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-saffron-500" />
              <span>Free for Everyone</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-saffron-500" />
              <span>No App Download</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-saffron-500" />
              <span>12+ Indian Languages</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};