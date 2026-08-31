import React, { useEffect, useState } from 'react';

interface TocItem {
  slug: string;
  text: string;
  depth: number;
}

interface TableOfContentsProps {
  headings: TocItem[];
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          const closest = visibleEntries.reduce((prev, curr) => {
            return Math.abs(curr.boundingClientRect.top) < Math.abs(prev.boundingClientRect.top) ? curr : prev;
          });
          setActiveId(closest.target.id);
        }
      },
      {
        rootMargin: '-100px 0px -40% 0px',
        threshold: [0, 0.2, 0.5, 1.0],
      }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.slug);
      if (element) observer.observe(element);
    });

    return () => {
      headings.forEach((heading) => {
        const element = document.getElementById(heading.slug);
        if (element) observer.unobserve(element);
      });
    };
  }, [headings]);

  // Only show TOC for h2 and h3 elements
  const filteredHeadings = headings.filter(h => h.depth === 2 || h.depth === 3);

  if (!filteredHeadings || filteredHeadings.length === 0) return null;

  return (
    <div className="font-sans">
      <h2 className="text-xs font-bold uppercase tracking-wider text-stone-400 dark:text-stone-500 mb-4">
        Table of Contents
      </h2>
      <nav className="space-y-2 max-h-[60vh] overflow-y-auto pr-2">
        {filteredHeadings.map((heading) => {
          const depthPadding = heading.depth === 3 ? 'pl-4' : 'pl-0';
          const isActive = activeId === heading.slug;

          return (
            <a
              key={heading.slug}
              href={`#${heading.slug}`}
              className={`block text-xs leading-snug transition-all duration-200 border-l-2 py-0.5 ${depthPadding} ${
                isActive
                  ? 'border-brand-light dark:border-brand-dark text-stone-900 dark:text-stone-100 font-medium'
                  : 'border-transparent text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
              }`}
            >
              {heading.text}
            </a>
          );
        })}
      </nav>
    </div>
  );
}
