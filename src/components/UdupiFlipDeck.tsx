import React, { useState } from 'react';

const udupiImages = [
  { src: "/static/images/udupi-1.jpg", caption: "Field notes from Udupi" },
  { src: "/static/images/udupi-2.jpg", caption: "Udupi landscape" },
  { src: "/static/images/udupi-3.jpg", caption: "The beautiful coast of Udupi" },
  { src: "/static/images/udupi-4.jpg", caption: "On the banks of River Seetha" }
];

export default function UdupiFlipDeck() {
  const [deck, setDeck] = useState([0, 1, 2, 3]);
  const [isFlipping, setIsFlipping] = useState(false);

  const flipCard = () => {
    if (isFlipping) return;
    setIsFlipping(true);

    // Slide out to the side, then move top card to bottom
    setTimeout(() => {
      setDeck((prev) => {
        const [top, ...rest] = prev;
        return [...rest, top];
      });
      setIsFlipping(false);
    }, 300);
  };

  return (
    <div className="flex flex-col items-center select-none font-sans">
      {/* Title */}
      <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-brand-light dark:text-brand-dark mb-3">
        Photos of Udupi (Click to flip)
      </span>

      {/* Card Stack Container */}
      <div 
        onClick={flipCard}
        className="relative w-40 h-40 sm:w-44 sm:h-44 cursor-pointer group"
      >
        {deck.map((imgIndex, depth) => {
          const isTop = depth === 0;
          
          // Custom rotations for each polaroid card
          const rotations = ['rotate-1', '-rotate-3', 'rotate-5', '-rotate-2'];
          const translations = ['translate-y-0', 'translate-y-0.5', 'translate-y-1', '-translate-y-0.5'];
          
          const rotation = rotations[imgIndex % rotations.length];
          const translation = translations[imgIndex % translations.length];

          return (
            <div
              key={imgIndex}
              className={`absolute inset-0 w-full h-full bg-stone-50 dark:bg-stone-900 p-2.5 rounded-2xl border border-stone-200/60 dark:border-stone-800/60 shadow-md transition-all duration-300 ease-out ${
                isTop && isFlipping 
                  ? 'translate-x-28 rotate-12 opacity-0 scale-95 z-40' 
                  : isTop 
                  ? 'z-30 group-hover:scale-[1.03] group-hover:-rotate-2' 
                  : `z-${20 - depth} ${rotation} ${translation} scale-[0.97]`
              }`}
              style={{
                zIndex: 10 - depth,
                transformOrigin: 'bottom center',
              }}
            >
              {/* Photo Area */}
              <div className="w-full h-full rounded-xl overflow-hidden relative bg-stone-100 dark:bg-stone-800 flex flex-col justify-between">
                <div className="w-full h-[85%] overflow-hidden bg-stone-200 dark:bg-stone-900 relative">
                  <img
                    src={udupiImages[imgIndex].src}
                    alt={udupiImages[imgIndex].caption}
                    className="w-full h-full object-cover pointer-events-none"
                  />
                </div>
                {/* Polaroid style caption bar */}
                <div className="h-[15%] flex items-center justify-center bg-stone-50 dark:bg-stone-900">
                  <p className="font-serif text-[8px] sm:text-[9px] font-bold text-stone-700 dark:text-stone-300 truncate px-1 text-center">
                    {udupiImages[imgIndex].caption}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
