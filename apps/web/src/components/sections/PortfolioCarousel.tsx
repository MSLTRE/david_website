"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { portfolioImages } from "@/content/portfolio";

export function PortfolioCarousel() {
  const [autoplay] = useState(() =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? undefined
      : Autoplay({ delay: 4300, stopOnInteraction: true, stopOnMouseEnter: true })
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: "center", containScroll: "trimSnaps", loop: true },
    autoplay ? [autoplay] : []
  );
  const [selected, setSelected] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div
      className="grid gap-5"
      onFocus={() => autoplay?.stop()}
      onMouseEnter={() => autoplay?.stop()}
      onMouseLeave={() => autoplay?.play()}
    >
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="-ml-4 flex touch-pan-y">
          {portfolioImages.map((image) => (
            <figure
              className="min-w-0 flex-[0_0_86%] pl-4 sm:flex-[0_0_58%] lg:flex-[0_0_38%]"
              key={image.id}
            >
              <div className="group overflow-hidden rounded-lg border border-border bg-white shadow-[0_20px_55px_rgba(30,24,18,0.1)]">
                <div className="aspect-[4/5] overflow-hidden bg-secondary">
                  <Image
                    alt={image.alt}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]"
                    fill={false}
                    height={1200}
                    loading="lazy"
                    sizes="(min-width: 1024px) 38vw, (min-width: 640px) 58vw, 86vw"
                    src={image.src}
                    unoptimized
                    width={960}
                  />
                </div>
                <figcaption className="grid gap-1 p-4">
                  <span className="text-xs font-black uppercase tracking-[0.16em] text-accent">
                    {image.category}
                  </span>
                  <span className="text-lg font-black tracking-tight">
                    {image.title}
                  </span>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className="flex gap-2" aria-label="Carousel slide position">
          {portfolioImages.map((image, index) => (
            <button
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 rounded-full transition ${
                index === selected ? "w-8 bg-accent" : "w-2.5 bg-border"
              }`}
              key={image.id}
              onClick={() => emblaApi?.scrollTo(index)}
              type="button"
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            aria-label="Previous project"
            className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-white text-foreground transition hover:border-accent"
            onClick={scrollPrev}
            type="button"
          >
            <ChevronLeft aria-hidden="true" />
          </button>
          <button
            aria-label="Next project"
            className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-white text-foreground transition hover:border-accent"
            onClick={scrollNext}
            type="button"
          >
            <ChevronRight aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
