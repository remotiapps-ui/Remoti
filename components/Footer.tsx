import React from 'react';
import { MessageCircle, Twitter, Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
               <div className="w-8 h-8 bg-emerald-700 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
               </div>
               <span className="text-xl font-bold text-white">Project Genie</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Empowering India with AI that speaks your language. Solving real problems in Education, Agriculture, and Law.
            </p>
            <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2 text-gray-400">
                    <Mail className="w-4 h-4" />
                    <span>remotiapps@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                    <Phone className="w-4 h-4" />
                    <span>+91 74061 45333</span>
                </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/#bots" className="hover:text-saffron-500 transition-colors">Ecosystem</Link></li>
              <li><Link to="/#bolo-english" className="hover:text-saffron-500 transition-colors">Bolo English</Link></li>
              <li><Link to="/#bots" className="hover:text-saffron-500 transition-colors">Kisan Bot</Link></li>
              <li><Link to="/#bots" className="hover:text-saffron-500 transition-colors">Padhai Buddy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about-us" className="hover:text-saffron-500 transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-saffron-500 transition-colors">Careers</Link></li>
              <li><Link to="/support" className="hover:text-saffron-500 transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="hover:text-saffron-500 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-saffron-500 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-saffron-500 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-saffron-500 transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
            <p className="text-xs text-gray-500">
              Made with ❤️ in Bengaluru.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Project Genie AI. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};