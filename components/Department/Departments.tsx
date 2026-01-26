import React, { useState } from 'react';
import {
    X, User, MapPin, Phone, Mail, Clock, Building2, ChevronRight, ChevronDown, ArrowRight,
    Calculator, UserCog, Leaf, Home, PieChart, TrendingUp, HardHat, Trees, Package,
    ClipboardCheck, Scale, Map, Users, HeartHandshake, Banknote, Stethoscope, Activity,
    UserCheck, FileText, Shield, Gavel, Recycle, Landmark, Megaphone,
    Cpu, FileBadge, Accessibility, Briefcase, Trophy, GraduationCap, ShieldCheck, Search,
    Filter
} from 'lucide-react';
import { departments as allDepartments } from '../../data/siteData';
import DepartmentsSkeleton from './DepartmentsSkeleton';


const mayorsOfficeDivisions = [
    "City Public Information Office",
// ... (lines 13-153 remain same, skipping for brevity but assuming they are preserved if not targeted) 
// To allow simple integration, I will target the imports and the component start separately if needed, 
// but here I can match the top block. Better to do it in two chunks to be safe.
// Chunk 1: Import

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
    // Unified blue icons with government blue/gold text colors only
    // Blue for most departments, gold for executive/leadership roles
    switch (category) {
        case 'finance':
            return {
                bgLight: 'bg-green-50',
                bgDark: 'bg-green-600',
                textDark: 'text-green-800',
                border: 'border-green-100',
                shadow: 'shadow-green-600/30',
                hoverText: 'group-hover:text-green-900',
                corner: 'bg-green-50',
                borderHover: 'hover:border-green-200'
            };
        case 'services':
            return {
                bgLight: 'bg-teal-50',
                bgDark: 'bg-teal-600',
                textDark: 'text-teal-800',
                border: 'border-teal-100',
                shadow: 'shadow-teal-600/30',
                hoverText: 'group-hover:text-teal-900',
                corner: 'bg-teal-50',
                borderHover: 'hover:border-teal-200'
            };
        case 'public':
            return {
                bgLight: 'bg-orange-50',
                bgDark: 'bg-orange-600',
                textDark: 'text-orange-800',
                border: 'border-orange-100',
                shadow: 'shadow-orange-600/30',
                hoverText: 'group-hover:text-orange-900',
                corner: 'bg-orange-50',
                borderHover: 'hover:border-orange-200'
            };
        case 'social':
            return {
                bgLight: 'bg-rose-50',
                bgDark: 'bg-rose-600',
                textDark: 'text-rose-800',
                border: 'border-rose-100',
                shadow: 'shadow-rose-600/30',
                hoverText: 'group-hover:text-rose-900',
                corner: 'bg-rose-50',
                borderHover: 'hover:border-rose-200'
            };
        default: // executive and others - use gold/blue leadership mix
            return {
                bgLight: 'bg-blue-50',
                bgDark: 'bg-blue-600',
                textDark: 'text-blue-800',
                border: 'border-blue-100',
                shadow: 'shadow-blue-600/30',
                hoverText: 'group-hover:text-blue-900',
                corner: 'bg-blue-50',
                borderHover: 'hover:border-blue-200'
            };
    }
};

