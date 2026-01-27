import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Clock, MapPin, Search, Filter, ArrowLeft } from 'lucide-react';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';

// Mock Data (Expanded)
const ALL_EVENTS = [
  {
    id: 1,
    title: "Kalilangan Festival 2026",
    date: "2026-02-27",
    time: "08:00 AM - 10:00 PM",
    location: "Oval Plaza, General Santos City",
    description: "Celebrating the festival of festivals with street dancing, trade fairs, and cultural showcases.",
    category: "festival"
  },
  {
    id: 2,
    title: "Chinese New Year",
    date: "2026-02-17",
    time: "All Day",
    location: "Citywide",
    description: "Special non-working holiday celebrating the Lunar New Year.",
    category: "holiday"
  },
  {
    id: 3,
    title: "EDSA People Power Revolution",
    date: "2026-02-25",
    time: "All Day",
    location: "Nationwide",
    description: "Commemoration of the 1986 People Power Revolution.",
    category: "holiday"
  },
  {
    id: 5,
    title: "National Arts Month Opening",
    date: "2026-02-01",
    time: "03:00 PM - 06:00 PM",
    location: "Veranza Mall Atrium",
    description: "Opening ceremony featuring local artists and performances.",
    category: "cultural"
  },
];

interface FullCalendarPageProps {
  onBack: () => void;
  onNavigate: (page: any) => void;
}

