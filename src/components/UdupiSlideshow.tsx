import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, Camera } from 'lucide-react';

const udupiImages = [
  { src: "/static/images/udupi-1.jpg", caption: "Field notes from Udupi" },
  { src: "/static/images/udupi-2.jpg", caption: "Udupi landscape" },
  { src: "/static/images/udupi-3.jpg", caption: "The beautiful coast of Udupi" },
  { src: "/static/images/udupi-4.jpg", caption: "On the banks of River Seetha" }
];

export default function UdupiSlideshow() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % udupiImages.length);
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + udupiImages.length) % udupiImages.length);
  };

  return (
    <span className="inline-block relative">
      {/* Interactive Trigger Word */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`font-bold inline-flex items-center gap-1.5 transition-all duration-300 focus:outline-none ${
          isOpen 
            ? 'text-brand-light dark:text-brand-dark' 
            : 'text-stone-900 dark:text-stone-100 hover:text-brand-light dark:hover:text-brand-dark underline decoration-stone-300 dark:decoration-stone-700 decoration-2 underline-offset-4'
        }`}
        aria-label="Toggle Udupi slideshow"
      >
        <span>Udupi</span>
        <Camera className={`h-3.5 w-3.5 transition-transform duration-300 ${isOpen ? 'rotate-12 scale-115 text-brand-light dark:text-brand-dark' : 'text-stone-400 group-hover:scale-110'}`} />
        <span className={`text-xs font-sans transition-all duration-300 font-bold ${isOpen ? 'rotate-90 translate-x-0.5' : 'group-hover:translate-x-1'}`}>
          &rarr;
        </span>
      </button>

      {/* Lightbox / Slideshow Overlay (smooth fade-in) */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-stone-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setIsOpen(false)}
        >
          {/* Slideshow Card */}
          <div 
            className="relative bg-[#fbfaf7] dark:bg-[#181818] rounded-2xl overflow-hidden max-w-2xl w-full border border-stone-200/40 dark:border-stone-800/40 shadow-2xl flex flex-col animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-stone-900/10 dark:bg-white/10 hover:bg-stone-900/20 dark:hover:bg-white/20 text-stone-800 dark:text-stone-200 transition-colors focus:outline-none"
              aria-label="Close slideshow"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Main Image Slider */}
            <div className="relative aspect-[4/3] sm:aspect-[16/10] bg-stone-900 flex items-center justify-center overflow-hidden group">
              <img
                src={udupiImages[currentIndex].src}
                alt={udupiImages[currentIndex].caption}
                className="w-full h-full object-contain transition-all duration-500 ease-out"
              />

              {/* Slider Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 p-2.5 rounded-full bg-stone-950/40 hover:bg-stone-950/60 text-white backdrop-blur-sm transition-colors focus:outline-none"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 p-2.5 rounded-full bg-stone-950/40 hover:bg-stone-950/60 text-white backdrop-blur-sm transition-colors focus:outline-none"
                aria-label="Next slide"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Progress Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {udupiImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentIndex ? 'w-6 bg-brand-light dark:bg-brand-dark' : 'w-1.5 bg-white/40 hover:bg-white/60'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Bottom Caption bar */}
            <div className="p-4 sm:p-5 text-center bg-[#fbfaf7] dark:bg-[#181818] border-t border-stone-200/40 dark:border-stone-800/40">
              <p className="font-serif text-sm sm:text-base font-bold text-stone-900 dark:text-stone-100">
                {udupiImages[currentIndex].caption}
              </p>
              <p className="text-[10px] font-sans text-stone-400 dark:text-stone-500 font-semibold uppercase tracking-wider mt-1">
                Slide {currentIndex + 1} of {udupiImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </span>
  );
}
