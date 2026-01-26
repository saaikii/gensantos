import React, { useState } from 'react';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Home/Hero';
import FeaturedBanners from './components/Home/FeaturedBanners';
import News from './components/News/News';
import MayorMessage from './components/Home/MayorMessage';
import CitizensGuides from './components/Home/CitizensGuides';
import Highlights from './components/Home/Highlights';
import TransparencyBoard from './components/Home/TransparencyBoard';
import LocationMap from './components/Home/LocationMap';
import Footer from './components/Layout/Footer';
import CityAssistant from './components/Layout/CityAssistant';

import PageSkeleton from './components/Shared/PageSkeleton';
import DepartmentsSkeleton from './components/Department/DepartmentsSkeleton';
import CitizensCharterSkeleton from './components/CitizensCharter/CitizensCharterSkeleton';

// Lazy load heavy page components for performance and loading states
const Departments = React.lazy(() => import('./components/Department/Departments.tsx'));
const CitizensCharter = React.lazy(() => import('./components/CitizensCharter/CitizensCharter.tsx'));
const GADDatabase = React.lazy(() => import('./components/GadDatabase/GADDatabase.tsx'));
// const Tourism = React.lazy(() => import('./components/Tourism/Tourism')); // Replaced by Transparency
const NewsDetail = React.lazy(() => import('./components/News/NewsDetail.tsx'));
const CPMOHome = React.lazy(() => import('./components/GadDatabase/CPMOHome.tsx'));
const TransparencyPage = React.lazy(() => import('./components/Transparency/TransparencyPage.tsx'));
import GlobalSearchOverlay from './components/Layout/GlobalSearchOverlay.tsx';

import { NewsItem } from './types.ts';
import { SearchResult } from './data/siteData.ts';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'tourism' | 'departments' | 'gad-database' | 'citizens-charter' | 'cpmo-home' | 'news-detail' | 'transparency'>('home');
  const [selectedNewsItem, setSelectedNewsItem] = useState<NewsItem | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [globalSearchQuery, setGlobalSearchQuery] = useState('');

  const navigateTo = (page: 'home' | 'tourism' | 'departments' | 'gad-database' | 'citizens-charter' | 'cpmo-home' | 'transparency') => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleReadNews = (news: NewsItem) => {
    setSelectedNewsItem(news);
    setCurrentPage('news-detail');
    window.scrollTo(0, 0);
  };

  const handleGlobalSearch = (query: string) => {
    setGlobalSearchQuery(query);
    setIsSearchOpen(true);
  };

  const handleNavigateToResult = (result: SearchResult) => {
    setIsSearchOpen(false);

    if (result.type === 'department') {
      navigateTo('departments');
    } else if (result.type === 'service') {
      navigateTo('citizens-charter');
    } else if (result.type === 'news' || result.type === 'announcement' || result.type === 'activity') {
      // For news, we might need more specific logic to show details
      // For now, navigate to news list or handle specifically if possible
      navigateTo('home');
      // Scroll to news section
      setTimeout(() => {
        const newsSection = document.getElementById('news-section');
        if (newsSection) newsSection.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  // Helper to map app pages to navbar pages
  const getNavbarPage = (page: typeof currentPage): 'home' | 'tourism' | 'departments' | 'gad-database' | 'citizens-charter' | 'transparency' => {
    if (page === 'cpmo-home') return 'gad-database';
    if (page === 'news-detail') return 'home';
    return page;
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {currentPage !== 'gad-database' && currentPage !== 'cpmo-home' && (
        <Navbar
          onNavigate={navigateTo}
          currentPage={getNavbarPage(currentPage)}
          enableStickySearch={currentPage === 'home'}
        />
      )}

      <main>
        {currentPage === 'home' && (
          <>
            <Hero onSearch={handleGlobalSearch} />
            <FeaturedBanners />
            <div id="news-section">
              <News onReadMore={handleReadNews} />
            </div>
            <MayorMessage />
            <CitizensGuides />
            <TransparencyBoard onNavigate={navigateTo} />
            <Highlights />
            <LocationMap />
          </>
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

        {currentPage === 'cpmo-home' && (
          <React.Suspense fallback={<PageSkeleton />}>
            <CPMOHome onNavigate={navigateTo} />
          </React.Suspense>
        )}

        {currentPage === 'gad-database' && (
          <React.Suspense fallback={<PageSkeleton />}>
            <GADDatabase onNavigate={navigateTo} />
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
        {currentPage === 'transparency' && (
          <React.Suspense fallback={<PageSkeleton />}>
            <TransparencyPage onNavigate={navigateTo} />
          </React.Suspense>
        )}
      </main>

      {currentPage !== 'gad-database' && currentPage !== 'cpmo-home' && <Footer />}
      <CityAssistant />

      <GlobalSearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        initialQuery={globalSearchQuery}
        onNavigateToResult={handleNavigateToResult}
      />
    </div>
  );
};

export default App;