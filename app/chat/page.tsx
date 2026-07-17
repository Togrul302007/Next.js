"use client";

import { useChat } from '@ai-sdk/react';
import { useEffect, useRef, useState } from 'react';
import { ChatMessage } from '../../components/chat/ChatMessage';
import { ThinkingIndicator } from '../../components/chat/ThinkingIndicator';

export default function ChatPage() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, stop } = useChat() as any;
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isAtBottom, setIsAtBottom] = useState(true);

  // Skrol vəziyyətini izləmək
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
    // 20px bufer qoyuruq
    setIsAtBottom(scrollHeight - scrollTop - clientHeight < 20);
  };

  useEffect(() => {
    if (isAtBottom && scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isAtBottom]);

  return (
    <div className="flex flex-col h-screen max-w-2xl mx-auto p-4 justify-between">
      {/* Mesaj Sahəsi */}
      <div 
        ref={scrollRef} 
        onScroll={handleScroll}
        className="flex-1 overflow-y-auto space-y-4 pr-2"
      >
        {/* m: any yazaraq implicit 'any' xətasını, "as any" ilə isə rol konfliktini həll edirik */}
        {messages.map((m: any) => (
          <ChatMessage key={m.id} role={m.role as any} content={m.content} />
        ))}
git
        {/* Thinking Indicator */}
        {isLoading && messages[messages.length - 1]?.role !== 'assistant' && (
          <ThinkingIndicator />
        )}
      </div>

      {/* Input və İdarəetmə Formu */}
      <form onSubmit={handleSubmit} className="mt-4 sticky bottom-0 bg-background pt-2">
        <div className="flex gap-2">
          <input
            value={input}
            onChange={handleInputChange}
            placeholder="Mesajınızı yazın..."
            className="flex-1 border p-2 rounded-lg md:text-sm text-base"
          />

          {isLoading ? (
            <button type="button" onClick={stop} className="bg-red-500 text-white p-2 rounded-lg">
              Stop
            </button>
          ) : (
            <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg">
              Send
            </button>
          )}
        </div>

        {/* Son mesajlara sürətli keçid */}
        {!isAtBottom && (
          <button 
            type="button"
            onClick={() => scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })}
            className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-3 py-1 rounded-full shadow-lg"
          >
            ↓ Son mesajlara keç
          </button>
        )}
      </form>
    </div>
  );
}