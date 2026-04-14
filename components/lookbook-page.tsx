import Link from "next/link";
import { lookbookContent } from "../data/lookbook-content";
import { LookbookVideoHero } from "./lookbook-video-hero";

type EditorialTileProps = {
  alt: string;
  buttonLabel?: string;
  className?: string;
  href: string;
  image: string;
  title?: string;
};

type PosterCardProps = (typeof lookbookContent.seasons.posters)[number];

function EditorialImage({ alt, image, className = "" }: Pick<EditorialTileProps, "alt" | "image" | "className">) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img src={image} alt={alt} className="h-full w-full object-cover object-center" loading="lazy" />
    </div>
  );
}

function EditorialButton({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="flex h-12 sm:h-14 lg:h-16 items-center justify-center bg-white border border-transparent text-[10px] sm:text-[11px] lg:text-[12px] uppercase tracking-[0.48em] text-[#3b312b] transition-all duration-300 hover:bg-[#3b312b] hover:text-white hover:border-[#3b312b] hover:scale-[1.02]"
    >
      {label}
    </Link>
  );
}

function SummerCard({ alt, href, image, title }: Required<Pick<EditorialTileProps, "alt" | "href" | "image" | "title">>) {
  return (
    <Link href={href} className="group relative block h-full overflow-hidden">
      <img
        src={image}
        alt={alt}
        className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_10%,rgba(0,0,0,0.08)_54%,rgba(0,0,0,0.22)_100%)]" />
      <div className="absolute inset-x-4 bottom-2 text-center text-[7px] uppercase tracking-[0.36em] text-white/90 sm:bottom-3 sm:text-[8px]">
        {title}
      </div>
    </Link>
  );
}

function PosterCard({
  alt,
  caption,
  href,
  image,
  objectPosition,
  title,
  widthClassName = "w-[82px]",
}: PosterCardProps) {
  return (
    <Link href={href} className="group flex flex-col items-center flex-shrink-0">
      <div className={`relative h-[120px] w-[126px] sm:h-[156px] sm:w-[162px] md:h-[180px] md:w-[189px] lg:h-[202px] lg:${widthClassName}`}>
        <img
          src={image}
          alt={alt}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.015]"
          style={{ objectPosition: objectPosition ?? "center center" }}
          loading="lazy"
        />
        <div className="absolute inset-x-0 bottom-[5px] text-center text-[6px] uppercase tracking-[0.2em] text-white/92 sm:bottom-[7px] sm:text-[7px] sm:tracking-[0.28em] lg:bottom-[9px] lg:text-[8px] lg:tracking-[0.34em]">
          {title}
        </div>
      </div>
      <span className="mt-[5px] text-center text-[4px] uppercase tracking-[0.4em] text-[#364045] sm:mt-[6px] sm:text-[5px] sm:tracking-[0.5em] lg:mt-[7px] lg:tracking-[0.62em]">{caption}</span>
    </Link>
  );
}

