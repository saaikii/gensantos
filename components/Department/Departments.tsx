import React, { useState } from 'react';
import { 
  X, User, MapPin, Phone, Mail, Clock, Building2, ChevronRight,
  Calculator, UserCog, Leaf, Home, PieChart, TrendingUp, HardHat, Trees, Package,
  ClipboardCheck, Scale, Map, Users, HeartHandshake, Banknote, Stethoscope, Activity,
  UserCheck, FileText, Shield, Gavel, Recycle, Landmark, Megaphone,
  Cpu, FileBadge, Accessibility, Briefcase, Trophy, GraduationCap, ShieldCheck, Search
} from 'lucide-react';

interface DepartmentItem {
  name: string;
  icon: React.ReactNode;
}

const leftColumn: DepartmentItem[] = [
  { name: "City Accountant's Office", icon: <Calculator size={18} /> },
  { name: "City Administrator's Office", icon: <UserCog size={18} /> },
  { name: "City Agriculturist's Office", icon: <Leaf size={18} /> },
  { name: "City Assessor's Office", icon: <Home size={18} /> },
  { name: "City Budget Office", icon: <PieChart size={18} /> },
  { name: "City Economic Management and Cooperative Development Office", icon: <TrendingUp size={18} /> },
  { name: "City Engineer's Office", icon: <HardHat size={18} /> },
  { name: "City Environment & Natural Resources Office", icon: <Trees size={18} /> },
  { name: "City General Services Office", icon: <Package size={18} /> },
  { name: "City Housing & Land Management Office", icon: <Home size={18} /> },
  { name: "City Internal Audit Services", icon: <ClipboardCheck size={18} /> },
  { name: "City Legal Office", icon: <Scale size={18} /> },
  { name: "City Planning & Development Office", icon: <Map size={18} /> },
  { name: "City Population Management Office", icon: <Users size={18} /> },
  { name: "City Social Welfare & Development Office", icon: <HeartHandshake size={18} /> },
  { name: "City Treasurer's Office", icon: <Banknote size={18} /> },
  { name: "City Veterinarian's Office", icon: <Stethoscope size={18} /> },
  { name: "City Health Office", icon: <Activity size={18} /> },
  { name: "Dr. Jorge P. Royeca City Hospital", icon: <Building2 size={18} /> },
  { name: "Human Resource Management & Development Office", icon: <UserCheck size={18} /> },
  { name: "Local Civil Registrar", icon: <FileText size={18} /> },
  { name: "Public Safety Office", icon: <Shield size={18} /> },
  { name: "Office of the Building Officials", icon: <Building2 size={18} /> },
  { name: "Sangguniang Panlungsod -Vice Mayor's Office", icon: <Gavel size={18} /> },
  { name: "Waste Management Office", icon: <Recycle size={18} /> }
];

const rightColumn: DepartmentItem[] = [
  { name: "City Mayor's Office", icon: <Landmark size={18} /> },
  { name: "City Mayor's Office (City Public Information Office)", icon: <Megaphone size={18} /> },
  { name: "City Mayor's Office (Integrated Barangay Affairs Division)", icon: <MapPin size={18} /> },
  { name: "City Mayor's Office (Bids and Awards Committee)", icon: <Gavel size={18} /> },
  { name: "City Mayor's Office (Integrated Cultural Communities Affairs Division)", icon: <Users size={18} /> },
  { name: "City Mayor's Office (Information & Communications Technology Division)", icon: <Cpu size={18} /> },
  { name: "City Mayor's Office (Business Permits & Licenses Division)", icon: <FileBadge size={18} /> },
  { name: "City Mayor's Office (Persons with Disability Affairs Office)", icon: <Accessibility size={18} /> },
  { name: "City Mayor's Office (Public Employment and Services Office)", icon: <Briefcase size={18} /> },
  { name: "City Mayor's Office (Sports & Games Development Office)", icon: <Trophy size={18} /> },
  { name: "City Mayor's Office (Youth Affairs and Development)", icon: <GraduationCap size={18} /> },
  { name: "City Mayor's Office (Office of the Senior Citizen Affairs)", icon: <User size={18} /> },
  { name: "City Mayor's Office (People Law's Enforcement Board)", icon: <ShieldCheck size={18} /> }
];

interface DepartmentDetails {
  name: string;
  head: string;
  location: string;
  contact: string;
  email: string;
  hours: string;
  description: string;
}

