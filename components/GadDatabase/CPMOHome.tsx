import React from 'react';
import { Target, Eye, ExternalLink } from 'lucide-react';
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
                        <div className="container mx-auto px-4 max-w-7xl">
                            <h2 className="text-2xl md:text-3xl font-bold text-center text-[#4c1d95] mb-12 font-serif uppercase tracking-tight">
                                General Santos City GAD Advocacy and Activities
                            </h2>

                            {/* Real GAD Activities Data */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {[
                                    {
                                        id: 1,
                                        date: 'AUGUST 29, 2023',
                                        location: 'GENERAL SANTOS CITY',
                                        title: 'DPWH Turns Over 15M-Worth CPMO Office Building',
                                        description: 'The Department of Public Works and Highways (DPWH) officially turned over the newly constructed 15M-worth City Population and Management Office (CPMO) building at Dr. Jorge P. Royeca City Hospital (DJPRCH) Compound.',
                                        facebookUrl: 'https://www.facebook.com/tatakpacquiao/posts/730842869087562',
                                        image: '/gad_activity_1.jpg'
                                    },
                                    {
                                        id: 2,
                                        date: 'FEBRUARY 2, 2024',
                                        location: 'CPMO OFFICE, GSC',
                                        title: 'An Hour with City Mayor at CPMO',
                                        description: 'Mayor Lorelie Pacquiao expressed her commitment to support the City Population and Management Office (CPMO) in their programs and initiatives during the "An Hour with City Mayor" session at the CPMO office.',
                                        facebookUrl: 'https://www.facebook.com/tatakpacquiao/posts/827957779376070',
                                        image: '/gad_activity_2.jpg'
                                    },
                                    {
                                        id: 3,
                                        date: 'OCTOBER 2024',
                                        location: 'GENERAL SANTOS CITY',
                                        title: 'PSA Conducts 2nd City Statistics Committee NSM Research Forum',
                                        description: 'In celebration of the 35th National Statistics Month, the Philippine Statistics Authority (PSA) conducted the 2nd City Statistics Committee NSM Research Forum, highlighting the importance of data-driven decision making.',
                                        facebookUrl: 'https://www.facebook.com/LGUGensanTATAKHENERAL/posts/122144813540307977',
                                        image: '/gad_activity_3.png'
                                    },
                                    {
                                        id: 4,
                                        date: 'JULY 4, 2024',
                                        location: 'BARANGAY LABANGAL',
                                        title: 'ProjecTEEN to Launch in Barangay Labangal',
                                        description: 'Aiming to help and empower teenage parents in the city by providing them with psychosocial support and other interventions, the Sunrise Organization of the Philippines, Inc. seeks to kick off the implementation of the ProjecTEEN program in Barangay Labangal.',
                                        facebookUrl: 'https://www.facebook.com/LGUGensanTATAKHENERAL/posts/122124913010307977',
                                        image: '/gad_activity_4.png'
                                    },
                                    {
                                        id: 5,
                                        date: 'JUNE 4, 2024',
                                        location: 'ROBINSONS PLACE GENSAN',
                                        title: 'CPMO Opens Men\'s Month Celebration at Robinsons Place',
                                        description: 'The City Population Management Office (CPMO) successfully opened the city\'s month-long celebration of Men\'s Month with an opening ceremony on Monday, June 3, 2024, at the atrium of Robinsons Place GenSan, promoting gender equality and men\'s active participation in societal development.',
                                        facebookUrl: 'https://www.facebook.com/LGUGensanTATAKHENERAL/posts/122117046116307977',
                                        image: '/gad_activity_5.jpg'
                                    },
                                    {
                                        id: 6,
                                        date: 'MAY 29, 2024',
                                        location: 'SM CITY GENSAN',
                                        title: 'CPMO Unveils Programs for Men\'s Month and Pride Month',
                                        description: 'The City Population Management Office (CPMO) has unveiled its programs for this year\'s Men\'s Month and Pride Month celebrations during the monthly press conference of the City Public Information Office. The theme "Itaguyod, positibong papel ng kalalakihan sa lipunan" highlights the importance of recognizing men\'s constructive contributions.',
                                        facebookUrl: 'https://www.facebook.com/LGUGensanTATAKHENERAL/posts/122115456212307977',
                                        image: '/gad_activity_6.png'
                                    }
                                ].map((activity, index) => (
                                    <ScrollReveal key={activity.id} delay={index * 100} className="h-full" animation="fade-up" enableBounce>
                                        <div
                                            onClick={() => window.open(activity.facebookUrl, '_blank', 'noopener,noreferrer')}
                                            className="group bg-white rounded-[2rem] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-purple-50 overflow-hidden flex flex-col h-full cursor-pointer"
                                        >
                                            {/* Card Image Area */}
                                            <div className="relative h-64 bg-gradient-to-br from-purple-100 to-blue-50 overflow-hidden">
                                                {/* Badge */}
                                                <div className="absolute top-4 left-4 z-10 bg-purple-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg uppercase tracking-wide">
                                                    GAD Activity
                                                </div>

                                                {/* Actual Image or Fallback */}
                                                {activity.image ? (
                                                    <>
                                                        <img
                                                            src={activity.image}
                                                            alt={activity.title}
                                                            className="w-full h-full object-cover"
                                                        />
                                                        {/* Image Overlay on Hover */}
                                                        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                                    </>
                                                ) : (
                                                    <>
                                                        {/* Gradient Fallback with Overlay */}
                                                        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                                        {/* Icon Watermark */}
                                                        <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                                                            <div className="text-9xl font-black text-purple-600">GAD</div>
                                                        </div>
                                                    </>
                                                )}
                                            </div>

                                            {/* Card Content */}
                                            <div className="p-8 flex flex-col flex-grow relative">
                                                {/* Date */}
                                                <div className="flex flex-wrap items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">
                                                    <span className="text-purple-600">{activity.date}</span>
                                                    <span className="w-1 h-1 rounded-full bg-purple-300"></span>
                                                    <span>{activity.location}</span>
                                                </div>

                                                <h3 className="text-xl font-bold text-[#4c1d95] mb-4 leading-tight group-hover:text-purple-600 transition-colors line-clamp-2">
                                                    {activity.title}
                                                </h3>

                                                <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-3">
                                                    {activity.description}
                                                </p>
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
