import React from 'react';
import { Briefcase, Coffee, Rocket, Globe, ArrowRight, Code, Sparkles, Megaphone, GraduationCap, Coins, Lightbulb } from 'lucide-react';

export const Careers: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="py-20 bg-emerald-50 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-emerald-800 font-bold tracking-widest uppercase text-xs mb-4 block animate-fade-in-up">Join the Journey</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 animate-fade-in-up">Build the Future of <br/><span className="text-emerald-800">Bharat's AI</span></h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up">
            We are looking for curious minds, builders, and dreamers to help us bring AI to the next billion users.
          </p>
        </div>
      </section>

      {/* Culture/Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-16 h-16 bg-saffron-100 text-saffron-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Rocket className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">High Ownership</h3>
              <p className="text-gray-600 leading-relaxed">We hire experts and trust them. You'll have the autonomy to build and ship fast from day one.</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Real World Impact</h3>
              <p className="text-gray-600 leading-relaxed">Your work will help farmers in Vidarbha or students in Bihar solve real problems using their own language.</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Coffee className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Culture First</h3>
              <p className="text-gray-600 leading-relaxed">A collaborative, kind, and high-performance environment where everyone's growth is a priority.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Internship Section */}
      <section id="internships" className="py-24 bg-gray-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-saffron-500 font-bold tracking-wide uppercase text-sm mb-3">Early Career Opportunities</h2>
            <h3 className="text-3xl md:text-5xl font-bold">Paid Internship Program <span className="text-emerald-400">2024</span></h3>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              We're looking for passionate students and fresh graduates to join us for 3-6 months of high-impact work.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Code, 
                title: 'AI & Engineering', 
                desc: 'Work on LLM fine-tuning, RAG pipelines, and building scalable WhatsApp bots.',
                tech: 'Python, React, FastAPI'
              },
              { 
                icon: Sparkles, 
                title: 'Product & Design', 
                desc: 'Design human-centric interfaces for vernacular users and shape the genie experience.',
                tech: 'Figma, User Research'
              },
              { 
                icon: Megaphone, 
                title: 'Growth & Community', 
                desc: 'Help us scale Project Genie to millions. Manage user feedback and local community growth.',
                tech: 'Marketing, Operations'
              }
            ].map((track, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all group">
                <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <track.icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold mb-3">{track.title}</h4>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">{track.desc}</p>
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-emerald-500/80 uppercase">{track.tech}</span>
                  <span className="text-xs text-white/40">3-6 Months</span>
                </div>
              </div>
            ))}
          </div>

          {/* Perks */}
          <div className="mt-20 grid md:grid-cols-4 gap-6">
            {[
              { icon: Coins, text: 'Competitive Stipend' },
              { icon: GraduationCap, text: 'Mentorship' },
              { icon: Lightbulb, text: 'Real Projects' },
              { icon: Rocket, text: 'PPO Opportunities' }
            ].map((perk, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-white/5 px-6 py-4 rounded-2xl border border-white/5">
                <perk.icon className="w-5 h-5 text-saffron-500" />
                <span className="font-semibold text-sm">{perk.text}</span>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center bg-gradient-to-r from-emerald-900/50 to-emerald-800/50 p-12 rounded-3xl border border-emerald-500/20">
            <h4 className="text-2xl font-bold mb-4">Ready to kickstart your career?</h4>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Send your resume and a short note about why you want to build for Bharat to our hiring team.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="mailto:remotiapps@gmail.com?subject=Internship Application - [Your Name]" 
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-4 rounded-full font-bold transition-all shadow-xl shadow-emerald-500/20 flex items-center gap-2 group"
              >
                Apply for Internship <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <span className="text-gray-500">or</span>
              <a href="mailto:remotiapps@gmail.com" className="text-white hover:text-emerald-400 font-bold underline decoration-emerald-500 underline-offset-8">
                remotiapps@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};