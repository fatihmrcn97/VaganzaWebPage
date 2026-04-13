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
      className="flex h-14 items-center justify-center bg-white text-[11px] uppercase tracking-[0.48em] text-[#3b312b] transition-colors hover:bg-[#f4f1ed]"
    >
      {label}
    </Link>
  );
}

function SummerCard({ alt, href, image, title }: Required<Pick<EditorialTileProps, "alt" | "href" | "image" | "title">>) {
  return (
    <Link href={href} className="group relative block overflow-hidden">
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
    <Link href={href} className="group flex flex-col items-center">
      <div className={`relative h-[168px] overflow-hidden ${widthClassName}`}>
        <img
          src={image}
          alt={alt}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.015]"
          style={{ objectPosition: objectPosition ?? "center center" }}
          loading="lazy"
        />
        <div className="absolute inset-x-0 bottom-[9px] text-center text-[8px] uppercase tracking-[0.34em] text-white/92">
          {title}
        </div>
      </div>
      <span className="mt-[7px] text-center text-[5px] uppercase tracking-[0.62em] text-[#364045]">{caption}</span>
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

        <section className="grid gap-0 lg:grid-cols-[1fr_1.2fr_1fr]">
          <div className="flex flex-col">
            <EditorialImage
              alt={autumnLeft.alt}
              image={autumnLeft.image}
              className="aspect-[376/540] min-h-[26rem] sm:min-h-[34rem]"
            />
            {autumnLeft.buttonLabel ? (
              <EditorialButton href={autumnLeft.href} label={autumnLeft.buttonLabel} />
            ) : null}
          </div>

          <div className="relative">
            <EditorialImage
              alt={autumnCenter.alt}
              image={autumnCenter.image}
              className="aspect-[464/594] min-h-[28rem] sm:min-h-[38rem]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_12%,rgba(0,0,0,0.16)_46%,rgba(0,0,0,0.34)_100%)]" />
            <div className="absolute inset-x-6 bottom-20 text-center text-[14px] uppercase tracking-[0.46em] text-white/88 sm:bottom-28 sm:text-[16px]">
              {lookbookContent.autumn.title}
            </div>
            <div className="absolute inset-x-0 bottom-6 flex justify-center sm:bottom-10">
              <Link
                href={autumnCenter.href}
                className="flex h-12 min-w-[10rem] items-center justify-center bg-[rgba(204,179,145,0.42)] px-8 text-[10px] uppercase tracking-[0.46em] text-white/96 backdrop-blur-sm transition-colors hover:bg-[rgba(204,179,145,0.56)]"
              >
                {autumnCenter.buttonLabel}
              </Link>
            </div>
          </div>

          <div className="flex flex-col">
            <EditorialImage
              alt={autumnRight.alt}
              image={autumnRight.image}
              className="aspect-[398/540] min-h-[26rem] sm:min-h-[34rem]"
            />
            {autumnRight.buttonLabel ? (
              <EditorialButton href={autumnRight.href} label={autumnRight.buttonLabel} />
            ) : null}
          </div>
        </section>

        <section className="grid grid-cols-1 gap-0 sm:grid-cols-3">
          <div className="aspect-[16/9] sm:aspect-[16/7] lg:aspect-[16/5]">
            <SummerCard
              alt={summerLeft.alt}
              href={summerLeft.href}
              image={summerLeft.image}
              title={summerLeft.title!}
            />
          </div>
          <div className="aspect-[16/9] sm:aspect-[16/7] lg:aspect-[16/5]">
            <SummerCard
              alt={summerCenter.alt}
              href={summerCenter.href}
              image={summerCenter.image}
              title={summerCenter.title!}
            />
          </div>
          <div className="aspect-[16/9] sm:aspect-[16/7] lg:aspect-[16/5]">
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
          className="flex min-h-[180px] items-center justify-center bg-[#f5f5f5] px-4 text-center text-[#111111] sm:min-h-[220px]"
        >
          <div className="w-full max-w-[500px]">
            <p className="text-[10px] font-medium uppercase tracking-[0.45em] text-[#121212]">
              {lookbookContent.newsletter.heading}
            </p>
            <p className="mx-auto mt-[12px] max-w-[400px] text-[11px] leading-[1.6] text-[#1f1f1f]">
              {lookbookContent.newsletter.description}
            </p>
            <div className="mx-auto mt-[24px] flex w-full max-w-[320px] overflow-hidden border border-[#868686]">
              <label htmlFor="lookbook-email" className="sr-only">
                Email address
              </label>
              <input
                id="lookbook-email"
                type="email"
                placeholder={lookbookContent.newsletter.placeholder}
                className="h-[38px] min-w-0 flex-1 border-0 bg-white px-[14px] text-[11px] text-[#121212] outline-none placeholder:text-[#4f4f4f]"
              />
              <button
                type="button"
                className="flex h-[38px] w-[38px] items-center justify-center bg-black text-[16px] leading-none text-white"
              >
                &rsaquo;
              </button>
            </div>
          </div>
        </section>

        {/* Posters Bar */}
        <div className="bg-[#c4d4d8] pb-[30px] pt-[20px]">
          <div className="mb-[15px] text-center text-[8px] uppercase tracking-[0.6em] text-[#364045]/80">
            Vaganza Seasons
          </div>
          <div className="mx-auto flex items-center justify-center gap-[4px] px-4">
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
