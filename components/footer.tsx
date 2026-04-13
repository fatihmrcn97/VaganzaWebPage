import Link from "next/link";
import type { FooterColumn, SocialLink } from "../data/site-content";

type FooterProps = {
  brand: string;
  columns: FooterColumn[];
  socialLinks: SocialLink[];
};

function SocialIcon({
  icon,
}: {
  icon: "facebook" | "instagram" | "pinterest" | "youtube";
}) {
  const commonProps = {
    className: "h-4 w-4",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
  } as const;

  switch (icon) {
    case "facebook":
      return (
        <svg {...commonProps}>
          <path d="M14 8h2V4h-2c-2.21 0-4 1.79-4 4v2H8v4h2v6h4v-6h2.5l.5-4H14V8a1 1 0 0 1 1-1Z" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...commonProps}>
          <rect x="4" y="4" width="16" height="16" rx="5" />
          <circle cx="12" cy="12" r="3.5" />
          <circle cx="17" cy="7" r="0.75" fill="currentColor" stroke="none" />
        </svg>
      );
    case "pinterest":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="8" />
          <path d="M10.75 20 12 14.5m.5-6.5c2 0 3.5 1.2 3.5 3.2 0 2.1-1.1 3.8-2.9 3.8-1 0-1.7-.6-1.7-1.5 0-1.3.9-2.3.9-3.6 0-.7-.4-1.3-1.3-1.3-1 0-1.8 1-1.8 2.4 0 .9.3 1.5.3 1.5L9 16.3" />
        </svg>
      );
    default:
      return (
        <svg {...commonProps}>
          <rect x="4" y="7" width="16" height="10" rx="2" />
          <path d="m10 10 5 2-5 2Z" fill="currentColor" stroke="none" />
        </svg>
      );
  }
}

export function Footer({ brand, columns, socialLinks }: FooterProps) {
  return (
    <footer className="bg-[#181414] text-white/72">
      <div className="section-shell py-10 sm:py-14 lg:py-16">
        <div className="border-t border-white/10 pt-8 sm:pt-12">
          {/* Columns: single col on mobile, 2 on sm, full spread on xl */}
          <div className="grid grid-cols-2 gap-8 sm:gap-10 md:grid-cols-3 xl:grid-cols-[1fr_1fr_1fr_1.2fr_1fr]">
            {columns.map((column) => (
              <div key={column.title}>
                <p className="text-[9px] uppercase tracking-[0.35em] text-white/55 sm:text-[10px] sm:tracking-[0.45em]">
                  {column.title}
                </p>
                <div className="mt-3 space-y-1 sm:mt-4">
                  {column.links.map((link) => (
                    <Link key={link.label} href={link.href} className="footer-link block text-[11px] sm:text-[12px]">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <div className="col-span-2 sm:col-span-1">
              <p className="text-[9px] uppercase tracking-[0.35em] text-white/55 sm:text-[10px] sm:tracking-[0.45em]">
                FOLLOW US
              </p>
              <div className="mt-3 flex items-center gap-2 sm:mt-4 sm:gap-3">
                {socialLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/18 bg-white/5 text-white/70 hover:border-[#C5A059] hover:bg-[#C5A059]/10 hover:text-[#C5A059] hover:-translate-y-1 hover:scale-105 transition-all duration-300 sm:h-10 sm:w-10 lg:h-12 lg:w-12"
                  >
                    <SocialIcon icon={link.icon} />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-[9px] tracking-[0.14em] text-white/32 sm:mt-14 sm:gap-5 sm:pt-8 sm:text-[10px] lg:flex-row lg:items-center lg:justify-between lg:mt-16">
            <p className="font-serif text-[13px] uppercase tracking-[0.35em] text-[#C5A059] sm:text-sm lg:text-base">
              {brand}
            </p>
            <p className="max-w-4xl leading-5 sm:leading-6">
              (C) 2026 VAGANZA. Via modern heritage, crafted for quiet travel. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      <div className="h-12 bg-[#b48b6c] sm:h-16" />
      <div className="h-3 bg-[#140f0f] sm:h-4" />
    </footer>
  );
}
