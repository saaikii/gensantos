import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Clock, MapPin, Search, Filter, Calendar as CalendarIcon, ArrowLeft } from 'lucide-react';
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
    title: "City Council Regular Session",
    date: "2026-02-03",
    time: "09:00 AM - 12:00 PM",
    location: "Sangguniang Panlungsod Session Hall",
    description: "Weekly regular session of the 20th Sangguniang Panlungsod.",
    category: "official"
  },
  {
    id: 3,
    title: "Tuna Capital Fun Run",
    date: "2026-03-15",
    time: "05:00 AM - 09:00 AM",
    location: "Apopong to City Hall",
    description: "Annual charity run for the benefit of the City Scholarship Program.",
    category: "sports"
  },
  {
    id: 4,
    title: "Tax Payment Deadline",
    date: "2026-01-20",
    time: "08:00 AM - 05:00 PM",
    location: "City Treasurer's Office",
    description: "Deadline for the payment of business taxes without penalty.",
    category: "official"
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
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentTime, setCurrentTime] = useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Calendar Logic
  const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
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
      const isToday = day === 27 && month === 1 && year === 2026; // Fake "Today"
      const dateString = day ? `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}` : '';
      const hasEvent = ALL_EVENTS.some(e => e.date === dateString);
      
      return (
        <div key={index} className={`
            h-24 sm:h-32 border border-slate-100 p-2 relative group transition-colors hover:bg-slate-50
            ${!day ? 'bg-slate-50/50' : 'bg-white'}
        `}>
            {day && (
                <>
                    <span className={`
                        w-7 h-7 flex items-center justify-center rounded-full text-sm font-bold mb-1
                        ${isToday ? 'bg-blue-600 text-white' : 'text-slate-700'}
                    `}>
                        {day}
                    </span>
                    {hasEvent && (
                        <div className="space-y-1">
                            {ALL_EVENTS.filter(e => e.date === dateString).map(event => (
                                <div key={event.id} className={`
                                    text-[10px] px-2 py-1 rounded truncate border-l-2
                                    ${event.category === 'festival' ? 'bg-purple-50 text-purple-700 border-purple-400' : 
                                      event.category === 'official' ? 'bg-slate-100 text-slate-700 border-slate-400' :
                                      event.category === 'sports' ? 'bg-green-50 text-green-700 border-green-400' :
                                      'bg-yellow-50 text-yellow-700 border-yellow-400'}
                                `}>
                                    {event.time.split(' - ')[0]} {event.title}
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
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar onNavigate={onNavigate} currentPage="home" disableTransparency={true} />
      
      <main className="pt-48 pb-12">
        <div className="container mx-auto px-6">
            
            {/* Header */}
            <div className="mb-8">
                <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors mb-4 font-bold uppercase tracking-wide text-sm">
                    <ArrowLeft size={16} /> Back
                </button>
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-black text-[#0038A8] font-serif uppercase tracking-tight">
                            Official <span className="text-yellow-500">Calendar</span>
                        </h1>
                        <p className="text-slate-600 mt-2 text-lg">Schedule of activities, holidays, and events in General Santos City.</p>
                    </div>
                    
                    {/* Controls */}
                    <div className="flex gap-2">
                        <button className="p-2 bg-white border border-slate-200 rounded-lg text-slate-600 hover:border-blue-400 hover:text-blue-600 transition-all shadow-sm">
                            <Filter size={20} />
                        </button>
                         <button className="p-2 bg-white border border-slate-200 rounded-lg text-slate-600 hover:border-blue-400 hover:text-blue-600 transition-all shadow-sm">
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
                    <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-slate-400"></div> Official</div>
                    <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-green-400"></div> Sports</div>
                     <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-yellow-400"></div> Cultural</div>
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
      <Footer />
    </div>
  );
};

export default FullCalendarPage;
