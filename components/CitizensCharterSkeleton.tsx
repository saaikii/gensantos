import React from 'react';

const CitizensCharterSkeleton: React.FC = () => {
    return (
        <section className="py-24 bg-blue-50 relative overflow-hidden min-h-screen">
            <div className="container mx-auto px-6 relative z-10">

                {/* Header Skeleton */}
                <div className="text-center mb-16 max-w-3xl mx-auto animate-pulse">
                    <div className="h-4 w-48 bg-blue-200/50 mx-auto rounded mb-3"></div>
                    <div className="h-12 w-3/4 bg-blue-200/50 mx-auto rounded mb-6"></div>
                    <div className="h-2 w-24 bg-blue-200/50 mx-auto rounded-full mb-8"></div>
                    <div className="space-y-2">
                        <div className="h-4 w-full bg-blue-200/50 rounded"></div>
                        <div className="h-4 w-5/6 bg-blue-200/50 mx-auto rounded"></div>
                    </div>
                </div>

                {/* Cards Skeleton */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">

                    {/* Card 1 */}
                    <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-blue-50 flex flex-col items-start animate-pulse">
                        <div className="w-16 h-16 bg-blue-100 rounded-2xl mb-8"></div>
                        <div className="h-8 w-3/4 bg-gray-200 rounded mb-4"></div>
                        <div className="h-4 w-full bg-gray-100 rounded mb-2"></div>
                        <div className="h-4 w-5/6 bg-gray-100 rounded mb-8"></div>
                        <div className="mt-auto h-4 w-32 bg-blue-100 rounded"></div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-blue-50 flex flex-col items-start animate-pulse">
                        <div className="w-16 h-16 bg-blue-100 rounded-2xl mb-8"></div>
                        <div className="h-8 w-3/4 bg-gray-200 rounded mb-4"></div>
                        <div className="h-4 w-full bg-gray-100 rounded mb-2"></div>
                        <div className="h-4 w-5/6 bg-gray-100 rounded mb-8"></div>
                        <div className="mt-auto h-4 w-32 bg-blue-100 rounded"></div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default CitizensCharterSkeleton;
