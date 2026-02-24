import React, { useEffect } from 'react';
import { ArrowLeft, CreditCard, Building, FileText, AlertCircle, CheckCircle2, Monitor, MapPin } from 'lucide-react';
import ScrollReveal from '../Shared/ScrollReveal';

interface Props {
  onBack: () => void;
}

const RealPropertyTaxPage: React.FC<Props> = ({ onBack }) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans pt-32 pb-24">
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

      {/* Hero Header Section */}
      <div className="bg-gradient-to-r from-blue-900/85 to-blue-800/85 text-white relative overflow-hidden w-full z-10 py-12 backdrop-blur-sm">
          <div className="absolute inset-0 opacity-10 pattern-grid-lg"></div>
          <div className="container mx-auto px-6 relative z-10">
              <button 
                onClick={onBack}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-full transition-all mb-8 group backdrop-blur-sm border border-white/10 shadow-lg"
              >
                 <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                 <span className="font-medium text-sm tracking-wide">Back to Home</span>
              </button>

              <ScrollReveal>
                <div className="max-w-4xl">
                  <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight text-white drop-shadow-md">
                    How to Pay Your <span className="text-yellow-400">Real Property Tax</span>
                  </h1>
                  <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
                    A comprehensive guide for property owners on settling real property taxes securely and properly in General Santos City.
                  </p>
                </div>
              </ScrollReveal>
          </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 mt-12">
        
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Current Taxpayers */}
            <div className="lg:col-span-8 space-y-12">
               
               <ScrollReveal delay={100}>
                  <div className="bg-white/85 backdrop-blur-sm rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-blue-50 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-bl-[100%] -mr-16 -mt-16 pointer-events-none"></div>
                      
                      <div className="relative z-10">
                          <h2 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-4">
                              <span className="p-3 bg-blue-100 text-blue-700 rounded-2xl">
                                  <CheckCircle2 size={24} />
                              </span>
                              For Current Taxpayers
                          </h2>

                          <div className="space-y-10">
                              {/* Option 1 */}
                              <div className="group border-l-4 border-blue-200 pl-6 hover:border-blue-600 transition-colors">
                                  <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                                      Option 1: Online Payment
                                      <span className="bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wide font-bold">Recommended</span>
                                  </h3>
                                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-100 hover:shadow-md transition-shadow">
                                      <div className="flex items-start gap-4">
                                          <div className="p-3 bg-white rounded-xl shadow-sm text-blue-600">
                                              <Monitor size={24} />
                                          </div>
                                          <div>
                                              <p className="text-slate-700 leading-relaxed font-medium mb-2">Register or Log-in to E-Services</p>
                                              <p className="text-sm text-slate-500">Access the official portal to view your assessment and pay conveniently via online channels.</p>
                                          </div>
                                      </div>
                                  </div>
                              </div>

                              {/* Option 2 */}
                              <div className="group border-l-4 border-yellow-200 pl-6 hover:border-yellow-500 transition-colors">
                                  <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                                      Option 2: City Hall or Payment Centers
                                  </h3>
                                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-100 space-y-6">
                                      
                                      {/* Requirements */}
                                      <div>
                                          <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                                            <FileText size={14} /> Requirements
                                          </h4>
                                          <div className="bg-white/80 p-4 rounded-xl border border-slate-200 inline-block font-semibold text-slate-700">
                                            Previous Year Official Receipt
                                          </div>
                                      </div>

                                      {/* Steps */}
                                      <div>
                                          <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                                            <MapPin size={14} /> Steps to Follow
                                          </h4>
                                          <div className="space-y-4">
                                              <div className="flex gap-4">
                                                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm shadow-lg shadow-blue-600/20">1</div>
                                                  <p className="text-slate-700 text-sm leading-relaxed pt-1">Go to the <strong className="text-blue-900">Assessment Clerk</strong> and present your previous year’s official receipt to get your current assessment.</p>
                                              </div>
                                              <div className="w-0.5 h-6 bg-slate-200 ml-4"></div>
                                              <div className="flex gap-4">
                                                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500 text-white flex items-center justify-center font-bold text-sm shadow-lg shadow-yellow-500/20">2</div>
                                                  <p className="text-slate-700 text-sm leading-relaxed pt-1">Proceed to the <strong className="text-blue-900">Payment Window</strong> to settle your tax dues.</p>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
               </ScrollReveal>

            </div>

            {/* Right Column: Delinquent & Info */}
            <div className="lg:col-span-4 space-y-8">
                
                {/* Delinquent Taxpayers Card */}
                <ScrollReveal delay={200}>
                  <div className="bg-red-50 rounded-[2rem] p-8 shadow-lg border border-red-100 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-red-100/50 rounded-bl-[100%] -mr-8 -mt-8 pointer-events-none"></div>
                      
                      <div className="relative z-10">
                          <h2 className="text-lg font-black text-red-800 mb-6 flex items-center gap-3">
                              <AlertCircle size={24} className="text-red-600" />
                              For Delinquent Taxpayers
                          </h2>
                          
                          <p className="text-red-900/80 mb-6 text-sm leading-relaxed">
                            If you have missed payments or have overdue taxes, typical payment channels may not allow you to proceed directly.
                          </p>

                          <div className="bg-white/60 rounded-xl p-5 border border-red-100">
                             <h4 className="font-bold text-red-900 text-sm mb-2">Please Proceed To:</h4>
                             <p className="text-red-700 font-semibold flex items-start gap-2">
                                <Building size={18} className="shrink-0 mt-0.5" />
                                Delinquent Taxpayer Section <br/> of the City Hall
                             </p>
                          </div>
                      </div>
                  </div>
                </ScrollReveal>

                {/* Help / Contact Info (Placeholder based on context) */}
                <ScrollReveal delay={300}>
                  <div className="bg-blue-900 rounded-[2rem] p-8 shadow-xl text-white relative overflow-hidden">
                      <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-800 rounded-tl-[100%] -mr-10 -mb-10 pointer-events-none opacity-50"></div>
                      
                      <div className="relative z-10">
                          <h3 className="font-bold text-lg mb-4">Need Help?</h3>
                          <p className="text-blue-200 text-sm mb-6 leading-relaxed">
                            For inquiries regarding your tax assessment or payment status, please visit the City Treasurer's Office.
                          </p>
                          <button className="w-full py-3 bg-white text-blue-900 rounded-xl font-bold text-sm hover:bg-blue-50 transition-colors shadow-lg">
                             Contact Treasurer's Office
                          </button>
                      </div>
                  </div>
                </ScrollReveal>

            </div>

        </div>

      </div>
    </div>
  );
};

export default RealPropertyTaxPage;
