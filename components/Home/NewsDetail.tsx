import React, { useState } from 'react';
import { ArrowLeft, User, Mail, Globe, MessageSquare, Send, CalendarDays, Megaphone, Newspaper, PartyPopper } from 'lucide-react';
import { NewsItem } from '../../types';

interface NewsDetailProps {
  newsItem: NewsItem;
  onBack: () => void;
}

const NewsDetail: React.FC<NewsDetailProps> = ({ newsItem, onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    comment: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const getCategoryColor = (category: string) => {
    switch(category) {
        case 'Announcement': return 'text-green-600 bg-green-50 border-green-200';
        case 'News': return 'text-blue-600 bg-blue-50 border-blue-200';
        case 'Activities': return 'text-red-600 bg-red-50 border-red-200';
        default: return 'text-blue-600 bg-blue-50 border-blue-200';
    }
  };

  const getIcon = (category: string) => {
    switch(category) {
        case 'Announcement': return <Megaphone size={16} />;
        case 'News': return <Newspaper size={16} />;
        case 'Activities': return <PartyPopper size={16} />;
        default: return <Newspaper size={16} />;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', website: '', comment: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <div className="pt-28 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-gray-500 hover:text-blue-600 font-medium mb-8 transition-colors"
        >
          <div className="w-8 h-8 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center group-hover:border-blue-200 group-hover:bg-blue-50 transition-all">
            <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
          </div>
          Back to News
        </button>

        {/* Article Header */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-12 animate-fade-in-up">
          <div className="h-[400px] relative">
            <img 
              src={newsItem.image} 
              alt={newsItem.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-4 ${getCategoryColor(newsItem.category)} bg-white/95 border-none shadow-lg`}>
                {getIcon(newsItem.category)}
                {newsItem.category}
              </div>
              
              <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4 drop-shadow-lg">
                {newsItem.title}
              </h1>
              
              <div className="flex items-center gap-2 text-gray-200 font-medium">
                <CalendarDays size={18} />
                <span>{newsItem.date}</span>
              </div>
            </div>
          </div>

          {/* Article Body */}
          <div className="p-8 md:p-12">
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p className="text-xl font-medium text-gray-800 mb-8 border-l-4 border-blue-500 pl-6 italic">
                {newsItem.summary}
              </p>
              
              {newsItem.content ? (
                <div dangerouslySetInnerHTML={{ __html: newsItem.content.replace(/\n/g, '<br/>') }} />
              ) : (
                <>
                  <p>
                    General Santos City — {newsItem.summary}
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                  <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                  </p>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Feedback / Comment Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          <div className="flex items-center gap-3 mb-8">
            <MessageSquare className="text-blue-600" size={28} />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Leave a Reply</h2>
          </div>
          
          <p className="text-gray-500 mb-8">
            Your email address will not be published. Required fields are marked *
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="space-y-2">
                 <label htmlFor="name" className="text-sm font-bold text-gray-700 uppercase tracking-wide">Name *</label>
                 <div className="relative">
                   <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                   <input 
                     type="text" 
                     id="name"
                     required
                     value={formData.name}
                     onChange={(e) => setFormData({...formData, name: e.target.value})}
                     className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                     placeholder="John Doe"
                   />
                 </div>
               </div>

               <div className="space-y-2">
                 <label htmlFor="email" className="text-sm font-bold text-gray-700 uppercase tracking-wide">Email *</label>
                 <div className="relative">
                   <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                   <input 
                     type="email" 
                     id="email"
                     required
                     value={formData.email}
                     onChange={(e) => setFormData({...formData, email: e.target.value})}
                     className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                     placeholder="john@example.com"
                   />
                 </div>
               </div>
            </div>

            <div className="space-y-2">
               <label htmlFor="website" className="text-sm font-bold text-gray-700 uppercase tracking-wide">Website (Optional)</label>
               <div className="relative">
                 <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                 <input 
                   type="url" 
                   id="website"
                   value={formData.website}
                   onChange={(e) => setFormData({...formData, website: e.target.value})}
                   className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                   placeholder="https://yourwebsite.com"
                 />
               </div>
            </div>

            <div className="space-y-2">
               <label htmlFor="comment" className="text-sm font-bold text-gray-700 uppercase tracking-wide">Comment *</label>
               <textarea 
                 id="comment"
                 required
                 rows={6}
                 value={formData.comment}
                 onChange={(e) => setFormData({...formData, comment: e.target.value})}
                 className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all outline-none resize-none"
                 placeholder="Write your feedback here..."
               />
            </div>

            <div className="pt-2">
               <button 
                 type="submit" 
                 disabled={isSubmitting || isSubmitted}
                 className={`
                   py-4 px-8 rounded-xl font-bold text-white shadow-lg transition-all flex items-center gap-2
                   ${isSubmitted 
                     ? 'bg-green-600 hover:bg-green-700 shadow-green-600/30 w-full justify-center' 
                     : 'bg-blue-600 hover:bg-blue-700 hover:-translate-y-1 shadow-blue-600/30'
                   }
                   ${isSubmitting ? 'opacity-70 cursor-wait' : ''}
                 `}
               >
                 {isSubmitted ? (
                    <>
                      Comment Posted Successfully!
                    </>
                 ) : (
                    <>
                      {isSubmitting ? 'Posting...' : 'Post Comment'} 
                      {!isSubmitting && <Send size={18} />}
                    </>
                 )}
               </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
