import { useState, useCallback, useEffect } from "react";

interface CarouselImage {
  src: string;
  alt: string;
}

interface CarouselProps {
  images: CarouselImage[];
}

const Carousel = ({ images }: CarouselProps) => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(
    () => setCurrent((c) => (c + 1) % images.length),
    [images.length]
  );
  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + images.length) % images.length),
    [images.length]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  return (
    <div className="w-full">
      <div className="relative overflow-hidden rounded-sm bg-muted aspect-[16/10]">
        {images.map((img, i) => (
          <img
            key={img.src}
            src={img.src}
            alt={img.alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <button
          onClick={prev}
          aria-label="Previous image"
          className="absolute left-4 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-background/80 backdrop-blur flex items-center justify-center text-foreground hover:bg-background transition shadow-md"
        >
          <span aria-hidden className="text-xl leading-none">‹</span>
        </button>
        <button
          onClick={next}
          aria-label="Next image"
          className="absolute right-4 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-background/80 backdrop-blur flex items-center justify-center text-foreground hover:bg-background transition shadow-md"
        >
          <span aria-hidden className="text-xl leading-none">›</span>
        </button>

        <div className="absolute bottom-4 right-4 bg-foreground/70 text-background text-xs font-semibold tracking-wider px-3 py-1 rounded-sm">
          {current + 1} / {images.length}
        </div>
      </div>

      <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
        {images.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setCurrent(i)}
            aria-label={`View image ${i + 1}`}
            className={`relative flex-shrink-0 w-24 h-16 md:w-32 md:h-20 rounded-sm overflow-hidden transition-all ${
              i === current
                ? "ring-2 ring-brand ring-offset-2 ring-offset-background"
                : "opacity-60 hover:opacity-100"
            }`}
          >
            <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
