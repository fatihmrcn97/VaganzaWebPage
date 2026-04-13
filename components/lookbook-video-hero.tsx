import type { LookbookHeroContent } from "../data/lookbook-content";

type LookbookVideoHeroProps = {
  content: LookbookHeroContent;
};

export function LookbookVideoHero({ content }: LookbookVideoHeroProps) {
  const embedSrc = `https://www.youtube-nocookie.com/embed/${content.videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${content.videoId}&playsinline=1&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0`;

  return (
    <section className="relative overflow-hidden bg-black">
      <div className="absolute inset-x-0 top-0 z-20 px-6 pt-5 sm:px-14 sm:pt-6">
        <div className="relative flex items-start justify-between text-white">
          <div className="text-[8px] uppercase tracking-[0.48em] text-white/78 sm:text-[9px]">
            {content.season}
          </div>

          <div className="absolute left-1/2 top-0 -translate-x-1/2 text-center text-[7px] uppercase tracking-[0.56em] text-white/90 sm:text-[8px]">
            <div>{content.brand}</div>
            <div className="mt-1 tracking-[0.44em] text-white/74">{content.label}</div>
          </div>
        </div>
      </div>

      <div className="relative aspect-[1240/668] min-h-[24rem] w-full overflow-hidden sm:min-h-[32rem] lg:min-h-[42rem]">
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2">
            <iframe
              className="h-full w-full pointer-events-none"
              src={embedSrc}
              title={`${content.brand} ${content.label} video background`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              tabIndex={-1}
            />
          </div>
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.12)_0%,rgba(0,0,0,0.04)_26%,rgba(0,0,0,0.18)_58%,rgba(0,0,0,0.5)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-28 bg-[linear-gradient(180deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.22)_100%)]" />

      </div>
    </section>
  );
}
