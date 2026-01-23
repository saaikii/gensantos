import React, { useState } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import FeaturedBanners from './components/FeaturedBanners.tsx';
import News from './components/News.tsx';
import MayorMessage from './components/MayorMessage.tsx';
import CitizensCharter from './components/CitizensCharter.tsx';
import Highlights from './components/Highlights.tsx';
import LocationMap from './components/LocationMap.tsx';
import Footer from './components/Footer.tsx';
import CityAssistant from './components/CityAssistant.tsx';
import Tourism from './components/Tourism.tsx';
import Departments from './components/Departments.tsx';
import GADDatabase from './components/GADDatabase.tsx';
import Procurement from './components/Procurement.tsx';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'tourism' | 'departments' | 'gad-database' | 'procurement'>('home');

  const navigateTo = (page: 'home' | 'tourism' | 'departments' | 'gad-database' | 'procurement') => {
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
            <CitizensCharter />
            <LocationMap />
          </>
        )}

        {currentPage === 'tourism' && <Tourism />}

        {currentPage === 'departments' && <Departments />}

        {currentPage === 'gad-database' && <GADDatabase />}

        {currentPage === 'procurement' && <Procurement />}
      </main>

      <Footer />
      <CityAssistant />
    </div>
  );
};

export default App;