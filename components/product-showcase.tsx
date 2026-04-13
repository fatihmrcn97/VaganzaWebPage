import Image from "next/image";
import type { ProductShowcaseContent } from "../data/site-content";

type ProductShowcaseProps = {
  content: ProductShowcaseContent;
};

export function ProductShowcase({ content }: ProductShowcaseProps) {
  const renderProduct = (item: (typeof content.items)[number]) => (
    <article key={item.name} className="flex flex-col">
      <div className="group">
        <div className="relative overflow-hidden bg-[#060505]">
          <div className="relative h-[16rem] sm:h-[20rem] md:h-[22rem] lg:h-[24rem]">
            <Image
              src={item.image}
              alt={item.imageAlt}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 18vw"
              style={item.objectPosition ? { objectPosition: item.objectPosition } : undefined}
              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.0)_0%,rgba(0,0,0,0.12)_46%,rgba(0,0,0,0.42)_100%)]" />
          </div>
          <div className="absolute inset-x-8 bottom-0 h-10 rounded-full bg-white/5 blur-2xl" />
        </div>

        <div className="mt-4 space-y-1 px-1 sm:mt-5 sm:space-y-1.5 sm:px-2">
          <p className="text-[11px] leading-5 text-white/80 group-hover:text-[#C5A059] transition-colors duration-300 sm:text-[12px] lg:text-[14px]">{item.name}</p>
          <p className="text-[10px] uppercase tracking-[0.18em] text-white/50 sm:text-[11px] lg:text-[12px]">{item.price}</p>
        </div>
      </div>
    </article>
  );

  return (
    <section id="shop" className="bg-black py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="section-shell">
        <div className="relative">
          <p className="text-center font-serif text-[10px] uppercase tracking-[0.72em] text-white/78 sm:text-[11px]">
            {content.heading}
          </p>
          <p className="mt-3 text-center text-[7px] uppercase tracking-[0.42em] text-white/34 sm:mt-4 sm:text-[8px] lg:absolute lg:right-[10%] lg:top-0 lg:mt-0">
            {content.note}
          </p>
        </div>

        {/* Mobile: 2 cols, sm: 2 cols, md: 3 cols, lg: full 5-col layout */}
        <div className="mt-8 grid grid-cols-2 gap-4 sm:mt-10 sm:gap-5 md:grid-cols-3 md:gap-6 lg:grid-cols-[0.8fr_repeat(4,minmax(0,1fr))] lg:items-start lg:gap-7">
          {/* Detail frames column — hidden on mobile, shown from md */}
          <div className="hidden md:grid gap-4 lg:h-[24rem] lg:grid-rows-[1.18fr_0.82fr]">
              {content.detailFrames.map((frame, index) => (
                <div
                  key={`${frame.imageAlt}-${index}`}
                  className={[
                    "relative overflow-hidden bg-[#050404]",
                    index === 0
                      ? "min-h-[10rem] lg:min-h-0"
                      : "min-h-[8rem] lg:min-h-0",
                  ].join(" ")}
                >
                  <Image
                    src={frame.image}
                    alt={frame.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 33vw, 14vw"
                    style={frame.objectPosition ? { objectPosition: frame.objectPosition } : undefined}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.1)_52%,rgba(0,0,0,0.34)_100%)]" />
                </div>
              ))}
          </div>

          {content.items.map((item) => renderProduct(item))}
        </div>
      </div>
    </section>
  );
}
