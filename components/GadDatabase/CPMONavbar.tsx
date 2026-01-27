import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface CPMONavbarProps {
  onNavigate: (page: 'home' | 'tourism' | 'departments' | 'gad-database' | 'citizens-charter' | 'cpmo-home') => void;
  currentPage: string;
}

const CPMONavbar: React.FC<CPMONavbarProps> = ({ onNavigate, currentPage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDateTime = (date: Date) => {
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const days = [
      "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];
    const weekday = days[date.getDay()];
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const strHours = String(hours).padStart(2, '0');

    return `${weekday}, ${month} ${day}, ${year} ${strHours}:${minutes}:${seconds} ${ampm}`;
  };

  const handleNavClick = (page: 'home' | 'gad-database' | 'cpmo-home', e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const NavItem = ({ label, page, isExternal = false, externalUrl }: { label: string, page?: 'home' | 'gad-database' | 'cpmo-home', isExternal?: boolean, externalUrl?: string }) => {
    const baseClasses = "hover:text-[#4c1d95] px-1 lg:px-3 py-2 block md:inline-block font-bold border-b-2 border-transparent hover:border-purple-300";

    if (isExternal || externalUrl) {
      return (
        <a
          href={externalUrl || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClasses}
        >
          {label}
        </a>
      )
    }
    return (
      <a
        href="#"
        onClick={(e) => page && handleNavClick(page, e)}
        className={`${baseClasses} ${currentPage === page ? 'text-[#4c1d95]' : ''} `}
      >
        {label}
      </a>
    );
  };

  const Separator = () => <span className="hidden md:block text-gray-300">|</span>;

  return (
    <div className="fixed w-full z-50 flex flex-col shadow-lg font-sans">
      {/* Top Bar - Official Blue */}
      <div className="bg-[#4c1d95] text-white py-3 md:py-4 relative overflow-hidden">
        {/* ... (keep existing content) */}
        {/* Background texture optional */}
        <div className="absolute inset-0 bg-blue-900/10 pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center relative z-10">
          {/* Left Side: Seal + Text */}
          <div className="flex items-center gap-4 md:gap-6">
            <img
              width="225"
              height="225"
              src="https://gensantos.gov.ph/wp-content/uploads/2024/01/cropped-lgulogo.png"
              alt="GenSan Seal"
              className="w-14 h-14 md:w-20 md:h-20 object-contain drop-shadow-md filter brightness-110"
            />
            <h1 className="text-base md:text-2xl leading-tight tracking-wide drop-shadow-md text-white max-w-[300px] md:max-w-none" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontStyle: 'italic' }}>
              Official Website of CPMO (City Population Management Office) <br /> LGU GENSAN
            </h1>
          </div>

          {/* Right Side: Slogan/Logo + Clock (Hidden on small screens) */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="text-[11px] md:text-[13px] font-mono opacity-90 tracking-wider text-right whitespace-nowrap">
              {formatDateTime(currentTime)}
            </div>
            <img
              width="479"
              height="187"
              src="https://gensantos.gov.ph/wp-content/uploads/2024/02/boxed-1-1.png"
              alt="Gobyernong Malinis, Pag-unlad ay Mabilis"
              className="h-12 md:h-20 w-auto object-contain drop-shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Main Navbar - White */}
      <nav className="bg-white border-b-4 border-[#CE1126] md:border-b md:border-gray-200 text-gray-700 text-xs md:text-xs lg:text-sm font-bold uppercase tracking-wide relative">
        <div className="container mx-auto px-2 md:px-4">
          <div className="flex justify-between md:justify-center items-center h-14 md:h-12">

            {/* Mobile Menu Button & Brand (Visible only on Mobile) */}
            <div className="flex md:hidden w-full justify-between items-center">
              <span className="text-blue-900 font-bold">CPMO Menu</span>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-blue-900 p-2">
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center justify-center w-full flex-nowrap gap-0.5">
              <NavItem label="HOME" page="cpmo-home" />
              <Separator />
              <NavItem label="GENSANTOS PORTAL" page="home" />
              <Separator />
              <NavItem label="GAD DATABASE" page="gad-database" />
              <Separator />
              <NavItem label="ABOUT US" externalUrl="https://cpmo.gensantos.gov.ph/SDD_Page" />
              <Separator />
              <NavItem label="LOGIN" externalUrl="https://cpmo.gensantos.gov.ph/SignInPage" />
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-xl">
            <div className="flex flex-col p-4 space-y-1 divide-y divide-gray-100">
              <NavItem label="HOME" page="cpmo-home" />
              <NavItem label="GENSANTOS PORTAL" page="home" />
              <NavItem label="GAD DATABASE" page="gad-database" />
              <NavItem label="ABOUT US" externalUrl="https://cpmo.gensantos.gov.ph/SDD_Page" />
              <NavItem label="LOGIN" externalUrl="https://cpmo.gensantos.gov.ph/SignInPage" />
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default CPMONavbar;
