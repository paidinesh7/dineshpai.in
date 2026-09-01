import React, { useState } from 'react';

interface HomeTabsProps {
  aboutContent: React.ReactNode;
  notesContent: React.ReactNode;
}

export default function HomeTabs({ aboutContent, notesContent }: HomeTabsProps) {
  const [activeTab, setActiveTab] = useState<'notes' | 'about'>('notes');

  return (
    <div className="w-full">
      {/* Tab Switcher */}
      <div className="flex gap-4 border-b-2 border-dashed border-stone-200/40 dark:border-stone-800/40 pb-4 mb-10 font-mono text-xs sm:text-sm uppercase tracking-wider select-none">
        <button
          onClick={() => setActiveTab('notes')}
          className={`cursor-pointer px-3.5 py-1.5 rounded-lg transition-all duration-300 font-bold focus:outline-none ${
            activeTab === 'notes'
              ? 'bg-brand-light text-stone-50 dark:bg-brand-dark dark:text-stone-950 shadow-sm'
              : 'text-stone-400 dark:text-stone-500 hover:text-stone-900 dark:hover:text-stone-100'
          }`}
        >
          [ 01 / notes_and_ideas ]
        </button>
        <button
          onClick={() => setActiveTab('about')}
          className={`cursor-pointer px-3.5 py-1.5 rounded-lg transition-all duration-300 font-bold focus:outline-none ${
            activeTab === 'about'
              ? 'bg-brand-light text-stone-50 dark:bg-brand-dark dark:text-stone-950 shadow-sm'
              : 'text-stone-400 dark:text-stone-500 hover:text-stone-900 dark:hover:text-stone-100'
          }`}
        >
          [ 02 / about_me ]
        </button>
      </div>

      {/* Tab Contents */}
      <div className="transition-all duration-300 ease-out">
        {activeTab === 'notes' ? (
          <div className="animate-fade-in">{notesContent}</div>
        ) : (
          <div className="animate-fade-in">{aboutContent}</div>
        )}
      </div>
    </div>
  );
}
