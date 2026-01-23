import React, { useState } from 'react';
import Navbar from './components/Home/Navbar';
import Hero from './components/Home/Hero';
import FeaturedBanners from './components/Home/FeaturedBanners';
import News from './components/Home/News';
import MayorMessage from './components/Home/MayorMessage';
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

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'tourism' | 'departments' | 'gad-database' | 'procurement' | 'citizens-charter'>('home');

  const navigateTo = (page: 'home' | 'tourism' | 'departments' | 'gad-database' | 'procurement' | 'citizens-charter') => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar onNavigate={navigateTo} currentPage={currentPage} />
      
      <main>
        {currentPage === 'home' && (
          <>
            <Hero />
            <FeaturedBanners />
            <News />
            <MayorMessage />
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
      </main>

      <Footer />
      <CityAssistant />
    </div>
  );
};

export default App;