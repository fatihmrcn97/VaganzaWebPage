"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { p } from "../data/site-content";
import type { NavLink } from "../data/site-content";

type NavbarProps = {
  brand: string;
  links: NavLink[];
};

export function Navbar({ brand, links }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isSolid = isScrolled || activeDropdown !== null;
  const mainLinks = links.filter((l) => l.label !== "ABOUT US");
  const rightLinks = links.filter((l) => l.label === "ABOUT US");

  const getDropdownContent = (active: string | null) => {
    switch (active) {
      case "READY TO WEAR":
        return {
          layout: "default",
          heading: "Explore by Category",
          links: ["View All", "Jackets and Coats", "Overshirts and Chore Jackets", "Knitwear"],
          images: [
            { src: p("/1V6A2000_kopya.webp"), title: "Discover Collection", subtitle: "Highlights" },
            { src: p("/1V6A2226.webp"), title: "Ready to Wear", subtitle: "Essentials" }
          ]
        };
      case "SHOES":
        return {
          layout: "default",
          heading: "Explore by Category",
          links: ["View All", "Sneakers", "Sandals and Espadrilles"],
          images: [
            { src: p("/shoes1.webp"), title: "Sneakers", subtitle: "Casual" },
            { src: p("/shoes2.webp"), title: "Loafers", subtitle: "Classic" },
            { src: p("/shoes3.webp"), title: "Boots", subtitle: "Winter" },
            { src: p("/shoes4.webp"), title: "Sandals", subtitle: "Summer" },
            { src: p("/shoes5.webp"), title: "Oxfords", subtitle: "Formal" },
            { src: p("/shoes6.webp"), title: "Derbies", subtitle: "Smart" },
          ]
        };
      case "NEW IN":
      default:
        return {
          layout: "asymmetric",
          heading: "Latest",
          links: ["New In", "Luxury Leisurewear", "Mocassin"],
          images: [
            { src: p("/1V6A2496_kopya.webp"), title: "The Spring Edit", subtitle: "Editorial" },
            { src: p("/1V6A2226.webp"), title: "New Arrivals", subtitle: "Wardrobe" },
            { src: p("/leather2.webp"), title: "Craftsmanship", subtitle: "Accessories" }
          ]
        };
    }
  };

  const dropdownData = getDropdownContent(activeDropdown);

  return (
    <header 
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-1000 ease-in-out ${isSolid ? "bg-white shadow-sm" : "bg-gradient-to-b from-black/80 via-black/30 to-transparent"}`}
      style={{ zIndex: 9999 }}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <div className={`section-shell relative transition-all duration-700 ${isSolid ? "py-2 lg:py-3" : "py-3 lg:py-5"}`}>
        <div className="flex items-center justify-between gap-4 sm:gap-6">
          <div className="flex items-center gap-8 md:gap-12 lg:gap-16">
            <Link
              href="#campaign"
              className={`font-serif text-sm uppercase tracking-[0.3em] hover:text-[#C5A059] transition-colors sm:text-base sm:tracking-[0.38em] lg:text-xl relative z-10 ${isSolid ? "text-neutral-950" : "text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"}`}
            >
              {brand}
            </Link>
            
            <nav className={`hidden items-center gap-6 text-[9px] uppercase tracking-[0.35em] md:flex md:text-[10px] md:tracking-[0.42em] lg:gap-10 lg:text-[10px] relative z-10 ${isSolid ? "text-neutral-600" : "text-white/90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"}`} style={{ height: "30px" }}>
              {mainLinks.map((link) => (
                <div 
                  key={link.label}
                  className="h-full flex items-center cursor-pointer"
                  onMouseEnter={() => setActiveDropdown(["NEW IN", "READY TO WEAR", "SHOES"].includes(link.label) ? link.label : null)}
                >
                  <Link href={link.href} className="hover:text-[#C5A059] transition-colors duration-300 py-2">
                    {link.label}
                  </Link>
                </div>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-6 lg:gap-8 relative z-10">
            {rightLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`hidden md:flex items-center justify-center text-[9px] uppercase tracking-[0.35em] md:text-[10px] md:tracking-[0.42em] lg:text-[10px] transition-colors duration-300 ${isSolid ? "text-neutral-600 hover:text-black" : "text-white/90 hover:text-[#C5A059] drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"}`}
              >
                {link.label}
              </Link>
            ))}
            
            <button className={`md:hidden p-1 transition-colors ${isSolid ? "text-neutral-900" : "text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"}`} aria-label="Menu">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" x2="21" y1="12" y2="12"/>
                <line x1="3" x2="21" y1="6" y2="6"/>
                <line x1="3" x2="21" y1="18" y2="18"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Links */}
        <div className={`mt-3 overflow-x-auto border-t pt-2.5 md:hidden hide-scrollbar sm:mt-4 sm:pt-3 transition-colors duration-500 relative z-10 ${isSolid ? "border-neutral-200/60" : "border-white/10"}`}>
          <div className={`flex min-w-max gap-5 text-[9px] uppercase tracking-[0.3em] font-light sm:gap-6 sm:text-[9px] sm:tracking-[0.38em] ${isSolid ? "text-neutral-600" : "text-white/90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"}`}>
            {links.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-[#C5A059] transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mega Menu Dropdown Panel */}
      <div 
        className={`absolute left-0 right-0 top-full bg-white transition-all duration-700 ease-in-out overflow-hidden shadow-xl ${['NEW IN', 'READY TO WEAR', 'SHOES'].includes(activeDropdown || '') ? "max-h-[800px] opacity-100 border-t border-neutral-100" : "max-h-0 opacity-0 border-transparent"}`}
        onMouseEnter={() => setActiveDropdown((prev) => prev || "NEW IN")}
      >
        <div className="section-shell py-10 lg:py-14">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Categories List */}
            <div className="flex flex-col gap-5">
              <h3 className="text-[10px] text-neutral-950 font-medium tracking-[0.3em] mb-2 uppercase">{dropdownData.heading}</h3>
              <div className="flex flex-col gap-4">
                {dropdownData.links.map((linkLabel) => (
                  <Link key={linkLabel} href="/products" className="text-[12px] text-neutral-500 hover:text-[#C5A059] transition-colors uppercase tracking-[0.15em]">{linkLabel}</Link>
                ))}
              </div>
            </div>

            {/* Featured Images */}
            <div className="hidden md:block col-span-3">
              {dropdownData.layout === "asymmetric" && dropdownData.images.length >= 3 ? (
                <div className="grid grid-cols-3 gap-4 lg:gap-6 h-[340px] lg:h-[400px]">
                  <Link href="#lookbook" className="col-span-2 group relative block w-full h-full overflow-hidden bg-neutral-100">
                    <Image src={dropdownData.images[0].src} alt={dropdownData.images[0].title} fill className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-5 left-5 text-white">
                      <div className="text-[9px] uppercase tracking-[0.2em] mb-1">{dropdownData.images[0].subtitle}</div>
                      <div className="text-[16px] uppercase tracking-[0.15em] font-serif">{dropdownData.images[0].title}</div>
                    </div>
                  </Link>

                  <div className="grid grid-rows-2 gap-4 lg:gap-6 h-full">
                    {dropdownData.images.slice(1, 3).map((img, idx) => (
                      <Link key={idx} href="#lookbook" className="group relative block w-full h-full overflow-hidden bg-neutral-100">
                        <Image src={img.src} alt={img.title} fill className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                        <div className="absolute bottom-4 left-4 text-white">
                          <div className="text-[8px] uppercase tracking-[0.2em] mb-1">{img.subtitle}</div>
                          <div className="text-[12px] uppercase tracking-[0.15em] font-serif">{img.title}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <div className={`grid gap-4 lg:gap-6 min-h-[240px] ${dropdownData.images.length > 2 ? "grid-cols-3 grid-rows-2 h-[380px]" : "grid-cols-2 h-[260px]"}`}>
                  {dropdownData.images.map((img, idx) => (
                    <Link key={idx} href="#lookbook" className="group relative block w-full h-full overflow-hidden bg-neutral-100">
                      <Image src={img.src} alt={img.title} fill className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                      <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 text-white">
                        <div className="text-[8px] uppercase tracking-[0.2em] mb-1">{img.subtitle}</div>
                        <div className="text-[12px] sm:text-[14px] uppercase tracking-[0.15em] font-serif">{img.title}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </header>
  );
}
