import Image from "next/image";
import type { StoreSectionContent } from "../data/site-content";

type StoreSectionProps = {
  content: StoreSectionContent;
};

function StoreIcon({ icon }: { icon: "clock" | "pin" | "phone" }) {
  if (icon === "phone") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 text-white/78" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M5 4.5h4l1 4-2.25 1.75a15.2 15.2 0 0 0 6 6L15.5 14l4 1v4a2 2 0 0 1-2 2C10.82 21 3 13.18 3 5.5a2 2 0 0 1 2-2Z" />
      </svg>
    );
  }

  if (icon === "clock") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 text-white/78" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="8" />
        <path d="M12 7.5v5l3 1.5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 text-white/78" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 20s6-5.69 6-11a6 6 0 1 0-12 0c0 5.31 6 11 6 11Z" />
      <circle cx="12" cy="9" r="2" />
    </svg>
  );
}

export function StoreSection({ content }: StoreSectionProps) {
  return (
    <section id="contact" className="bg-night">
      {/* Stacks on mobile, side-by-side on lg */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.12fr_0.88fr]">
        <div className="relative min-h-[14rem] sm:min-h-[18rem] md:min-h-[22rem] lg:min-h-0">
          <Image
            src={content.image}
            alt={content.imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 56vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/10" />
        </div>

        <div className="bg-[#211b1a] px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8 lg:grid-cols-1 lg:gap-8 xl:grid-cols-3 xl:gap-10">
            {content.panels.map((panel) => (
              <div key={panel.title} className="space-y-3 sm:space-y-4">
                <StoreIcon icon={panel.icon} />
                <p className="text-[9px] uppercase tracking-[0.35em] text-white/64 sm:text-[10px] sm:tracking-[0.45em]">
                  {panel.title}
                </p>
                <p className="max-w-[15rem] text-[13px] leading-6 text-white/75 sm:text-sm sm:leading-7">
                  {panel.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
