import React from 'react';
import CPMONavbar from './CPMONavbar';

interface CPMOSkeletonProps {
    onNavigate: (page: 'home' | 'tourism' | 'departments' | 'gad-database' | 'citizens-charter' | 'cpmo-home') => void;
}

const CPMOSkeleton: React.FC<CPMOSkeletonProps> = ({ onNavigate }) => {
    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            {/* Actual Navbar - Not Skeleton */}
            <div className="relative z-50 pointer-events-none">
                <CPMONavbar onNavigate={onNavigate} currentPage="cpmo-home" />
            </div>

            {/* Navbar Spacer */}
            <div className="h-[73px] md:h-[135px]"></div>

            <div className="bg-gradient-to-br from-gray-50 via-purple-50 to-yellow-50/20 min-h-[calc(100vh-135px)] relative overflow-hidden animate-pulse">
                <div className="relative z-10 pb-16 pt-16">
                    
                    {/* Mission & Vision Section Skeleton */}
                    <div className="container mx-auto px-4 mb-16">
                        <div className="h-8 w-64 bg-gray-200/50 rounded-full mx-auto mb-12"></div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 max-w-5xl mx-auto px-4">
                            {[1, 2].map((i) => (
                                <div key={i} className="bg-white rounded-[2rem] p-8 h-80 shadow-sm border border-gray-100 flex flex-col items-center">
                                    <div className="w-20 h-20 bg-gray-200 rounded-2xl mb-6"></div>
                                    <div className="h-8 w-32 bg-gray-200 rounded mb-6"></div>
                                    <div className="h-4 w-full bg-gray-200 rounded mb-3"></div>
                                    <div className="h-4 w-5/6 bg-gray-200 rounded mb-3"></div>
                                    <div className="h-4 w-4/6 bg-gray-200 rounded"></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Advocacy Section Skeleton */}
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="h-8 w-80 bg-gray-200/50 rounded-full mx-auto mb-12"></div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[1, 2].map((i) => (
                                <div key={i} className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 h-full">
                                    <div className="h-64 bg-gray-200 w-full relative">
                                       <div className="absolute inset-0 flex items-center justify-center opacity-10">
                                            <div className="w-16 h-16 bg-gray-400 rounded"></div>
                                        </div> 
                                    </div>
                                    <div className="p-8 space-y-4">
                                        <div className="h-4 w-32 bg-gray-200 rounded"></div>
                                        <div className="h-6 w-full bg-gray-200 rounded"></div>
                                        <div className="h-6 w-3/4 bg-gray-200 rounded"></div>
                                        <div className="space-y-2 pt-2">
                                            <div className="h-4 w-full bg-gray-200 rounded"></div>
                                            <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CPMOSkeleton;
