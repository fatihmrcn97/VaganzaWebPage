"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import type {
  HeroCampaignSlide,
  HeroEditorialSlide,
  HeroPrimaryContent,
} from "../data/site-content";

type HeroPrimaryProps = {
  content: HeroPrimaryContent;
};

/* ─── Premium easing curves ─── */
const EASE_LUXURY = [0.19, 1.0, 0.22, 1.0] as const; // Expo-style out
const EASE_SMOOTH = [0.45, 0.0, 0.15, 1.0] as const; // Smooth in-out

/* ─── Slide-level motion configs ─── */
const slideContentVariants = {
  enter: {
    opacity: 0,
    y: 40,
    scale: 0.97,
    filter: "blur(6px)",
  },
  center: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: EASE_LUXURY,
      staggerChildren: 0.08,
    },
  },
  exit: {
    opacity: 0,
    y: -30,
    scale: 1.02,
    filter: "blur(4px)",
    transition: {
      duration: 0.5,
      ease: EASE_SMOOTH,
    },
  },
} as const;

const bgVariants = {
  enter: {
    opacity: 0,
    scale: 1.12,
  },
  center: {
    opacity: 1,
    scale: 1.0,
    transition: {
      opacity: { duration: 1.2, ease: "easeOut" as const },
      scale: { duration: 1.8, ease: EASE_LUXURY },
    },
  },
  exit: {
    opacity: 0,
    scale: 1.05,
    transition: {
      duration: 0.8,
      ease: "easeInOut" as const,
    },
  },
} as const;

/* ─── Campaign slide (slide 1) ─── */
function CampaignHeroSlide({ slide }: { slide: HeroCampaignSlide }) {
  return (
    <div
      id={slide.id}
      className="relative section-shell flex min-h-[96svh] items-end pb-20 pt-24 sm:pb-28 sm:pt-28 lg:min-h-screen lg:pb-20"
    >
      <div
        className={[
          "relative z-10 w-full grid items-end gap-6 sm:gap-8 lg:gap-12",
          slide.alignment === "left-model"
            ? "lg:grid-cols-[minmax(0,30rem)_1fr]"
            : "lg:grid-cols-[1fr_minmax(0,34rem)]",
        ].join(" ")}
      >
        <div
          className={[
            "max-w-[34rem] font-light drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]",
            slide.alignment === "left-model" ? "" : "lg:order-2 lg:justify-self-end",
          ].join(" ")}
        >
          <motion.p 
            initial={{ opacity: 0, y: 10, filter: "blur(3px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.3, duration: 0.8, ease: EASE_LUXURY }}
            className="luxury-kicker"
          >
            {slide.label}
          </motion.p>
          {slide.title ? (
            <motion.h2 
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.4, duration: 0.9, ease: EASE_LUXURY }}
              className="mt-3 font-serif text-[1.5rem] uppercase tracking-[0.16em] text-white sm:mt-5 sm:text-[2rem] lg:text-[2.6rem]"
            >
              {slide.title}
            </motion.h2>
          ) : null}
          <motion.div 
            initial={{ opacity: 0, y: 25, filter: "blur(3px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.5, duration: 0.9, ease: EASE_LUXURY }}
            className="mt-4 space-y-3 text-[11px] leading-[1.5] text-white/78 sm:mt-6 sm:space-y-4 sm:text-[12px] sm:leading-6 lg:text-[13px] lg:leading-7"
          >
            {slide.copy.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 1, ease: EASE_LUXURY }}
            className="mt-4 font-serif text-base italic tracking-[0.18em] text-white/92 sm:mt-5 sm:text-lg"
          >
            {slide.signature}
          </motion.p>
          <div className="mt-5 flex flex-wrap gap-3 text-[9px] uppercase tracking-[0.4em] text-white/68 sm:mt-7 sm:gap-4 sm:text-[10px]">
            {slide.captionTags.map((tag, i) => (
              <motion.span 
                key={tag}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + (i * 0.12), duration: 0.6, ease: EASE_LUXURY }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>

        {slide.modelImage ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, filter: "blur(8px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ delay: 0.3, duration: 1.2, ease: EASE_LUXURY }}
            className={[
              "relative flex justify-center",
              slide.alignment === "left-model"
                ? "lg:justify-end"
                : "lg:order-1 lg:justify-start",
            ].join(" ")}
          >
            <div className="relative h-[40vh] w-[12rem] min-w-[9rem] sm:h-[50vh] sm:w-[16rem] md:h-[56vh] md:w-[18rem] lg:h-[72vh] lg:w-[22rem]">
              <Image
                src={slide.modelImage}
                alt={slide.modelAlt}
                fill
                priority
                sizes="(max-width: 640px) 12rem, (max-width: 1024px) 18rem, 22rem"
                className="mask-editorial object-contain object-bottom opacity-92 mix-blend-screen"
              />
              <div className="absolute inset-x-6 bottom-0 h-20 rounded-full bg-black/45 blur-3xl" />
            </div>
          </motion.div>
        ) : null}
      </div>
    </div>
  );
}

/* ─── Editorial slide (slide 2) — premium card animations ─── */

/* Card entrance variants — staggered 3D perspective reveal */
const cardLeftVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    x: -40,
    rotateY: 8,
    scale: 0.88,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    rotateY: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.1,
      delay: 0.15,
      ease: EASE_LUXURY,
    },
  },
};

