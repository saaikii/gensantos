import React from 'react';

const PageSkeleton: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-12 animate-pulse">
            <div className="container mx-auto px-6">
                {/* Header Skeleton */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className="h-10 md:h-14 bg-gray-200 rounded-lg w-3/4 mx-auto mb-4"></div>
                    <div className="h-6 bg-gray-200 rounded w-1/2 mx-auto"></div>
                </div>

                {/* Content Grid Skeleton */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-white rounded-2xl shadow-sm p-6 space-y-4">
                            <div className="h-48 bg-gray-200 rounded-xl w-full"></div>
                            <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                            <div className="space-y-2">
                                <div className="h-4 bg-gray-200 rounded w-full"></div>
                                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                                <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* List Skeleton */}
                <div className="max-w-3xl mx-auto space-y-4">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="h-20 bg-white rounded-xl shadow-sm w-full mx-auto"></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PageSkeleton;