const FullCalendarPage: React.FC<FullCalendarPageProps> = ({ onBack, onNavigate }) => {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 1, 1)); // Feb 2026
  const [currentTime, setCurrentTime] = useState(new Date());
  
  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Modal State
  const [selectedEvents, setSelectedEvents] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDateStr, setSelectedDateStr] = useState('');

  React.useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Filtered Events Logic
  const filteredEvents = ALL_EVENTS.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          event.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filterCategory === 'all' || event.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  // Calendar Logic
  const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleDayClick = (day: number, dateString: string) => {
    const eventsOnDay = filteredEvents.filter(e => e.date === dateString);
    if (eventsOnDay.length > 0) {
        setSelectedEvents(eventsOnDay);
        setSelectedDateStr(new Date(dateString).toLocaleDateString('default', { month: 'long', day: 'numeric', year: 'numeric' }));
        setIsModalOpen(true);
    }
  };

  const renderCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const days = daysInMonth(year, month);
    const firstDay = firstDayOfMonth(year, month);
    
    // Create array for empty slots
    const blanks = Array(firstDay).fill(null);
    // Create array for days
    const currentMonthDays = Array.from({ length: days }, (_, i) => i + 1);
    
    return [...blanks, ...currentMonthDays].map((day, index) => {
      const today = new Date();
      const isToday = day === today.getDate() && month === today.getMonth() && year === today.getFullYear();
      const dateString = day ? `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}` : '';
      const hasEvent = filteredEvents.some(e => e.date === dateString);
      
      return (
        <div 
            key={index} 
            onClick={() => day && hasEvent && handleDayClick(day, dateString)}
            className={`
            min-h-[8rem] sm:min-h-[10rem] border border-slate-100 p-2 relative group transition-colors flex flex-col gap-1
            ${!day ? 'bg-slate-50/50' : 'bg-white'}
            ${hasEvent ? 'cursor-pointer hover:bg-blue-50/30 active:bg-blue-50' : ''}
        `}>
            {day && (
                <>
                    <span className={`
                        w-8 h-8 flex items-center justify-center rounded-full text-base font-bold mb-2
                        ${isToday ? 'bg-blue-600 text-white' : 'text-slate-700'}
                    `}>
                        {day}
                    </span>
                    {hasEvent && (
                        <div className="space-y-1.5 overflow-y-auto max-h-[calc(100%-2.5rem)] scrollbar-thin scrollbar-thumb-slate-200">
                            {filteredEvents.filter(e => e.date === dateString).map(event => (
                                <div key={event.id} className={`
                                    text-xs md:text-sm font-bold px-2 py-1.5 rounded border-l-4 shadow-sm
                                    ${event.category === 'festival' ? 'bg-purple-50 text-purple-800 border-purple-500' : 
                                      event.category === 'cultural' ? 'bg-yellow-50 text-yellow-800 border-yellow-500' :
                                      'bg-red-50 text-red-800 border-red-500'}
                                `}>
                                    <span className="opacity-75 text-[10px] md:text-xs block font-normal mb-0.5">{event.time.split(' - ')[0]}</span>
                                    <span className="block leading-tight truncate">{event.title}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </>
            )}
        </div>
      );
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans relative">
      <Navbar onNavigate={onNavigate} currentPage="home" disableTransparency={true} />
      
      <main className="pt-48 pb-12">
        <div className="container mx-auto px-6">
            
            {/* Header */}
            <div className="mb-8">
                <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors mb-4 font-bold uppercase tracking-wide text-sm">
                    <ArrowLeft size={16} /> Back
                </button>
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 relative">
                    
                    {/* Title */}
                    <div className="flex-1">
                        <div className="animate-fade-in-left">
                            <h1 className="text-4xl md:text-5xl font-black text-[#0038A8] font-serif uppercase tracking-tight">
                                Official <span className="text-yellow-500">Calendar</span>
                            </h1>
                            <p className="text-slate-600 mt-2 text-lg">Schedule of activities, holidays, and events in General Santos City.</p>
                        </div>
                    </div>
                    
                    {/* Controls */}
                    <div className="flex gap-2 relative items-center justify-end">
                        
                        {/* Expandable Search Bar */}
                         <div className={`
                            flex items-center overflow-hidden transition-all duration-500 ease-in-out
                            ${isSearchOpen ? 'w-full md:w-80 opacity-100 pr-2' : 'w-0 opacity-0'}
                        `}>
                            <div className="relative w-full">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                <input 
                                    ref={(input) => isSearchOpen && input?.focus()}
                                    type="text" 
                                    placeholder="Search events..." 
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none text-slate-700 font-medium text-sm shadow-inner bg-slate-50"
                                />
                                <button 
                                    onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-slate-200 rounded-full text-slate-400 hover:text-red-500 transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                </button>
                            </div>
                         </div>

                        {/* Filter Button & Dropdown */}
                        <div className="relative shrink-0">
                            <button 
                                onClick={() => setIsFilterOpen(!isFilterOpen)}
                                className={`p-3 border rounded-xl transition-all shadow-sm flex items-center gap-2 font-bold text-sm
                                    ${isFilterOpen || filterCategory !== 'all' 
                                        ? 'bg-blue-50 border-blue-200 text-blue-700' 
                                        : 'bg-white border-slate-200 text-slate-600 hover:border-blue-400 hover:text-blue-600'}
                                `}
                            >
                                <Filter size={20} />
                                <span className="hidden sm:inline">
                                    {filterCategory === 'all' ? 'Filter' : filterCategory.charAt(0).toUpperCase() + filterCategory.slice(1)}
                                </span>
                            </button>

                            {isFilterOpen && (
                                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-100 z-50 overflow-hidden animate-fade-in-up">
                                    <div className="p-1">
                                        {['all', 'festival', 'cultural', 'holiday'].map(cat => (
                                            <button
                                                key={cat}
                                                onClick={() => { setFilterCategory(cat); setIsFilterOpen(false); }}
                                                className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wide transition-colors flex items-center justify-between
                                                    ${filterCategory === cat 
                                                        ? 'bg-blue-50 text-blue-700' 
                                                        : 'text-slate-600 hover:bg-slate-50'}
                                                `}
                                            >
                                                {cat}
                                                {filterCategory === cat && <div className="w-2 h-2 rounded-full bg-blue-600"></div>}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Search Trigger */}
                        <button 
                            onClick={() => setIsSearchOpen(!isSearchOpen)}
                             className={`p-3 border rounded-xl transition-all shadow-sm shrink-0
                                ${isSearchOpen 
                                    ? 'bg-blue-50 border-blue-200 text-blue-600 ring-2 ring-blue-100' 
                                    : 'bg-white border-slate-200 text-slate-600 hover:border-blue-400 hover:text-blue-600'}
                            `}
                        >
                            <Search size={20} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Calendar Controls */}
            <div className="bg-white rounded-t-2xl border-b border-slate-100 p-6 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-4">
                    <h2 className="text-2xl font-black text-slate-800">
                        {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
                    </h2>
                    <div className="flex gap-1 bg-slate-100 rounded-lg p-1">
                        <button onClick={prevMonth} className="p-1 hover:bg-white rounded shadow-sm text-slate-600 transition-all">
                            <ChevronLeft size={20} />
                        </button>
                        <button onClick={nextMonth} className="p-1 hover:bg-white rounded shadow-sm text-slate-600 transition-all">
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                <div className="hidden lg:flex flex-col items-center justify-center">
                   {/* Clock removed as requested */}
                </div>
                
                <div className="hidden md:flex gap-4 text-sm font-bold text-slate-500">
                    <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-purple-400"></div> Festivals</div>
                    <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-yellow-400"></div> Cultural</div>
                    <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-red-400"></div> Holidays</div>
                </div>
            </div>

            {/* Calendar Grid */}
            <div className="bg-white rounded-b-2xl shadow-xl border border-slate-200 overflow-hidden">
                {/* Weekday Headers */}
                <div className="grid grid-cols-7 bg-slate-50 border-b border-slate-200">
                    {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map(day => (
                        <div key={day} className="py-3 text-center text-xs font-black text-slate-400 uppercase tracking-widest">
                            <span className="hidden md:inline">{day}</span>
                            <span className="md:hidden">{day.slice(0, 3)}</span>
                        </div>
                    ))}
                </div>
                
                {/* Days */}
                <div className="grid grid-cols-7 bg-slate-100 gap-px border-b border-l border-slate-200">
                    {renderCalendarDays()}
                </div>
            </div>
            
        </div>
      </main>

      {/* Event Details Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden animate-scale-in">
                {/* Header */}
                <div className="bg-blue-600 px-6 py-4 flex items-center justify-between">
                    <h3 className="text-white font-serif font-black text-xl tracking-tight">
                        Events for <span className="text-yellow-400">{selectedDateStr}</span>
                    </h3>
                    <button 
                        onClick={() => setIsModalOpen(false)}
                        className="p-1.5 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                </div>
                
                {/* Content */}
                <div className="p-6 max-h-[60vh] overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-slate-200">
                    {selectedEvents.map(event => (
                        <div key={event.id} className="bg-slate-50 rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-2 mb-2">
                                <span className={`
                                    min-w-[6rem] text-center text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider
                                    ${event.category === 'festival' ? 'bg-purple-100 text-purple-700' : 
                                      event.category === 'cultural' ? 'bg-yellow-100 text-yellow-700' :
                                      'bg-red-100 text-red-700'}
                                `}>
                                    {event.category}
                                </span>
                            </div>
                            <h4 className="text-xl font-bold text-slate-800 mb-2 leading-tight">{event.title}</h4>
                            <p className="text-slate-600 text-sm mb-4 leading-relaxed">{event.description}</p>
                            
                            <div className="flex flex-col sm:flex-row gap-3 text-xs font-bold text-slate-500 uppercase tracking-wide border-t border-slate-200 pt-3">
                                <div className="flex items-center gap-1.5">
                                    <Clock size={16} className="text-blue-500" /> {event.time}
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <MapPin size={16} className="text-red-500" /> {event.location}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer */}
                <div className="bg-slate-50 px-6 py-4 border-t border-slate-100 text-center">
                    <button 
                        onClick={() => setIsModalOpen(false)}
                        className="text-blue-600 font-bold uppercase tracking-widest text-xs hover:underline"
                    >
                        Close Details
                    </button>
                </div>
            </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default FullCalendarPage;
