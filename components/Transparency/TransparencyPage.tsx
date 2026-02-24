import React, { useState } from 'react';
import { FileText, ArrowRight, Download, Eye, Clock, ShieldCheck, Filter, Gavel, Scale, Search } from 'lucide-react';
import Footer from '../Layout/Footer';
import TransparencySkeleton from './TransparencySkeleton';

interface TransparencyPageProps {
  onNavigate: (page: any) => void;
}

const TransparencyPage: React.FC<TransparencyPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'award' | 'invitation' | 'bulletin'>('all');
  const [isLoading, setIsLoading] = useState(true);

  // Simulated Loading Effect
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Extended Mock Data for Full Page
  const documents = [
    {
      id: 1,
      type: 'award',
      title: 'MALLENGKE NOA SEPTEMBER 4 2025 (Page 1)',
      subtitle: 'Notice of Award - September 4, 2025',
      date: 'September 4, 2025',
      status: 'Awarded',
      statusColor: 'bg-green-100 text-green-700 border-green-200',
      fileSize: 'IMAGE',
      format: 'JPG',
      previewColor: 'bg-blue-50',
      url: 'https://gensantos.gov.ph/wp-content/uploads/2025/10/MALLENGKE-NOA-SEPTEMBER-4-2025_page-0001.jpg'
    },
    {
      id: 2,
      type: 'award',
      title: 'MALLENGKE NOA SEPTEMBER 4 2025 (Page 2)',
      subtitle: 'Notice of Award - September 4, 2025',
      date: 'September 4, 2025',
      status: 'Awarded',
      statusColor: 'bg-green-100 text-green-700 border-green-200',
      fileSize: 'IMAGE',
      format: 'JPG',
      previewColor: 'bg-blue-50',
      url: 'https://gensantos.gov.ph/wp-content/uploads/2025/10/MALLENGKE-NOA-SEPTEMBER-4-2025_page-0002.jpg'
    },
    {
      id: 3,
      type: 'award',
      title: 'MALLENGKE NOA SEPTEMBER 4 2025 (Page 3)',
      subtitle: 'Notice of Award - September 4, 2025',
      date: 'September 4, 2025',
      status: 'Awarded',
      statusColor: 'bg-green-100 text-green-700 border-green-200',
      fileSize: 'IMAGE',
      format: 'JPG',
      previewColor: 'bg-blue-50',
      url: 'https://gensantos.gov.ph/wp-content/uploads/2025/10/MALLENGKE-NOA-SEPTEMBER-4-2025_page-0003-1024x1024.jpg'
    },
    {
      id: 4,
      type: 'bulletin',
      title: 'PBAC General Bulletin Livestreaming',
      subtitle: 'PBAC General Bulletin - August 14, 2025',
      date: 'August 14, 2025',
      status: 'Bulletin',
      statusColor: 'bg-blue-100 text-blue-700 border-blue-200',
      fileSize: 'IMAGE',
      format: 'JPG',
      previewColor: 'bg-blue-50',
      url: 'https://gensantos.gov.ph/wp-content/uploads/2025/08/PBAC.-General-Bulletin.-Livestreaming.-2025-08-14_page-0001.jpg'
    },
    {
      id: 5,
      type: 'invitation',
      title: 'INV-PREBID',
      subtitle: 'Invitation to Pre-Bid Conference',
      date: 'July 2025',
      status: 'Invitation',
      statusColor: 'bg-orange-100 text-orange-700 border-orange-200',
      fileSize: 'IMAGE',
      format: 'JPG',
      previewColor: 'bg-blue-50',
      url: 'https://gensantos.gov.ph/wp-content/uploads/2025/07/INV-PREBID_page-0001.jpg'
    }
  ];

  const filteredDocs = activeTab === 'all' ? documents : documents.filter(d => d.type === activeTab);

  if (isLoading) return <TransparencySkeleton />;

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
            Complete archive of Bids, Awards, and General Bulletins.
            Promoting open governance and accountability.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">

        {/* Controls Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 sticky top-20 z-20 bg-slate-50/95 backdrop-blur-sm py-4 border-b border-slate-200">
          {/* Tab Navigation */}
          <div className="flex overflow-x-auto pb-0 gap-2 no-scrollbar w-full md:w-auto">
            {['all', 'award', 'invitation', 'bulletin'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wide transition-all whitespace-nowrap ${activeTab === tab
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-white text-slate-500 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                  }`}
              >
                {tab === 'all' ? 'All Docs' : tab === 'award' ? 'Notice of Award' : tab === 'invitation' ? 'Invitations' : 'Bulletins'}
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
              <a
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`block relative h-56 rounded-xl ${doc.previewColor} overflow-hidden border border-slate-100 group-hover:border-blue-100 transition-colors cursor-pointer`}
              >
                <div className="absolute inset-4 space-y-2 opacity-20">
                  <div className="w-1/3 h-2 bg-slate-900 rounded-full mb-4"></div>
                  <div className="w-full h-1.5 bg-slate-400 rounded-full"></div>
                  <div className="w-5/6 h-1.5 bg-slate-400 rounded-full"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                  {doc.type === 'award' ? <Gavel size={64} /> : doc.type === 'bulletin' ? <FileText size={64} /> : <Scale size={64} />}
                </div>
                {/* Image Preview if available */}
                {doc.url && (doc.url.endsWith('.jpg') || doc.url.endsWith('.png')) && (
                  <img src={doc.url} alt={doc.title} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                )}
                <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors flex items-center justify-center">
                  <span className="bg-white text-slate-900 px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-wide opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all shadow-lg flex items-center gap-2">
                    <Eye size={14} /> View Document
                  </span>
                </div>
              </a>

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
