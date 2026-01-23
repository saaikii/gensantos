import React from 'react';

const DepartmentsSkeleton: React.FC = () => {
    return (
        <div className="min-h-screen relative pt-40 pb-20 bg-slate-900 overflow-hidden font-sans">
            {/* Container */}
            <div className="container mx-auto px-6 relative z-20">
                {/* Search Bar Skeleton */}
                <div className="max-w-xl mx-auto mb-12 mt-8">
                    <div className="w-full h-14 bg-slate-800/60 rounded-full animate-pulse border border-white/5"></div>
                </div>

                {/* Content Grid Skeleton */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-4 max-w-7xl mx-auto">
                    {/* Left Column */}
                    <div className="space-y-4">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                            <div key={`left-${i}`} className="flex items-center justify-between pb-2 border-b border-white/5 animate-pulse">
                                <div className="flex items-center gap-3 w-full">
                                    <div className="w-5 h-5 bg-slate-800 rounded"></div>
                                    <div className="h-4 bg-slate-800 rounded w-3/4"></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Column */}
                    <div className="space-y-4 hidden lg:block">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                            <div key={`right-${i}`} className="flex items-center justify-between pb-2 border-b border-white/5 animate-pulse">
                                <div className="flex items-center gap-3 w-full">
                                    <div className="w-5 h-5 bg-slate-800 rounded"></div>
                                    <div className="h-4 bg-slate-800 rounded w-3/4"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DepartmentsSkeleton;
