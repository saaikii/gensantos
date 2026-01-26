import React from 'react';

const DepartmentsSkeleton: React.FC = () => {
    return (
        <div className="min-h-screen relative pt-40 pb-20 bg-gray-50 overflow-hidden font-sans">
            {/* Container */}
            <div className="container mx-auto px-6 relative z-20">
                 {/* Header Skeleton */}
                 <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
                     <div className="h-10 md:h-14 bg-gray-200 rounded-lg w-3/4 mx-auto mb-4 animate-pulse"></div>
                     <div className="w-24 h-1.5 bg-gray-200 mx-auto rounded-full mb-8 animate-pulse"></div>
                     <div className="h-6 bg-gray-200 rounded w-1/2 mx-auto animate-pulse"></div>
                 </div>

                {/* Search Bar Skeleton */}
                <div className="max-w-2xl mx-auto mb-12 mt-8 px-4">
                    <div className="w-full h-16 bg-white rounded-xl shadow-lg border border-gray-100 flex items-center px-4 animate-pulse">
                         <div className="w-5 h-5 bg-gray-200 rounded-full mr-4"></div>
                         <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    </div>
                </div>

                {/* Content Grid Skeleton */}
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                        <div key={i} className="bg-white rounded-[1.5rem] p-8 shadow-sm border border-gray-100 h-full flex flex-col animate-pulse">
                             <div className="w-14 h-14 bg-gray-200 rounded-2xl mb-6"></div>
                             <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
                             <div className="space-y-2 mb-6 flex-grow">
                                <div className="h-4 bg-gray-200 rounded w-full"></div>
                                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                             </div>
                             <div className="h-4 w-24 bg-gray-200 rounded mt-auto"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DepartmentsSkeleton;
