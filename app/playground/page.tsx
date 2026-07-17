"use client";

import { Modal } from "@/components/ui/Modal";
import { Tabs } from "@/components/ui/Tabs";
import { Disclosure } from "@/components/ui/Disclosure";
import { useState } from "react";

export default function PlaygroundPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tabItems = [
    { id: "tab1", label: "Profile", content: <p>Profile Settings Content</p> },
    { id: "tab2", label: "Security", content: <p>Security Frameworks Content</p> },
  ];

  return (
    <div className="p-8 max-w-2xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold">A11y Playground</h1>
      
      {/* 1. Disclosure Test */}
      <Disclosure title="Click to Expand Details">
        <p>This contents toggle seamlessly via keyboard interaction.</p>
      </Disclosure>

      {/* 2. Tabs Test */}
      <Tabs items={tabItems} />

      {/* 3. Modal Test */}
      <div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Open Custom Modal
        </button>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Accessible Dialog">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Focus trap is active inside this modal overlay.
          </p>
          <button 
            onClick={() => setIsModalOpen(false)}
            className="mt-4 px-3 py-1.5 bg-zinc-200 dark:bg-zinc-800 text-sm rounded focus:outline-none focus:ring-2 focus:ring-zinc-500"
          >
            Close
          </button>
        </Modal>
      </div>
    </div>
  );
}