import React from 'react';
import { 
  Sparkles, BookOpen, Landmark, Mic, Sprout, 
  Leaf, Scale, Heart, Utensils, Smartphone, Star
} from 'lucide-react';
import { BotService } from '../types';

const bots: BotService[] = [
  { id: '1', title: 'General Genie', description: 'The universal router that handles general queries and directs users to specific services.', icon: Sparkles, color: 'text-emerald-600 bg-emerald-50' },
  { id: '2', title: 'Padhai Buddy', description: 'A homework assistant for students (Math, Science) that can explain concepts from photos.', icon: BookOpen, color: 'text-blue-600 bg-blue-50' },
  { id: '3', title: 'Sarkari Yojna', description: 'A guide to Indian government schemes tailored to the user\'s profile.', icon: Landmark, color: 'text-orange-600 bg-orange-50' },
  { id: '4', title: 'Bolo English', description: 'A spoken English coach that listens to voice notes and corrects grammar/pronunciation.', icon: Mic, color: 'text-purple-600 bg-purple-50' },
  { id: '5', title: 'Kisan Bot', description: 'An agricultural assistant for crop health and Mandi rates.', icon: Sprout, color: 'text-green-600 bg-green-50' },
  { id: '6', title: 'Dadi Ke Nuskhe', description: 'Traditional wellness advice and Ayurvedic remedies.', icon: Leaf, color: 'text-rose-600 bg-rose-50' },
  { id: '7', title: 'Vakeel Sahab', description: 'A legal consultant that simplifies complex legal documents.', icon: Scale, color: 'text-slate-800 bg-slate-100' },
  { id: '8', title: 'Shaadi Bio', description: 'A creative writer for generating matrimonial profiles.', icon: Heart, color: 'text-pink-600 bg-pink-50' },
  { id: '9', title: 'Smart Rasoi', description: 'A chef that generates recipes based on available ingredients in the user\'s kitchen.', icon: Utensils, color: 'text-red-600 bg-red-50' },
  { id: '10', title: 'Tech Guru', description: 'A patient technical support guide designed specifically for seniors.', icon: Smartphone, color: 'text-yellow-600 bg-yellow-50' },
  { id: '11', title: 'Astro Kundali', description: 'A Vedic astrologer for horoscopes and birth charts.', icon: Star, color: 'text-indigo-600 bg-indigo-50' },
];

export const Ecosystem: React.FC = () => {
  return (
    <section id="bots" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-saffron-600 font-bold tracking-wide uppercase text-sm mb-3">The Genie Ecosystem</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
            One Number. <span className="text-emerald-800">Endless Possibilities.</span>
          </h3>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            From fields to classrooms, courtrooms to clinics, Project Genie brings specialized AI experts directly to your WhatsApp chat.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {bots.map((bot) => (
            <div 
              key={bot.id} 
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-start hover:-translate-y-1"
            >
              <div className={`p-3 rounded-xl mb-4 ${bot.color} transition-colors`}>
                <bot.icon className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-800 transition-colors">
                {bot.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                {bot.description}
              </p>
              <a href="#" className="inline-flex items-center text-sm font-semibold text-emerald-800 hover:text-saffron-600 transition-colors">
                Start Chat <ArrowIcon className="w-4 h-4 ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ArrowIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);