export function LookbookPage() {
  const [autumnLeft, autumnCenter, autumnRight] = lookbookContent.autumn.cards;
  const [summerLeft, summerCenter, summerRight] = lookbookContent.summer.cards;

  return (
    <>
      <div className="bg-white text-[#2e2620]">
        <LookbookVideoHero content={lookbookContent.hero} />
        
        <main>

        {/* Autumn editorial — stacked on mobile, 3 cols on lg */}
        <section className="grid grid-cols-1 gap-0 md:grid-cols-3 lg:grid-cols-[1fr_1.2fr_1fr]">
          <div className="flex flex-col">
            <EditorialImage
              alt={autumnLeft.alt}
              image={autumnLeft.image}
              className="aspect-[4/5] min-h-[18rem] sm:min-h-[24rem] md:min-h-0 md:flex-1"
            />
            {autumnLeft.buttonLabel ? (
              <EditorialButton href={autumnLeft.href} label={autumnLeft.buttonLabel} />
            ) : null}
          </div>

          <div className="relative">
            <EditorialImage
              alt={autumnCenter.alt}
              image={autumnCenter.image}
              className="aspect-[4/5] min-h-[20rem] sm:min-h-[28rem] md:min-h-0 md:h-full"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_12%,rgba(0,0,0,0.16)_46%,rgba(0,0,0,0.34)_100%)]" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              <h2 className="text-[14px] uppercase tracking-[0.46em] text-white/90 sm:text-[18px] lg:text-[22px] animate-fade-up">
                {lookbookContent.autumn.title}
              </h2>
              <div className="absolute bottom-[22%] left-1/2 -translate-x-1/2">
                <Link
                  href={autumnCenter.href}
                  className="flex h-10 min-w-[8rem] items-center justify-center bg-[rgba(204,179,145,0.42)] border border-white/20 px-5 text-[9px] uppercase tracking-[0.36em] text-white/96 backdrop-blur-md transition-all duration-300 hover:bg-[rgba(204,179,145,0.7)] hover:border-white/50 hover:scale-[1.03] sm:h-12 sm:min-w-[10rem] sm:px-8 sm:text-[10px] sm:tracking-[0.46em] lg:h-14 lg:min-w-[12rem] lg:text-[11px]"
                >
                  {autumnCenter.buttonLabel}
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <EditorialImage
              alt={autumnRight.alt}
              image={autumnRight.image}
              className="aspect-[4/5] min-h-[18rem] sm:min-h-[24rem] md:min-h-0 md:flex-1"
            />
            {autumnRight.buttonLabel ? (
              <EditorialButton href={autumnRight.href} label={autumnRight.buttonLabel} />
            ) : null}
          </div>
        </section>

        {/* Summer cards */}
        <section className="grid grid-cols-1 gap-0 sm:grid-cols-3">
          <div className="aspect-[16/27.7] sm:aspect-[16/21.3] lg:aspect-[16/15.3]">
            <SummerCard
              alt={summerLeft.alt}
              href={summerLeft.href}
              image={summerLeft.image}
              title={summerLeft.title!}
            />
          </div>
          <div className="aspect-[16/27.7] sm:aspect-[16/21.3] lg:aspect-[16/15.3]">
            <SummerCard
              alt={summerCenter.alt}
              href={summerCenter.href}
              image={summerCenter.image}
              title={summerCenter.title!}
            />
          </div>
          <div className="aspect-[16/27.7] sm:aspect-[16/21.3] lg:aspect-[16/15.3]">
            <SummerCard
              alt={summerRight.alt}
              href={summerRight.href}
              image={summerRight.image}
              title={summerRight.title!}
            />
          </div>
        </section>

      </main>

      <footer className="mt-auto">
        {/* Newsletter Section */}
        <section
          id="newsletter"
          className="flex min-h-[160px] items-center justify-center bg-[#f5f5f5] px-4 py-8 text-center text-[#111111] sm:min-h-[180px] sm:py-10 lg:min-h-[220px]"
        >
          <div className="w-full max-w-[500px]">
            <p className="text-[9px] font-medium uppercase tracking-[0.35em] text-[#121212] sm:text-[10px] sm:tracking-[0.45em]">
              {lookbookContent.newsletter.heading}
            </p>
            <p className="mx-auto mt-2 max-w-[400px] text-[10px] leading-[1.5] text-[#1f1f1f] sm:mt-3 sm:text-[11px] sm:leading-[1.6]">
              {lookbookContent.newsletter.description}
            </p>
            <div className="mx-auto mt-4 flex w-full max-w-[280px] overflow-hidden border border-[#868686] sm:mt-6 sm:max-w-[320px]">
              <label htmlFor="lookbook-email" className="sr-only">
                Email address
              </label>
              <input
                id="lookbook-email"
                type="email"
                placeholder={lookbookContent.newsletter.placeholder}
                className="h-[34px] min-w-0 flex-1 border-0 bg-white px-3 text-[10px] text-[#121212] outline-none placeholder:text-[#4f4f4f] sm:h-[38px] sm:px-[14px] sm:text-[11px]"
              />
              <button
                type="button"
                className="flex h-[34px] w-[34px] items-center justify-center bg-black text-[14px] leading-none text-white sm:h-[38px] sm:w-[38px] sm:text-[16px]"
              >
                &rsaquo;
              </button>
            </div>
          </div>
        </section>

        {/* Posters Bar */}
        <div className="bg-[#c4d4d8] px-3 pb-5 pt-4 sm:px-4 sm:pb-6 sm:pt-5 lg:pb-[30px] lg:pt-[20px]">
          <div className="mb-3 text-center text-[7px] uppercase tracking-[0.4em] text-[#364045]/80 sm:mb-[12px] sm:text-[8px] sm:tracking-[0.5em] lg:mb-[15px] lg:tracking-[0.6em]">
            Vaganza Seasons
          </div>
          <div className="mx-auto flex items-center justify-center gap-1 overflow-x-auto px-1 hide-scrollbar sm:gap-[3px] sm:px-4 lg:gap-[4px]">
            {lookbookContent.seasons.posters.map((poster) => (
              <PosterCard key={`${poster.caption}-${poster.image}`} {...poster} />
            ))}
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}
