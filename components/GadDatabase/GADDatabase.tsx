import React from 'react';
import { Database, FileText, BarChart3, Wrench, Users, BookOpen, ArrowLeft } from 'lucide-react';

interface GADDatabaseProps {
    onBack?: () => void;
}

const GADDatabase: React.FC<GADDatabaseProps> = ({ onBack }) => {
    const categories = [
        {
            id: 'gad-database',
            title: 'GAD DATABASE',
            description: 'Comprehensive Gender and Development data repository',
            icon: Database,
            gradient: 'from-blue-500 to-blue-700',
            iconBg: 'bg-blue-500',
            url: 'https://cpmo.gensantos.gov.ph/gad-database/',
        },
        {
            id: 'gad-ar',
            title: 'GAD AR',
            description: 'Gender and Development Accomplishment Reports',
            icon: FileText,
            gradient: 'from-green-500 to-green-700',
            iconBg: 'bg-green-500',
            url: 'https://cpmo.gensantos.gov.ph/gad-database/',
        },
        {
            id: 'gpb',
            title: 'GPB',
            description: 'Gender and Development Plan and Budget',
            icon: BarChart3,
            gradient: 'from-yellow-500 to-yellow-700',
            iconBg: 'bg-yellow-500',
            url: 'https://cpmo.gensantos.gov.ph/gad-database/',
        },
        {
            id: 'gerl-tool',
            title: 'GERL TOOL',
            description: 'Gender-Responsive Evaluation and Review Tool',
            icon: Wrench,
            gradient: 'from-red-500 to-red-700',
            iconBg: 'bg-red-500',
            url: 'https://cpmo.gensantos.gov.ph/gad-database/',
        },
        {
            id: 'demographic',
            title: 'DEMOGRAPHIC',
            description: 'Population and demographic statistics',
            icon: Users,
            gradient: 'from-purple-500 to-purple-700',
            iconBg: 'bg-purple-500',
            url: 'https://cpmo.gensantos.gov.ph/gad-database/',
        },
        {
            id: 'gad-code',
            title: 'GAD CODE',
            description: 'Gender and Development guidelines and codes',
            icon: BookOpen,
            gradient: 'from-teal-500 to-teal-700',
            iconBg: 'bg-teal-500',
            url: 'https://cpmo.gensantos.gov.ph/gad-database/',
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            {/* CPMO Header - Replaces main site header */}
            <div className="flex flex-col shadow-lg relative z-50 font-sans">
                {/* Top Bar - Official Blue */}
                <div className="bg-[#15803d] text-white py-3 md:py-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-green-900/10 pointer-events-none"></div>
                    <div className="container mx-auto px-4 md:px-6 flex justify-between items-center relative z-10">
                        <div className="flex items-center gap-4 md:gap-6">
                            {/* LGU Logo */}
                            <img
                                src="https://gensantos.gov.ph/wp-content/uploads/2024/01/cropped-lgulogo.png"
                                alt="GenSan Logo"
                                className="w-14 h-14 md:w-20 md:h-20 object-contain drop-shadow-md filter brightness-110"
                            />
                            <div>
                                <h1 className="text-base md:text-2xl leading-tight tracking-wide drop-shadow-md text-white" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontStyle: 'italic' }}>
                                    Official Website of CPMO
                                </h1>
                                <p className="text-xs md:text-sm text-green-100 font-light tracking-wider mt-1">(City Population Management Office)</p>
                            </div>
                        </div>

                        {/* Right Side: Bagong Pilipinas Logo */}
                        <div className="hidden md:block">
                            <img
                                src="/assets/bagong-pilipinas-logo.png"
                                alt="Bagong Pilipinas Logo"
                                className="h-12 md:h-16 w-auto object-contain drop-shadow-sm filter brightness-110"
                            />
                        </div>
                    </div>
                </div>

                {/* Main Navbar - White */}
                <nav className="bg-white border-b-4 border-yellow-500 md:border-b md:border-gray-200 text-gray-700 text-[11px] md:text-[11px] lg:text-xs font-bold uppercase tracking-wide">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex items-center justify-center md:justify-center h-14 md:h-12 w-full gap-1">
                            {/* Nav Items */}
                            <a href="#" className="hover:text-green-700 transition-colors px-2 lg:px-4 py-2 block md:inline-block">Home</a>
                            <span className="hidden md:block text-gray-300">|</span>

                            <button onClick={onBack} className="hover:text-green-700 transition-colors px-2 lg:px-4 py-2 flex items-center gap-1">
                                <ArrowLeft size={14} className="mb-0.5" />
                                GenSantos Portal
                            </button>
                            <span className="hidden md:block text-gray-300">|</span>

                            <a href="#" className="text-green-700 font-black px-2 lg:px-4 py-2 block md:inline-block">GAD Database</a>
                            <span className="hidden md:block text-gray-300">|</span>

                            <a href="#" className="hover:text-green-700 transition-colors px-2 lg:px-4 py-2 block md:inline-block">About Us</a>
                            <span className="hidden md:block text-gray-300">|</span>

                            <a href="#" className="hover:text-green-700 transition-colors px-2 lg:px-4 py-2 block md:inline-block">Login</a>
                        </div>
                    </div>
                </nav>
            </div>

            {/* Main Content Area */}
            <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-yellow-50/20 min-h-[calc(100vh-140px)] py-12 md:py-20 relative">
                {/* Decorative background elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-100/40 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4"></div>
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">

                    {/* Hero / Logos Section */}
                    <div className="text-center mb-16">
                        <div className="flex justify-center items-center gap-6 md:gap-12 mb-8">
                            {/* CPMO Logo Large */}
                            <div className="group relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                                <img
                                    src="/assets/cpmo-logo.png"
                                    alt="CPMO Logo"
                                    className="relative w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-xl transform transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            {/* Decorative Middle Element */}
                            <div className="hidden md:flex flex-col gap-1.5 opacity-60">
                                <div className="w-2 h-2 bg-[#0038A8] rounded-full"></div>
                                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                <div className="w-2 h-2 bg-[#0038A8] rounded-full"></div>
                            </div>

                            {/* GAD Logo Large */}
                            <div className="group relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                                <img
                                    src="/assets/gad-logo.png"
                                    alt="GAD Logo"
                                    className="relative w-28 h-20 md:w-48 md:h-32 object-contain drop-shadow-xl transform transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="space-y-4">
                            <span className="inline-block py-1 px-4 rounded-full bg-blue-50 text-[#0038A8] text-xs font-bold tracking-widest uppercase mb-2 border border-blue-200 shadow-sm">
                                Gender and Development Focal Office
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0038A8] tracking-tight uppercase drop-shadow-sm font-serif">
                                GAD Database
                            </h1>
                            <div className="w-24 h-1.5 bg-gradient-to-r from-[#0038A8] to-yellow-500 mx-auto rounded-full"></div>
                            <p className="text-lg md:text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed pt-2">
                                Centralized repository for Gender and Development data, reports, and resources of General Santos City.
                            </p>
                        </div>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {categories.map((category) => {
                            const Icon = category.icon;
                            return (
                                <a
                                    key={category.id}
                                    href={category.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 p-8 overflow-hidden border border-gray-100"
                                >
                                    {/* Hosting Gradient - reveals on hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                                    <div className="relative z-10 flex flex-col h-full">
                                        {/* Header */}
                                        <div className="flex items-start justify-between mb-6">
                                            <div className={`p-3 rounded-xl ${category.iconBg} text-white shadow-lg group-hover:bg-white/20 group-hover:backdrop-blur-sm transition-colors duration-500`}>
                                                <Icon size={28} strokeWidth={2} />
                                            </div>
                                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
                                                <ArrowLeft className="rotate-135 text-white" size={24} />
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="mt-auto">
                                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-2 transition-colors duration-300">
                                                {category.title}
                                            </h3>
                                            <p className="text-sm text-gray-500 group-hover:text-blue-50 leading-relaxed transition-colors duration-300">
                                                {category.description}
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Custom Footer for CPMO */}
            <footer className="bg-slate-900 border-t border-slate-800 text-white py-8 z-50 relative">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                    <p className="text-slate-400 text-sm">
                        &copy; {new Date().getFullYear()} City Population Management Office. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm font-medium text-slate-400">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <button onClick={onBack} className="hover:text-yellow-400 transition-colors text-yellow-500/80">
                            Back to Main Site
                        </button>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default GADDatabase;
