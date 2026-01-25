import React, { useState } from 'react';
import { FileText, ArrowRight, Download, Eye, Clock, ShieldCheck, Filter, Gavel, Scale } from 'lucide-react';

interface TransparencyBoardProps {
  onNavigate?: (page: any) => void;
}

const TransparencyBoard: React.FC<TransparencyBoardProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'bids' | 'memoranda'>('all');

  // Mock Data for Documents
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
  ];

  const filteredDocs = activeTab === 'all' ? documents : documents.filter(d => d.type === activeTab);

  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-20 w-72 h-72 bg-yellow-100/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-bold text-slate-600 uppercase tracking-widest mb-4">
              <ShieldCheck size={14} className="text-blue-600" />
              Transparency & Accountability
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4 font-serif">
              Bids, Awards & <span className="text-blue-600 italic">Issuances</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Access official city documents, bids and awards, and city memoranda directly. We believe in open and transparent governance.
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex overflow-x-auto pb-4 gap-2 mb-8 no-scrollbar">
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
               {tab === 'all' ? 'All Updates' : tab === 'bids' ? 'Bids & Awards' : 'Memoranda'}
             </button>
           ))}
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDocs.map((doc) => (
            <div key={doc.id} className="group relative bg-white rounded-2xl p-2 shadow-sm border border-slate-200 hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
              
              {/* "Paper" Preview Area */}
              <div className={`relative h-48 rounded-xl ${doc.previewColor} overflow-hidden border border-slate-100 group-hover:border-blue-100 transition-colors`}>
                 {/* Faux Text Pattern */}
                 <div className="absolute inset-4 space-y-2 opacity-20">
                    <div className="w-1/3 h-2 bg-slate-900 rounded-full mb-4"></div>
                    <div className="w-full h-1.5 bg-slate-400 rounded-full"></div>
                    <div className="w-5/6 h-1.5 bg-slate-400 rounded-full"></div>
                    <div className="w-4/5 h-1.5 bg-slate-400 rounded-full"></div>
                    <div className="w-full h-1.5 bg-slate-400 rounded-full mt-4"></div>
                    <div className="w-11/12 h-1.5 bg-slate-400 rounded-full"></div>
                 </div>
                 
                 {/* Center Icon/Watermark */}
                 <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                    {doc.type === 'bids' ? <Gavel size={64} /> : doc.type === 'orders' ? <Scale size={64} /> : <FileText size={64} />}
                 </div>

                 {/* Hover Overlay */}
                 <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/5 transition-colors flex items-center justify-center">
                    <button className="bg-white text-slate-900 px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-wide opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all shadow-lg flex items-center gap-2">
                       <Eye size={14} /> Preview
                    </button>
                 </div>
              </div>

              {/* Content Area */}
              <div className="p-4 flex flex-col flex-grow">
                 {/* Status Badge */}
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

                 {/* Footer Info */}
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

        {/* View All Button */}
        <div className="text-center mt-12">
            <button 
                onClick={() => onNavigate && onNavigate('transparency')}
                className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800 transition-colors text-sm uppercase tracking-widest border-b-2 border-transparent hover:border-blue-600 pb-1">
                View All Documents <ArrowRight size={16} />
            </button>
        </div>

      </div>
    </section>
  );
};

export default TransparencyBoard;
