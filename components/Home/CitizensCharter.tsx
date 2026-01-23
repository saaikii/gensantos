import React from 'react';
import { Construction, HardHat, Clock } from 'lucide-react';

const CitizensCharter: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50 pt-32 pb-20 flex items-center justify-center">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          
          {/* Icon */}
          <div className="relative inline-block mb-8">
            <div className="w-32 h-32 bg-yellow-400 rounded-3xl flex items-center justify-center shadow-xl shadow-yellow-400/30 animate-bounce">
              <Construction size={64} className="text-blue-900" />
            </div>
            <div className="absolute -top-2 -right-2 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center animate-pulse">
              <HardHat size={20} className="text-white" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-black text-blue-900 mb-4 uppercase tracking-tight">
            Under Construction
          </h1>
          
          <div className="h-2 w-24 bg-yellow-400 mx-auto rounded-full mb-8"></div>

          {/* Message */}
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            We're working hard to bring you the complete <strong className="text-blue-700">Citizen's Charter</strong> with detailed service standards, processing times, and requirements for all city government services.
          </p>

          {/* Coming Soon Box */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 inline-flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
              <Clock size={24} />
            </div>
            <div className="text-left">
              <p className="text-sm text-slate-500 font-medium">Expected Completion</p>
              <p className="text-lg font-bold text-blue-900">Coming Soon</p>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="mt-12 flex justify-center gap-2">
            <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '200ms' }}></div>
            <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse" style={{ animationDelay: '400ms' }}></div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CitizensCharter;