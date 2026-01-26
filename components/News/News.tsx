import React, { useState } from 'react';
import { ArrowRight, CalendarDays, Megaphone, Newspaper, PartyPopper } from 'lucide-react';
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
    switch (tab) {
      case 'Announcement': return 'bg-green-600';
      case 'News': return 'bg-blue-600';
      case 'Activities': return 'bg-red-600';
      default: return 'bg-blue-600';
    }
  };

  const getTextColor = (tab: string) => {
    switch (tab) {
      case 'Announcement': return 'text-green-600';
      case 'News': return 'text-blue-600';
      case 'Activities': return 'text-red-600';
      default: return 'text-blue-600';
    }
  };

  const getSkeletonStyles = (category: string) => {
    switch (category) {
      case 'Announcement': return { bg: 'bg-green-50', icon: <Megaphone size={80} className="text-green-900" /> };
      case 'News': return { bg: 'bg-blue-50', icon: <Newspaper size={80} className="text-blue-900" /> };
      case 'Activities': return { bg: 'bg-red-50', icon: <PartyPopper size={80} className="text-red-900" /> };
      default: return { bg: 'bg-blue-50', icon: <Newspaper size={80} className="text-blue-900" /> };
    }
  };

  if (isLoading) return <NewsSkeleton />;

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
            <article
              key={news.id}
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