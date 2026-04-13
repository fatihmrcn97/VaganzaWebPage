"use client";

import Image from "next/image";
import type {
  HeroCampaignSlide,
  HeroEditorialSlide,
  HeroPrimaryContent,
} from "../data/site-content";
import { useState } from "react";

type HeroPrimaryProps = {
  content: HeroPrimaryContent;
};

function CampaignHeroSlide({ slide }: { slide: HeroCampaignSlide }) {
  return (
    <div
      id={slide.id}
      className="relative section-shell flex min-h-[96svh] items-end pb-12 pt-28 sm:pb-16 lg:min-h-screen lg:pb-20"
    >
      <div
        className={[
          "grid w-full items-end gap-8 lg:gap-12",
          slide.alignment === "left-model"
            ? "lg:grid-cols-[minmax(0,30rem)_1fr]"
            : "lg:grid-cols-[1fr_minmax(0,34rem)]",
        ].join(" ")}
      >
        <div
          className={[
            "max-w-[34rem] animate-fade-up",
            slide.alignment === "left-model" ? "" : "lg:order-2 lg:justify-self-end",
          ].join(" ")}
        >
          <p className="luxury-kicker">{slide.label}</p>
          {slide.title ? (
            <h2 className="mt-5 font-serif text-[1.9rem] uppercase tracking-[0.16em] text-white sm:text-[2.6rem]">
              {slide.title}
            </h2>
          ) : null}
          <div className="mt-6 space-y-4 text-[12px] leading-6 text-white/78 sm:text-[13px] sm:leading-7">
            {slide.copy.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-5 font-serif text-lg italic tracking-[0.18em] text-white/92">
            {slide.signature}
          </p>
          <div className="mt-7 flex flex-wrap gap-4 text-[10px] uppercase tracking-[0.4em] text-white/68">
            {slide.captionTags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        <div
          className={[
            "relative flex justify-center",
            slide.alignment === "left-model"
              ? "lg:justify-end"
              : "lg:order-1 lg:justify-start",
          ].join(" ")}
        >
          <div className="relative h-[48vh] w-[15rem] min-w-[11rem] sm:h-[56vh] sm:w-[18rem] lg:h-[72vh] lg:w-[22rem]">
            <Image
              src={slide.modelImage}
              alt={slide.modelAlt}
              fill
              priority
              sizes="(max-width: 1024px) 18rem, 22rem"
              className="mask-editorial object-contain object-bottom opacity-92 mix-blend-screen"
            />
            <div className="absolute inset-x-6 bottom-0 h-20 rounded-full bg-black/45 blur-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

function EditorialHeroSlide({ slide }: { slide: HeroEditorialSlide }) {
  return (
    <div
      id={slide.id}
      className="relative section-shell flex min-h-[96svh] items-center pt-24 sm:pt-28 lg:min-h-screen"
    >
      <div className="relative mx-auto grid w-full max-w-[76rem] items-center gap-6 lg:grid-cols-[0.92fr_1.12fr_0.92fr] lg:gap-8">
        <article className="group relative z-20 mx-auto w-[78%] max-w-[19rem] overflow-hidden border border-white/10 bg-black/20 shadow-editorial sm:w-[58%] lg:w-full lg:max-w-none">
          <div className="relative aspect-[0.72] min-h-[21rem]">
            <Image
              src={slide.leftCard.image}
              alt={slide.leftCard.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 50vw, 24vw"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.16)_42%,rgba(0,0,0,0.74)_100%)]" />
            <div className="absolute inset-x-4 bottom-4 sm:inset-x-5 sm:bottom-5">
              <div className="flex items-center justify-between text-[8px] uppercase tracking-[0.38em] text-white/68">
                <span>{slide.leftCard.kicker}</span>
                <span>{slide.leftCard.meta}</span>
              </div>
              <button
                type="button"
                className="mt-5 border border-white/20 bg-white/12 px-5 py-2 text-[9px] uppercase tracking-[0.42em] text-white/90 backdrop-blur-sm hover:bg-white/18"
              >
                {slide.leftCard.buttonLabel}
              </button>
            </div>
          </div>
        </article>

        <article className="relative z-10 mx-auto w-[84%] overflow-hidden border border-white/8 bg-black/20 shadow-editorial sm:w-[68%] lg:w-full">
          <div className="relative aspect-[0.78] min-h-[33rem] lg:min-h-[36rem]">
            <Image
              src={slide.centerCard.image}
              alt={slide.centerCard.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 84vw, 36vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.06)_0%,rgba(0,0,0,0.16)_42%,rgba(0,0,0,0.5)_100%)]" />
            <div className="absolute inset-x-6 bottom-12 text-center sm:bottom-16">
              <h2 className="font-serif text-[1.9rem] uppercase tracking-[0.08em] text-white sm:text-[2.5rem]">
                {slide.centerCard.title}
              </h2>
              <p className="mt-4 text-[10px] uppercase tracking-[0.4em] text-white/74">
                {slide.centerCard.subtitle}
              </p>
            </div>
          </div>
        </article>

        <aside className="relative z-20 mx-auto flex w-[78%] max-w-[19rem] items-center border border-white/8 bg-black/18 px-6 py-8 backdrop-blur-[1px] sm:w-[58%] sm:px-8 sm:py-10 lg:min-h-[31rem] lg:w-full lg:max-w-none lg:border-0 lg:bg-transparent lg:px-0 lg:py-0">
          <div className="max-w-[19rem] lg:mx-auto">
            <p className="font-serif text-[1.05rem] uppercase tracking-[0.18em] text-white/76">
              ABOUT US
            </p>
            <div className="mt-8 space-y-4 text-[11px] leading-6 text-white/48 sm:text-[11.5px]">
              {slide.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-[10px] uppercase tracking-[0.35em] text-white/42">
              {slide.captionTags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <p className="mt-5 font-serif text-sm italic tracking-[0.16em] text-white/72">
              {slide.signature}
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}

export function HeroPrimary({ content }: HeroPrimaryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = content.slides[activeIndex];

  return (
    <section className="relative min-h-[96svh] overflow-hidden bg-night lg:min-h-screen">
      <Image
        key={activeSlide.id}
        src={activeSlide.backgroundImage}
        alt={activeSlide.backgroundAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center motion-safe:animate-slow-zoom"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.78)_0%,rgba(0,0,0,0.35)_42%,rgba(0,0,0,0.62)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent via-black/20 to-ink" />

      {activeSlide.variant === "campaign" ? (
        <CampaignHeroSlide slide={activeSlide} />
      ) : (
        <EditorialHeroSlide slide={activeSlide} />
      )}

      <div className="absolute bottom-5 left-1/2 z-30 -translate-x-1/2">
        <div className="flex items-center gap-2.5">
          {content.slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              aria-label={`Show slide ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              className={[
                "h-1.5 rounded-full transition-all duration-300",
                activeIndex === index ? "w-4 bg-white" : "w-1.5 bg-white/45",
              ].join(" ")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
