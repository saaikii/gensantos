import React from 'react';
import { BookOpen } from 'lucide-react';

const CitizensCharterSkeleton: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 pt-36 pb-16 font-sans relative">
             <div className="container mx-auto px-6 max-w-7xl relative z-10">
                {/* Header Skeleton */}
                <div className="text-center pt-24 pb-16 px-6 animate-pulse">
                     <div className="h-10 md:h-14 bg-gray-200 rounded-lg w-3/4 mx-auto mb-6"></div>
                     <div className="w-24 h-1.5 bg-gray-200 mx-auto rounded-full mb-8"></div>
                     <div className="h-6 bg-gray-200 rounded w-1/2 mx-auto"></div>
                </div>

                {/* Search Bar Skeleton */}
                <div className="max-w-2xl mx-auto px-4 mb-12 animate-pulse">
                     <div className="h-16 bg-white rounded-xl shadow-lg border border-gray-100 w-full"></div>
                </div>

                {/* Content Grid Skeleton */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="bg-white rounded-[1.5rem] p-8 shadow-sm border border-gray-100 flex flex-col h-full animate-pulse">
                             <div className="w-14 h-14 bg-gray-200 rounded-2xl mb-6"></div>
                             <div className="flex-1 space-y-3">
                                <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                                <div className="h-6 bg-gray-200 rounded w-1/2"></div>
                             </div>
                             <div className="h-4 w-24 bg-gray-200 rounded mt-8"></div>
                        </div>
                    ))}
                </div>
             </div>
        </div>
    );
};

export default CitizensCharterSkeleton;
