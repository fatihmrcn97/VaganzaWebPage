type SliderDotsProps = {
  activeIndex?: number;
  count?: number;
};

export function SliderDots({ activeIndex = 0, count = 2 }: SliderDotsProps) {
  return (
    <div className="flex items-center gap-2" aria-hidden="true">
      {Array.from({ length: count }).map((_, index) => (
        <span
          key={index}
          className={[
            "h-1.5 rounded-full transition-all duration-300",
            index === activeIndex ? "w-4 bg-white" : "w-1.5 bg-white/45",
          ].join(" ")}
        />
      ))}
    </div>
  );
}
