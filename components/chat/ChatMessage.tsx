import React from 'react';

interface ChatMessageProps {
  role: 'user' | 'assistant' | string;
  content: string;
}

export function ChatMessage({ role, content }: ChatMessageProps) {
  const isUser = role === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`max-w-[85%] rounded-lg px-4 py-2 text-base md:text-sm shadow-sm ${
          isUser
            ? 'bg-blue-600 text-white rounded-br-none'
            : 'bg-gray-100 text-gray-950 rounded-bl-none dark:bg-zinc-800 dark:text-gray-100'
        }`}
      >
        <span className="font-semibold block text-xs mb-1 opacity-75">
          {isUser ? 'Sən' : 'Claude'}
        </span>
        {/* Stream zamanı təhlükəsiz şəkildə mətni render edirik */}
        <div className="whitespace-pre-wrap break-words leading-relaxed">
          {content}
        </div>
      </div>
    </div>
  );
}