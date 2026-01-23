import React, { useState } from 'react';
<<<<<<< HEAD
import Navbar from './components/Home/Navbar';
import Hero from './components/Home/Hero';
import FeaturedBanners from './components/Home/FeaturedBanners';
import News from './components/Home/News';
import MayorMessage from './components/Home/MayorMessage';
import CitizensCharter from './components/Home/CitizensCharter';
import Highlights from './components/Home/Highlights';
import LocationMap from './components/Home/LocationMap';
import Footer from './components/Home/Footer';
import CityAssistant from './components/Home/CityAssistant';
import Tourism from './components/Home/Tourism';
import Departments from './components/Department/Departments';
=======
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import FeaturedBanners from './components/FeaturedBanners.tsx';
import News from './components/News.tsx';
import MayorMessage from './components/MayorMessage.tsx';
import Highlights from './components/Highlights.tsx';
import LocationMap from './components/LocationMap.tsx';
import Footer from './components/Footer.tsx';
import CityAssistant from './components/CityAssistant.tsx';
import PageSkeleton from './components/PageSkeleton.tsx';
import DepartmentsSkeleton from './components/DepartmentsSkeleton.tsx';
import CitizensCharterSkeleton from './components/CitizensCharterSkeleton.tsx';

// Lazy load heavy page components for performance and loading states
const Departments = React.lazy(() => import('./components/Departments.tsx'));
const CitizensCharter = React.lazy(() => import('./components/CitizensCharter.tsx'));
const GADDatabase = React.lazy(() => import('./components/GADDatabase.tsx'));
const Procurement = React.lazy(() => import('./components/Procurement.tsx'));
const Tourism = React.lazy(() => import('./components/Tourism.tsx'));
>>>>>>> 4fedca0e2b8aa8692f3bcce2f179a9b39fdc829a

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