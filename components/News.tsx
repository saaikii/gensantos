import React from 'react';
import { ArrowRight, CalendarDays } from 'lucide-react';
import { NewsItem } from '../types';

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "GenSan Prepares for Annual Tuna Festival 2024",
    category: "Culture",
    date: "August 15, 2024",
    image: "https://picsum.photos/id/400/800/600",
    summary: "The city government announces the schedule of activities for the upcoming Tuna Festival, featuring street dancing and culinary showdowns."
  },
  {
    id: 2,
    title: "New Digital Hub for Tech Startups Opens Downtown",
    category: "Development",
    date: "August 12, 2024",
    image: "https://picsum.photos/id/48/800/600",
    summary: "Mayor Lorelie Pacquiao inaugurates the new Innovation Center designed to support local tech entrepreneurs and students."
  },
  {
    id: 3,
    title: "City Health Office Launches Mobile Vaccination Drive",
    category: "Health",
    date: "August 10, 2024",
    image: "https://picsum.photos/id/338/800/600",
    summary: "Bringing healthcare closer to barangays, the new mobile clinic will offer free vaccinations and check-ups starting next week."
  }
];

const News: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase">Latest Updates</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">News & Announcements</h2>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors mt-4 md:mt-0">
            View All News <ArrowRight size={20} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {newsItems.map((news) => (
            <article key={news.id} className="group cursor-pointer flex flex-col h-full">
              <div className="relative overflow-hidden rounded-2xl mb-5 aspect-[4/3]">
                <img 
                  src={news.image} 
                  alt={news.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-blue-900 uppercase tracking-wide">
                  {news.category}
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                <CalendarDays size={16} />
                <span>{news.date}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                {news.title}
              </h3>
              <p className="text-gray-500 mb-4 line-clamp-3 flex-1">
                {news.summary}
              </p>
              <div className="flex items-center gap-2 text-blue-600 font-medium text-sm mt-auto">
                Read Story <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-8 md:hidden text-center">
             <a href="#" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors">
            View All News <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default News;