const Departments: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [selectedDept, setSelectedDept] = useState<DepartmentDetails | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [showAllDivisions, setShowAllDivisions] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [showFilterDropdown, setShowFilterDropdown] = useState(false);

    // Simulated Loading Effect
    React.useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    const filteredDepts = allDepartments.filter(dept => {
        const matchesSearch = dept.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            dept.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'all' ||
            departmentCategoryMap[dept.name] === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    if (isLoading) return <DepartmentsSkeleton />;

    return (
        <div className="min-h-screen font-sans pt-36 pb-20 bg-gray-50 relative">
            {/* Background Watermark - Fixed */}
            <div className="fixed top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
                <div className="w-[600px] h-[600px] opacity-[0.15]">
                    <img 
                        src="/gensan_seal_large.jpg" 
                        alt="Gensan Seal" 
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>

            {/* Header Section */}
            <div className="relative z-20 pt-24 pb-16 px-6">
                <div className="container mx-auto max-w-7xl text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0038A8] mb-6 drop-shadow-md font-serif uppercase tracking-tight">
                        Departments
                    </h1>
                     <div className="w-24 h-1.5 bg-gradient-to-r from-[#0038A8] to-yellow-500 mx-auto rounded-full mb-8"></div>
                    <p className="text-slate-900 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Explore the departments and offices of the City Government of General Santos.
                        Find services, contact information, and officials.
                    </p>
                </div>
            </div>

            {/* Sticky Search & Filter Container */}
            <div className="sticky top-[138px] md:top-[171px] z-40 pb-12 px-4 pointer-events-none">
                <div className="max-w-2xl mx-auto pointer-events-auto">
                    <div className="relative group bg-white/95 backdrop-blur-md rounded-xl shadow-lg shadow-black/20 border border-white/20 focus-within:ring-2 focus-within:ring-blue-400/50 focus-within:border-blue-400 transition-all flex items-center">
                        <Search className="absolute left-5 text-gray-400 pointer-events-none" size={20} />
                        <input
                            type="text"
                            placeholder="Search departments..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none min-w-0"
                        />
                        
                        <div className="h-8 w-px bg-gray-200 mx-2 shrink-0"></div>
                        
                        <div className="relative shrink-0 pr-2">
                            <button
                                onClick={() => setShowFilterDropdown(!showFilterDropdown)}
                                className="flex items-center gap-2 px-3 sm:px-4 py-2 hover:bg-blue-50 rounded-lg text-sm font-semibold text-gray-700 transition-all whitespace-nowrap"
                            >
                                <Filter size={16} className="text-blue-600" />
                                <span className="hidden sm:inline">{filterCategories.find(c => c.id === selectedCategory)?.label}</span>
                                <ChevronDown size={16} className={`text-blue-600 transition-transform ${showFilterDropdown ? 'rotate-180' : ''}`} />
                            </button>

                            {/* Dropdown Menu */}
                            {showFilterDropdown && (
                                <div className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-xl shadow-black/15 border border-gray-100 py-2 min-w-[200px] z-50 animate-fade-in-up">
                                    {filterCategories.map((category) => (
                                        <button
                                            key={category.id}
                                            onClick={() => {
                                                setSelectedCategory(category.id);
                                                setShowFilterDropdown(false);
                                            }}
                                            className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors ${selectedCategory === category.id
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

            <div className="container mx-auto px-6 max-w-7xl relative z-10 mb-20">
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


                            {/* Sub-offices list with enhanced styling */}
                            <div className="space-y-2 pl-2">
                                {(showAllDivisions ? mayorsOfficeDivisions : mayorsOfficeDivisions.slice(0, 5)).map((div, i) => (
                                    <div
                                        key={i}
                                        className="group/item flex items-center gap-3 text-sm text-gray-700 hover:text-blue-700 cursor-pointer transition-all duration-200 py-2.5 px-3 rounded-lg hover:bg-blue-50/80 hover:pl-4"
                                    >
                                        <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-md flex items-center justify-center shrink-0 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all">
                                            <Building2 size={14} />
                                        </div>
                                        <span className="font-medium group-hover/item:font-semibold transition-all">{div}</span>
                                        <ChevronRight size={14} className="ml-auto text-blue-400 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                                    </div>
                                ))}
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setShowAllDivisions(!showAllDivisions);
                                    }}
                                    className="text-blue-700 text-sm font-bold hover:text-blue-800 cursor-pointer pl-3 mt-3 bg-transparent border-none uppercase tracking-wide flex items-center gap-2 hover:gap-3 transition-all"
                                >
                                    {showAllDivisions
                                        ? <><ChevronRight size={16} className="rotate-90" /> Show Less</>
                                        : <><ChevronRight size={16} /> {mayorsOfficeDivisions.length - 5} More Divisions</>
                                    }
                                </button>
                            </div>


                            <button
                                onClick={() => setSelectedDept(getDepartmentData("City Mayor's Office"))}
                                className="mt-8 flex items-center gap-2 text-blue-700 font-bold uppercase tracking-wide text-sm group-hover:gap-3 transition-all hover:text-blue-800"
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
                            <div className="inline-block p-4 bg-blue-50 rounded-full mb-4 text-blue-400 border border-blue-100">
                                <Search size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">No departments found</h3>
                            <p className="text-gray-600">Try adjusting your search terms.</p>
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