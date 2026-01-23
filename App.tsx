import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedBanners from './components/FeaturedBanners';
import News from './components/News';
import MayorMessage from './components/MayorMessage';
import CitizensCharter from './components/CitizensCharter';
import Highlights from './components/Highlights';
import LocationMap from './components/LocationMap';
import Footer from './components/Footer';
import CityAssistant from './components/CityAssistant';
import Tourism from './components/Tourism';
import Departments from './components/Departments';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'tourism' | 'departments'>('home');

  const navigateTo = (page: 'home' | 'tourism' | 'departments') => {
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
      </main>

      <Footer />
      <CityAssistant />
    </div>
  );
};

export default App;