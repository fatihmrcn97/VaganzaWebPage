import type { NewsletterContent } from "../data/site-content";

type NewsletterSectionProps = {
  content: NewsletterContent;
};

export function NewsletterSection({ content }: NewsletterSectionProps) {
  return (
    <section className="bg-bone py-12 text-earth sm:py-16 lg:py-20">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <p className="text-[10px] uppercase tracking-[0.4em] text-earth/75 sm:text-[11px] sm:tracking-[0.55em]">
          {content.heading}
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-balance text-[13px] leading-6 text-earth/72 sm:mt-5 sm:text-sm sm:leading-7">
          {content.description}
        </p>
        <form className="mx-auto mt-6 flex max-w-[30rem] flex-col gap-3 sm:mt-8 sm:flex-row">
          <label className="sr-only" htmlFor="email">
            Email address
          </label>
          <input
            id="email"
            type="email"
            placeholder={content.placeholder}
            className="h-11 flex-1 border border-earth/20 bg-transparent px-4 text-[13px] outline-none placeholder:text-earth/46 focus:border-earth/45 sm:h-12 sm:text-sm"
          />
          <button
            type="submit"
            className="h-11 bg-earth px-5 text-[9px] uppercase tracking-[0.35em] text-bone hover:bg-[#15100f] transition-colors sm:h-12 sm:text-[10px] sm:tracking-[0.45em]"
          >
            Join
          </button>
        </form>
      </div>
    </section>
  );
}
