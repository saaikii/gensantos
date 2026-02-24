import React, { useState } from 'react';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Home/Hero';
import FeaturedBanners from './components/Home/FeaturedBanners';
import News from './components/News/News';
import MayorMessage from './components/Home/MayorMessage';
import CitizensGuides from './components/Home/CitizensGuides';
import CalendarOfActivities from './components/Home/CalendarOfActivities';
import TransparencyBoard from './components/Home/TransparencyBoard';
import LocationMap from './components/Home/LocationMap';
import Footer from './components/Layout/Footer';
import CityAssistant from './components/Layout/CityAssistant';

import PageSkeleton from './components/Shared/PageSkeleton';
import DepartmentsSkeleton from './components/Department/DepartmentsSkeleton';
import CitizensCharterSkeleton from './components/CitizensCharter/CitizensCharterSkeleton';

// Lazy load heavy page components for performance and loading states
const Departments = React.lazy(() => import('./components/Department/Departments.tsx'));
const DepartmentDetail = React.lazy(() => import('./components/Department/DepartmentDetail.tsx'));
const CitizensCharter = React.lazy(() => import('./components/CitizensCharter/CitizensCharter.tsx'));
const GADDatabase = React.lazy(() => import('./components/GadDatabase/GADDatabase.tsx'));
// const Tourism = React.lazy(() => import('./components/Tourism/Tourism')); // Replaced by Transparency
const NewsDetail = React.lazy(() => import('./components/News/NewsDetail.tsx'));
const CPMOHome = React.lazy(() => import('./components/GadDatabase/CPMOHome.tsx'));
const TransparencyPage = React.lazy(() => import('./components/Transparency/TransparencyPage.tsx'));
const FullCalendarPage = React.lazy(() => import('./components/Home/FullCalendarPage.tsx'));
const RealPropertyTaxPage = React.lazy(() => import('./components/Services/RealPropertyTaxPage.tsx'));
import GlobalSearchOverlay from './components/Layout/GlobalSearchOverlay.tsx';

import { NewsItem, DepartmentDetails } from './types.ts';
import { SearchResult } from './data/siteData.ts';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'tourism' | 'departments' | 'department-detail' | 'gad-database' | 'citizens-charter' | 'cpmo-home' | 'news-detail' | 'transparency' | 'full-calendar' | 'real-property-tax'>('home');
  const [selectedNewsItem, setSelectedNewsItem] = useState<NewsItem | null>(null);
  const [selectedDepartment, setSelectedDepartment] = useState<DepartmentDetails | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [globalSearchQuery, setGlobalSearchQuery] = useState('');
  const [homeScrollPosition, setHomeScrollPosition] = useState(0);

  const navigateTo = (page: 'home' | 'tourism' | 'departments' | 'department-detail' | 'gad-database' | 'citizens-charter' | 'cpmo-home' | 'transparency' | 'full-calendar' | 'real-property-tax') => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleReadNews = (news: NewsItem) => {
    setHomeScrollPosition(window.scrollY);
    setSelectedNewsItem(news);
    setCurrentPage('news-detail');
    window.scrollTo(0, 0);
  };

  const backFromNews = () => {
    setCurrentPage('home');
    // Use a small timeout to allow the homepage to render before scrolling
    setTimeout(() => {
      window.scrollTo({
        top: homeScrollPosition,
        behavior: 'instant'
      });
    }, 0);
  };

  const handleDepartmentSelect = (dept: DepartmentDetails) => {
    setSelectedDepartment(dept);
    setCurrentPage('department-detail');
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
  const getNavbarPage = (page: typeof currentPage): 'home' | 'tourism' | 'departments' | 'gad-database' | 'citizens-charter' | 'transparency' | 'full-calendar' => {
    if (page === 'cpmo-home') return 'gad-database';
    if (page === 'news-detail') return 'home';
    if (page === 'department-detail') return 'departments';
    if (page === 'full-calendar') return 'home'; // Map full-calendar to home for navbar
    if (page === 'real-property-tax') return 'home';
    return page;
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {currentPage !== 'gad-database' && currentPage !== 'cpmo-home' && (
        <Navbar
          onNavigate={navigateTo}
          currentPage={getNavbarPage(currentPage)}
          enableStickySearch={currentPage === 'home'}
          disableTransparency={currentPage === 'news-detail' || currentPage === 'real-property-tax'}
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
            <div id="calendar-section">
              <CalendarOfActivities onNavigate={navigateTo} />
            </div>
            <MayorMessage />
            <CitizensGuides onNavigate={navigateTo} />
            <TransparencyBoard onNavigate={navigateTo} />
            <LocationMap />
          </>
        )}



        {currentPage === 'departments' && (
          <React.Suspense fallback={<DepartmentsSkeleton />}>
            <Departments onDepartmentSelect={handleDepartmentSelect} />
          </React.Suspense>
        )}

        {currentPage === 'department-detail' && selectedDepartment && (
          <React.Suspense fallback={<PageSkeleton />}>
            <DepartmentDetail
              department={selectedDepartment}
              onBack={() => navigateTo('departments')}
            />
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
              onBack={backFromNews}
            />
          </React.Suspense>
        )}
        {currentPage === 'transparency' && (
          <React.Suspense fallback={<PageSkeleton />}>
            <TransparencyPage onNavigate={navigateTo} />
          </React.Suspense>
        )}

        {currentPage === 'full-calendar' && (
          <React.Suspense fallback={<PageSkeleton />}>
            <FullCalendarPage
              onNavigate={navigateTo}
              onBack={() => {
                navigateTo('home');
                setTimeout(() => {
                  document.getElementById('calendar-section')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }} />
          </React.Suspense>
        )}

        {currentPage === 'real-property-tax' && (
           <React.Suspense fallback={<PageSkeleton />}>
              <RealPropertyTaxPage onBack={() => navigateTo('home')} />
           </React.Suspense>
        )}
      </main>

      {currentPage !== 'gad-database' && currentPage !== 'cpmo-home' && currentPage !== 'full-calendar' && <Footer />}
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