const cardCenterVariants = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.85,
    filter: "blur(12px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.3,
      delay: 0.05,
      ease: EASE_LUXURY,
    },
  },
};

/* About Us — dramatic text reveal */
const aboutContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.4,
    },
  },
};

const aboutTitleVariants = {
  hidden: {
    opacity: 0,
    x: 40,
    clipPath: "inset(0 100% 0 0)",
  },
  visible: {
    opacity: 1,
    x: 0,
    clipPath: "inset(0 0% 0 0)",
    transition: {
      duration: 0.9,
      ease: EASE_LUXURY,
    },
  },
};

const aboutTextVariants = {
  hidden: {
    opacity: 0,
    y: 18,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: EASE_LUXURY,
    },
  },
};

const aboutSignatureVariants = {
  hidden: {
    opacity: 0,
    x: -30,
    clipPath: "inset(0 0 0 100%)",
  },
  visible: {
    opacity: 1,
    x: 0,
    clipPath: "inset(0 0 0 0%)",
    transition: {
      duration: 1.0,
      ease: EASE_LUXURY,
    },
  },
};

const aboutTagVariants = {
  hidden: {
    opacity: 0,
    y: 10,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: EASE_LUXURY,
    },
  },
};

/* Golden accent line that sweeps under the About title */
const goldenLineVariants = {
  hidden: {
    scaleX: 0,
    opacity: 0,
    originX: 0,
  },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 1.0,
      delay: 0.6,
      ease: EASE_LUXURY,
    },
  },
};

