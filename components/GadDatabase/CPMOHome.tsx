import React from 'react';
import { Target, Eye } from 'lucide-react';
import CPMONavbar from './CPMONavbar';
import CPMOSkeleton from './CPMOSkeleton';
import ScrollReveal from '../Shared/ScrollReveal';


interface CPMOHomeProps {
    onNavigate: (page: 'home' | 'tourism' | 'departments' | 'gad-database' | 'citizens-charter' | 'cpmo-home') => void;
}

const CPMOHome: React.FC<CPMOHomeProps> = ({ onNavigate }) => {
    const [isLoading, setIsLoading] = React.useState(true);

    // Simulated Loading Effect
    React.useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    // Placeholder posts data to mimic the screenshot
    const posts = [
        {
            id: 1,
            author: 'LGU GENSAN - GAD Office',
            time: '12 hours ago',
            content: 'The City Population Management Office (CPMO) conducted a seminar on Responsible Parenthood and Family Planning...',
            image: '/placeholder_post_1.jpg',
            likes: 23,
            comments: 5,
            shares: 2
        },
        {
            id: 2,
            author: 'LGU GENSAN - GAD Office',
            time: 'Yesterday at 9:00 AM',
            content: 'Gad Focal Point System regular meeting held at the conference room...',
            image: '/placeholder_post_2.jpg',
            likes: 45,
            comments: 12,
            shares: 8
        }
    ];

    if (isLoading) return <CPMOSkeleton onNavigate={onNavigate} />;

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <CPMONavbar onNavigate={onNavigate} currentPage="cpmo-home" />

            <div className="h-[73px] md:h-[135px]"></div>

            {/* Main Content Area with Background */}
            <div className="bg-gradient-to-br from-gray-50 via-purple-50 to-yellow-50/20 min-h-[calc(100vh-135px)] relative overflow-hidden">
                {/* Decorative background elements (Matched with GAD Database) */}
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

                <div className="relative z-10 pb-16">
                    {/* Header / Logos Section */}


                    {/* Mission & Vision Section */}
                    <div className="py-16">
                        <div className="container mx-auto px-4">
                            <h2 className="text-3xl font-bold text-center text-[#4c1d95] mb-12 font-serif uppercase tracking-tight">
                                Our Mission and Vision
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 max-w-5xl mx-auto px-4">
                                {/* Mission Card */}
                                <ScrollReveal delay={100} className="h-full" animation="fade-up" enableBounce duration={0.8}>
                                    <div className="relative group mt-4 h-full">
                                        {/* The 'Cup' Background - Purple */}
                                        <div className="absolute -bottom-4 -left-4 -right-4 h-48 bg-purple-600 rounded-b-[3rem] transform group-hover:scale-y-105 group-hover:translate-y-1 transition-transform duration-300 -z-10 shadow-xl shadow-purple-600/30"></div>
                                        {/* Main Card */}
                                        <div className="relative bg-white rounded-[2rem] p-8 pb-12 shadow-2xl h-full flex flex-col items-center text-center border-t border-purple-50">
                                            <div className="w-20 h-20 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                                <Target size={40} className="text-purple-600" />
                                            </div>
                                            <h3 className="text-2xl font-black text-[#4c1d95] uppercase tracking-widest mb-6">Mission</h3>
                                            <p className="text-slate-600 leading-relaxed text-sm">
                                                To improve the quality of life specifically the poor and the marginalized / disadvantaged groups through the provision of appropriate and gender-responsive approaches in family planning, responsible parenthood and adolescent health.
                                            </p>
                                        </div>
                                        {/* Decorative Tab */}
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-purple-600 rounded-full"></div>
                                    </div>
                                </ScrollReveal>

                                {/* Vision Card */}
                                <ScrollReveal delay={200} className="h-full" animation="fade-down" enableBounce duration={0.8}>
                                    <div className="relative group mt-4 h-full">
                                        {/* The 'Cup' Background - Pink */}
                                        <div className="absolute -bottom-4 -left-4 -right-4 h-48 bg-pink-500 rounded-b-[3rem] transform group-hover:scale-y-105 group-hover:translate-y-1 transition-transform duration-300 -z-10 shadow-xl shadow-pink-500/30"></div>
                                        {/* Main Card */}
                                        <div className="relative bg-white rounded-[2rem] p-8 pb-12 shadow-2xl h-full flex flex-col items-center text-center border-t border-pink-50">
                                            <div className="w-20 h-20 bg-pink-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                                <Eye size={40} className="text-pink-500" />
                                            </div>
                                            <h3 className="text-2xl font-black text-[#4c1d95] uppercase tracking-widest mb-6">Vision</h3>
                                            <p className="text-slate-600 leading-relaxed text-sm">
                                                "An empowered and people working together for a better quality of life for everyone, living in a peaceful, harmonious, and healthy environment."
                                            </p>
                                        </div>
                                        {/* Decorative Tab */}
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-pink-500 rounded-full"></div>
                                    </div>
                                </ScrollReveal>
                            </div>
                        </div>
                    </div>

                    {/* Advocacy and Activities Section */}
                    <div className="py-8">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <h2 className="text-2xl md:text-3xl font-bold text-center text-[#4c1d95] mb-12 font-serif uppercase tracking-tight">
                                General Santos City GAD Advocacy and Activities
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {[1, 2].map((i, index) => (
                                    <ScrollReveal key={i} delay={index * 150} className="h-full" animation="fade-up" enableBounce>
                                        <div className="group bg-white rounded-[2rem] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-purple-50 overflow-hidden flex flex-col h-full">
                                            {/* Card Image Area */}
                                            <div className="relative h-64 bg-gray-200 overflow-hidden">
                                                {/* Badge */}
                                                <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-purple-700 shadow-sm uppercase tracking-wider border border-white">
                                                    GAD Activity
                                                </div>

                                                {/* Image Placeholder with Overlay */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>

                                                {/* Mock Content for Image */}
                                                <div className="absolute inset-0 flex items-center justify-center text-white/50 font-bold text-4xl">
                                                    {/* In real implementation, use <img> here */}
                                                    IMAGE {i}
                                                </div>
                                            </div>

                                            {/* Card Content */}
                                            <div className="p-8 flex flex-col flex-grow relative">
                                                {/* Date */}
                                                <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">
                                                    <span>January {24 + i}, 2026</span>
                                                    <span className="w-1 h-1 rounded-full bg-purple-300"></span>
                                                    <span>San Isidro, GSC</span>
                                                </div>

                                                <h3 className="text-xl font-bold text-[#4c1d95] mb-4 leading-tight group-hover:text-purple-600 transition-colors">
                                                    {i === 1 ?
                                                        "CPMO Conducts Reproductive Health Seminar for San Isidro Residents" :
                                                        "Gender and Development Planning and Budgeting Workshop for CSOs"
                                                    }
                                                </h3>

                                                <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-3">
                                                    {i === 1 ?
                                                        "The City Population Management Office (CPMO) in coordination with the Barangay Council of San Isidro successfully conducted a comprehensive Reproductive Health Seminar focusing on family planning and maternal care." :
                                                        "A strategic planning session attended by various Civil Society Organizations (CSOs) and Non-Government Organizations (NGOs) to align budgeting goals with gender-responsive mandates."
                                                    }
                                                </p>

                                                {/* Read More Button */}
                                                <div className="mt-auto pt-6 border-t border-purple-50 flex items-center justify-between">
                                                    <button className="flex items-center gap-2 text-[#4c1d95] font-bold text-sm uppercase tracking-wide group-hover:gap-3 transition-all">
                                                        Read Full Story <Target size={16} className="rotate-45" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CPMOHome;
