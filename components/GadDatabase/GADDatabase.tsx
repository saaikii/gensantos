import React from 'react';
import { Database, FileText, BarChart3, Wrench, Users, BookOpen, ArrowLeft } from 'lucide-react';
import Navbar from '../Layout/Navbar';
import CPMONavbar from './CPMONavbar';
import Footer from '../Layout/Footer';

interface GADDatabaseProps {
    onNavigate: (page: 'home' | 'tourism' | 'departments' | 'gad-database' | 'procurement' | 'citizens-charter' | 'cpmo-home') => void;
}

const GADDatabase: React.FC<GADDatabaseProps> = ({ onNavigate }) => {
    const categories = [
        {
            id: 'gad-database',
            title: 'GAD DATABASE',
            description: 'Comprehensive Gender and Development data repository',
            icon: Database,
            url: 'https://cpmo.gensantos.gov.ph/gad-database/',
            styles: {
                bgLight: 'bg-blue-50',
                bgDark: 'bg-blue-600',
                textDark: 'text-blue-800',
                border: 'border-blue-100',
                shadow: 'shadow-blue-600/30',
                hoverText: 'group-hover:text-blue-900',
                corner: 'bg-blue-50',
                borderHover: 'hover:border-blue-200'
            }
        },
        {
            id: 'gad-ar',
            title: 'GAD AR',
            description: 'Gender and Development Accomplishment Reports',
            icon: FileText,
            url: 'https://cpmo.gensantos.gov.ph/gad-database/',
            styles: {
                bgLight: 'bg-green-50',
                bgDark: 'bg-green-600',
                textDark: 'text-green-800',
                border: 'border-green-100',
                shadow: 'shadow-green-600/30',
                hoverText: 'group-hover:text-green-900',
                corner: 'bg-green-50',
                borderHover: 'hover:border-green-200'
            }
        },
        {
            id: 'gpb',
            title: 'GPB',
            description: 'Gender and Development Plan and Budget',
            icon: BarChart3,
            url: 'https://cpmo.gensantos.gov.ph/gad-database/',
            styles: {
                bgLight: 'bg-yellow-50',
                bgDark: 'bg-yellow-500',
                textDark: 'text-yellow-800',
                border: 'border-yellow-100',
                shadow: 'shadow-yellow-500/30',
                hoverText: 'group-hover:text-yellow-900',
                corner: 'bg-yellow-50',
                borderHover: 'hover:border-yellow-200'
            }
        },
        {
            id: 'gerl-tool',
            title: 'GERL TOOL',
            description: 'Gender-Responsive Evaluation and Review Tool',
            icon: Wrench,
            url: 'https://cpmo.gensantos.gov.ph/gad-database/',
            styles: {
                bgLight: 'bg-red-50',
                bgDark: 'bg-red-600',
                textDark: 'text-red-800',
                border: 'border-red-100',
                shadow: 'shadow-red-600/30',
                hoverText: 'group-hover:text-red-900',
                corner: 'bg-red-50',
                borderHover: 'hover:border-red-200'
            }
        },
        {
            id: 'demographic',
            title: 'DEMOGRAPHIC',
            description: 'Population and demographic statistics',
            icon: Users,
            url: 'https://cpmo.gensantos.gov.ph/gad-database/',
            styles: {
                bgLight: 'bg-purple-50',
                bgDark: 'bg-purple-600',
                textDark: 'text-purple-800',
                border: 'border-purple-100',
                shadow: 'shadow-purple-600/30',
                hoverText: 'group-hover:text-purple-900',
                corner: 'bg-purple-50',
                borderHover: 'hover:border-purple-200'
            }
        },
        {
            id: 'gad-code',
            title: 'GAD CODE',
            description: 'Gender and Development guidelines and codes',
            icon: BookOpen,
            url: 'https://cpmo.gensantos.gov.ph/gad-database/',
            styles: {
                bgLight: 'bg-teal-50',
                bgDark: 'bg-teal-600',
                textDark: 'text-teal-800',
                border: 'border-teal-100',
                shadow: 'shadow-teal-600/30',
                hoverText: 'group-hover:text-teal-900',
                corner: 'bg-teal-50',
                borderHover: 'hover:border-teal-200'
            }
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            {/* Custom CPMO Navbar */}
            <CPMONavbar 
                onNavigate={onNavigate} 
                currentPage="gad-database" 
            />
            
            {/* Spacer for Fixed Navbar */}
            <div className="h-[135px] md:h-[135px]"></div>

            {/* Main Content Area */}
            <div className="bg-gradient-to-br from-gray-50 via-purple-50 to-yellow-50/20 min-h-[calc(100vh-140px)] py-12 md:py-20 relative overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-100/40 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4"></div>
                    
                    {/* CPMO Watermark - Fixed Position */}
                    <div className="fixed top-48 right-[55%] w-[280px] h-[280px] md:w-[450px] md:h-[450px] opacity-[0.20] pointer-events-none">
                         <img src="/assets/cpmo-logo.png" className="w-full h-full object-contain" alt="" />
                    </div>

                    {/* GAD Watermark - Fixed Position */}
                    <div className="fixed top-52 left-[55%] w-[280px] h-[280px] md:w-[450px] md:h-[450px] opacity-[0.20] pointer-events-none">
                         <img src="/assets/gad-logo.png" className="w-full h-full object-contain" alt="" />
                    </div>
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    
                    {/* Hero Section */}
                    <div className="text-center mb-16">
                        {/* Text Content */}
                        <div className="space-y-4">
                            <span className="inline-block py-1 px-4 rounded-full bg-purple-50 text-[#4c1d95] text-xs font-bold tracking-widest uppercase mb-2 border border-purple-200 shadow-sm">
                                Gender and Development Focal Office
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#4c1d95] tracking-tight uppercase drop-shadow-sm font-serif">
                                GAD Database
                            </h1>
                            <div className="w-24 h-1.5 bg-gradient-to-r from-[#4c1d95] to-yellow-500 mx-auto rounded-full"></div>
                            <p className="text-lg md:text-xl text-slate-900 max-w-2xl mx-auto leading-relaxed pt-2">
                                Centralized repository for Gender and Development data, reports, and resources of General Santos City.
                            </p>
                        </div>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {categories.map((category) => {
                            const Icon = category.icon;
                            const styles = category.styles;
                            return (
                                <a
                                    key={category.id}
                                    href={category.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`group relative bg-white rounded-[1.5rem] p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 ${styles.borderHover} hover:-translate-y-2 cursor-pointer h-full flex flex-col overflow-hidden`}
                                >
                                    {/* Decorative corner accent */}
                                    <div className={`absolute top-0 right-0 w-24 h-24 ${styles.corner} rounded-bl-[80px] -mr-3 -mt-3 transition-transform group-hover:scale-110`}></div>

                                    {/* Icon */}
                                    <div className={`relative w-14 h-14 ${styles.bgDark} text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg ${styles.shadow} group-hover:rotate-6 transition-transform duration-300`}>
                                        <Icon size={28} strokeWidth={2} />
                                    </div>

                                    <h3 className={`text-xl font-bold text-gray-900 mb-3 ${styles.hoverText} transition-colors line-clamp-2`}>
                                        {category.title}
                                    </h3>

                                    <p className="text-slate-500 leading-relaxed mb-6 line-clamp-3 flex-grow">
                                        {category.description}
                                    </p>

                                    {/* Action link */}
                                    <div className={`mt-auto flex items-center gap-2 ${styles.textDark} font-bold uppercase tracking-wide text-sm group-hover:gap-3 transition-all`}>
                                        Open Database <ArrowLeft className="rotate-[135deg]" size={18} />
                                    </div>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Standard Footer */}
            <Footer />
        </div>
    );
};

export default GADDatabase;
