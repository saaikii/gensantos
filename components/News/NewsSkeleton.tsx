import React from 'react';
import { Megaphone, Newspaper, PartyPopper } from 'lucide-react';

const NewsSkeleton: React.FC = () => {
    return (
        <section className="pt-8 pb-24 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-6">

                {/* Tab Header Skeleton */}
                <div className="grid grid-cols-1 md:grid-cols-3 mb-12 rounded-2xl overflow-hidden shadow-sm animate-pulse">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className={`h-28 md:h-36 bg-gray-200 border-r border-gray-300 flex items-center justify-center flex-col gap-2 relative overflow-hidden`}>
                            <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-300 rounded-lg"></div>
                            <div className="h-6 w-32 bg-gray-300 rounded"></div>
                        </div>
                    ))}
                </div>

                {/* Content Grid Skeleton */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm h-full flex flex-col">
                            {/* Image Placeholder */}
                            <div className="aspect-[4/3] bg-gray-200 animate-pulse relative">
                                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                                    <Newspaper size={64} />
                                </div>
                            </div>

                            {/* Content Placeholder */}
                            <div className="p-6 flex flex-col flex-1 space-y-4 animate-pulse">
                                {/* Date */}
                                <div className="h-4 w-24 bg-gray-200 rounded"></div>

                                {/* Title */}
                                <div className="space-y-2">
                                    <div className="h-6 w-full bg-gray-200 rounded"></div>
                                    <div className="h-6 w-3/4 bg-gray-200 rounded"></div>
                                </div>

                                {/* Description */}
                                <div className="space-y-2 pt-2">
                                    <div className="h-4 w-full bg-gray-200 rounded"></div>
                                    <div className="h-4 w-full bg-gray-200 rounded"></div>
                                    <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
                                </div>

                                {/* Button */}
                                <div className="mt-auto pt-4">
                                    <div className="h-5 w-20 bg-gray-200 rounded"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button Skeleton */}
                <div className="mt-12 flex justify-center">
                    <div className="h-12 w-48 bg-gray-200 rounded-full animate-pulse"></div>
                </div>
            </div>
        </section>
    );
};

export default NewsSkeleton;
