import React, { useState } from 'react';
import { ArrowRight, CalendarDays, Megaphone, Newspaper, PartyPopper } from 'lucide-react';
import { NewsItem } from '../types';

// Mock Data
const allItems = [
  // News (Blue)
  {
    id: 1,
    title: "New Digital Hub for Tech Startups Opens Downtown",
    category: "News",
    date: "August 12, 2024",
    image: "https://picsum.photos/id/48/800/600",
    summary: "Mayor Lorelie Pacquiao inaugurates the new Innovation Center designed to support local tech entrepreneurs and students."
  },
  {
    id: 2,
    title: "City Health Office Launches Mobile Vaccination Drive",
    category: "News",
    date: "August 10, 2024",
    image: "https://picsum.photos/id/338/800/600",
    summary: "Bringing healthcare closer to barangays, the new mobile clinic will offer free vaccinations and check-ups starting next week."
  },
   {
    id: 3,
    title: "LGU Receives Award for Good Governance",
    category: "News",
    date: "August 05, 2024",
    image: "https://picsum.photos/id/400/800/600", // Placeholder
    summary: "General Santos City recognized as one of the most competitive cities in Mindanao during the recent summit."
  },

  // Announcements (Green)
  {
    id: 4,
    title: "Suspension of Classes on August 21",
    category: "Announcement",
    date: "August 18, 2024",
    image: "https://picsum.photos/id/175/800/600", // Clock/School
    summary: "Classes in all levels, both public and private, are suspended in observance of Ninoy Aquino Day."
  },
  {
    id: 5,
    title: "Business Tax Payment Deadline Extended",
    category: "Announcement",
    date: "August 15, 2024",
    image: "https://picsum.photos/id/20/800/600", // Papers/Office
    summary: "The City Treasurer's Office announces the extension of the deadline for the 3rd quarter business tax payment."
  },
   {
    id: 6,
    title: "Road Closure Advisory: Pioneer Avenue",
    category: "Announcement",
    date: "August 14, 2024",
    image: "https://picsum.photos/id/1076/800/600", // Road/Construction
    summary: "Please be advised of the temporary road closure at Pioneer Avenue for road widening projects starting next week."
  },

  // Activities (Red)
  {
    id: 7,
    title: "GenSan Prepares for Annual Tuna Festival 2024",
    category: "Activities",
    date: "August 15, 2024",
    image: "https://picsum.photos/id/400/800/600",
    summary: "The city government announces the schedule of activities for the upcoming Tuna Festival, featuring street dancing and culinary showdowns."
  },
  {
    id: 8,
    title: "Sunday Zumba at the Oval Plaza",
    category: "Activities",
    date: "Every Sunday",
    image: "https://picsum.photos/id/342/800/600", // Exercise
    summary: "Join the weekly community fitness program every Sunday morning at the Oval Plaza. Free for everyone!"
  },
   {
    id: 9,
    title: "Barangay Basketball League Finals",
    category: "Activities",
    date: "August 25, 2024",
    image: "https://picsum.photos/id/453/800/600", // Sports
    summary: "Witness the championship match between Brgy. Lagao and Brgy. Calumpang this coming weekend."
  },
];

