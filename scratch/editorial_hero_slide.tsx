function EditorialHeroSlide({ slide }: { slide: HeroEditorialSlide }) {
  return (
    <div
      id={slide.id}
      className="relative section-shell flex min-h-[96svh] items-center py-20 sm:py-24 lg:min-h-screen lg:py-0"
    >
      <div className="relative mx-auto grid w-full max-w-[76rem] grid-cols-1 items-center gap-6 sm:grid-cols-3 sm:gap-4 lg:grid-cols-[0.92fr_1.12fr_0.92fr] lg:gap-8">

        {/* Left card */}
        <article className="group relative z-20 mx-auto w-full max-w-[20rem] overflow-hidden border border-white/10 bg-black/20 shadow-editorial sm:max-w-none">
          <div className="relative aspect-[0.72] min-h-[12rem] sm:min-h-0 lg:min-h-[21rem]">
            <Image
              src={slide.leftCard.image}
              alt={slide.leftCard.imageAlt}
              fill
              priority
              sizes="(max-width: 640px) 80vw, 24vw"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.16)_42%,rgba(0,0,0,0.74)_100%)]" />
            <div className="absolute inset-x-4 bottom-4 sm:inset-x-3 sm:bottom-4 lg:inset-x-5 lg:bottom-5">
              <div className="flex items-center justify-between text-[7px] sm:text-[8px] uppercase tracking-[0.38em] text-white/68">
                <span>{slide.leftCard.kicker}</span>
                <span>{slide.leftCard.meta}</span>
              </div>
              <button
                type="button"
                className="mt-3 sm:mt-4 border border-white/20 bg-white/10 px-3 py-1.5 text-[7px] sm:px-4 sm:py-2 sm:text-[8px] lg:px-5 lg:py-2.5 lg:text-[9px] uppercase tracking-[0.42em] text-white/90 backdrop-blur-md hover:bg-white/20 hover:border-white/40 hover:scale-[1.03] transition-all duration-300"
              >
                {slide.leftCard.buttonLabel}
              </button>
            </div>
          </div>
        </article>

        {/* Center card */}
        <article className="relative z-10 mx-auto w-full max-w-[20rem] overflow-hidden border border-white/8 bg-black/20 shadow-editorial sm:max-w-none">
          <div className="relative aspect-[0.78] min-h-[14rem] sm:min-h-0 lg:min-h-[36rem]">
            <Image
              src={slide.centerCard.image}
              alt={slide.centerCard.imageAlt}
              fill
              priority
              sizes="(max-width: 640px) 80vw, 36vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.06)_0%,rgba(0,0,0,0.16)_42%,rgba(0,0,0,0.5)_100%)]" />
            <div className="absolute inset-x-4 bottom-8 text-center sm:inset-x-3 sm:bottom-10 lg:inset-x-6 lg:bottom-16">
              <h2 className="font-serif text-[1.2rem] sm:text-[1.5rem] lg:text-[2.5rem] uppercase tracking-[0.08em] text-white">
                {slide.centerCard.title}
              </h2>
              <p className="mt-2 sm:mt-3 text-[8px] sm:text-[9px] lg:text-[10px] uppercase tracking-[0.4em] text-white/74">
                {slide.centerCard.subtitle}
              </p>
            </div>
          </div>
        </article>

        {/* About Us aside — Tightly integrated in the grid to prevent overlap */}
        <aside className="relative z-20 mx-auto flex w-full max-w-[14rem] lg:max-w-none items-center lg:px-0 lg:py-0 transition-all duration-500">
          <div className="w-full max-w-[12rem] sm:max-w-[13rem] lg:max-w-[18rem] mx-auto font-light">
            <p className="font-serif text-[0.8rem] sm:text-[0.9rem] lg:text-[1rem] uppercase tracking-[0.2em] text-[#C5A059]">
              ABOUT US
            </p>
            <div className="mt-2 sm:mt-3 space-y-1 sm:space-y-1.5 text-[8px] sm:text-[9px] lg:text-[10px] leading-[1.2] sm:leading-[1.3] text-white/70">
              {slide.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-2 sm:mt-3 flex flex-wrap gap-1.5 text-[7px] sm:text-[8px] uppercase tracking-[0.3em] text-white/50">
              {slide.captionTags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <p className="mt-2 font-serif text-[9px] sm:text-[11px] italic tracking-[0.16em] text-white/80">
              {slide.signature}
            </p>
          </div>
        </aside>

      </div>
    </div>
  );
}
