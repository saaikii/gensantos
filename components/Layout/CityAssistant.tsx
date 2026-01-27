import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, Sparkles } from 'lucide-react';
import { sendMessageToGemini } from '../../services/geminiService';
import { ChatMessage } from '../../types';

const CityAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: 'Maayong adlaw! I am your GenSan Virtual Assistant. How can I help you explore the Tuna Capital today?'
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input.trim()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Prepare history for API
    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    try {
      const responseText = await sendMessageToGemini(userMessage.text, history);
      
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      // Fallback handled in service, but just in case
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: 'model',
        text: "I apologize, but I'm having trouble connecting to the city servers right now."
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-[100] transition-all duration-500 shadow-2xl flex items-center justify-center group ${
          isOpen 
            ? 'w-14 h-14 bg-white text-gray-800 hover:bg-gray-100 rounded-full hover:scale-110 active:scale-95' 
            : 'px-6 py-4 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white rounded-full hover:scale-105 hover:-translate-y-1'
        }`}
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <div className="flex items-center gap-3">
            <div className="relative">
              <MessageSquare size={24} className="animate-pulse" />
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
              </span>
            </div>
            <span className="font-bold text-base tracking-wide whitespace-nowrap">Ask GenSan Assistant</span>
          </div>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 md:right-8 z-[100] w-[90vw] md:w-[400px] bg-white rounded-3xl shadow-2xl border border-white/50 flex flex-col overflow-hidden animate-fade-in-up origin-bottom-right font-sans ring-1 ring-black/5" style={{ height: '600px', maxHeight: '80vh' }}>
          
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 p-5 text-white flex items-center justify-between shadow-lg relative overflow-hidden shrink-0">
            <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
              <Sparkles size={100} />
            </div>
            
            <div className="flex items-center gap-4 relative z-10">
              <div className="relative">
                <div className="bg-white/20 backdrop-blur-sm p-2.5 rounded-2xl shadow-inner border border-white/10">
                  <Sparkles size={22} className="text-yellow-300" />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-green-500 w-3.5 h-3.5 rounded-full border-2 border-blue-600"></div>
              </div>
              <div>
                <h3 className="font-bold text-lg tracking-tight leading-none mb-1">GenSan Assistant</h3>
                <div className="flex items-center gap-1.5 opacity-90">
                  <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse"></span>
                  <p className="text-xs font-medium text-blue-50">Powered by Gemini AI</p>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="relative z-20 bg-white/10 hover:bg-white/20 p-2 rounded-xl transition-all duration-300 hover:rotate-90 backdrop-blur-md"
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-5 bg-slate-50 space-y-5 scroll-smooth">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'} gap-3 items-end group`}>
                  {/* Avatar for bot */}
                  {msg.role === 'model' && (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex-shrink-0 flex items-center justify-center text-white shadow-sm text-xs font-bold">
                      G
                    </div>
                  )}

                  <div
                    className={`p-4 rounded-2xl text-[15px] leading-relaxed shadow-sm transition-all duration-200 ${
                      msg.role === 'user'
                        ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-br-none shadow-blue-200/50 hover:shadow-md'
                        : 'bg-white border border-gray-100 text-gray-700 rounded-bl-none shadow-gray-200/50 hover:shadow-md'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start w-full">
                <div className="flex items-end gap-3">
                   <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex-shrink-0 flex items-center justify-center text-white shadow-sm text-xs font-bold">
                      G
                   </div>
                   <div className="bg-white border border-gray-100 px-5 py-4 rounded-2xl rounded-bl-none shadow-sm flex items-center gap-2">
                    <div className="flex space-x-1.5">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                      <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-100/80 backdrop-blur-xl">
            <div className="flex items-center gap-2 bg-gray-50/80 rounded-2xl px-2 py-2 border border-gray-200 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10 transition-all duration-300 shadow-inner">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 bg-transparent border-none outline-none text-sm text-gray-700 placeholder-gray-400 px-3 h-10"
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className={`p-2.5 rounded-xl transition-all duration-300 ${
                  !input.trim() || isLoading 
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                    : 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 hover:bg-blue-700 hover:scale-105 active:scale-95'
                }`}
              >
                {isLoading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} className="ml-0.5" />}
              </button>
            </div>
            <div className="text-center mt-2">
               <p className="text-[10px] text-gray-400 font-medium">✨ AI can be inaccurate. Double-check important info.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CityAssistant;