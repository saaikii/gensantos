import React, { useState } from 'react';
import { FileText, ArrowRight, Download, Eye, Clock, ShieldCheck, Filter, Gavel, Scale, Search } from 'lucide-react';
import Footer from '../Layout/Footer';

interface TransparencyPageProps {
  onNavigate: (page: any) => void;
}

const TransparencyPage: React.FC<TransparencyPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'bids' | 'memoranda'>('all');

  // Extended Mock Data for Full Page
  const documents = [
    {
      id: 1,
      type: 'bids',
      title: 'ITB No. 2024-05-12',
      subtitle: 'Procurement of Medical Equipment for Dr. Jorge P. Royeca Hospital',
      date: 'May 12, 2024',
      status: 'Open for Bidding',
      statusColor: 'bg-emerald-100 text-emerald-700 border-emerald-200',
      fileSize: '2.4 MB',
      format: 'PDF',
      previewColor: 'bg-blue-50',
    },
    {
      id: 3,
      type: 'memoranda',
      title: 'Memorandum Circular No. 2024-15',
      subtitle: 'Guidelines on the Grant of Performance-Based Bonus (PBB) for FY 2024',
      date: 'May 08, 2024',
      status: 'For Compliance',
      statusColor: 'bg-purple-100 text-purple-700 border-purple-200',
      fileSize: '3.5 MB',
      format: 'PDF',
      previewColor: 'bg-purple-50',
    },
    {
      id: 4,
      type: 'bids',
      title: 'Notice of Award',
      subtitle: 'Construction of Multi-Purpose Building at Brgy. Calumpang',
      date: 'May 05, 2024',
      status: 'Awarded',
      statusColor: 'bg-teal-100 text-teal-700 border-teal-200',
      fileSize: '850 KB',
      format: 'PDF',
      previewColor: 'bg-teal-50',
    },
    {
      id: 5,
      type: 'bids',
      title: 'ITB No. 2024-05-10',
      subtitle: 'Supply and Delivery of IT Equipment for DepEd Gensan',
      date: 'May 04, 2024',
      status: 'Closed',
      statusColor: 'bg-gray-100 text-gray-700 border-gray-200',
      fileSize: '1.8 MB',
      format: 'PDF',
      previewColor: 'bg-gray-50',
    }
  ];

  const filteredDocs = activeTab === 'all' ? documents : documents.filter(d => d.type === activeTab);

  return (
    <div className="min-h-screen bg-slate-50 font-sans pt-20">
      
      {/* Background Watermark - Fixed and Enlarged (Simulated) */}
      <div className="fixed top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
          <div className="w-[600px] h-[600px] opacity-[0.15]">
               {/* Using the LGU Logo as watermark since we might not have the seal image handy, or use same as CC if available */}
              <img 
                  src="/gensan_seal_large.jpg" 
                  alt="Gensan Seal" 
                  className="w-full h-full object-contain"
              />
          </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center pt-24 pb-12 px-6">
           <span className="inline-block py-1 px-4 rounded-full bg-blue-50 text-[#0038A8] border border-blue-200 text-xs font-bold uppercase tracking-widest mb-6">
                Official Documents & Issuances
           </span>
           <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0038A8] mb-6 uppercase tracking-tight drop-shadow-sm font-serif">
             Transparency Hub
           </h1>
           <div className="w-24 h-1.5 bg-gradient-to-r from-[#0038A8] to-yellow-500 mx-auto rounded-full mb-8"></div>
           <p className="text-slate-900 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
             Complete archive of Bids, Awards, and City Memoranda.
             Promoting open governance and accountability.
           </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        
        {/* Controls Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 sticky top-20 z-20 bg-slate-50/95 backdrop-blur-sm py-4 border-b border-slate-200">
             {/* Tab Navigation */}
            <div className="flex overflow-x-auto pb-0 gap-2 no-scrollbar w-full md:w-auto">
                {['all', 'bids', 'memoranda'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab as any)}
                        className={`px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wide transition-all whitespace-nowrap ${
                        activeTab === tab 
                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' 
                            : 'bg-white text-slate-500 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                        }`}
                    >
                    {tab === 'all' ? 'All Docs' : tab === 'bids' ? 'Bids & Awards' : 'Memoranda'}
                    </button>
                ))}
            </div>

            {/* Search - Reintroduced for the full page as it's useful here */}
            <div className="relative group w-full md:w-auto">
               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={18} className="text-slate-400 group-focus-within:text-blue-500 transition-colors" />
               </div>
               <input 
                  type="text" 
                  placeholder="Search archive..." 
                  className="pl-10 pr-4 py-2.5 rounded-full border border-slate-200 bg-white shadow-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none w-full md:w-80 transition-all"
               />
            </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 min-h-[500px]">
          {filteredDocs.map((doc) => (
            <div key={doc.id} className="group relative bg-white rounded-2xl p-2 shadow-sm border border-slate-200 hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
              
              {/* Preview */}
              <div className={`relative h-56 rounded-xl ${doc.previewColor} overflow-hidden border border-slate-100 group-hover:border-blue-100 transition-colors`}>
                 <div className="absolute inset-4 space-y-2 opacity-20">
                    <div className="w-1/3 h-2 bg-slate-900 rounded-full mb-4"></div>
                    <div className="w-full h-1.5 bg-slate-400 rounded-full"></div>
                    <div className="w-5/6 h-1.5 bg-slate-400 rounded-full"></div>
                 </div>
                 <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                    {doc.type === 'bids' ? <Gavel size={64} /> : doc.type === 'orders' ? <Scale size={64} /> : <FileText size={64} />}
                 </div>
                 <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/5 transition-colors flex items-center justify-center">
                    <button className="bg-white text-slate-900 px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-wide opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all shadow-lg flex items-center gap-2">
                       <Download size={14} /> Download
                    </button>
                 </div>
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-grow">
                 <div className="mb-3">
                    <span className={`inline-block px-2.5 py-1 rounded-md border text-[10px] font-bold uppercase tracking-wider ${doc.statusColor}`}>
                       {doc.status}
                    </span>
                 </div>
                 <h3 className="text-lg font-bold text-slate-900 leading-tight mb-2 group-hover:text-blue-700 transition-colors line-clamp-2">
                    {doc.title}
                 </h3>
                 <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">
                    {doc.subtitle}
                 </p>
                 <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between text-xs text-slate-400 font-medium">
                    <div className="flex items-center gap-1.5">
                       <Clock size={12} /> {doc.date}
                    </div>
                    <div>{doc.format} • {doc.fileSize}</div>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default TransparencyPage;
