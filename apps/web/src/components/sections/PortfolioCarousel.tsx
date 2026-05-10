"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { portfolioImages } from "@/content/portfolio";

const autoplayDelay = 5200;
const resumeDelay = 8000;

export function PortfolioCarousel() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<Array<HTMLElement | null>>([]);
  const resumeTimerRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);
  const [selected, setSelected] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  const scrollToIndex = useCallback((index: number) => {
    const viewport = viewportRef.current;
    const target = slideRefs.current[index];

    if (!viewport || !target) {
      return;
    }

    viewport.scrollTo({
      left: target.offsetLeft - viewport.offsetLeft,
      behavior: reduceMotion ? "auto" : "smooth"
    });
    setSelected(index);
  }, [reduceMotion]);

  const pauseTemporarily = useCallback(() => {
    setPaused(true);

    if (resumeTimerRef.current) {
      window.clearTimeout(resumeTimerRef.current);
    }

    resumeTimerRef.current = window.setTimeout(() => {
      setPaused(false);
    }, resumeDelay);
  }, []);

  const scrollPrev = useCallback(() => {
    pauseTemporarily();
    scrollToIndex(
      selected === 0 ? portfolioImages.length - 1 : selected - 1
    );
  }, [pauseTemporarily, scrollToIndex, selected]);

  const scrollNext = useCallback(() => {
    pauseTemporarily();
    scrollToIndex((selected + 1) % portfolioImages.length);
  }, [pauseTemporarily, scrollToIndex, selected]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduceMotion(mediaQuery.matches);

    onChange();
    mediaQuery.addEventListener("change", onChange);

    return () => mediaQuery.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const viewport = viewportRef.current;

    if (!viewport) {
      return;
    }

    const onScroll = () => {
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = window.requestAnimationFrame(() => {
        const viewportCenter = viewport.scrollLeft + viewport.clientWidth / 2;
        const nearestIndex = slideRefs.current.reduce((nearest, slide, index) => {
          if (!slide) {
            return nearest;
          }

          const slideCenter =
            slide.offsetLeft - viewport.offsetLeft + slide.clientWidth / 2;
          const distance = Math.abs(viewportCenter - slideCenter);

          return distance < nearest.distance ? { distance, index } : nearest;
        }, { distance: Number.POSITIVE_INFINITY, index: 0 }).index;

        setSelected(nearestIndex);
      });
    };

    viewport.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      viewport.removeEventListener("scroll", onScroll);
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (paused || reduceMotion) {
      return;
    }

    const timer = window.setInterval(() => {
      const nextIndex = (selected + 1) % portfolioImages.length;
      scrollToIndex(nextIndex);
    }, autoplayDelay);

    return () => window.clearInterval(timer);
  }, [paused, reduceMotion, scrollToIndex, selected]);

  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) {
        window.clearTimeout(resumeTimerRef.current);
      }
    };
  }, []);

  return (
    <div
      aria-label="Recent tile work carousel"
      className="grid gap-5"
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="region"
    >
      <div
        className="portfolio-scrollbar -mx-5 snap-x snap-mandatory overflow-x-auto px-5 [scroll-padding-inline:1.25rem] md:-mx-8 md:px-8 md:[scroll-padding-inline:2rem]"
        onPointerDown={pauseTemporarily}
        onWheel={pauseTemporarily}
        ref={viewportRef}
      >
        <div className="flex gap-4 pb-1 sm:gap-6">
          {portfolioImages.map((image, index) => (
            <figure
              className="w-[min(86vw,760px)] shrink-0 snap-start sm:w-[min(68vw,820px)] lg:w-[min(48vw,860px)] xl:w-[min(42vw,900px)]"
              key={image.id}
              ref={(node) => {
                slideRefs.current[index] = node;
              }}
            >
              <div className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-white shadow-[0_20px_55px_rgba(30,24,18,0.1)]">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#f3eee7]">
                  <Image
                    alt={image.alt}
                    className="h-full w-full object-contain transition duration-700 group-hover:scale-[1.01]"
                    fill
                    fetchPriority={index < 2 ? "high" : "auto"}
                    loading={index < 3 ? "eager" : "lazy"}
                    quality={86}
                    sizes="(min-width: 1280px) 42vw, (min-width: 1024px) 48vw, (min-width: 640px) 68vw, 86vw"
                    src={image.src}
                  />
                </div>
                <figcaption className="grid min-h-[116px] content-start gap-2 p-5 sm:min-h-[124px]">
                  <span className="text-xs font-black uppercase tracking-[0.16em] text-accent">
                    {image.category}
                  </span>
                  <span className="text-xl font-black leading-tight tracking-tight sm:text-2xl">
                    {image.title}
                  </span>
                  <span className="text-sm font-semibold leading-6 text-muted-foreground">
                    {image.description}
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
              aria-label={`Go to ${image.title}`}
              className={`h-2.5 rounded-full transition ${
                index === selected ? "w-8 bg-accent" : "w-2.5 bg-border"
              }`}
              key={image.id}
              onClick={() => {
                pauseTemporarily();
                scrollToIndex(index);
              }}
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
