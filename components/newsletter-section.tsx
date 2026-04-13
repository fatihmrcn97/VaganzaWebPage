import type { NewsletterContent } from "../data/site-content";

type NewsletterSectionProps = {
  content: NewsletterContent;
};

export function NewsletterSection({ content }: NewsletterSectionProps) {
  return (
    <section className="bg-bone py-16 text-earth sm:py-20">
      <div className="mx-auto max-w-3xl px-6 text-center sm:px-8">
        <p className="text-[11px] uppercase tracking-[0.55em] text-earth/75">
          {content.heading}
        </p>
        <p className="mx-auto mt-5 max-w-2xl text-balance text-sm leading-7 text-earth/72">
          {content.description}
        </p>
        <form className="mx-auto mt-8 flex max-w-[30rem] flex-col gap-3 sm:flex-row">
          <label className="sr-only" htmlFor="email">
            Email address
          </label>
          <input
            id="email"
            type="email"
            placeholder={content.placeholder}
            className="h-12 flex-1 border border-earth/20 bg-transparent px-4 text-sm outline-none placeholder:text-earth/46 focus:border-earth/45"
          />
          <button
            type="submit"
            className="h-12 bg-earth px-5 text-[10px] uppercase tracking-[0.45em] text-bone hover:bg-[#15100f]"
          >
            Join
          </button>
        </form>
      </div>
    </section>
  );
}
