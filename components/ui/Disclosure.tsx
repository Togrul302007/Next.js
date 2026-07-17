import React, { useState, useId } from "react";

interface DisclosureProps {
  title: string;
  children: React.ReactNode;
}

export const Disclosure: React.FC<DisclosureProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = useId();

  return (
    <div className="border border-zinc-200 rounded-lg overflow-hidden">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center px-4 py-3 bg-zinc-50 hover:bg-zinc-100 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 text-left"
      >
        <span>{title}</span>
        <span
          className={`transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          aria-hidden="true"
        >
          ▼
        </span>
      </button>
      <div
        id={contentId}
        hidden={!isOpen}
        className="p-4 border-t border-zinc-200 bg-white"
      >
        {children}
      </div>
    </div>
  );
};