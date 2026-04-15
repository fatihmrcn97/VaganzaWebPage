"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export const ProductGallery = ({ images, productName }: ProductGalleryProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const openFullscreen = (idx: number) => {
    setActiveIdx(idx);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeFullscreen = () => {
    setIsModalOpen(false);
    document.body.style.overflow = '';
  };

  // Ensure modal scrolls to the clicked image to prevent animation tearing
  useEffect(() => {
    if (isModalOpen && scrollRef.current) {
      const activeEl = document.getElementById(`modal-img-${activeIdx}`);
      if (activeEl) {
        scrollRef.current.scrollTop = activeEl.offsetTop - 40; // slightly offset for padding
      }
    }
  }, [isModalOpen, activeIdx]);

  return (
    <>
      <div className="w-full flex flex-col-reverse md:flex-row gap-2 md:gap-4 lg:h-[calc(100vh-120px)] lg:sticky lg:top-24">
        {/* Thumbnails Column (Left Side) */}
        <div className="flex md:flex-col gap-2 md:gap-3 md:w-[60px] lg:w-[80px] shrink-0 overflow-x-auto md:overflow-y-auto no-scrollbar scroll-smooth pb-1 md:pb-0">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className={`relative bg-[#f5f5f5] w-[50px] h-[66px] md:w-full md:h-[80px] lg:h-[106px] shrink-0 cursor-pointer overflow-hidden transition-all duration-300 ${
                activeIdx === idx 
                  ? "ring-[1.5px] ring-black ring-offset-[2px]" 
                  : "opacity-60 hover:opacity-100"
              }`}
              onClick={() => setActiveIdx(idx)}
              onMouseEnter={() => !isModalOpen && setActiveIdx(idx)}
            >
              <Image 
                src={img} 
                alt={`${productName} thumbnail ${idx + 1}`} 
                fill 
                className="object-cover object-top" 
                priority={true} 
              />
            </div>
          ))}
        </div>

        {/* Huge Main Image View */}
        <div 
          className="relative w-full aspect-[3/4] md:aspect-auto md:h-full bg-[#f5f5f5] cursor-zoom-in group overflow-hidden"
          onClick={() => openFullscreen(activeIdx)}
        >
          <motion.div layoutId="product-image-active" className="relative w-full h-full">
            <Image 
              src={images[activeIdx]} 
              alt={`${productName} main view`} 
              fill 
              className="object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]" 
              priority={true} 
            />
          </motion.div>
          
          {/* Zegna-style Plus/Expand icon */}
          <div className="absolute bottom-5 right-5 md:bottom-8 md:right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white/95 backdrop-blur-sm text-black p-3.5 md:p-4 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.15)] flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Framer Motion Zegna Fullscreen Overlay (Single Image Mode) */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#f5f5f5]" 
            style={{ zIndex: 10000 }}
          >
            {/* Close Button */}
            <div className="absolute top-6 right-6 z-[110]">
              <button 
                onClick={closeFullscreen} 
                className="bg-white/80 hover:bg-white p-4 rounded-full shadow-lg transition-transform hover:scale-105 flex items-center justify-center cursor-pointer text-black"
              >
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                   <line x1="18" y1="6" x2="6" y2="18"></line>
                   <line x1="6" y1="6" x2="18" y2="18"></line>
                 </svg>
              </button>
            </div>

            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                {activeIdx > 0 && (
                  <button 
                    onClick={(e) => { e.stopPropagation(); setActiveIdx(prev => prev - 1); }}
                    className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-[110] bg-white/80 hover:bg-white p-3 md:p-4 rounded-full shadow-lg transition-transform hover:scale-105 flex items-center justify-center cursor-pointer text-black"
                  >
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                       <polyline points="15 18 9 12 15 6"></polyline>
                     </svg>
                  </button>
                )}
                {activeIdx < images.length - 1 && (
                  <button 
                    onClick={(e) => { e.stopPropagation(); setActiveIdx(prev => prev + 1); }}
                    className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-[110] bg-white/80 hover:bg-white p-3 md:p-4 rounded-full shadow-lg transition-transform hover:scale-105 flex items-center justify-center cursor-pointer text-black"
                  >
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                       <polyline points="9 18 15 12 9 6"></polyline>
                     </svg>
                  </button>
                )}
              </>
            )}

            {/* Central Single Image */}
            <div className="w-full h-full flex items-center justify-center p-4 md:p-12">
               <motion.div 
                 layoutId="product-image-active"
                 transition={{ type: "spring", stiffness: 200, damping: 25 }}
                 className="relative w-full h-full max-w-[1200px] bg-transparent cursor-zoom-out shadow-2xl"
                 onClick={closeFullscreen}
               >
                  <Image 
                    src={images[activeIdx]} 
                    alt={`${productName} full screen`} 
                    fill 
                    className="object-contain" 
                    priority={true} 
                  />
               </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
