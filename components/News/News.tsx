import React, { useState } from 'react';
import { ArrowRight, CalendarDays, Megaphone, Newspaper, PartyPopper } from 'lucide-react';
import ScrollReveal from '../Shared/ScrollReveal';
import { newsItems as allItems } from '../../data/siteData';


import NewsSkeleton from './NewsSkeleton';

// ... (data array remains same)

interface NewsProps {
  onReadMore?: (news: any) => void;
}

const News: React.FC<NewsProps> = ({ onReadMore }) => {
  const [activeTab, setActiveTab] = useState<'Announcement' | 'News' | 'Activities'>('News');
  const [isLoading, setIsLoading] = useState(true);

  // Simulated Loading Effect
  React.useEffect(() => {
    const timer = setTimeout(() => {
        setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const filteredItems = allItems.filter(item => item.category === activeTab);

  const getTabColor = (tab: string) => {
    return 'bg-slate-900';
  };

  const getTextColor = (tab: string) => {
    return 'text-blue-600';
  };

  const getSkeletonStyles = (category: string) => {
    switch (category) {
      case 'Announcement': return { bg: 'bg-gray-100', icon: <Megaphone size={80} className="text-gray-300" /> };
      case 'News': return { bg: 'bg-gray-100', icon: <Newspaper size={80} className="text-gray-300" /> };
      case 'Activities': return { bg: 'bg-gray-100', icon: <PartyPopper size={80} className="text-gray-300" /> };
      default: return { bg: 'bg-gray-100', icon: <Newspaper size={80} className="text-gray-300" /> };
    }
  };

  if (isLoading) return <NewsSkeleton />;

  return (
    <section className="pt-8 pb-24 bg-gray-50">
      <div className="container mx-auto px-6">

        {/* Tab Header mimicking the image */}
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 mb-12 rounded-2xl overflow-hidden shadow-2xl">
            {/* Announcement Tab */}
            <button
              onClick={() => setActiveTab('Announcement')}
              className={`relative h-28 md:h-36 flex items-center justify-center overflow-hidden group transition-all duration-500 ease-in-out ${activeTab === 'Announcement' ? 'flex-[1.5] brightness-100' : 'flex-1 brightness-75 hover:brightness-90'}`}
            >
              <img 
                src="/images/announcement_bg_new.jpg" 
                className={`absolute inset-0 w-full h-full object-cover object-[center_75%] transition-all duration-500 ${activeTab === 'Announcement' ? 'grayscale-0 scale-100' : 'grayscale scale-110'}`} 
                alt="Announcement bg" 
              />
              
              <div className="relative z-20 flex flex-col items-center transform transition-transform duration-300 group-hover:scale-110">
                <Megaphone className="text-white w-8 h-8 md:w-10 md:h-10 mb-2 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]" />
                <h3 className="text-white font-black text-2xl md:text-3xl tracking-widest uppercase font-sans drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">Announcement</h3>
              </div>
              {activeTab === 'Announcement' && (
                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-yellow-400 z-30 animate-fade-in-up"></div>
              )}
            </button>

            {/* News Tab */}
            <button
              onClick={() => setActiveTab('News')}
              className={`relative h-28 md:h-36 flex items-center justify-center overflow-hidden group transition-all duration-500 ease-in-out ${activeTab === 'News' ? 'flex-[1.5] brightness-100' : 'flex-1 brightness-75 hover:brightness-90'}`}
            >
              <img 
                src="/images/news_tab_bg_new.jpg" 
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${activeTab === 'News' ? 'grayscale-0 scale-100' : 'grayscale scale-110'}`} 
                alt="News bg" 
              />

              <div className="relative z-20 flex flex-col items-center transform transition-transform duration-300 group-hover:scale-110">
                <Newspaper className="text-white w-8 h-8 md:w-10 md:h-10 mb-2 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]" />
                <h3 className="text-white font-black text-2xl md:text-3xl tracking-widest uppercase font-sans drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">News</h3>
              </div>
              {activeTab === 'News' && (
                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-yellow-400 z-30 animate-fade-in-up"></div>
              )}
            </button>

            {/* Activities Tab */}
            <button
              onClick={() => setActiveTab('Activities')}
              className={`relative h-28 md:h-36 flex items-center justify-center overflow-hidden group transition-all duration-500 ease-in-out ${activeTab === 'Activities' ? 'flex-[1.5] brightness-100' : 'flex-1 brightness-75 hover:brightness-90'}`}
            >
              <img 
                src="/images/kalilangan_festival.png" 
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${activeTab === 'Activities' ? 'grayscale-0 scale-100' : 'grayscale scale-110'}`} 
                alt="Activities bg" 
              />
              
              <div className="relative z-20 flex flex-col items-center transform transition-transform duration-300 group-hover:scale-110">
                <PartyPopper className="text-white w-8 h-8 md:w-10 md:h-10 mb-2 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]" />
                <h3 className="text-white font-black text-2xl md:text-3xl tracking-widest uppercase font-sans drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">Activities</h3>
              </div>
              {activeTab === 'Activities' && (
                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-yellow-400 z-30 animate-fade-in-up"></div>
              )}
            </button>
          </div>
        </ScrollReveal>

        {/* Content Grid */}
        {/* Content Grid */}
        <div key={activeTab} className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {filteredItems.map((news, index) => (
              <ScrollReveal 
                key={news.id} 
                className="h-full" 
                delay={index * 100} // Manual stagger
              >
                <article
                  onClick={() => onReadMore?.(news)}
                  className="group cursor-pointer flex flex-col h-full bg-white rounded-2xl hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden hover:-translate-y-1"
                >
                  <div className={`relative overflow-hidden aspect-[4/3] ${getSkeletonStyles(news.category).bg} transition-colors duration-300`}>
                    {/* Faux Text Pattern */}
                    <div className="absolute inset-8 space-y-3 opacity-15 select-none pointer-events-none">
                      <div className="w-1/3 h-3 bg-slate-900 rounded-full mb-6"></div>
                      <div className="w-full h-2.5 bg-slate-400 rounded-full"></div>
                      <div className="w-5/6 h-2.5 bg-slate-400 rounded-full"></div>
                      <div className="w-4/5 h-2.5 bg-slate-400 rounded-full"></div>
                      <div className="w-full h-2.5 bg-slate-400 rounded-full mt-6"></div>
                      <div className="w-11/12 h-2.5 bg-slate-400 rounded-full"></div>
                      <div className="w-full h-2.5 bg-slate-400 rounded-full mt-6"></div>
                      <div className="w-3/4 h-2.5 bg-slate-400 rounded-full"></div>
                    </div>

                    {/* Center Icon/Watermark */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-all duration-500 transform group-hover:scale-110 group-hover:-rotate-6">
                      {getSkeletonStyles(news.category).icon}
                    </div>

                    <div className={`absolute top-4 left-4 ${getTabColor(news.category)} text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-md z-10`}>
                      {news.category}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-gray-400 text-xs font-medium mb-3 uppercase tracking-wide">
                      <CalendarDays size={14} />
                      <span>{news.date}</span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight">
                      {news.name}
                    </h3>

                    <p className="text-gray-500 mb-6 line-clamp-3 flex-1 text-sm leading-relaxed">
                      {news.description}
                    </p>

                    <div className={`flex items-center gap-2 ${getTextColor(activeTab)} font-bold text-sm mt-auto group-hover:gap-3 transition-all`}>
                      Read More <ArrowRight size={16} />
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#" className={`inline-flex items-center gap-2 bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:opacity-90 transition-all`}>
            View All {activeTab} <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default News;