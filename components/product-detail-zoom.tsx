"use client";

import React, { useRef } from "react";
import Image from "next/image";

interface ProductDetailZoomProps {
  src: string;
  alt: string;
  priority?: boolean;
}

const ZOOM_LEVEL = 3;
const LENS_SIZE = 256; // 64 * 4px for tailwind w-64 (must match CSS)

export const ProductDetailZoom = ({ src, alt, priority = false }: ProductDetailZoomProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lensRef = useRef<HTMLDivElement>(null);
  const innerImgRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !lensRef.current || !innerImgRef.current) return;
    
    // Get mouse position relative to container
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    
    // X and Y coords relative to the container
    const x = e.clientX - left;
    const y = e.clientY - top;
    
    // 1. Move lens to mouse position
    lensRef.current.style.opacity = "1";
    lensRef.current.style.left = `${x}px`;
    lensRef.current.style.top = `${y}px`;

    // 2. Size the inner zoomed image to exactly ZOOM_LEVEL times the container size
    // This perfectly preserves the exact object-cover aspect ratio crops!
    innerImgRef.current.style.width = `${width * ZOOM_LEVEL}px`;
    innerImgRef.current.style.height = `${height * ZOOM_LEVEL}px`;
    
    // 3. Shift the inner image so the point under the mouse sits in the exact center of the lens
    innerImgRef.current.style.left = `${LENS_SIZE / 2 - x * ZOOM_LEVEL}px`;
    innerImgRef.current.style.top = `${LENS_SIZE / 2 - y * ZOOM_LEVEL}px`;
  };

  const handleMouseLeave = () => {
    if (!lensRef.current) return;
    lensRef.current.style.opacity = "0";
  };

  return (
    <div 
      ref={containerRef}
      // cursor-zoom-in gives us the magnifying glass icon!
      className="relative w-full h-full overflow-hidden bg-neutral-100 cursor-zoom-in group/detail-zoom"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseMove}
    >
      {/* Base Image */}
      <Image 
        src={src} 
        alt={alt} 
        fill 
        className="object-cover object-center w-full h-full" 
        priority={priority} 
      />

      {/* Magnifying Glass Lens */}
      <div 
        ref={lensRef}
        className="absolute z-50 pointer-events-none w-[256px] h-[256px] rounded-full border-[1.5px] border-white/50 shadow-[0_0_20px_rgba(0,0,0,0.3)] overflow-hidden hidden md:block opacity-0"
        style={{
          transform: `translate(-50%, -50%)`,
          // Hardware acceleration for zero lag
          willChange: 'left, top, opacity',
        }}
      >
        {/* Mathematically precise zoomed container */}
        <div 
          ref={innerImgRef}
          className="absolute max-w-none"
          style={{ willChange: 'left, top' }}
        >
          <Image 
            src={src} 
            alt={`${alt} zoomed`} 
            fill 
            className="object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};
