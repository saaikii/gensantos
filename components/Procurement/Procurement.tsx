import React from 'react';
import ProcurementNavbar from './ProcurementNavbar';
import Footer from '../Layout/Footer';

interface ProcurementProps {
    onNavigate: (page: 'home' | 'tourism' | 'departments' | 'gad-database' | 'procurement' | 'citizens-charter' | 'cpmo-home') => void;
}

const Procurement: React.FC<ProcurementProps> = ({ onNavigate }) => {
    return (
        <div className="min-h-screen bg-white font-sans">
            <ProcurementNavbar onNavigate={onNavigate} currentPage="procurement" />
            <div className="h-[135px] md:h-[135px]"></div>

            {/* Empty Content - Coming Soon */}
            <div className="container mx-auto px-4 md:px-6 py-24 min-h-[calc(100vh-200px)] flex items-center justify-center">
                <div className="text-center max-w-2xl">
                    <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-8">
                        <svg className="w-12 h-12 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
                        Procurement Portal
                    </h1>
                    <p className="text-xl text-slate-600 mb-8">
                        Content coming soon
                    </p>
                    <div className="inline-block px-6 py-3 bg-slate-100 text-slate-600 rounded-lg text-sm font-medium">
                        This page is currently under development
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Procurement;
