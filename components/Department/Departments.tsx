import React, { useState } from 'react';
import { 
  X, User, MapPin, Phone, Mail, Clock, Building2, ChevronRight, ChevronDown, ArrowRight,
  Calculator, UserCog, Leaf, Home, PieChart, TrendingUp, HardHat, Trees, Package,
  ClipboardCheck, Scale, Map, Users, HeartHandshake, Banknote, Stethoscope, Activity,
  UserCheck, FileText, Shield, Gavel, Recycle, Landmark, Megaphone,
  Cpu, FileBadge, Accessibility, Briefcase, Trophy, GraduationCap, ShieldCheck, Search,
  Filter
} from 'lucide-react';

interface DepartmentItem {
  name: string;
  icon: React.ReactNode;
  description: string;
}

const allDepartments: DepartmentItem[] = [
  // City Hall Top Offices
  { name: "City Mayor's Office", icon: <Landmark size={24} />, description: "Executive direction and control over all city government operations." },
  { name: "Sangguniang Panlungsod", icon: <Gavel size={24} />, description: "Legislative body of the city government." },
  
  // Finance & Administration
  { name: "City Accountant's Office", icon: <Calculator size={24} />, description: "In charge of the accounting and internal audit services of the city." },
  { name: "City Administrator's Office", icon: <UserCog size={24} />, description: "Develops plans and strategies on management and administration-related programs." },
  { name: "City Budget Office", icon: <PieChart size={24} />, description: "Responsible for the budget administration and management of the city." },
  { name: "City Treasurer's Office", icon: <Banknote size={24} />, description: "Collection of taxes, fees, charges, and other impositions." },
  { name: "Human Resource Office", icon: <UserCheck size={24} />, description: "Responsible for the recruitment, selection, and placement of personnel." },

  // Services & Development
  { name: "City Agriculturist's Office", icon: <Leaf size={24} />, description: "Promotion of agricultural growth and development." },
  { name: "City Assessor's Office", icon: <Home size={24} />, description: "Appraisal and assessment of real properties for taxation purposes." },
  { name: "City Economic Management", icon: <TrendingUp size={24} />, description: "Formulation of economic development plans and policies." },
  { name: "City Engineer's Office", icon: <HardHat size={24} />, description: "Infrastructure development and public works engineering." },
  { name: "Environment & Natural Resources", icon: <Trees size={24} />, description: "Protection and conservation of the city's natural resources." },
  
  // Public Service
  { name: "City General Services Office", icon: <Package size={24} />, description: "Management of supply and property, and general services." },
  { name: "City Housing & Land Management", icon: <Home size={24} />, description: "Housing and land management programs for the city." },
  { name: "City Internal Audit Services", icon: <ClipboardCheck size={24} />, description: "Internal audit services for effective local governance." },
  { name: "City Legal Office", icon: <Scale size={24} />, description: "Legal assistance and support to the city government." },
  { name: "City Planning & Development", icon: <Map size={24} />, description: "Formulation of comprehensive development plans." },
  { name: "City Population Management", icon: <Users size={24} />, description: "Implementation of population management programs." },
  
  // Social Services
  { name: "Social Welfare & Development", icon: <HeartHandshake size={24} />, description: "Delivery of basic social welfare services." },
  { name: "City Veterinarian's Office", icon: <Stethoscope size={24} />, description: "Veterinary services and animal welfare programs." },
  { name: "City Health Office", icon: <Activity size={24} />, description: "Health services and medical assistance programs." },
  { name: "Dr. Jorge P. Royeca Hospital", icon: <Building2 size={24} />, description: "City government-run tertiary hospital." },
  { name: "Local Civil Registrar", icon: <FileText size={24} />, description: "Civil registration services for vital events." },
  { name: "Public Safety Office", icon: <Shield size={24} />, description: "Ensures public safety and order in the city." },
  { name: "Office of Building Officials", icon: <Building2 size={24} />, description: "Regulation of building construction and maintenance." },
  { name: "Waste Management Office", icon: <Recycle size={24} />, description: "Solid waste management and disposal services." }
];

