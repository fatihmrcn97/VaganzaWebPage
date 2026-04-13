import Link from "next/link";
import type { NavLink } from "../data/site-content";

type NavbarProps = {
  brand: string;
  links: NavLink[];
};

export function Navbar({ brand, links }: NavbarProps) {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="section-shell pt-6 sm:pt-8">
        <div className="flex items-center justify-between gap-6">
          <Link
            href="#campaign"
            className="font-serif text-base uppercase tracking-[0.38em] text-white sm:text-lg"
          >
            {brand}
          </Link>
          <nav className="hidden items-center gap-7 text-[10px] uppercase tracking-[0.42em] text-white/82 md:flex lg:gap-10">
            {links.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-white/100">
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="#shop"
            className="hidden text-[10px] uppercase tracking-[0.42em] text-white/82 hover:text-white sm:inline-flex md:hidden"
          >
            Shop
          </Link>
        </div>
        <div className="mt-5 overflow-x-auto border-t border-white/10 pb-1 pt-3 md:hidden">
          <div className="flex min-w-max gap-6 text-[10px] uppercase tracking-[0.38em] text-white/70">
            {links.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
