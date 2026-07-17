import React from 'react';

export function ThinkingIndicator() {
  return (
    <div className="flex items-center space-x-2 p-4 bg-muted/50 rounded-lg max-w-[80%] w-fit animate-pulse">
      <div className="flex space-x-1">
        <div className="h-2 w-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="h-2 w-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="h-2 w-2 bg-gray-500 rounded-full animate-bounce"></div>
      </div>
      <span className="text-xs text-gray-500 font-medium">Claude düşünür...</span>
    </div>
  );
}