const mayorsOfficeDivisions = [
  "City Public Information Office",
  "Integrated Barangay Affairs",
  "Bids and Awards Committee",
  "Indigenous Cultural Communities",
  "ICT Division",
  "Business Permits & Licensing",
  "Persons with Disability Affairs",
  "Public Employment Service",
  "Sports & Games Development",
  "Youth Affairs and Development",
  "Senior Citizen Affairs",
  "People's Law Enforcement Board"
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

const getDepartmentData = (name: string): DepartmentDetails => {
  const isMayorsOffice = name.includes("Mayor's Office");
  
  return {
    name: name,
    head: isMayorsOffice ? "Hon. Lorelie G. Pacquiao" : "Engr. Juan Dela Cruz, MPA",
    location: isMayorsOffice ? "3rd Floor, City Hall Main Bldg." : "City Hall Compound, C.P. Garcia Ave.",
    contact: isMayorsOffice ? "(083) 552-2024" : "(083) 552-1234",
    email: isMayorsOffice ? "mayorsoffice@gensantos.gov.ph" : "department.head@gensantos.gov.ph",
    hours: "Monday - Friday: 8:00 AM - 5:00 PM",
    description: `The ${name} is committed to providing excellent public service and ensuring the welfare of the General Santos City community.`
  };
};

// Filter categories for departments
const filterCategories = [
  { id: 'all', label: 'All Departments' },
  { id: 'executive', label: 'Executive' },
  { id: 'finance', label: 'Finance & Admin' },
  { id: 'services', label: 'Services & Development' },
  { id: 'public', label: 'Public Service' },
  { id: 'social', label: 'Social Services' }
];

// Map departments to categories
const departmentCategoryMap: Record<string, string> = {
  "City Mayor's Office": "executive",
  "Sangguniang Panlungsod": "executive",
  "City Accountant's Office": "finance",
  "City Administrator's Office": "finance",
  "City Budget Office": "finance",
  "City Treasurer's Office": "finance",
  "Human Resource Office": "finance",
  "City Agriculturist's Office": "services",
  "City Assessor's Office": "services",
  "City Economic Management": "services",
  "City Engineer's Office": "services",
  "Environment & Natural Resources": "services",
  "City General Services Office": "public",
  "City Housing & Land Management": "public",
  "City Internal Audit Services": "public",
  "City Legal Office": "public",
  "City Planning & Development": "public",
  "City Population Management": "public",
  "Social Welfare & Development": "social",
  "City Veterinarian's Office": "social",
  "City Health Office": "social",
  "Dr. Jorge P. Royeca Hospital": "social",
  "Local Civil Registrar": "social",
  "Public Safety Office": "social",
  "Office of Building Officials": "social",
  "Waste Management Office": "social"
};

const getCategoryStyles = (category: string) => {
  switch(category) {
    case 'finance':
      return {
        bgLight: 'bg-emerald-50',
        bgDark: 'bg-emerald-600',
        textDark: 'text-emerald-600',
        border: 'border-emerald-100',
        shadow: 'shadow-emerald-600/30',
        hoverText: 'group-hover:text-emerald-700',
        corner: 'bg-emerald-50',
        borderHover: 'hover:border-emerald-200'
      };
    case 'services':
      return {
        bgLight: 'bg-amber-50',
        bgDark: 'bg-amber-500',
        textDark: 'text-amber-600',
        border: 'border-amber-100',
        shadow: 'shadow-amber-500/30',
        hoverText: 'group-hover:text-amber-700',
        corner: 'bg-amber-50',
        borderHover: 'hover:border-amber-200'
      };
    case 'public':
      return {
        bgLight: 'bg-purple-50',
        bgDark: 'bg-purple-600',
        textDark: 'text-purple-600',
        border: 'border-purple-100',
        shadow: 'shadow-purple-600/30',
        hoverText: 'group-hover:text-purple-700',
        corner: 'bg-purple-50',
        borderHover: 'hover:border-purple-200'
      };
    case 'social':
      return {
        bgLight: 'bg-rose-50',
        bgDark: 'bg-rose-600',
        textDark: 'text-rose-600',
        border: 'border-rose-100',
        shadow: 'shadow-rose-600/30',
        hoverText: 'group-hover:text-rose-700',
        corner: 'bg-rose-50',
        borderHover: 'hover:border-rose-200'
      };
    default: // executive and others
      return {
        bgLight: 'bg-blue-50',
        bgDark: 'bg-blue-600',
        textDark: 'text-blue-600',
        border: 'border-blue-100',
        shadow: 'shadow-blue-600/30',
        hoverText: 'group-hover:text-blue-700',
        corner: 'bg-blue-50',
        borderHover: 'hover:border-blue-200'
      };
  }
};

const Departments: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState<DepartmentDetails | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showAllDivisions, setShowAllDivisions] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);

  const filteredDepts = allDepartments.filter(dept => {
    const matchesSearch = dept.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dept.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || 
      departmentCategoryMap[dept.name] === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen font-sans pt-20 pb-20 relative">
        {/* Full Page Background Image */}
        <div className="fixed inset-0 z-0">
            <img 
                src="/city_plaza_bg.png" 
                alt="General Santos City Plaza" 
                className="w-full h-full object-cover object-center"
            />
            {/* Blue Tint Overlay - Approx 15-20% opacity as requested */}
            <div className="absolute inset-0 bg-blue-900/20"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-blue-900/20 to-blue-900/50"></div>
        </div>

        {/* Header Section */}
        <div className="relative z-20 pt-24 pb-16 px-6">
            <div className="container mx-auto max-w-7xl text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">
                    Departments
                </h1>
                <p className="text-gray-100 text-lg max-w-2xl mx-auto mb-10 drop-shadow-sm">
                    Explore the departments and offices of the City Government of General Santos.
                    Find services, contact information, and officials.
                </p>

                {/* Search Bar */}
                <div className="max-w-2xl mx-auto relative">
                    <div className="relative group">
                        <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input 
                            type="text" 
                            placeholder="Search departments..." 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-6 py-4 bg-white/95 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg shadow-black/20 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400 transition-all"
                        />
                    </div>
                </div>

                {/* Filter Dropdown */}
                <div className="flex justify-center mt-6 relative">
                    <div className="relative">
                        <button 
                            onClick={() => setShowFilterDropdown(!showFilterDropdown)}
                            className="flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-blue-50 rounded-xl text-sm font-semibold text-gray-700 border-2 border-blue-200 shadow-lg shadow-blue-500/10 transition-all hover:border-blue-400"
                        >
                            <Filter size={16} className="text-blue-600" />
                            <span>{filterCategories.find(c => c.id === selectedCategory)?.label}</span>
                            <ChevronDown size={16} className={`text-blue-600 transition-transform ${showFilterDropdown ? 'rotate-180' : ''}`} />
                        </button>
                        
                        {/* Dropdown Menu */}
                        {showFilterDropdown && (
                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-xl shadow-xl shadow-black/15 border border-gray-100 py-2 min-w-[200px] z-50 animate-fade-in-up">
                                {filterCategories.map((category) => (
                                    <button
                                        key={category.id}
                                        onClick={() => {
                                            setSelectedCategory(category.id);
                                            setShowFilterDropdown(false);
                                        }}
                                        className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors ${
                                            selectedCategory === category.id 
                                                ? 'bg-blue-50 text-blue-700' 
                                                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                        }`}
                                    >
                                        {category.label}
                                        {selectedCategory === category.id && (
                                            <span className="float-right text-blue-600">✓</span>
                                        )}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>

        <div className="container mx-auto px-6 max-w-7xl -mt-6 relative z-10 mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                
                {/* Special Card for Mayor's Office - Only show when no search is active and category matches */}
                {searchQuery === '' && (selectedCategory === 'all' || selectedCategory === 'executive') && (
                    <div className="col-span-1 md:col-span-2 row-span-2 group relative bg-white rounded-[2rem] p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:-translate-y-1 overflow-hidden">
                        {/* Decorative corner accent */}
                        <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50 rounded-bl-[120px] -mr-6 -mt-6 transition-transform group-hover:scale-110"></div>
                        
                        <div className="flex items-start justify-between mb-6 relative">
                            <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/30 group-hover:rotate-6 transition-transform duration-300">
                                <Landmark size={32} />
                            </div>
                            <span className="bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide shadow-md">
                                Executive
                            </span>
                        </div>
                        
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">
                            City Mayor's Office
                        </h3>
                        <p className="text-slate-500 mb-8 leading-relaxed text-lg">
                            The primary office for executive direction, policy implementation, and overall city management.
                        </p>

                        <div className="space-y-3 pl-4 border-l-2 border-blue-200">
                            {(showAllDivisions ? mayorsOfficeDivisions : mayorsOfficeDivisions.slice(0, 5)).map((div, i) => (
                                <div key={i} className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 cursor-pointer transition-colors">
                                    <ChevronRight size={14} className="text-blue-400" />
                                    {div}
                                </div>
                            ))}
                            <button 
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setShowAllDivisions(!showAllDivisions);
                                }}
                                className="text-blue-600 text-sm font-bold hover:underline cursor-pointer pl-6 mt-2 bg-transparent border-none uppercase tracking-wide"
                            >
                                {showAllDivisions 
                                    ? "Show Less" 
                                    : `+ ${mayorsOfficeDivisions.length - 5} More Divisions`
                                }
                            </button>
                        </div>
                        
                        <button 
                            onClick={() => setSelectedDept(getDepartmentData("City Mayor's Office"))}
                            className="mt-8 flex items-center gap-2 text-blue-600 font-bold uppercase tracking-wide text-sm group-hover:gap-3 transition-all"
                        >
                            View Details <ArrowRight size={18} />
                        </button>
                    </div>
                )}

                {/* Standard Department Cards */}
                {filteredDepts.filter(d => searchQuery === '' ? d.name !== "City Mayor's Office" : true).map((dept, idx) => {
                    const category = departmentCategoryMap[dept.name] || 'executive';
                    const styles = getCategoryStyles(category);
                    
                    return (
                        <div 
                            key={idx}
                            onClick={() => setSelectedDept(getDepartmentData(dept.name))}
                            className={`group relative bg-white rounded-[1.5rem] p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 ${styles.borderHover} hover:-translate-y-2 cursor-pointer h-full flex flex-col overflow-hidden`}
                        >
                            {/* Decorative corner accent */}
                            <div className={`absolute top-0 right-0 w-24 h-24 ${styles.corner} rounded-bl-[80px] -mr-3 -mt-3 transition-transform group-hover:scale-110`}></div>
                            
                            {/* Icon */}
                            <div className={`relative w-14 h-14 ${styles.bgDark} text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg ${styles.shadow} group-hover:rotate-6 transition-transform duration-300`}>
                                {dept.icon}
                            </div>
                            
                            <h3 className={`text-xl font-bold text-gray-900 mb-3 ${styles.hoverText} transition-colors line-clamp-2`}>
                                {dept.name}
                            </h3>
                            
                            <p className="text-slate-500 leading-relaxed mb-6 line-clamp-3 flex-grow">
                                {dept.description}
                            </p>

                            {/* Action link */}
                            <div className={`mt-auto flex items-center gap-2 ${styles.textDark} font-bold uppercase tracking-wide text-sm group-hover:gap-3 transition-all`}>
                                View Details <ArrowRight size={18} />
                            </div>
                        </div>
                    );
                })}

                {filteredDepts.length === 0 && (
                    <div className="col-span-full py-20 text-center">
                        <div className="inline-block p-4 bg-white/10 backdrop-blur-md rounded-full mb-4 text-white/50">
                            <Search size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">No departments found</h3>
                        <p className="text-blue-100">Try adjusting your search terms.</p>
                    </div>
                )}
            </div>
        </div>

        {/* Detail Modal */}
      {selectedDept && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
               {/* Backdrop */}
               <div 
                 className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
                 onClick={() => setSelectedDept(null)}
               ></div>
               
               {/* Content */}
               <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-fade-in-up text-slate-800 border border-white/20">
                  {/* ... Modal content ... */}
                  
                  {/* Header */}
                  <div className="bg-white p-6 border-b border-gray-100 flex justify-between items-start">
                     <div className="pr-8">
                        <div className="flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-wider mb-2">
                            <Building2 size={14} /> Department Information
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold leading-tight text-gray-900">{selectedDept.name}</h3>
                     </div>
                     <button onClick={() => setSelectedDept(null)} className="text-gray-400 hover:text-gray-700 transition-colors p-2 hover:bg-gray-100 rounded-full">
                        <X size={20} />
                     </button>
                  </div>
                  
                  {/* Body */}
                  <div className="p-6 md:p-8 space-y-6">
                     <p className="text-sm text-gray-600 leading-relaxed bg-blue-50/50 p-4 rounded-lg border border-blue-100">
                        {selectedDept.description}
                     </p>
                     
                     <div className="space-y-5">
                        <div className="flex items-start gap-4">
                            <div className="bg-gray-100 p-2.5 rounded-xl text-gray-600 shrink-0">
                                <User size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-0.5">Head of Office</p>
                                <p className="font-bold text-gray-900">{selectedDept.head}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-gray-100 p-2.5 rounded-xl text-gray-600 shrink-0">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-0.5">Location</p>
                                <p className="font-medium text-gray-800">{selectedDept.location}</p>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                             <div className="flex items-start gap-3">
                                <div className="bg-gray-100 p-2 rounded-lg text-gray-600 shrink-0">
                                    <Phone size={18} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-0.5">Contact No.</p>
                                    <p className="font-semibold text-gray-800 text-sm">{selectedDept.contact}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="bg-gray-100 p-2 rounded-lg text-gray-600 shrink-0">
                                    <Clock size={18} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-0.5">Office Hours</p>
                                    <p className="font-semibold text-gray-800 text-sm ">{selectedDept.hours}</p>
                                </div>
                            </div>
                        </div>

                         <div className="flex items-start gap-3 pt-2">
                            <div className="bg-gray-100 p-2 rounded-lg text-gray-600 shrink-0">
                                <Mail size={18} />
                            </div>
                            <div className="flex-1 overflow-hidden">
                                <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-0.5">Email Address</p>
                                <p className="font-semibold text-blue-600 hover:underline truncate cursor-pointer">
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
                        Close
                     </button>
                  </div>
               </div>
            </div>
        )}
    </div>
  );
};

export default Departments;