// Mock Data Generator
const getDepartmentData = (name: string): DepartmentDetails => {
  const isMayorsOffice = name.includes("Mayor's Office");
  
  return {
    name: name,
    head: isMayorsOffice ? "Hon. Lorelie G. Pacquiao" : "Engr. Juan Dela Cruz, MPA",
    location: isMayorsOffice ? "3rd Floor, City Hall Main Bldg." : "City Hall Compound, C.P. Garcia Ave.",
    contact: isMayorsOffice ? "(083) 552-2024" : "(083) 552-1234",
    email: isMayorsOffice ? "mayorsoffice@gensantos.gov.ph" : "department.head@gensantos.gov.ph",
    hours: "Monday - Friday: 8:00 AM - 5:00 PM",
    description: `The ${name} is committed to providing excellent public service and ensuring the welfare of the General Santos City community through efficient governance and transparent operations.`
  };
};

const Departments: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState<DepartmentDetails | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLeft = leftColumn.filter(dept => 
    dept.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredRight = rightColumn.filter(dept => 
    dept.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen relative pt-40 pb-20 bg-slate-900 text-white overflow-hidden font-sans">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
             {/* Base Image - City Hall / Government Building feel */}
            <img
                src="https://picsum.photos/id/122/1920/1080" 
                alt="Background"
                className="w-full h-full object-cover"
            />
             {/* Gradient Overlay matching the screenshot (Blue-ish Purple) */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-700/95 via-blue-900/90 to-blue-900/80 mix-blend-multiply"></div>
        </div>

        {/* Statue Overlay (Right Side Simulation) */}
        <div className="absolute bottom-0 right-0 z-10 w-1/2 lg:w-1/3 h-[80%] opacity-30 pointer-events-none hidden md:block">
             <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/47/General_Paulino_Santos_Statue.jpg" 
                alt="General Santos Statue"
                className="w-full h-full object-cover object-top"
                style={{ 
                    maskImage: 'linear-gradient(to right, transparent, black)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent, black)'
                }}
            />
        </div>

        <div className="container mx-auto px-6 relative z-20">
            {/* Search Bar */}
            <div className="max-w-xl mx-auto mb-12 relative z-30 mt-8">
                <div className="relative group">
                    <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-md group-hover:bg-blue-400/30 transition-all duration-300"></div>
                    <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-blue-200 group-hover:text-yellow-400 transition-colors" size={20} />
                    <input 
                        type="text" 
                        placeholder="Search for a department..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-14 pr-6 py-4 bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-full text-white placeholder-slate-400 focus:outline-none focus:bg-slate-900/80 focus:border-yellow-400/50 focus:ring-2 focus:ring-yellow-400/20 transition-all shadow-xl"
                    />
                </div>
            </div>

            {/* Content Grid */}
            <div 
              key={searchQuery} 
              className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-4 max-w-7xl mx-auto"
            >
                <div className="space-y-4">
                    {filteredLeft.map((dept, idx) => (
                        <div 
                            key={`left-${idx}`} 
                            onClick={() => setSelectedDept(getDepartmentData(dept.name))}
                            style={{ animationDelay: `${idx * 40}ms` }}
                            className="animate-fade-in-up opacity-0 group flex items-center justify-between text-sm md:text-[15px] font-medium tracking-wide text-blue-50/90 border-b border-white/5 pb-2 hover:text-yellow-400 hover:pl-2 cursor-pointer transition-all duration-300"
                        >
                            <div className="flex items-center gap-3">
                                <div className="text-blue-300 group-hover:text-yellow-400 transition-colors">
                                    {dept.icon}
                                </div>
                                <span>{dept.name}</span>
                            </div>
                            <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-yellow-400" />
                        </div>
                    ))}
                    {filteredLeft.length === 0 && searchQuery && (
                        <div className="animate-fade-in-up text-white/30 text-sm italic text-center py-4 border border-white/5 rounded-lg">
                            No matching departments found in this list.
                        </div>
                    )}
                </div>
                <div className="space-y-4">
                    {filteredRight.map((dept, idx) => (
                        <div 
                            key={`right-${idx}`} 
                            onClick={() => setSelectedDept(getDepartmentData(dept.name))}
                            style={{ animationDelay: `${idx * 40}ms` }}
                            className="animate-fade-in-up opacity-0 group flex items-center justify-between text-sm md:text-[15px] font-medium tracking-wide text-blue-50/90 border-b border-white/5 pb-2 hover:text-yellow-400 hover:pl-2 cursor-pointer transition-all duration-300"
                        >
                             <div className="flex items-center gap-3">
                                <div className="text-blue-300 group-hover:text-yellow-400 transition-colors">
                                    {dept.icon}
                                </div>
                                <span>{dept.name}</span>
                            </div>
                             <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-yellow-400" />
                        </div>
                    ))}
                    {filteredRight.length === 0 && searchQuery && (
                        <div className="animate-fade-in-up text-white/30 text-sm italic text-center py-4 border border-white/5 rounded-lg">
                            No matching departments found in this list.
                        </div>
                    )}
                </div>
            </div>
        </div>

        {/* Detail Modal */}
        {selectedDept && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
               {/* Backdrop */}
               <div 
                 className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm transition-opacity"
                 onClick={() => setSelectedDept(null)}
               ></div>
               
               {/* Content */}
               <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-fade-in-up text-slate-800 border border-white/20">
                  {/* Header */}
                  <div className="bg-blue-900 p-6 text-white flex justify-between items-start relative overflow-hidden">
                     {/* Decorative circle */}
                     <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 blur-xl"></div>

                     <div className="relative z-10 pr-6">
                        <div className="flex items-center gap-2 text-yellow-400 text-xs font-bold uppercase tracking-wider mb-2">
                            <Building2 size={14} /> Department Information
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold leading-tight">{selectedDept.name}</h3>
                     </div>
                     <button onClick={() => setSelectedDept(null)} className="text-blue-200 hover:text-white transition-colors bg-white/10 hover:bg-white/20 p-1.5 rounded-full backdrop-blur-sm z-10">
                        <X size={20} />
                     </button>
                  </div>
                  
                  {/* Body */}
                  <div className="p-6 md:p-8 space-y-6">
                     <p className="text-sm text-gray-600 leading-relaxed italic border-l-4 border-yellow-400 pl-4 bg-gray-50 py-3 rounded-r-lg">
                        "{selectedDept.description}"
                     </p>
                     
                     <div className="space-y-5">
                        <div className="flex items-start gap-4">
                            <div className="bg-blue-100 p-2.5 rounded-xl text-blue-700 shrink-0">
                                <User size={22} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-0.5">Head of Office</p>
                                <p className="font-bold text-gray-900 text-lg">{selectedDept.head}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-blue-100 p-2.5 rounded-xl text-blue-700 shrink-0">
                                <MapPin size={22} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-0.5">Location</p>
                                <p className="font-semibold text-gray-800">{selectedDept.location}</p>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                             <div className="flex items-start gap-3">
                                <div className="bg-blue-100 p-2 rounded-lg text-blue-700 shrink-0">
                                    <Phone size={18} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-0.5">Contact No.</p>
                                    <p className="font-semibold text-gray-800 text-sm">{selectedDept.contact}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="bg-blue-100 p-2 rounded-lg text-blue-700 shrink-0">
                                    <Clock size={18} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-0.5">Office Hours</p>
                                    <p className="font-semibold text-gray-800 text-sm">{selectedDept.hours}</p>
                                </div>
                            </div>
                        </div>

                         <div className="flex items-start gap-3 pt-2">
                            <div className="bg-blue-100 p-2 rounded-lg text-blue-700 shrink-0">
                                <Mail size={18} />
                            </div>
                            <div className="flex-1 overflow-hidden">
                                <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-0.5">Email Address</p>
                                <p className="font-semibold text-blue-600 underline truncate cursor-pointer hover:text-blue-800">
                                    {selectedDept.email}
                                </p>
                            </div>
                        </div>
                     </div>
                  </div>
                  
                  {/* Footer */}
                  <div className="bg-gray-50 p-4 border-t border-gray-100 flex justify-end">
                     <button 
                        onClick={() => setSelectedDept(null)}
                        className="px-6 py-2.5 bg-white border border-gray-200 hover:bg-gray-100 text-gray-700 font-semibold rounded-lg transition-colors text-sm shadow-sm"
                     >
                        Close Details
                     </button>
                  </div>
               </div>
            </div>
        )}
    </div>
  );
};

export default Departments;