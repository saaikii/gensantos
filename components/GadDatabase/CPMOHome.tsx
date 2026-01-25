import React from 'react';
import { Target, Eye, ThumbsUp, MessageCircle, Share2 } from 'lucide-react';
import CPMONavbar from './CPMONavbar';
import Footer from '../Layout/Footer';

interface CPMOHomeProps {
    onNavigate: (page: 'home' | 'tourism' | 'departments' | 'gad-database' | 'procurement' | 'citizens-charter' | 'cpmo-home') => void;
}

const CPMOHome: React.FC<CPMOHomeProps> = ({ onNavigate }) => {
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

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <CPMONavbar onNavigate={onNavigate} currentPage="home" />
            
            <div className="h-[73px] md:h-[135px]"></div>

            {/* Header / Logos Section */}
            <div className="bg-white py-8 md:py-12 border-b border-gray-200">
                <div className="container mx-auto px-4 flex flex-col items-center justify-center gap-6">
                    <div className="flex flex-wrap justify-center items-center gap-4 md:gap-12">
                        {/* CPMO Logo Placeholder */}
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-blue-100 flex items-center justify-center border-4 border-blue-900/10 shadow-lg">
                             <img src="/assets/cpmo-logo.png" alt="CPMO Logo" className="w-full h-full object-contain p-2" onError={(e) => (e.currentTarget.src = 'https://gensantos.gov.ph/wp-content/uploads/2024/01/cropped-lgulogo.png')} />
                        </div>
                        
                        {/* GAD Logo / Title Area */}
                        <div className="text-center">
                             <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 tracking-tight font-serif mb-2">
                                I <span className="text-pink-500">♀</span> GAD
                             </h1>
                             <p className="text-sm md:text-base text-gray-500 tracking-[0.2em] font-bold uppercase">
                                Gender and Development
                             </p>
                             <div className="w-full h-px bg-gray-300 my-2"></div>
                             <p className="text-xs md:text-sm text-gray-400 tracking-widest uppercase">
                                Focal Office
                             </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mission & Vision Section */}
            <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 font-serif">
                        Our Mission and Vision
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* Mission Card */}
                        <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                            <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                <Target size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 text-center mb-4">Mission</h3>
                            <p className="text-gray-600 text-center leading-relaxed">
                                To improve the quality of life specifically the poor and the marginalized / disadvantaged groups through the provision of appropriate and gender-responsive approaches in family planning, responsible parenthood and adolescent health.
                            </p>
                        </div>

                        {/* Vision Card */}
                        <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
                             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                             <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                <Eye size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 text-center mb-4">Vision</h3>
                            <p className="text-gray-600 text-center leading-relaxed">
                                "An empowered and people working together for a better quality of life for everyone, living in a peaceful, harmonious, and healthy environment."
                            </p>
                        </div>
                    </div>
                </div>
            </div>

             {/* Advocacy and Activities Section */}
             <div className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12 font-serif">
                        General Santos City GAD Advocacy and Activities
                    </h2>

                    <div className="space-y-8">
                        {/* Use placeholders for the "Feed" look */}
                        {[1, 2].map((i) => (
                             <div key={i} className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
                                {/* Post Header */}
                                <div className="p-4 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden">
                                        <img src="https://gensantos.gov.ph/wp-content/uploads/2024/01/cropped-lgulogo.png" alt="Avatar" className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm">LGU GENSAN - GAD Local Office</h4>
                                        <p className="text-xs text-gray-500">Yesterday at 10:00 AM</p>
                                    </div>
                                    <button className="ml-auto text-blue-600 text-sm font-semibold">Like Page</button>
                                </div>
                                
                                {/* Post Content */}
                                <div className="px-4 pb-3">
                                    <p className="text-gray-800 text-sm leading-relaxed mb-3">
                                        {i === 1 ? 
                                            "LOOK: The City Population Management Office (CPMO) in coordination with the Barangay Council of San Isidro conducted a Reproductive Health Seminar..." :
                                            "HAPPENING NOW: Gender and Development (GAD) Planning and Budgeting Workshop for CSOs and NGOS."
                                        } <span className="text-gray-500 cursor-pointer">See more</span>
                                    </p>
                                </div>
                                
                                {/* Post Image Grid (Mockup) */}
                                <div className="bg-gray-100 h-96 flex flex-wrap gap-0.5">
                                    <div className="flex-1 h-full bg-gray-300 relative">
                                        {/* Mock Image Placeholder */}
                                         <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                                            IMAGE {i}A
                                         </div>
                                    </div>
                                    <div className="flex-1 h-full flex flex-col gap-0.5">
                                         <div className="flex-1 bg-gray-300 relative">
                                             <div className="absolute inset-0 flex items-center justify-center text-gray-500">IMAGE {i}B</div>
                                         </div>
                                         <div className="flex-1 bg-gray-300 relative">
                                             <div className="absolute inset-0 flex items-center justify-center text-gray-500">IMAGE {i}C</div>
                                         </div>
                                    </div>
                                </div>

                                {/* Post Stats */}
                                <div className="px-4 py-2 border-t border-gray-100 flex justify-between text-xs text-gray-500">
                                    <span>👍 ❤️ 245</span>
                                    <span>23 Comments 12 Shares</span>
                                </div>

                                {/* Actions */}
                                <div className="px-4 py-2 border-t border-gray-100 flex justify-between">
                                    <button className="flex items-center gap-2 text-gray-600 hover:bg-gray-50 px-4 py-1 rounded-md transition-colors text-sm font-medium"><ThumbsUp size={16} /> Like</button>
                                    <button className="flex items-center gap-2 text-gray-600 hover:bg-gray-50 px-4 py-1 rounded-md transition-colors text-sm font-medium"><MessageCircle size={16} /> Comment</button>
                                    <button className="flex items-center gap-2 text-gray-600 hover:bg-gray-50 px-4 py-1 rounded-md transition-colors text-sm font-medium"><Share2 size={16} /> Share</button>
                                </div>
                             </div>
                        ))}
                    </div>
                </div>
             </div>

             <Footer />
        </div>
    );
};

export default CPMOHome;
