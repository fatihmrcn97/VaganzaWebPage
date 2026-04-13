import Link from "next/link";
import type { NavLink } from "../data/site-content";

type NavbarProps = {
  brand: string;
  links: NavLink[];
};

export function Navbar({ brand, links }: NavbarProps) {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="section-shell py-3 sm:py-4 lg:py-5">
        <div className="flex items-center justify-between gap-4 sm:gap-6">
          <Link
            href="#campaign"
            className="font-serif text-sm uppercase tracking-[0.3em] text-white hover:text-[#C5A059] transition-colors sm:text-base sm:tracking-[0.38em] lg:text-xl"
          >
            {brand}
          </Link>
          <nav className="hidden items-center gap-5 text-[9px] uppercase tracking-[0.35em] text-white/82 md:flex md:text-[10px] md:tracking-[0.42em] lg:gap-10 lg:text-[11px]">
            {links.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-[#C5A059] transition-colors duration-300">
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="#shop"
            className="flex items-center justify-center border border-white/20 bg-white/5 px-4 py-2 text-[9px] uppercase tracking-[0.35em] text-white hover:bg-white hover:text-black transition-all duration-300 md:hidden sm:px-6 sm:py-2.5 sm:text-[10px] sm:tracking-[0.42em]"
          >
            Shop
          </Link>
        </div>
        <div className="mt-3 overflow-x-auto border-t border-white/5 pt-2.5 md:hidden hide-scrollbar sm:mt-4 sm:pt-3">
          <div className="flex min-w-max gap-4 text-[9px] uppercase tracking-[0.3em] text-white/70 sm:gap-6 sm:text-[10px] sm:tracking-[0.38em]">
            {links.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-[#C5A059] transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
