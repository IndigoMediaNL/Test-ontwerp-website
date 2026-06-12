/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

const Assistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Initialize comforting Dutch greeting
  useEffect(() => {
    setMessages([
      { 
        role: 'model', 
        text: 'Lieve ouder, welkom bij De Babyconsultant. 💫 Ik ben Claudia\'s AI assistent. Zit je met vragen over slaapritmes, voeding & darmkrampjes, baby-signalen, ontwikkeling of wil je advies over welke begeleiding het beste bij jullie past? Stel je vraag gerust!', 
        timestamp: Date.now() 
      }
    ]);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async (customText?: string) => {
    const textToSend = customText || inputValue;
    if (!textToSend.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: textToSend, timestamp: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    if (!customText) setInputValue('');
    setIsThinking(true);

    try {
      const history = messages.map(m => ({ role: m.role, text: m.text }));
      const responseText = await sendMessageToGemini(history, userMsg.text);
      
      const aiMsg: ChatMessage = { role: 'model', text: responseText, timestamp: Date.now() };
      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
       // handled
    } finally {
      setIsThinking(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleQuickQuestion = (question: string) => {
    handleSend(question);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {isOpen && (
        <div className="bg-[#FAF8F5] rounded-tl-[30px] rounded-tr-[30px] rounded-bl-[30px] rounded-br-[10px] shadow-2xl w-[90vw] sm:w-[380px] h-[580px] mb-4 flex flex-col overflow-hidden border border-[#EBE7E1] animate-slide-up-fade text-left">
          {/* Header Bar */}
          <div className="bg-[#EBE7E1] p-5 border-b border-[#DFD9CE] flex justify-between items-center">
            <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 bg-[#8D9B87] rounded-full animate-pulse"></div>
                <div className="text-left">
                  <span className="font-serif italic text-[#2F2B27] text-md font-semibold block leading-none">Babyconsultant AI</span>
                  <span className="text-[9px] uppercase tracking-wider text-[#798873] font-bold mt-1 block">De Babyconsultant</span>
                </div>
            </div>
            <button 
              id="ai-assistant-close"
              onClick={() => setIsOpen(false)} 
              className="text-[#798873] hover:text-[#C08169] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Chat Messages Log */}
          <div className="flex-1 overflow-y-auto p-5 space-y-5 bg-[#FAF8F5]" ref={scrollRef}>
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] px-5 py-3.5 text-xs rounded-2xl leading-relaxed shadow-2xs ${
                    msg.role === 'user' 
                      ? 'bg-[#C08169] text-white rounded-br-xs font-medium' 
                      : 'bg-white border border-[#EBE7E1] text-[#5D5A53] rounded-bl-xs'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            
            {/* Thinking / Typing animation */}
            {isThinking && (
               <div className="flex justify-start">
                 <div className="bg-white border border-[#EBE7E1] px-4 py-3 rounded-2xl rounded-bl-xs flex gap-1 items-center shadow-2xs">
                   <div className="w-1.5 h-1.5 bg-[#798873] rounded-full animate-bounce"></div>
                   <div className="w-1.5 h-1.5 bg-[#798873] rounded-full animate-bounce delay-75"></div>
                   <div className="w-1.5 h-1.5 bg-[#798873] rounded-full animate-bounce delay-150"></div>
                 </div>
               </div>
            )}
          </div>

          {/* Quick suggestions menu, visible when first starting or no user input yet */}
          {messages.length === 1 && !isThinking && (
            <div className="px-5 pb-3 pt-1 bg-[#FAF8F5] flex flex-col gap-2">
              <span className="text-[9px] uppercase tracking-wider text-[#798873] font-extrabold block text-left">Veelgestelde vragen:</span>
              <div className="flex flex-wrap gap-1.5">
                <button 
                  id="quick-q-1"
                  onClick={() => handleQuickQuestion('Hoelang mag een baby van 4 maanden wakker zijn?')}
                  className="text-[10px] bg-white hover:bg-[#8D9B87]/5 text-[#5D5A53] hover:text-[#C08169] border border-[#EBE7E1] py-1.5 px-3 rounded-full transition-all text-left"
                >
                  💤 Wakkertijd 4m?
                </button>
                <button 
                  id="quick-q-2"
                  onClick={() => handleQuickQuestion('Wat houdt het Droomtraject Intensief in?')}
                  className="text-[10px] bg-white hover:bg-[#8D9B87]/5 text-[#5D5A53] hover:text-[#C08169] border border-[#EBE7E1] py-1.5 px-3 rounded-full transition-all text-left"
                >
                  🗓️ Droomtraject?
                </button>
                <button 
                  id="quick-q-3"
                  onClick={() => handleQuickQuestion('Wat te doen bij hazenslaapjes van 30 minuten?')}
                  className="text-[10px] bg-white hover:bg-[#8D9B87]/5 text-[#5D5A53] hover:text-[#C08169] border border-[#EBE7E1] py-1.5 px-3 rounded-full transition-all text-left"
                >
                  🐦 Hazenslaapjes tip?
                </button>
              </div>
            </div>
          )}

          {/* User Input controls */}
          <div className="p-5 bg-[#FAF8F5] border-t border-[#EBE7E1]">
            <div className="flex gap-2 relative">
              <input 
                id="ai-assistant-input"
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Stel je vraag hier..." 
                className="flex-1 bg-white border border-[#DFD9CE] focus:border-[#C08169] px-4 py-3 text-xs rounded-full outline-none transition-colors placeholder-[#798873]/60 text-[#2F2B27]"
              />
              <button 
                id="ai-assistant-send"
                onClick={() => handleSend()}
                disabled={!inputValue.trim() || isThinking}
                className="bg-[#8D9B87] text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#798873] transition-colors disabled:opacity-50 shrink-0"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating launcher trigger */}
      <button 
        id="ai-toggle-floating-btn"
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#C08169] hover:bg-[#b0735b] text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg hover:scale-105 transition-all duration-300 z-50"
        aria-label="Chat met slaapcoach"
      >
        {isOpen ? (
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
             </svg>
        ) : (
            <span className="font-serif italic text-lg leading-none">Ai</span>
        )}
      </button>
    </div>
  );
};

export default Assistant;
