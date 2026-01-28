import React from 'react';
import { ExternalLink, CalendarDays, MapPin } from 'lucide-react';
import ScrollReveal from '../Shared/ScrollReveal';

interface GADActivity {
    id: number;
    date: string;
    location: string;
    title: string;
    description: string;
    facebookUrl: string;
}

const gadActivities: GADActivity[] = [
    {
        id: 1,
        date: 'JANUARY 25, 2026',
        location: 'SAN ISIDRO, GSC',
        title: 'CPMO Conducts Reproductive Health Seminar for San Isidro Residents',
        description: 'The City Population Management Office (CPMO) in coordination with the Barangay Council of San Isidro successfully conducted a comprehensive Reproductive Health Seminar for community residents.',
        facebookUrl: 'https://www.facebook.com/tatakpacquiao/posts/730842869087562'
    },
    {
        id: 2,
        date: 'JANUARY 26, 2026',
        location: 'SAN ISIDRO, GSC',
        title: 'Gender and Development Planning and Budgeting Workshop for CSOs',
        description: 'A strategic planning session attended by various Civil Society Organizations (CSOs) and Non-Government Organizations (NGOs) to align budgeting goals with gender-responsive programs.',
        facebookUrl: 'https://www.facebook.com/tatakpacquiao/posts/827957779376070'
    },
    {
        id: 3,
        date: 'AUGUST 29, 2023',
        location: 'GENERAL SANTOS CITY',
        title: 'DPWH Turns Over 15M-Worth CPMO Office Building',
        description: 'The Department of Public Works and Highways (DPWH) officially turned over the newly constructed City Population Management Office building, enhancing service delivery capabilities.',
        facebookUrl: 'https://www.facebook.com/LGUGensanTATAKHENERAL/posts/122144813540307977'
    },
    {
        id: 4,
        date: 'MAY 24, 2024',
        location: 'GENERAL SANTOS CITY',
        title: 'Men\'s Month Celebration and GAD Summit',
        description: 'The city celebrates Men\'s Month with various activities promoting gender equality, mental health awareness, and the important role of men in building gender-responsive communities.',
        facebookUrl: 'https://www.facebook.com/LGUGensanTATAKHENERAL/posts/122124913010307977'
    },
    {
        id: 5,
        date: 'MARCH 8, 2024',
        location: 'GENERAL SANTOS CITY',
        title: 'International Women\'s Day Celebration and GAD Conference',
        description: 'Celebrating the achievements of women and promoting gender equality through conferences, workshops, and recognition programs for outstanding women leaders in the community.',
        facebookUrl: 'https://www.facebook.com/LGUGensanTATAKHENERAL/posts/122117046116307977'
    },
    {
        id: 6,
        date: 'FEBRUARY 14, 2024',
        location: 'BARANGAY LATEGANG',
        title: 'Community Outreach and Family Planning Program',
        description: 'CPMO conducts community outreach programs providing free consultations, family planning services, and health education to residents of Barangay Lategang and neighboring communities.',
        facebookUrl: 'https://www.facebook.com/LGUGensanTATAKHENERAL/posts/122115456212307977'
    }
];

const GADActivities: React.FC = () => {
    const handleCardClick = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <section className="py-16 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
            {/* Background Watermark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.03] z-0">
                <div className="w-[800px] h-[800px]">
                    <img
                        src="/gensan_seal_new.png"
                        alt="GenSan Seal"
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <span className="inline-block py-2 px-4 rounded-full bg-purple-50 text-purple-700 border border-purple-200 text-xs font-bold uppercase tracking-widest mb-4">
                            Gender and Development
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-[#0038A8] mb-4 uppercase tracking-tight">
                            General Santos City GAD Advocacy and Activities
                        </h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-[#0038A8] to-purple-600 mx-auto rounded-full mb-6"></div>
                        <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
                            Promoting gender equality, women's empowerment, and inclusive development through various programs and initiatives across General Santos City.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    {gadActivities.map((activity, index) => (
                        <ScrollReveal key={activity.id} delay={index * 100}>
                            <article
                                onClick={() => handleCardClick(activity.facebookUrl)}
                                className="group cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200 hover:border-purple-300 hover:-translate-y-2"
                            >
                                {/* Image Placeholder */}
                                <div className="relative h-64 bg-gradient-to-br from-purple-100 to-blue-50 overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                                        <div className="text-9xl font-black text-purple-600">GAD</div>
                                    </div>

                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4 bg-purple-600 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg z-10">
                                        GAD Activity
                                    </div>

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    {/* Date and Location */}
                                    <div className="flex flex-wrap items-center gap-4 text-slate-500 text-xs font-semibold mb-4 uppercase tracking-wide">
                                        <div className="flex items-center gap-1.5">
                                            <CalendarDays size={14} className="text-purple-600" />
                                            <span>{activity.date}</span>
                                        </div>
                                        <span className="text-slate-300">•</span>
                                        <div className="flex items-center gap-1.5">
                                            <MapPin size={14} className="text-purple-600" />
                                            <span>{activity.location}</span>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-[#0038A8] mb-3 group-hover:text-purple-700 transition-colors leading-tight line-clamp-2">
                                        {activity.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-slate-600 text-sm leading-relaxed mb-5 line-clamp-3">
                                        {activity.description}
                                    </p>

                                    {/* Read More Link */}
                                    <div className="flex items-center gap-2 text-purple-700 font-bold text-sm group-hover:gap-3 transition-all">
                                        <span>READ FULL STORY</span>
                                        <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </article>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Footer Note */}
                <ScrollReveal>
                    <div className="mt-12 text-center">
                        <p className="text-slate-500 text-sm">
                            Click on any card to view the full story on Facebook
                        </p>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default GADActivities;
