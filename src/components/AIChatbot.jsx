'use client';

import { useState, useRef, useEffect } from 'react';
import { X, Send, Loader2, Sparkles, Zap, RotateCcw } from 'lucide-react';
import Link from 'next/link';

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: '👋 Welcome to Toolsverse AI!\n\nNot sure which AI tool to use?\nJust describe your problem and I\'ll suggest the best options.',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Quick suggestion buttons
  const quickSuggestions = [
    "Best free AI tools for design",
    "ChatGPT alternatives",
    "AI tools for video editing",
    "Tools for content writing"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleQuickSuggestion = (suggestion) => {
    handleSubmit(null, suggestion);
  };

  const handleSubmit = async (e, quickMessage = null) => {
    if (e) e.preventDefault();
    
    const userMessage = quickMessage || input.trim();
    if (!userMessage || isLoading) return;

    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: data.response,
          tools: data.tools,
          categories: data.categories,
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: '❌ Oops! Something went wrong. Please try again or [Browse All Tools](/browse-tools).',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setMessages([
      {
        role: 'assistant',
        content: '👋 Welcome to Toolsverse AI!\n\nNot sure which AI tool to use?\nJust describe your problem and I\'ll suggest the best options.',
      },
    ]);
    setInput('');
  };

  // Convert markdown links to Next.js Links
  const renderMessage = (content) => {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(content)) !== null) {
      if (match.index > lastIndex) {
        parts.push(content.substring(lastIndex, match.index));
      }
      parts.push(
        <Link
          key={match.index}
          href={match[2]}
          className="text-blue-500 hover:text-blue-700 underline font-semibold cursor-pointer transition-colors duration-200"
        >
          {match[1]}
        </Link>
      );
      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < content.length) {
      parts.push(content.substring(lastIndex));
    }

    return parts.length > 0 ? parts : content;
  };

  return (
    <>
      {/* Floating Chat Button */}
     {!isOpen && (
  <button
    onClick={() => setIsOpen(true)}
    className="fixed bottom-6 right-6 z-50 cursor-pointer"
    aria-label="Open ToolsVerse AI Assistant"
  >
    <div className="w-14 h-14 rounded-full bg-white border border-blue-200 shadow-[0_6px_18px_rgba(59,130,246,0.25)] hover:shadow-[0_10px_28px_rgba(59,130,246,0.35)] transition-shadow flex items-center justify-center">
      <Sparkles className="w-5 h-5 text-blue-600" />
    </div>
  </button>
)}


      {/* Professional Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[400px] h-[650px] bg-white rounded-3xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden">
          {/* Header with Reset & Close */}
          <div className="relative bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-5">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div>
            
            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 bg-white/15 backdrop-blur-md rounded-xl flex items-center justify-center shadow-lg">
                  <Sparkles className="w-6 h-6 text-white" />
                  {/* <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-0.5 -left-0.5 w-1 h-1 bg-white/80 rounded-full animate-pulse" style={{ animationDelay: '200ms' }}></div> */}
                </div>
                
                <div>
                  <h3 className="text-white font-bold text-xl">Toolsverse AI</h3>
                  <p className="text-blue-100 text-xs font-medium flex items-center gap-1">
                    <Zap className="w-3 h-3" />
                    Expert on 4000+ AI tools
                  </p>
                </div>
              </div>

              {/* Reset & Close Buttons */}
              <div className="flex items-center gap-1">
                <button
                  onClick={handleReset}
                  className="text-white/80 hover:text-white hover:bg-white/10 rounded-lg p-2 transition-all cursor-pointer group"
                  aria-label="Reset conversation"
                  title="Reset chat"
                >
                  <RotateCcw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                </button>
                
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white hover:bg-white/10 rounded-lg p-2 transition-all cursor-pointer"
                  aria-label="Close chat"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-gradient-to-br from-gray-50 to-white">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3.5 shadow-sm ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white'
                      : 'bg-white border border-gray-200 text-gray-800'
                  }`}
                >
                  <div className="text-sm whitespace-pre-wrap leading-relaxed">
                    {renderMessage(msg.content)}
                  </div>

                  {/* Tool Cards */}
                  {msg.tools && msg.tools.length > 0 && (
                    <div className="mt-3 space-y-2">
                      {msg.tools.map((tool, i) => (
                        <Link
                          key={i}
                          href={`/tools/${tool.slug}`}
                          className="block p-3.5 bg-gradient-to-br from-blue-50 to-gray-50 hover:from-blue-100 hover:to-gray-100 rounded-xl transition-all duration-200 border border-blue-200/60 cursor-pointer hover:shadow-md hover:scale-[1.02] group"
                        >
                          <div className="font-bold text-blue-900 text-sm group-hover:text-blue-700 transition-colors">
                            {tool.name}
                          </div>
                          <div className="text-xs text-gray-700 mt-1.5 line-clamp-2 leading-relaxed">
                            {tool.description}
                          </div>
                          <div className="flex items-center gap-2 mt-2.5">
                            <span className="text-xs px-2.5 py-1 bg-white rounded-full text-blue-700 font-semibold shadow-sm border border-blue-100">
                              {tool.pricing}
                            </span>
                            {tool.rating && (
                              <span className="text-xs text-gray-600 font-medium">⭐ {tool.rating}</span>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Loading State */}
            {isLoading && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-white border border-gray-200 rounded-2xl px-5 py-3 flex items-center gap-3 shadow-sm">
                  <Loader2 className="w-5 h-5 animate-spin text-blue-500" />
                  <span className="text-sm text-gray-700 font-medium">Searching 4000+ tools...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions */}
          {messages.length === 1 && !isLoading && (
            <div className="px-4 py-2 bg-white border-t border-gray-100">
              <p className="text-xs text-gray-500 mb-2 font-medium">💡 Quick suggestions:</p>
              <div className="flex flex-wrap gap-2">
                {quickSuggestions.map((suggestion, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuickSuggestion(suggestion)}
                    className="text-xs px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-full border border-blue-200 transition-all cursor-pointer hover:shadow-sm"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Describe your needs..."
                className="flex-1 px-4 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm placeholder:text-gray-400 transition-all cursor-text"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-5 py-3.5 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer shadow-md hover:shadow-lg"
                aria-label="Send message"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Powered by Toolsverse AI • 4000+ Tools Database
            </p>
          </form>
        </div>
      )}

      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
