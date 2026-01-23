import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white border-t-4 border-yellow-400">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-blue-900 font-bold">G</div>
              <span className="text-xl font-bold">General Santos City</span>
            </div>
              <p className="text-slate-400 text-sm max-w-sm">
              The official website of the City Government of General Santos. Providing transparent, accessible, and efficient services to all Generals.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex gap-2"><MapPin size={16}/> City Hall Cmpd., C.P. Garcia Ave.</li>
              <li className="flex gap-2"><Phone size={16}/> (083) 552-0000</li>
              <li className="flex gap-2"><Mail size={16}/> info@gensantos.gov.ph</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-400 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-sky-400 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-pink-400 transition-colors"><Instagram size={20} /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© 2024 City Government of General Santos. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;