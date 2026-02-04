import React from 'react';
import { Target, Users, Zap, Heart } from 'lucide-react';

export const AboutUs: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-emerald-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 animate-fade-in-up">Our Mission is <span className="text-saffron-500">Bharat</span></h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto font-light leading-relaxed animate-fade-in-up">
            We believe that cutting-edge AI shouldn't be a privilege of the few. Project Genie is dedicated to bringing the power of technology to every Indian, in their own language, right where they live: on WhatsApp.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Bridging the Digital Divide</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  India is a land of 1.4 billion dreams, but millions are held back by language barriers and complex interfaces. While AI is transforming the globe, many in our villages and small towns were being left behind.
                </p>
                <p>
                  Project Genie was born out of a simple question: "What if AI could speak our mother tongue?" We stripped away the need for expensive apps and high-end smartphones, choosing WhatsApp as our platform because it's where India already talks.
                </p>
                <p>
                  Today, we provide specialized assistants for Farmers, Students, Small Business owners, and Seniors, ensuring that help is always just a message away.
                </p>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-emerald-100 rounded-3xl -rotate-2 group-hover:rotate-0 transition-transform"></div>
              <img 
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800" 
                alt="Connecting People" 
                className="relative rounded-2xl shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Target, title: 'Impact First', desc: 'We measure success by the lives we touch and problems we solve.' },
              { icon: Users, title: 'Radical Inclusion', desc: 'AI for the 100%, regardless of literacy or language.' },
              { icon: Zap, title: 'Simplicity', desc: 'Technology should be invisible. Experience should be human.' },
              { icon: Heart, title: 'Trust', desc: 'Privacy and ethics are at the heart of every interaction.' },
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-800 mb-6">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};