const News: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Announcement' | 'News' | 'Activities'>('News');

  const filteredItems = allItems.filter(item => item.category === activeTab);

  const getTabColor = (tab: string) => {
      switch(tab) {
          case 'Announcement': return 'bg-green-600';
          case 'News': return 'bg-blue-600';
          case 'Activities': return 'bg-red-600';
          default: return 'bg-blue-600';
      }
  };

  const getTextColor = (tab: string) => {
    switch(tab) {
        case 'Announcement': return 'text-green-600';
        case 'News': return 'text-blue-600';
        case 'Activities': return 'text-red-600';
        default: return 'text-blue-600';
    }
  };

  return (
    <section className="pt-8 pb-24 bg-gray-50">
      <div className="container mx-auto px-6">
        
        {/* Tab Header mimicking the image */}
        <div className="grid grid-cols-1 md:grid-cols-3 mb-12 rounded-2xl overflow-hidden shadow-2xl">
            {/* Announcement Tab */}
            <button 
                onClick={() => setActiveTab('Announcement')}
                className={`relative h-28 md:h-36 flex items-center justify-center overflow-hidden group transition-all duration-500 ease-in-out ${activeTab === 'Announcement' ? 'flex-[1.5] brightness-100' : 'flex-1 brightness-50 hover:brightness-75'}`}
            >
                <div className="absolute inset-0 bg-green-600 mix-blend-multiply z-10 opacity-90"></div>
                <img src="https://picsum.photos/id/301/800/400" className="absolute inset-0 w-full h-full object-cover grayscale" alt="Announcement bg" />
                <div className="relative z-20 flex flex-col items-center transform transition-transform duration-300 group-hover:scale-110">
                    <Megaphone className="text-white w-8 h-8 md:w-10 md:h-10 mb-2 drop-shadow-md" />
                    <h3 className="text-white font-black text-2xl md:text-3xl tracking-widest uppercase drop-shadow-lg font-sans">Announcement</h3>
                </div>
                 {activeTab === 'Announcement' && (
                    <div className="absolute bottom-0 left-0 w-full h-1.5 bg-yellow-400 z-30 animate-fade-in-up"></div>
                )}
            </button>

            {/* News Tab */}
            <button 
                onClick={() => setActiveTab('News')}
                className={`relative h-28 md:h-36 flex items-center justify-center overflow-hidden group transition-all duration-500 ease-in-out ${activeTab === 'News' ? 'flex-[1.5] brightness-100' : 'flex-1 brightness-50 hover:brightness-75'}`}
            >
                <div className="absolute inset-0 bg-blue-600 mix-blend-multiply z-10 opacity-90"></div>
                <img src="https://picsum.photos/id/1015/800/400" className="absolute inset-0 w-full h-full object-cover grayscale" alt="News bg" />
                <div className="relative z-20 flex flex-col items-center transform transition-transform duration-300 group-hover:scale-110">
                    <Newspaper className="text-white w-8 h-8 md:w-10 md:h-10 mb-2 drop-shadow-md" />
                    <h3 className="text-white font-black text-2xl md:text-3xl tracking-widest uppercase drop-shadow-lg font-sans">News</h3>
                </div>
                {activeTab === 'News' && (
                    <div className="absolute bottom-0 left-0 w-full h-1.5 bg-yellow-400 z-30 animate-fade-in-up"></div>
                )}
            </button>

            {/* Activities Tab */}
            <button 
                onClick={() => setActiveTab('Activities')}
                className={`relative h-28 md:h-36 flex items-center justify-center overflow-hidden group transition-all duration-500 ease-in-out ${activeTab === 'Activities' ? 'flex-[1.5] brightness-100' : 'flex-1 brightness-50 hover:brightness-75'}`}
            >
                <div className="absolute inset-0 bg-red-600 mix-blend-multiply z-10 opacity-90"></div>
                 <img src="https://picsum.photos/id/400/800/400" className="absolute inset-0 w-full h-full object-cover grayscale" alt="Activities bg" />
                <div className="relative z-20 flex flex-col items-center transform transition-transform duration-300 group-hover:scale-110">
                    <PartyPopper className="text-white w-8 h-8 md:w-10 md:h-10 mb-2 drop-shadow-md" />
                    <h3 className="text-white font-black text-2xl md:text-3xl tracking-widest uppercase drop-shadow-lg font-sans">Activities</h3>
                </div>
                 {activeTab === 'Activities' && (
                    <div className="absolute bottom-0 left-0 w-full h-1.5 bg-yellow-400 z-30 animate-fade-in-up"></div>
                )}
            </button>
        </div>

        {/* Content Grid */}
        <div key={activeTab} className="grid grid-cols-1 md:grid-cols-3 gap-10 animate-fade-in-up">
          {filteredItems.map((news) => (
            <article key={news.id} className="group cursor-pointer flex flex-col h-full bg-white rounded-2xl hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden hover:-translate-y-1">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src={news.image} 
                  alt={news.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute top-4 left-4 ${getTabColor(news.category)} text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-md`}>
                  {news.category}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                 <div className="flex items-center gap-2 text-gray-400 text-xs font-medium mb-3 uppercase tracking-wide">
                    <CalendarDays size={14} />
                    <span>{news.date}</span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight">
                    {news.title}
                </h3>
                
                <p className="text-gray-500 mb-6 line-clamp-3 flex-1 text-sm leading-relaxed">
                    {news.summary}
                </p>
                
                <div className={`flex items-center gap-2 ${getTextColor(activeTab)} font-bold text-sm mt-auto group-hover:gap-3 transition-all`}>
                    Read Full Story <ArrowRight size={16} />
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-12 text-center">
             <a href="#" className={`inline-flex items-center gap-2 ${getTabColor(activeTab)} text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:opacity-90 transition-all`}>
            View All {activeTab} <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default News;