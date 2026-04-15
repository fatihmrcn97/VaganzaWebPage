"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";

interface ProductImageZoomProps {
  src: string;
  hoverSrc: string;
  alt: string;
}

export const ProductImageZoom = ({ src, hoverSrc, alt }: ProductImageZoomProps) => {
  const [showZoom, setShowZoom] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    
    // Calculate percentage position
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    
    setMousePos({ x, y });
  };

  return (
    <div 
      ref={containerRef}
      className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-100 cursor-none group/zoom"
      onMouseEnter={() => setShowZoom(true)}
      onMouseLeave={() => setShowZoom(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Secondary Image (Behind, visible when primary fades) */}
      <Image 
        src={hoverSrc} 
        alt={`${alt} alternate view`} 
        fill 
        className="object-cover object-center absolute inset-0 z-0 scale-105"
      />
      
      {/* Primary Image (Front, fades out on hover) */}
      <Image 
        src={src} 
        alt={alt} 
        fill 
        className="object-cover object-center transition-opacity duration-700 ease-in-out group-hover/zoom:opacity-0 relative z-10"
      />

      {/* Magnifying Glass Lens */}
      {showZoom && (
        <div 
          className="absolute z-50 pointer-events-none w-48 h-48 rounded-full border-[1.5px] border-white/40 shadow-[0_0_25px_rgba(0,0,0,0.25)] overflow-hidden hidden md:block backdrop-blur-[1px]"
          style={{
            left: `${mousePos.x}%`,
            top: `${mousePos.y}%`,
            transform: `translate(-50%, -50%)`,
            transition: 'left 0.1s ease-out, top 0.1s ease-out'
          }}
        >
          {/* Zoomed Content */}
          <div 
            className="absolute inset-0 scale-[3]"
            style={{
              backgroundImage: `url(${hoverSrc})`,
              backgroundSize: 'cover',
              backgroundPosition: `${mousePos.x}% ${mousePos.y}%`,
              width: '100%',
              height: '100%'
            }}
          />
        </div>
      )}

      {/* Quick Add Overlay (from original design) */}
      <div className="absolute bottom-0 inset-x-0 p-4 translate-y-full opacity-0 group-hover/zoom:translate-y-0 group-hover/zoom:opacity-100 transition-all duration-500 ease-out z-20 flex justify-center hidden md:flex">
        <div className="bg-white/95 backdrop-blur-sm px-6 py-3 w-full text-center text-[10px] uppercase tracking-[0.2em] font-medium hover:bg-neutral-900 hover:text-white transition-colors">
          Quick Add
        </div>
      </div>
    </div>
  );
};
