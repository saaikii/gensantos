import React, { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: 'home' | 'tourism' | 'departments' | 'gad-database' | 'procurement' | 'citizens-charter') => void;
  currentPage: 'home' | 'tourism' | 'departments' | 'gad-database' | 'procurement' | 'citizens-charter';
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show search bar when scrolled past 500px AND on Home page
      if (window.scrollY > 500 && currentPage === 'home') {
        setShowSearch(true);
      } else {
        setShowSearch(false);
      }
    };

    // Reset search visibility when page changes
    if (currentPage !== 'home') {
      setShowSearch(false);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const handleNavClick = (page: 'home' | 'tourism' | 'departments' | 'gad-database' | 'procurement' | 'citizens-charter', e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const NavItem = ({ label, page, isExternal = false }: { label: string, page?: 'home' | 'tourism' | 'departments' | 'gad-database' | 'procurement' | 'citizens-charter', isExternal?: boolean }) => {
    const baseClasses = "hover:text-blue-700 transition-colors px-2 lg:px-4 py-2 block md:inline-block";

    if (isExternal) {
      return (
        <a href="#" className={baseClasses}>
          {label}
        </a>
      )
    }
    return (
      <a
        href="#"
        onClick={(e) => page && handleNavClick(page, e)}
        className={`${baseClasses} ${currentPage === page ? 'text-blue-700 font-black' : ''}`}
      >
        {label}
      </a>
    );
  };

  const Separator = () => <span className="hidden md:block text-gray-300">|</span>;

  return (
    <div className="fixed w-full z-50 flex flex-col shadow-lg font-sans">
      {/* Top Bar - Official Blue */}
      <div className="bg-[#0038A8] text-white py-3 md:py-4 relative overflow-hidden">
        {/* Background texture optional */}
        <div className="absolute inset-0 bg-blue-900/10 pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center relative z-10">
          {/* Left Side: Seal + Text */}
          <div className="flex items-center gap-4 md:gap-6">
            <img
              fetchPriority="high"
              decoding="async"
              width="225"
              height="225"
              src="https://gensantos.gov.ph/wp-content/uploads/2024/01/cropped-lgulogo.png"
              srcSet="https://gensantos.gov.ph/wp-content/uploads/2024/01/cropped-lgulogo.png 225w, https://gensantos.gov.ph/wp-content/uploads/2024/01/cropped-lgulogo-150x150.png 150w, https://gensantos.gov.ph/wp-content/uploads/2024/01/cropped-lgulogo-200x200.png 200w, https://gensantos.gov.ph/wp-content/uploads/2024/01/elementor/thumbs/cropped-lgulogo-qk2rlk8bw3t0uothsalp0o8i2z5s594wwq4q13rqaw.png 100w, https://gensantos.gov.ph/wp-content/uploads/2024/01/elementor/thumbs/cropped-lgulogo-qk2rlk8bl53wy6s26kdwhniwtn3vhbbzfrzfhr5fam.png 75w"
              sizes="(max-width: 225px) 100vw, 225px"
              referrerPolicy="no-referrer"
              alt="GenSan Seal"
              className="w-14 h-14 md:w-20 md:h-20 object-contain drop-shadow-md filter brightness-110"
            />
            <h1 className="text-base md:text-2xl leading-tight tracking-wide drop-shadow-md max-w-[220px] md:max-w-none text-white" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontStyle: 'italic' }}>
              Official Website of the City Government of General Santos
            </h1>
          </div>

          {/* Right Side: Slogan/Logo (Hidden on small screens) */}
          <div className="hidden lg:flex flex-col items-end justify-center">
            <img
              decoding="async"
              width="479"
              height="187"
              src="https://gensantos.gov.ph/wp-content/uploads/2024/02/boxed-1-1.png"
              srcSet="https://gensantos.gov.ph/wp-content/uploads/2024/02/boxed-1-1.png 479w, https://gensantos.gov.ph/wp-content/uploads/2024/02/boxed-1-1-200x78.png 200w"
              sizes="(max-width: 479px) 100vw, 479px"
              alt="Gobyernong Malinis, Pag-unlad ay Mabilis"
              referrerPolicy="no-referrer"
              className="h-12 md:h-20 w-auto object-contain drop-shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Main Navbar - White */}
      <nav className="bg-white border-b-4 border-[#CE1126] md:border-b md:border-gray-200 text-gray-700 text-[11px] md:text-[11px] lg:text-xs font-bold uppercase tracking-wide relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between md:justify-center items-center h-14 md:h-12">

            {/* Mobile Menu Button & Brand (Visible only on Mobile) */}
            <div className="flex md:hidden w-full justify-between items-center">
              <span className="text-blue-900 font-bold">Menu</span>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-blue-900 p-2">
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center justify-center w-full flex-wrap gap-1">
              <NavItem label="HOME" page="home" />
              <Separator />
              <NavItem label="DEPARTMENTS" page="departments" />
              <Separator />
              <NavItem label="CITIZEN'S CHARTER" page="citizens-charter" />
              <Separator />
              <NavItem label="GAD DATABASE" page="gad-database" />
              <Separator />
              <NavItem label="LGU EO" isExternal />
              <Separator />
              <NavItem label="PROCUREMENT" page="procurement" />
              <Separator />
              <NavItem label="SCHEDULE OF MARKET VALUES (SMV)" isExternal />
              <Separator />
              <NavItem label="TOURISM" page="tourism" />

              {/* Sticky Search Bar - Slides in next to Tourism */}
              <div className={`
                  hidden md:flex items-center overflow-hidden transition-all duration-500 ease-in-out
                  ${showSearch ? 'w-56 opacity-100 ml-4' : 'w-0 opacity-0 ml-0'}
              `}>
                  <div className="relative group w-full">
                    <input 
                      type="text" 
                      placeholder="Search..." 
                      className="bg-gray-100 border border-gray-200 rounded-full pl-9 pr-4 py-1.5 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 hover:bg-white transition-all shadow-sm"
                    />
                    <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500" />
                  </div>
              </div>

            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-xl">
             {/* Mobile Sticky Search */}
             {showSearch && (
                <div className="p-4 border-b border-gray-100 bg-gray-50 animate-fade-in-up">
                   <div className="relative">
                      <input 
                        type="text" 
                        placeholder="Search services..." 
                        className="w-full bg-white border border-gray-200 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                      />
                      <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                   </div>
                </div>
              )}
            <div className="flex flex-col p-4 space-y-1 divide-y divide-gray-100">
              <NavItem label="HOME" page="home" />
              <NavItem label="DEPARTMENTS" page="departments" />
              <NavItem label="CITIZEN'S CHARTER" page="citizens-charter" />
              <NavItem label="GAD DATABASE" page="gad-database" />
              <NavItem label="LGU EO" isExternal />
              <NavItem label="PROCUREMENT" page="procurement" />
              <NavItem label="SCHEDULE OF MARKET VALUES (SMV)" isExternal />
              <NavItem label="TOURISM" page="tourism" />
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;