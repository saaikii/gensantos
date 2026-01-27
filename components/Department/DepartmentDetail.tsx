
import React from 'react';
import {
    ArrowLeft, User, Users, MapPin, Phone, Mail, Clock, Building2,
    CheckCircle2, Globe, FileText, Share2, Printer, Activity
} from 'lucide-react';
import { DepartmentDetails } from '../../types';

interface DepartmentDetailProps {
    department: DepartmentDetails;
    onBack: () => void;
}

const DepartmentDetail: React.FC<DepartmentDetailProps> = ({ department, onBack }) => {
    // Scroll to top on mount
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-slate-50 font-sans pt-40 pb-20 animate-fade-in">
            {/* Header Section with subtle pattern */}
            <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pattern-grid-lg"></div>
                <div className="container mx-auto px-6 py-12 relative z-10">
                    <button
                        onClick={onBack}
                        className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-full transition-all mb-8 group backdrop-blur-sm border border-white/10 shadow-lg"
                    >
                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="font-medium text-sm tracking-wide">Back to Departments</span>
                    </button>

                    <div className="max-w-4xl">

                        <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                            {department.name}
                        </h1>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 -mt-8 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content Info Card */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Department Overview Card */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                <div className="shrink-0">
                                    <img
                                        src="/DepartmentPhotos/YADOlogo.jpg"
                                        alt="YADO Logo"
                                        className="h-32 w-32 md:h-40 md:w-40 object-contain rounded-2xl"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                        <FileText className="text-blue-600" />
                                        About the Office
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed text-lg">
                                        {department.description}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Organizational Structure */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <Users className="text-blue-600" size={24} />
                                Organizational Structure
                            </h3>
                            <div className="rounded-xl overflow-hidden border border-gray-200 bg-gray-50 flex justify-center p-4">
                                <img
                                    src="/DepartmentPhotos/OrgChart.png"
                                    alt="Organizational Structure Chart"
                                    className="max-w-full h-auto object-contain hover:scale-[1.02] transition-transform duration-500 shadow-sm"
                                />
                            </div>
                        </div>

                        {/* Activities section */}
                        {department.activities && department.activities.length > 0 && (
                            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                    <Activity className="text-blue-600" size={24} />
                                    Activities & Initiatives
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {department.activities.map((activity, idx) => (
                                        <div key={idx} className="group overflow-hidden rounded-2xl border border-teal-100 hover:border-teal-300 hover:shadow-2xl hover:shadow-teal-900/10 transition-all duration-500 bg-white">
                                            <div className="aspect-video overflow-hidden bg-teal-50 relative">
                                                <img
                                                    src={activity.image}
                                                    alt={activity.title}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/20 to-transparent"></div>
                                            </div>
                                            <div className="p-6 bg-gradient-to-b from-white to-teal-50/30">
                                                <h4 className="font-black text-teal-900 mb-2 group-hover:text-teal-700 transition-colors text-lg">
                                                    {activity.title}
                                                </h4>
                                                <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
                                                    {activity.description}
                                                </p>
                                                <div className="mt-4 flex items-center gap-2">
                                                    <div className="h-1 w-12 bg-orange-400 rounded-full group-hover:w-20 transition-all duration-500"></div>
                                                    <span className="text-[10px] font-bold text-orange-600 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Learn More</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {!department.activities && (
                            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                    <Activity className="text-blue-600" size={24} />
                                    Department Activities
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                                        <h4 className="font-bold text-gray-800 mb-2">Service Delivery</h4>
                                        <p className="text-gray-600">Continuous delivery of basic services and provision of adequate public facilities.</p>
                                    </div>
                                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                                        <h4 className="font-bold text-gray-800 mb-2">Strategy Implementation</h4>
                                        <p className="text-gray-600">Development of plans and strategies approved for city-wide implementation.</p>
                                    </div>
                                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                                        <h4 className="font-bold text-gray-800 mb-2">Technical Assistance</h4>
                                        <p className="text-gray-600">Providing expert support and guidance for city governance and policy-making.</p>
                                    </div>
                                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-center text-gray-400 italic">
                                        More activities coming soon...
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar Contact Info */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-40 space-y-4">
                            <div className="bg-white rounded-2xl shadow-lg p-5 border border-gray-100">
                                <h3 className="text-base font-bold text-gray-900 mb-4 pb-3 border-b border-gray-100">
                                    Contact Information
                                </h3>

                                <div className="space-y-4">
                                    <div className="group">
                                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1 block">
                                            Official Location
                                        </label>
                                        <div className="flex items-start gap-2.5 text-gray-700">
                                            <div className="w-7 h-7 rounded-lg bg-gray-50 flex items-center justify-center shrink-0 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                                <MapPin size={16} />
                                            </div>
                                            <span className="text-sm font-medium pt-0.5 leading-snug">{department.location}</span>
                                        </div>
                                    </div>

                                    <div className="group">
                                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1 block">
                                            Phone Number
                                        </label>
                                        <div className="flex items-start gap-2.5 text-gray-700">
                                            <div className="w-7 h-7 rounded-lg bg-gray-50 flex items-center justify-center shrink-0 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                                <Phone size={16} />
                                            </div>
                                            <span className="text-sm font-medium pt-0.5">{department.contact}</span>
                                        </div>
                                    </div>

                                    <div className="group">
                                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1 block">
                                            Email Address
                                        </label>
                                        <div className="flex items-start gap-2.5 text-gray-700">
                                            <div className="w-7 h-7 rounded-lg bg-gray-50 flex items-center justify-center shrink-0 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                                <Mail size={16} />
                                            </div>
                                            <a href={`mailto:${department.email}`} className="text-sm font-medium pt-0.5 text-blue-600 hover:underline break-all">
                                                {department.email}
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 pt-5 border-t border-gray-100 flex gap-2">
                                    <button className="flex-1 py-2 px-3 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-lg text-xs font-semibold transition-colors flex items-center justify-center gap-1.5">
                                        <Share2 size={14} /> Share
                                    </button>
                                    <button className="flex-1 py-2 px-3 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-lg text-xs font-semibold transition-colors flex items-center justify-center gap-1.5">
                                        <Printer size={14} /> Print
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DepartmentDetail;
