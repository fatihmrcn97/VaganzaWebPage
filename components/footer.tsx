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
      <div className="section-shell py-14 sm:py-16">
        <div className="border-t border-white/10 pt-12">
          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-[1fr_1fr_1fr_1.2fr_1fr]">
            {columns.map((column) => (
              <div key={column.title}>
                <p className="text-[10px] uppercase tracking-[0.45em] text-white/55">
                  {column.title}
                </p>
                <div className="mt-4 space-y-1">
                  {column.links.map((link) => (
                    <Link key={link.label} href={link.href} className="footer-link block">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <div>
              <p className="text-[10px] uppercase tracking-[0.45em] text-white/55">
                FOLLOW US
              </p>
              <div className="mt-4 flex items-center gap-3">
                {socialLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white/18 text-white/70 hover:border-white/40 hover:text-white"
                  >
                    <SocialIcon icon={link.icon} />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-5 border-t border-white/10 pt-5 text-[10px] tracking-[0.14em] text-white/32 lg:flex-row lg:items-center lg:justify-between">
            <p className="font-serif text-sm uppercase tracking-[0.35em] text-white/62">
              {brand}
            </p>
            <p className="max-w-4xl leading-6">
              (C) 2026 VAGANZA. Via modern heritage, crafted for quiet travel. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      <div className="h-16 bg-[#b48b6c]" />
      <div className="h-4 bg-[#140f0f]" />
    </footer>
  );
}
