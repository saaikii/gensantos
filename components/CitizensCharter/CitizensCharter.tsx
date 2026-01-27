import React, { useState } from 'react';
import {
    Search, FileText, ArrowRight, BookOpen,
    Building2, Briefcase, Calculator, Users, LandPlot,
    Hammer, Leaf, Truck, Home, Scale, HeartPulse,
    Stethoscope, Shield, Gavel, Trash2, UserPlus,
    MonitorSmartphone, Coins, GraduationCap, Medal,
    Megaphone, UserCheck, Accessibility, Book
} from 'lucide-react';
import { services as charters } from '../../data/siteData';
import CitizensCharterSkeleton from './CitizensCharterSkeleton';
import LoadingOverlay from '../Shared/LoadingOverlay';

const CitizensCharter: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [loadingCharterId, setLoadingCharterId] = useState<number | string | null>(null);

    const handleCharterClick = (e: React.MouseEvent, link: string, id: number | string) => {
        e.preventDefault();
        setLoadingCharterId(id);
        setTimeout(() => {
            window.open(link, '_blank', 'noopener,noreferrer');
            setLoadingCharterId(null);
        }, 500);
    };

    // Simulated Loading Effect
    React.useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) return <CitizensCharterSkeleton />;
    const categoryOrder: Record<string, number> = {
        'executive': 1, // Blue
        'finance': 2,   // Green
        'services': 3,  // Orange
        'social': 4     // Red
    };

    const filteredCharters = charters
        .filter(charter =>
            charter.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .sort((a, b) => {
            const catA = a.category || 'executive';
            const catB = b.category || 'executive';
            return (categoryOrder[catA] || 99) - (categoryOrder[catB] || 99);
        });

const getCategoryStyles = (category: string) => {
    // Standardize all charter cards to Blue Theme
    return {
        bgLight: 'bg-blue-50',
        bgDark: 'bg-blue-600',
        textDark: 'text-blue-800',
        shadow: 'shadow-blue-600/30',
        hoverText: 'group-hover:text-blue-900',
        corner: 'bg-blue-50',
        borderHover: 'hover:border-blue-200'
    };
};

    return (
        <div className="min-h-screen bg-gray-50 pt-36 pb-16 font-sans relative">
            {/* Background Watermark - Fixed and Enlarged */}
            <div className="fixed top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
                <div className="w-[600px] h-[600px] opacity-[0.15]">
                    <img
                        src="/gensan_seal_large.jpg"
                        alt="Gensan Seal"
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                {/* Header Section */}
                <div className="text-center pt-24 pb-16 px-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0038A8] mb-6 uppercase tracking-tight drop-shadow-sm font-serif">
                        Citizen's Charter
                    </h1>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-[#0038A8] to-yellow-500 mx-auto rounded-full mb-8"></div>
                    <p className="text-slate-900 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Our official pledge to deliver public services with speed, efficiency, and transparency.
                        Access the comprehensive guides for all department processes.
                    </p>
                </div>

                {/* Sticky Search Bar Container */}
                <div className="sticky top-[138px] md:top-[171px] z-40 pb-12 pointer-events-none">
                    <div className="max-w-2xl mx-auto px-4 pointer-events-auto">
                        <div className="relative group bg-white/95 backdrop-blur-md rounded-xl shadow-lg shadow-black/20 border border-white/20 focus-within:ring-2 focus-within:ring-blue-400/50 focus-within:border-blue-400 transition-all flex items-center overflow-hidden">
                            <Search className="absolute left-5 text-gray-400 pointer-events-none" size={20} />
                            <input
                                type="text"
                                placeholder="Search for an office or service..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-6 py-4 bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none min-w-0"
                            />
                        </div>
                    </div>
                </div>

                {/* Full Charter 2025 Highlight - Only show if it matches search or search is empty */}
                {(() => {
                    const showBanner = searchQuery === '' || "LGU-GenSan Citizen's Charter 2025".toLowerCase().includes(searchQuery.toLowerCase());
                    const gridCharters = filteredCharters.filter(c => c.name !== "LGU-GENSAN Citizen’s Charter 2025-1st Edition (FULL)");

                    return (
                        <>
                            {showBanner && (
                                <div className="mb-12">
                                    <a
                                        href="https://drive.google.com/file/d/1j8U-6rOaIYLuyIGpM4QjN3Wvu_6xWUnl/view?usp=sharing"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => handleCharterClick(e, "https://drive.google.com/file/d/1j8U-6rOaIYLuyIGpM4QjN3Wvu_6xWUnl/view?usp=sharing", 'banner')}
                                        className="block group relative bg-white border border-blue-50 rounded-2xl p-8 md:p-10 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                                    >
                                        {loadingCharterId === 'banner' && <LoadingOverlay />}
                                        {/* Blob removed */}

                                        <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
                                            <div className="flex items-center gap-6">
                                                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0 group-hover:scale-110 transition-transform duration-300">
                                                    <BookOpen size={32} />
                                                </div>
                                                <div>
                                                    <span className="text-blue-600 font-bold uppercase tracking-wider text-xs mb-1 block">Latest Edition</span>
                                                    <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">LGU-GenSan Citizen's Charter 2025</h2>
                                                    <p className="text-gray-500">Click to view the complete 1st Edition document</p>
                                                </div>
                                            </div>
                                            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-600/30 group-hover:scale-110 transition-transform">
                                                <ArrowRight size={24} />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            )}

                            {/* Departments Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {gridCharters.map((charter, index) => {
                                    const styles = getCategoryStyles(charter.category);

                                    return (
                                        <a
                                            key={index}
                                            href={charter.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => handleCharterClick(e, charter.link, index)}
                                            className={`group relative bg-white rounded-[1.5rem] p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 ${styles.borderHover} hover:-translate-y-2 cursor-pointer flex flex-col overflow-hidden`}
                                        >
                                            {loadingCharterId === index && <LoadingOverlay />}
                                            {/* Decorative corner accent */}
                                            <div className={`absolute top-0 right-0 w-24 h-24 ${styles.corner} rounded-bl-[80px] -mr-3 -mt-3 transition-transform group-hover:scale-110`}></div>

                                            {/* Icon */}
                                            <div className={`relative w-14 h-14 ${styles.bgDark} text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg ${styles.shadow} group-hover:rotate-6 transition-transform duration-300`}>
                                                {charter.icon}
                                            </div>

                                            <div className="flex-1 min-w-0">
                                                <h3 className={`text-xl font-bold text-gray-900 mb-2 ${styles.hoverText} transition-colors line-clamp-2`}>
                                                    {charter.name}
                                                </h3>

                                                <div className={`flex items-center gap-2 ${styles.textDark} font-bold uppercase tracking-wide text-xs mt-4 group-hover:gap-3 transition-all`}>
                                                    View Document <ArrowRight size={16} />
                                                </div>
                                            </div>
                                        </a>
                                    );
                                })}
                            </div>

                            {gridCharters.length === 0 && !showBanner && (
                                <div className="text-center py-20">
                                    <div className="inline-block p-4 bg-gray-100 rounded-full mb-4 text-gray-400">
                                        <Search size={32} />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-700 mb-2">No documents found</h3>
                                    <p className="text-gray-500">Try adjusting your search terms.</p>
                                </div>
                            )}
                        </>
                    );
                })()}

            </div>
        </div>
    );
};

export default CitizensCharter;