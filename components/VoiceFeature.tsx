import React from 'react';
import { Mic, Volume2 } from 'lucide-react';

export const VoiceFeature: React.FC = () => {
  return (
    <section id="bolo-english" className="py-24 bg-emerald-900 relative overflow-hidden text-white">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-emerald-800/50 backdrop-blur-sm border border-emerald-700 px-3 py-1 rounded-full text-saffron-400 text-sm font-semibold mb-6">
              <Mic className="w-4 h-4" />
              <span>Voice-First Technology</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              "Bolo English" <br />
              <span className="text-emerald-300">Speak with Confidence.</span>
            </h2>
            <p className="text-emerald-100 text-lg mb-8 leading-relaxed">
              Don't just type, talk! Our 'Bolo English' bot listens to your pronunciation and provides instant, gentle feedback to help you master English. Perfect for job interviews or daily conversation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-saffron-500 hover:bg-saffron-600 text-white px-8 py-3 rounded-full font-bold transition-colors shadow-lg shadow-saffron-500/20">
                Try Voice Demo
              </button>
            </div>
          </div>

          {/* Visual/Animation */}
          <div className="relative">
             {/* Phone Frame Mockup */}
            <div className="mx-auto w-72 h-[500px] bg-gray-900 rounded-[3rem] border-8 border-gray-800 shadow-2xl relative overflow-hidden">
                {/* Screen */}
                <div className="bg-slate-100 w-full h-full flex flex-col relative">
                    {/* Header */}
                    <div className="bg-emerald-800 p-4 pt-8 text-white flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-xs">BE</div>
                        <div>
                            <div className="font-semibold text-sm">Bolo English</div>
                            <div className="text-[10px] opacity-80">Online</div>
                        </div>
                    </div>
                    
                    {/* Chat Area */}
                    <div className="p-4 space-y-4 flex-1 overflow-hidden">
                        {/* Bot Message */}
                        <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[85%] text-xs text-gray-800">
                            Hi! Try saying: "I want to apply for a job."
                        </div>

                        {/* User Audio Message Simulation */}
                        <div className="self-end ml-auto bg-emerald-100 p-3 rounded-lg rounded-tr-none shadow-sm max-w-[85%] flex items-center space-x-2">
                             <div className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center">
                                <span className="text-white text-[8px]">You</span>
                             </div>
                             <div className="flex items-center space-x-1 h-4">
                                {/* Waveform Animation */}
                                {[...Array(12)].map((_, i) => (
                                    <div 
                                        key={i} 
                                        className="w-1 bg-emerald-600 rounded-full animate-wave"
                                        style={{ 
                                            animationDelay: `${i * 0.1}s`,
                                            height: `${Math.random() * 100}%`
                                        }}
                                    ></div>
                                ))}
                             </div>
                             <span className="text-[10px] text-emerald-800 font-mono">0:04</span>
                        </div>

                        {/* Bot Feedback */}
                         <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[85%] text-xs text-gray-800">
                            <div className="flex items-center space-x-1 text-emerald-600 font-bold mb-1">
                                <Volume2 className="w-3 h-3" />
                                <span>Great job!</span>
                            </div>
                            Your pronunciation was 95% accurate. Try stressing the word "job" next time.
                        </div>
                    </div>

                     {/* Footer Input */}
                     <div className="p-2 bg-gray-50 border-t border-gray-200 flex items-center justify-center pb-6">
                        <div className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center shadow-lg animate-pulse">
                            <Mic className="w-6 h-6 text-white" />
                        </div>
                     </div>
                </div>
            </div>
            
            {/* Decorative background circle behind phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
};