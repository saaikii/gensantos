import React from 'react';
import CPMONavbar from './CPMONavbar';

interface GADDatabaseSkeletonProps {
    onNavigate: (page: 'home' | 'tourism' | 'departments' | 'gad-database' | 'citizens-charter' | 'cpmo-home') => void;
}

const GADDatabaseSkeleton: React.FC<GADDatabaseSkeletonProps> = ({ onNavigate }) => {
    return (
        <div className="min-h-screen bg-gray-50 font-sans">
             {/* Actual Navbar - Not Skeleton */}
             <div className="relative z-50 pointer-events-none">
                <CPMONavbar onNavigate={onNavigate} currentPage="gad-database" />
             </div>
             
             {/* Spacer for Fixed Navbar */}
             <div className="h-[73px] md:h-[135px]"></div>

             <div className="min-h-[calc(100vh-140px)] py-12 md:py-20 relative overflow-hidden animate-pulse">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    {/* Hero Section Skeleton */}
                    <div className="text-center mb-16 space-y-4">
                        <div className="h-6 w-48 bg-gray-200 rounded-full mx-auto mb-2"></div>
                         <div className="h-10 md:h-14 bg-gray-200 rounded-lg w-1/2 mx-auto"></div>
                         <div className="w-24 h-1.5 bg-gray-200 mx-auto rounded-full"></div>
                         <div className="h-6 bg-gray-200 rounded w-1/3 mx-auto mt-2"></div>
                    </div>

                    {/* Cards Grid Skeleton */}
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="bg-white rounded-[1.5rem] p-8 shadow-sm border border-gray-100 h-full flex flex-col">
                                 <div className="w-14 h-14 bg-gray-200 rounded-2xl mb-6"></div>
                                 <div className="h-6 bg-gray-200 rounded w-1/2 mb-3"></div>
                                 <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                                 <div className="h-4 bg-gray-200 rounded w-3/4 mb-6 flex-grow"></div>
                                 <div className="h-4 w-24 bg-gray-200 rounded mt-auto"></div>
                            </div>
                        ))}
                    </div>
                </div>
             </div>
        </div>
    );
};

export default GADDatabaseSkeleton;
