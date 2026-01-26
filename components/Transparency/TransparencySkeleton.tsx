import React from 'react';
import { Search } from 'lucide-react';

const TransparencySkeleton: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-50 font-sans pt-20 animate-pulse">
            <div className="container mx-auto px-6 relative z-10">
                {/* Header Skeleton */}
                <div className="text-center pt-24 pb-12 px-6">
                    <div className="h-6 w-48 bg-gray-200 rounded-full mx-auto mb-6"></div>
                    <div className="h-12 w-3/4 md:w-1/2 bg-gray-200 rounded-lg mx-auto mb-6"></div>
                    <div className="w-24 h-1.5 bg-gray-200 mx-auto rounded-full mb-8"></div>
                    <div className="h-6 w-full max-w-2xl bg-gray-200 rounded mx-auto"></div>
                </div>
            </div>

            <div className="container mx-auto px-6 py-12">
                {/* Controls Section Skeleton */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 py-4 border-b border-gray-200">
                    <div className="flex gap-2 w-full md:w-auto overflow-x-auto">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="h-10 w-24 bg-gray-200 rounded-full"></div>
                        ))}
                    </div>
                    <div className="w-full md:w-80 h-10 bg-gray-200 rounded-full"></div>
                </div>

                {/* Grid Skeleton */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                        <div key={i} className="bg-white rounded-2xl p-2 shadow-sm border border-gray-100 flex flex-col h-full">
                            {/* Preview Area */}
                            <div className="h-56 bg-gray-200 rounded-xl w-full mb-4 relative overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                                    <div className="w-16 h-16 bg-gray-400 rounded"></div>
                                </div>
                            </div>
                            
                            {/* Content Area */}
                            <div className="p-4 space-y-3 flex-grow">
                                <div className="h-5 w-20 bg-gray-200 rounded"></div>
                                <div className="h-6 w-full bg-gray-200 rounded"></div>
                                <div className="h-6 w-3/4 bg-gray-200 rounded"></div>
                                <div className="h-4 w-full bg-gray-200 rounded mt-4"></div>
                                
                                <div className="pt-4 mt-auto flex justify-between">
                                    <div className="h-3 w-16 bg-gray-200 rounded"></div>
                                    <div className="h-3 w-16 bg-gray-200 rounded"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TransparencySkeleton;
