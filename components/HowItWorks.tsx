import React from 'react';
import { QrCode, MessageSquare, CheckCircle } from 'lucide-react';
import { Step } from '../types';

const steps: Step[] = [
  {
    id: 1,
    title: 'Scan QR Code',
    description: 'Simply scan the QR code or save our number +91 90000 90000.',
    icon: QrCode,
  },
  {
    id: 2,
    title: 'Say "Hi" to Genie',
    description: 'Open WhatsApp and send "Hi". Choose your language (Hindi, English, etc).',
    icon: MessageSquare,
  },
  {
    id: 3,
    title: 'Get Instant Solutions',
    description: 'Select a bot (e.g., Kisan, Padhai) and get answers in seconds.',
    icon: CheckCircle,
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How it Works</h2>
          <p className="text-gray-600">Simpler than sending a text message.</p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 -z-10"></div>

          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step) => (
              <div key={step.id} className="relative flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-white rounded-full border-4 border-emerald-50 shadow-lg flex items-center justify-center mb-6 z-10">
                  <div className="w-16 h-16 bg-emerald-800 rounded-full flex items-center justify-center text-white">
                    <step.icon className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 max-w-xs">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-emerald-50 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h4 className="text-2xl font-bold text-emerald-900 mb-2">Ready to start?</h4>
            <p className="text-emerald-700">Join 5 Million+ Indians using Project Genie today.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
             <div className="bg-white p-2 rounded-lg shadow-sm">
                <img src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://wa.me/919000090000" alt="QR Code" className="w-24 h-24" />
             </div>
             <div className="flex flex-col justify-center">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Scan or Click</p>
                <button className="bg-emerald-800 hover:bg-emerald-900 text-white px-6 py-3 rounded-lg font-bold transition-colors">
                  Open in WhatsApp
                </button>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};