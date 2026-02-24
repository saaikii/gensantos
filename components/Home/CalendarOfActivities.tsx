import React, { useState } from 'react';
import { Calendar as CalendarIcon, MapPin, Clock, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import ScrollReveal from '../Shared/ScrollReveal';
import WeatherWidget from './WeatherWidget';

type Event = {
  id: number;
  title: string;
  date: string; // ISO format YYYY-MM-DD
  time: string;
  location: string;
  description: string;
  category: 'festival' | 'cultural' | 'holiday';
};

// Mock Data
const UPCOMING_EVENTS: Event[] = [
  {
    id: 1,
    title: "Kalilangan Festival Opening",
    date: "2026-02-22",
    time: "4:00 PM",
    location: "Oval Plaza",
    description: "The annual celebration of the 'Festival of Generals', commemorating the founding anniversary of General Santos City.",
    category: 'festival'
  },
  {
    id: 2,
    title: "Chinese New Year",
    date: "2026-02-17",
    time: "All Day",
    location: "Citywide",
    description: "Special non-working holiday celebrating the Lunar New Year.",
    category: 'holiday'
  },
  {
    id: 3,
    title: "Tuna Congress 2026 Planning",
    date: "2026-02-05",
    time: "1:00 PM",
    location: "Trade Hall, SM City GenSan",
    description: "Initial stakeholders meeting for the upcoming National Tuna Congress.",
    category: 'cultural'
  },
  {
    id: 4,
    title: "EDSA People Power Revolution",
    date: "2026-02-25",
    time: "All Day",
    location: "Nationwide",
    description: "Commemoration of the 1986 People Power Revolution.",
    category: 'holiday'
  }
];

interface CalendarProps {
  onNavigate?: (page: any) => void;
}

const CalendarOfActivities: React.FC<CalendarProps> = ({ onNavigate }) => {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 0, 1)); // Start at Jan 2026 for demo
  /* Simplified date parsing for demo purposes - combining date string with time string logic might need robustness in real app */




  // Calendar Logic
  const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

  const renderCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const totalDays = daysInMonth(year, month);
    const firstDay = firstDayOfMonth(year, month);
    const blanks = Array(firstDay).fill(null);
    const days = Array.from({ length: totalDays }, (_, i) => i + 1);

    return [...blanks, ...days].map((day, index) => {
      if (!day) return <div key={`blank-${index}`} className="h-10 w-10"></div>;

      const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const event = UPCOMING_EVENTS.find(e => e.date === dateStr);
      
      const today = new Date();
      const isToday = day === today.getDate() && month === today.getMonth() && year === today.getFullYear();

      let eventStyle = '';
      if (event) {
        if (event.category === 'festival') eventStyle = 'bg-purple-100 text-purple-700 font-bold border border-purple-200';
        else if (event.category === 'holiday') eventStyle = 'bg-red-100 text-red-700 font-bold border border-red-200';
        else if (event.category === 'cultural') eventStyle = 'bg-yellow-100 text-yellow-700 font-bold border border-yellow-200';
      }

      return (
        <div 
          key={day} 
          className={`
            h-10 w-10 flex items-center justify-center rounded-full text-sm font-medium cursor-pointer transition-all
            ${isToday ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' : ''}
            ${!isToday && event ? eventStyle : ''}
            ${!isToday && !event ? 'hover:bg-slate-100 text-slate-700' : ''}
          `}
        >
          {day}
        </div>
      );
    });
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  return (
    <section className="relative pt-8 pb-24 bg-gradient-to-b from-gray-50 via-white to-white overflow-hidden">
        {/* Background Decorations */}
        {/* Background Decorations Removed */}

        <div className="container mx-auto px-6 relative z-10">
            {/* Header */}
            <ScrollReveal>
                <div className="text-center mb-16">

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0038A8] mb-6 uppercase tracking-tight drop-shadow-sm font-serif">
                        Calendar of Activities
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-[#0038A8] to-yellow-500 mx-auto rounded-full mb-8"></div>
                    <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Stay updated with the latest events, festivals, and official schedules in the Tuna Capital of the Philippines.
                    </p>
                </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-7xl mx-auto">
                
                {/* Left Column Container */}
                <div className="lg:col-span-4 space-y-12">
                    
                    {/* Visual Calendar */}
                    <ScrollReveal className="relative group perspective-1000">
                        {/* Simulated Stacked Pages underneath */}
                        <div className="absolute inset-0 bg-slate-50 border border-slate-200 rounded-[2.5rem] transform translate-y-4 scale-[0.96] -z-10 shadow-lg"></div>
                        <div className="absolute inset-0 bg-slate-100 border border-slate-300 rounded-[2.5rem] transform translate-y-8 scale-[0.92] -z-20 shadow-md"></div>
                        <div className="absolute inset-0 bg-slate-200 border border-slate-300 rounded-[2.5rem] transform translate-y-12 scale-[0.88] -z-30 shadow-sm opacity-50"></div>

                        {/* Main Top Page */}
                        <div className="bg-white rounded-[2.5rem] pb-8 px-8 pt-16 shadow-2xl border border-blue-50 relative z-10 transition-transform duration-300 md:group-hover:-translate-y-2">
                             
                             {/* Spiral Binding Visuals */}
                             <div className="absolute -top-7 left-0 right-0 flex justify-between px-10 select-none pointer-events-none z-20">
                                {[1, 2, 3, 4, 5, 6].map((i) => (
                                    <div key={i} className="relative flex flex-col items-center w-6">
                                        <div className="absolute top-[3.5rem] w-4 h-4 bg-slate-800 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.9)] ring-1 ring-white/40 z-10"></div>
                                        <div className="absolute top-2 w-3 h-6 bg-slate-600 rounded-t-full -z-10 transform scale-x-90 brightness-50"></div>
                                        <div className="absolute top-0 w-3 h-16 bg-gradient-to-r from-slate-400 via-slate-50 to-slate-400 rounded-full shadow-lg z-20 border-x border-slate-300"></div>
                                        <div className="absolute top-[3.4rem] w-4 h-3 bg-black/50 blur-sm rounded-full z-30"></div>
                                    </div>
                                ))}
                             </div>
                             
                             {/* Header */}
                             <div className="flex items-center justify-between mb-8">
                                <h3 className="text-2xl font-black text-slate-800">
                                    {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
                                </h3>
                                <div className="flex gap-2">
                                    <button onClick={prevMonth} className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-600">
                                        <ChevronLeft size={20} />
                                    </button>
                                    <button onClick={nextMonth} className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-600">
                                        <ChevronRight size={20} />
                                    </button>
                                </div>
                             </div>

                             {/* Days Names */}
                             <div className="grid grid-cols-7 gap-1 text-center mb-4">
                                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                                    <div key={day} className="text-xs font-bold text-slate-400 uppercase tracking-wider">{day}</div>
                                ))}
                             </div>

                             {/* Calendar Grid */}
                             <div className="grid grid-cols-7 gap-2 place-items-center">
                                {renderCalendarDays()}
                             </div>

                
                             {/* Legend */}
                             <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap gap-3 text-xs font-medium text-slate-500 justify-center">
                                <div className="flex items-center gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-blue-600"></div> Today
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-purple-400"></div> Festival
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div> Holiday
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div> Culture
                                </div>
                             </div>
                        </div>
                    </ScrollReveal>

                    {/* Weather Widget */}
                    <WeatherWidget />

                </div>
                <ScrollReveal delay={200} className="lg:col-span-8">
                    <div className="space-y-6">
                        {UPCOMING_EVENTS.map((event) => (
                            <div key={event.id} className="group bg-white rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-blue-200 flex flex-col md:flex-row gap-6 md:items-center">
                                {/* Date Box */}
                                <div className="flex-shrink-0 flex flex-col items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-blue-50 text-blue-700 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                    <span className="text-sm font-bold uppercase tracking-wider">{new Date(event.date).toLocaleString('default', { month: 'short' })}</span>
                                    <span className="text-3xl md:text-4xl font-black">{new Date(event.date).getDate()}</span>
                                </div>

                                {/* Content */}
                                <div className="flex-grow">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border
                                            ${event.category === 'festival' ? 'bg-purple-50 text-purple-600 border-purple-200' : 
                                              event.category === 'cultural' ? 'bg-yellow-50 text-yellow-600 border-yellow-200' :
                                              'bg-red-50 text-red-600 border-red-200'}
                                        `}>
                                            {event.category}
                                        </span>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors mb-2">
                                        {event.title}
                                    </h3>
                                    <p className="text-slate-500 text-sm mb-4 line-clamp-2 leading-relaxed">
                                        {event.description}
                                    </p>
                                    <div className="flex flex-wrap gap-4 text-xs font-bold text-slate-400 uppercase tracking-wide">
                                        <div className="flex items-center gap-1.5">
                                            <Clock size={14} className="text-blue-400" /> {event.time}
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <MapPin size={14} className="text-red-400" /> {event.location}
                                        </div>
                                    </div>
                                </div>

                                {/* Action */}
                                <button className="self-start md:self-center p-3 rounded-full border-2 border-slate-100 text-slate-400 group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0">
                                    <ArrowRight size={20} />
                                </button>
                            </div>
                        ))}
                    </div>
                    
                    <div className="mt-10 text-center">
                        <button 
                            onClick={() => onNavigate?.('full-calendar')}
                            className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all uppercase tracking-widest text-sm"
                        >
                            View Full Calendar <ArrowRight size={20} />
                        </button>
                    </div>
                </ScrollReveal>

            </div>
        </div>
    </section>
  );
};

export default CalendarOfActivities;
