import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingOverlay: React.FC = () => {
    return (
        <div className="absolute inset-0 z-50 bg-white/60 backdrop-blur-[2px] flex items-center justify-center animate-fade-in rounded-[inherit]">
            <div className="bg-white p-3 rounded-full shadow-lg border border-gray-100 flex items-center gap-2 animate-bounce-subtle">
                <Loader2 className="animate-spin text-blue-600" size={24} />
                <span className="text-xs font-bold text-blue-800 uppercase tracking-widest px-1">Loading...</span>
            </div>
        </div>
    );
};

export default LoadingOverlay;
