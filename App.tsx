import React, { useState } from 'react';
import Navbar from './components/Home/Navbar';
import Hero from './components/Home/Hero';
import FeaturedBanners from './components/Home/FeaturedBanners';
import News from './components/Home/News';
import MayorMessage from './components/Home/MayorMessage';
import CitizensGuides from './components/Home/CitizensGuides';
import Highlights from './components/Home/Highlights';
import LocationMap from './components/Home/LocationMap';
import Footer from './components/Home/Footer';
import CityAssistant from './components/Home/CityAssistant';

import PageSkeleton from './components/Shared/PageSkeleton';
import DepartmentsSkeleton from './components/Department/DepartmentsSkeleton';
import CitizensCharterSkeleton from './components/Home/CitizensCharterSkeleton';

// Lazy load heavy page components for performance and loading states
const Departments = React.lazy(() => import('./components/Department/Departments'));
const CitizensCharter = React.lazy(() => import('./components/Home/CitizensCharter'));
const GADDatabase = React.lazy(() => import('./components/GadDatabase/GADDatabase'));
const Procurement = React.lazy(() => import('./components/Procurement/Procurement'));
const Tourism = React.lazy(() => import('./components/Home/Tourism'));
const NewsDetail = React.lazy(() => import('./components/Home/NewsDetail'));

import { NewsItem } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'tourism' | 'departments' | 'gad-database' | 'procurement' | 'citizens-charter' | 'news-detail'>('home');
  const [selectedNewsItem, setSelectedNewsItem] = useState<NewsItem | null>(null);

  const navigateTo = (page: 'home' | 'tourism' | 'departments' | 'gad-database' | 'procurement' | 'citizens-charter') => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleReadNews = (news: NewsItem) => {
    setSelectedNewsItem(news);
    setCurrentPage('news-detail');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar onNavigate={navigateTo} currentPage={currentPage === 'news-detail' ? 'home' : currentPage} />
      
      <main>
        {currentPage === 'home' && (
          <>
            <Hero />
            <FeaturedBanners />
            <News onReadMore={handleReadNews} />
            <MayorMessage />
            <CitizensGuides />
            <Highlights />
            <LocationMap />
          </>
        )}
        
        {currentPage === 'tourism' && (
          <React.Suspense fallback={<PageSkeleton />}>
            <Tourism />
          </React.Suspense>
        )}
        
        {currentPage === 'departments' && (
          <React.Suspense fallback={<DepartmentsSkeleton />}>
            <Departments />
          </React.Suspense>
        )}

        {currentPage === 'citizens-charter' && (
          <React.Suspense fallback={<CitizensCharterSkeleton />}>
            <CitizensCharter />
          </React.Suspense>
        )}

        {currentPage === 'gad-database' && (
          <React.Suspense fallback={<PageSkeleton />}>
            <GADDatabase />
          </React.Suspense>
        )}

        {currentPage === 'procurement' && (
          <React.Suspense fallback={<PageSkeleton />}>
            <Procurement />
          </React.Suspense>
        )}

        {currentPage === 'news-detail' && selectedNewsItem && (
          <React.Suspense fallback={<PageSkeleton />}>
            <NewsDetail 
              newsItem={selectedNewsItem} 
              onBack={() => navigateTo('home')} 
            />
          </React.Suspense>
        )}
      </main>

      <Footer />
      <CityAssistant />
    </div>
  );
};

export default App;