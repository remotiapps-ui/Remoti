import React from 'react';
import { ShieldCheck, Globe, Users, Heart } from 'lucide-react';

export const TrustBar: React.FC = () => {
  return (
    <section className="bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
          
          <div className="p-6 md:p-8 flex flex-col items-center text-center">
            <Globe className="w-8 h-8 text-saffron-500 mb-3" />
            <h4 className="font-bold text-gray-900">Vernacular Support</h4>
            <p className="text-sm text-gray-500 mt-1">Hindi, Hinglish, Tamil + 9 more</p>
          </div>

          <div className="p-6 md:p-8 flex flex-col items-center text-center">
            <ShieldCheck className="w-8 h-8 text-emerald-600 mb-3" />
            <h4 className="font-bold text-gray-900">Privacy First</h4>
            <p className="text-sm text-gray-500 mt-1">End-to-End Encrypted</p>
          </div>

          <div className="p-6 md:p-8 flex flex-col items-center text-center">
            <Users className="w-8 h-8 text-blue-500 mb-3" />
            <h4 className="font-bold text-gray-900">1.4 Billion Ready</h4>
            <p className="text-sm text-gray-500 mt-1">Scalable Infrastructure</p>
          </div>

          <div className="p-6 md:p-8 flex flex-col items-center text-center">
            <Heart className="w-8 h-8 text-red-500 mb-3" />
            <h4 className="font-bold text-gray-900">Made for Bharat</h4>
            <p className="text-sm text-gray-500 mt-1">Free for individual use</p>
          </div>

        </div>
      </div>
    </section>
  );
};