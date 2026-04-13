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
          <div className="relative h-[18rem] sm:h-[22rem] lg:h-[24rem]">
            <Image
              src={item.image}
              alt={item.imageAlt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 18vw"
              style={item.objectPosition ? { objectPosition: item.objectPosition } : undefined}
              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.0)_0%,rgba(0,0,0,0.12)_46%,rgba(0,0,0,0.42)_100%)]" />
          </div>
          <div className="absolute inset-x-8 bottom-0 h-10 rounded-full bg-white/5 blur-2xl" />
        </div>

        <div className="mt-5 space-y-1.5">
          <p className="text-[12px] leading-5 text-white/72">{item.name}</p>
          <p className="text-[11px] uppercase tracking-[0.18em] text-white/44">{item.price}</p>
        </div>
      </div>
    </article>
  );

  return (
    <section id="shop" className="bg-black py-16 sm:py-20 lg:py-24">
      <div className="section-shell">
        <div className="relative">
          <p className="text-center font-serif text-[11px] uppercase tracking-[0.72em] text-white/78">
            {content.heading}
          </p>
          <p className="mt-4 text-center text-[8px] uppercase tracking-[0.42em] text-white/34 lg:absolute lg:right-[10%] lg:top-0 lg:mt-0">
            {content.note}
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_repeat(4,minmax(0,1fr))] lg:items-start lg:gap-7">
          <div className="grid gap-4 lg:h-[24rem] lg:grid-rows-[1.18fr_0.82fr]">
              {content.detailFrames.map((frame, index) => (
                <div
                  key={`${frame.imageAlt}-${index}`}
                  className={[
                    "relative overflow-hidden bg-[#050404]",
                    index === 0
                      ? "min-h-[14rem] lg:min-h-0"
                      : "min-h-[10rem] lg:min-h-0",
                  ].join(" ")}
                >
                  <Image
                    src={frame.image}
                    alt={frame.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 14vw"
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
