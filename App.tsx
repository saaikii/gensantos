import React, { useState } from 'react';
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