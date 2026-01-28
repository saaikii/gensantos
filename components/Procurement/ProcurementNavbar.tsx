import React, { useState } from 'react';
import { Menu, X, ArrowLeft, Scale } from 'lucide-react';
import BackButton from '../Shared/BackButton';

interface ProcurementNavbarProps {
    onNavigate: (page: 'home' | 'tourism' | 'departments' | 'gad-database' | 'procurement' | 'citizens-charter' | 'cpmo-home') => void;
    currentPage: string;
}

const ProcurementNavbar: React.FC<ProcurementNavbarProps> = ({ onNavigate, currentPage }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleBackToMain = (e: React.MouseEvent) => {
        e.preventDefault();
        onNavigate('home');
        window.scrollTo(0, 0);
    };

    return (
        <div className="fixed w-full z-50 flex flex-col shadow-lg font-sans">
            {/* Top Bar - Procurement Orange */}
            <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-3 md:py-4 relative overflow-hidden">
                {/* Background texture */}
                <div className="absolute inset-0 bg-orange-900/10 pointer-events-none"></div>

                <div className="container mx-auto px-4 md:px-6 flex justify-between items-center relative z-10">
                    {/* Left Side: Logo + Text */}
                    <div className="flex items-center gap-4 md:gap-6">
                        <div className="w-14 h-14 md:w-16 md:h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border-2 border-white/20 shadow-lg">
                            <Scale className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={2.5} />
                        </div>
                        <div>
                            <h1 className="text-base md:text-xl font-black leading-tight tracking-wide drop-shadow-md text-white uppercase">
                                Local Government Procurement
                            </h1>
                            <p className="text-xs md:text-sm text-orange-100 font-medium">
                                LGPRS - General Santos City
                            </p>
                        </div>
                    </div>

                    {/* Right Side: Back Button */}
                    {/* Right Side: Back Button */}
                    <BackButton 
                        onClick={handleBackToMain} 
                        variant="glass" 
                        label="Back to Main Site"
                        className="hidden md:flex" 
                    />

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden text-white p-2"
                    >
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Secondary Navigation Bar */}
            <nav className="bg-white border-b-4 border-orange-500 md:border-b md:border-gray-200 text-gray-700 text-xs md:text-xs lg:text-sm font-bold uppercase tracking-wide relative">
                <div className="container mx-auto px-2 md:px-4">
                    <div className="flex justify-between md:justify-center items-center h-12 md:h-10">

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center justify-center w-full flex-nowrap gap-6">
                            <a href="#" className="hover:text-orange-600 transition-colors px-3 py-2">
                                Purchase Request
                            </a>
                            <span className="text-gray-300">|</span>
                            <a href="#" className="hover:text-orange-600 transition-colors px-3 py-2">
                                Opportunities
                            </a>
                            <span className="text-gray-300">|</span>
                            <a href="#" className="hover:text-orange-600 transition-colors px-3 py-2">
                                Publications
                            </a>
                            <span className="text-gray-300">|</span>
                            <a href="#" className="hover:text-orange-600 transition-colors px-3 py-2">
                                Others
                            </a>
                            <span className="text-gray-300">|</span>
                            <button
                                onClick={handleBackToMain}
                                className="hover:text-orange-600 transition-colors px-3 py-2 flex items-center gap-1"
                            >
                                <ArrowLeft size={14} /> Main Site
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Dropdown */}
                {mobileMenuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-xl">
                        <div className="flex flex-col p-4 space-y-1 divide-y divide-gray-100">
                            <a href="#" className="hover:text-orange-600 transition-colors px-2 py-3 block">
                                Purchase Request
                            </a>
                            <a href="#" className="hover:text-orange-600 transition-colors px-2 py-3 block">
                                Opportunities
                            </a>
                            <a href="#" className="hover:text-orange-600 transition-colors px-2 py-3 block">
                                Publications
                            </a>
                            <a href="#" className="hover:text-orange-600 transition-colors px-2 py-3 block">
                                Others
                            </a>
                            <button
                                onClick={handleBackToMain}
                                className="hover:text-orange-600 transition-colors px-2 py-3 flex items-center gap-2 text-left w-full"
                            >
                                <ArrowLeft size={16} /> Back to Main Site
                            </button>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default ProcurementNavbar;