function EditorialHeroSlide({ slide }: { slide: HeroEditorialSlide }) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      id={slide.id}
      ref={containerRef}
      className="relative section-shell flex min-h-[96svh] items-center py-24 sm:py-28 lg:min-h-screen lg:py-0"
      style={{ perspective: "1200px" }}
    >
      <div className="relative mx-auto grid w-full max-w-[84rem] grid-cols-1 items-center gap-8 sm:grid-cols-3 sm:gap-6 lg:grid-cols-[1fr_1.15fr_0.85fr] lg:gap-10">

        {/* Left card — sweeps in from the left with subtle 3D rotation */}
        <motion.article 
          variants={cardLeftVariants}
          initial="hidden"
          animate="visible"
          className="group relative z-20 mx-auto w-full max-w-[20rem] overflow-hidden border border-white/10 bg-black/20 shadow-editorial sm:max-w-none"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="relative aspect-[0.72] min-h-[16rem] sm:min-h-[20rem] lg:min-h-[24rem]">
            {/* Inner image with its own reveal animation */}
            <motion.div
              initial={{ scale: 1.15 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.6, delay: 0.2, ease: EASE_LUXURY }}
              className="absolute inset-0"
            >
              <Image
                src={slide.leftCard.image}
                alt={slide.leftCard.imageAlt}
                fill
                priority
                sizes="(max-width: 640px) 80vw, 24vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </motion.div>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.16)_42%,rgba(0,0,0,0.74)_100%)]" />
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8, ease: EASE_LUXURY }}
              className="absolute inset-x-4 bottom-5 sm:inset-x-5 sm:bottom-6 lg:inset-x-8 lg:bottom-10"
            >
              <div className="flex items-center justify-between text-[6.5px] sm:text-[7.5px] md:text-[8.5px] lg:text-[10px] uppercase tracking-[0.38em] text-white/68">
                <span>{slide.leftCard.kicker}</span>
                <span>{slide.leftCard.meta}</span>
              </div>
              <Link
                href="/lookbook"
                className="mt-3 inline-block sm:mt-4 md:mt-5 border border-white/20 bg-white/10 px-3 py-1.5 text-[6.5px] sm:px-4 sm:py-2 sm:text-[7.5px] lg:px-5 lg:py-2.5 lg:text-[9.5px] uppercase tracking-[0.42em] text-white/90 backdrop-blur-md hover:bg-white/20 hover:border-white/40 hover:scale-[1.03] transition-all duration-300"
              >
                {slide.leftCard.buttonLabel}
              </Link>
            </motion.div>
          </div>
        </motion.article>

        {/* Center card — rises from below with cinematic scale */}
        <motion.article 
          variants={cardCenterVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 mx-auto w-full max-w-[20rem] overflow-hidden border border-white/8 bg-black/20 shadow-editorial sm:max-w-none"
        >
          <Link href="/lookbook" className="group block">
            <div className="relative aspect-[0.78] min-h-[18rem] sm:min-h-[22rem] lg:min-h-[36rem]">
              {/* Inner image zoom-in reveal */}
              <motion.div
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.8, delay: 0.1, ease: EASE_LUXURY }}
                className="absolute inset-0"
              >
                <Image
                  src={slide.centerCard.image}
                  alt={slide.centerCard.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 640px) 80vw, 36vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </motion.div>
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.06)_0%,rgba(0,0,0,0.16)_42%,rgba(0,0,0,0.5)_100%)]" />
              <motion.div 
                initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.7, duration: 1.0, ease: EASE_LUXURY }}
                className="absolute inset-x-4 bottom-10 text-center sm:inset-x-5 sm:bottom-12 md:bottom-16 lg:bottom-24 transition-transform duration-500 group-hover:scale-[1.01]"
              >
                <h2 className="font-serif text-[1.1rem] sm:text-[1.3rem] md:text-[1.6rem] lg:text-[2.6rem] uppercase tracking-[0.08em] text-white">
                  {slide.centerCard.title}
                </h2>
                <motion.p 
                  initial={{ opacity: 0, letterSpacing: "0em" }}
                  animate={{ opacity: 1, letterSpacing: "0.4em" }}
                  transition={{ delay: 1.0, duration: 1.2, ease: EASE_LUXURY }}
                  className="mt-2 text-[7px] sm:mt-3 sm:text-[8.5px] lg:mt-4 lg:text-[11px] uppercase text-white/74"
                >
                  {slide.centerCard.subtitle}
                </motion.p>
              </motion.div>
            </div>
          </Link>
        </motion.article>

        {/* About Us aside — dramatic cascading text reveal */}
        <motion.aside 
          variants={aboutContainerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-20 mx-auto flex w-full max-w-[14rem] lg:max-w-none items-center lg:px-0 lg:py-0 transition-all duration-500"
        >
          <div className="w-full max-w-[12rem] sm:max-w-[13rem] lg:max-w-[18rem] mx-auto font-light">
            {/* About title with golden sweep */}
            <div className="relative">
              <motion.p 
                variants={aboutTitleVariants}
                className="font-serif text-[0.8rem] sm:text-[0.9rem] lg:text-[1rem] uppercase tracking-[0.2em] text-[#C5A059]"
              >
                ABOUT US
              </motion.p>
              {/* Golden accent line */}
              <motion.div 
                variants={goldenLineVariants}
                className="mt-1.5 h-[1px] w-12 bg-gradient-to-r from-[#C5A059] to-[#C5A059]/0"
              />
            </div>
            
            {/* Body paragraphs with staggered blur-up reveal */}
            <div className="mt-2 sm:mt-3 space-y-1 sm:space-y-1.5 text-[8px] sm:text-[9px] lg:text-[10px] leading-[1.2] sm:leading-[1.3] text-white/70">
              {slide.body.map((paragraph, i) => (
                <motion.p 
                  key={paragraph}
                  variants={aboutTextVariants}
                  custom={i}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
            
            {/* Caption tags with scale-pop */}
            <div className="mt-2 sm:mt-3 flex flex-wrap gap-1.5 text-[7px] sm:text-[8px] uppercase tracking-[0.3em] text-white/50">
              {slide.captionTags.map((tag) => (
                <motion.span 
                  key={tag}
                  variants={aboutTagVariants}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
            
            {/* Signature with clip-path reveal from left */}
            <motion.p 
              variants={aboutSignatureVariants}
              className="mt-2 font-serif text-[9px] sm:text-[11px] italic tracking-[0.16em] text-white/80"
            >
              {slide.signature}
            </motion.p>
          </div>
        </motion.aside>

      </div>
    </div>
  );
}

export function HeroPrimary({ content }: HeroPrimaryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSlowMode, setIsSlowMode] = useState(false);
  
  const activeSlide = content.slides[activeIndex];

  const paginate = useCallback((newIndex: number) => {
    setActiveIndex(newIndex);
    if (!isSlowMode) setIsSlowMode(true);
  }, [isSlowMode]);

  // Auto-play slider with dynamic interval
  useEffect(() => {
    const intervalTime = isSlowMode ? 8000 : 4500;
    
    const timer = setInterval(() => {
      setActiveIndex((prev) => {
        const nextIndex = (prev + 1) % content.slides.length;
        if (nextIndex === content.slides.length - 1) {
          setIsSlowMode(true);
        }
        return nextIndex;
      });
    }, intervalTime);
    
    return () => clearInterval(timer);
  }, [content.slides.length, isSlowMode]);

  return (
    <section className="relative min-h-[96svh] w-full overflow-hidden bg-black lg:min-h-screen">
      {/* BACKGROUNDS: Cinematic cross-fade with parallax zoom */}
      <AnimatePresence initial={false}>
        <motion.div
           key={`bg-${activeSlide.id}`}
           variants={bgVariants}
           initial="enter"
           animate="center"
           exit="exit"
           className="absolute inset-0 z-0"
        >
          {/* Blurred background for mobile letterboxing */}
          <Image
            src={activeSlide.backgroundImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-40 blur-3xl lg:hidden"
          />
          <Image
            src={activeSlide.backgroundImage}
            alt={activeSlide.backgroundAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center motion-safe:animate-slow-zoom"
          />
        </motion.div>
      </AnimatePresence>

      {/* Cinematic overlay grain + vignette */}
      <div className="pointer-events-none absolute inset-0 z-[5] bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />

      {/* CONTENT: Premium slide transition with blur + scale */}
      <div className="relative z-10 w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide.id}
            variants={slideContentVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            {activeSlide.variant === "campaign" ? (
              <CampaignHeroSlide slide={activeSlide} />
            ) : (
              <EditorialHeroSlide slide={activeSlide} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination dots with premium styling */}
      <div className="absolute bottom-5 left-1/2 z-30 -translate-x-1/2">
        <div className="flex items-center gap-2.5">
          {content.slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              aria-label={`Show slide ${index + 1}`}
              onClick={() => paginate(index)}
              className="relative h-1.5 rounded-full transition-all duration-500 overflow-hidden"
              style={{ width: activeIndex === index ? "2rem" : "0.375rem" }}
            >
              <span
                className={[
                  "absolute inset-0 rounded-full transition-all duration-500",
                  activeIndex === index
                    ? "bg-gradient-to-r from-white/90 to-white/60"
                    : "bg-white/40",
                ].join(" ")}
              />
              {activeIndex === index && (
                <motion.span
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: isSlowMode ? 8 : 4.5, ease: "linear" }}
                  className="absolute inset-0 rounded-full bg-[#C5A059]/70"
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
