import React, { useState, useRef } from "react";

interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  items: TabItem[];
}

export const Tabs: React.FC<TabsProps> = ({ items }) => {
  const [activeTab, setActiveTab] = useState(items[0]?.id);
  const tabRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

    const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    let newIndex = index;

    if (e.key === "ArrowRight") {
        newIndex = (index + 1) % items.length;
    } else if (e.key === "ArrowLeft") {
        newIndex = (index - 1 + items.length) % items.length; // Burada balaca bir sintaksis çatışmazlığı da vardı, düzəltdim
    } else {
        return;
    }

    e.preventDefault();
    const nextTabId = items[newIndex].id;
    setActiveTab(nextTabId);
    tabRefs.current[nextTabId]?.focus();
  };

  return (
    <div className="w-full">
      <div role="tablist" aria-label="Sample Tabs" className="flex border-b border-zinc-200">
        {items.map((item, index) => {
          const isSelected = activeTab === item.id;
          return (
            <button
              key={item.id}
              role="tab"
              id={`tab-${item.id}`}
              aria-selected={isSelected}
              aria-controls={`panel-${item.id}`}
              tabIndex={isSelected ? 0 : -1}
              ref={(el) => {
                tabRefs.current[item.id] = el;
              }}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onClick={() => setActiveTab(item.id)}
              className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isSelected
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-zinc-500 hover:text-zinc-700"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      <div className="mt-4">
        {items.map((item) => (
          <div
            key={item.id}
            role="tabpanel"
            id={`panel-${item.id}`}
            aria-labelledby={`tab-${item.id}`}
            hidden={activeTab !== item.id}
            tabIndex={0}
            className="p-4 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
};