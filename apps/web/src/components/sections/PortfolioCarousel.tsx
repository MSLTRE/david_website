"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { carouselImages } from "@/content/portfolio";
import { cn } from "@/lib/cn";

const swipeThreshold = 44;

function wrapIndex(index: number) {
  return (index + carouselImages.length) % carouselImages.length;
}

function getRelativeIndex(index: number, selected: number) {
  const total = carouselImages.length;
  let relative = index - selected;

  if (relative > total / 2) {
    relative -= total;
  } else if (relative < -total / 2) {
    relative += total;
  }

  return relative;
}

function getSlideStyle(relative: number): React.CSSProperties {
  if (relative === 0) {
    return {
      filter: "brightness(1)",
      opacity: 1,
      transform: "translate3d(-50%, -50%, 120px) rotateY(0deg) scale(1)",
      zIndex: 30
    };
  }

  if (relative === -1) {
    return {
      filter: "brightness(0.74) saturate(0.88)",
      opacity: 0.55,
      transform:
        "translate3d(calc(-50% - min(42vw, 580px)), -50%, -110px) rotateY(68deg) rotateZ(-1deg) scale(0.72)",
      transformOrigin: "right center",
      zIndex: 20
    };
  }

  if (relative === 1) {
    return {
      filter: "brightness(0.74) saturate(0.88)",
      opacity: 0.55,
      transform:
        "translate3d(calc(-50% + min(42vw, 580px)), -50%, -110px) rotateY(-68deg) rotateZ(1deg) scale(0.72)",
      transformOrigin: "left center",
      zIndex: 20
    };
  }

  if (relative === -2) {
    return {
      filter: "blur(0.5px) brightness(0.58) saturate(0.78)",
      opacity: 0.2,
      transform:
        "translate3d(calc(-50% - min(58vw, 780px)), -50%, -210px) rotateY(76deg) rotateZ(-2deg) scale(0.54)",
      transformOrigin: "right center",
      zIndex: 10
    };
  }

  if (relative === 2) {
    return {
      filter: "blur(0.5px) brightness(0.58) saturate(0.78)",
      opacity: 0.2,
      transform:
        "translate3d(calc(-50% + min(58vw, 780px)), -50%, -210px) rotateY(-76deg) rotateZ(2deg) scale(0.54)",
      transformOrigin: "left center",
      zIndex: 10
    };
  }

  return {
    filter: "blur(1px) brightness(0.45)",
    opacity: 0,
    pointerEvents: "none",
    transform:
      relative < 0
        ? "translate3d(calc(-50% - min(64vw, 880px)), -50%, -280px) rotateY(80deg) scale(0.44)"
        : "translate3d(calc(-50% + min(64vw, 880px)), -50%, -280px) rotateY(-80deg) scale(0.44)",
    zIndex: 0
  };
}

export function PortfolioCarousel() {
  const [selected, setSelected] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const touchStartXRef = useRef<number | null>(null);
  const selectedImage = carouselImages[selected];

  const previous = useCallback(() => {
    setSelected((current) => wrapIndex(current - 1));
  }, []);

  const next = useCallback(() => {
    setSelected((current) => wrapIndex(current + 1));
  }, []);

  const visibleSlides = useMemo(
    () =>
      carouselImages.map((image, index) => ({
        image,
        index,
        relative: getRelativeIndex(index, selected)
      })),
    [selected]
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduceMotion(mediaQuery.matches);

    onChange();
    mediaQuery.addEventListener("change", onChange);

    return () => mediaQuery.removeEventListener("change", onChange);
  }, []);

  const onKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        previous();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        next();
      }
    },
    [next, previous]
  );

  const onTouchStart = useCallback((event: React.TouchEvent<HTMLDivElement>) => {
    touchStartXRef.current = event.changedTouches[0]?.clientX ?? null;
  }, []);

  const onTouchEnd = useCallback(
    (event: React.TouchEvent<HTMLDivElement>) => {
      const startX = touchStartXRef.current;
      touchStartXRef.current = null;

      if (startX === null) {
        return;
      }

      const endX = event.changedTouches[0]?.clientX ?? startX;
      const distance = endX - startX;

      if (Math.abs(distance) < swipeThreshold) {
        return;
      }

      if (distance > 0) {
        previous();
      } else {
        next();
      }
    },
    [next, previous]
  );

  return (
    <div
      aria-label="Recent portfolio photos"
      aria-roledescription="carousel"
      className="grid gap-5"
      onKeyDown={onKeyDown}
      role="region"
    >
      <div
        aria-live="polite"
        className="sr-only"
      >
        {selectedImage.title}, {selected + 1} of {carouselImages.length}
      </div>

      <div
        className="relative -mx-5 h-[clamp(360px,88vw,500px)] overflow-hidden px-5 outline-none [perspective:1300px] [perspective-origin:50%_48%] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background sm:h-[clamp(410px,66vw,580px)] md:-mx-8 md:h-[clamp(470px,52vw,650px)] md:px-8"
        onTouchEnd={onTouchEnd}
        onTouchStart={onTouchStart}
        tabIndex={0}
      >
        <div className="absolute inset-0 [transform-style:preserve-3d]">
          {visibleSlides.map(({ image, index, relative }) => {
            const isActive = relative === 0;
            const isInteractivePreview = Math.abs(relative) === 1;

            return (
              <button
                aria-current={isActive ? "true" : undefined}
                aria-hidden={!(isActive || isInteractivePreview)}
                aria-label={
                  isActive
                    ? `${image.title}, current project`
                    : `Show ${image.title}`
                }
                className={cn(
                  "absolute left-1/2 top-1/2 block touch-manipulation rounded-[1.1rem] transition-[transform,opacity,filter] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background",
                  reduceMotion && "duration-0",
                  isActive ? "cursor-default" : "cursor-pointer"
                )}
                key={image.id}
                onClick={() => {
                  if (!isActive) {
                    setSelected(index);
                  }
                }}
                style={{
                  ...getSlideStyle(relative),
                  backfaceVisibility: "hidden"
                }}
                tabIndex={isInteractivePreview ? 0 : -1}
                type="button"
              >
                <Image
                  alt={isActive ? image.alt : ""}
                  className={cn(
                    "block h-auto w-auto rounded-[1.1rem] object-contain shadow-[0_34px_80px_rgba(30,24,18,0.3)] ring-1 ring-black/5",
                    !isActive && "shadow-[0_24px_58px_rgba(30,24,18,0.22)]"
                  )}
                  fetchPriority={Math.abs(relative) <= 1 ? "high" : "auto"}
                  height={image.height}
                  loading={Math.abs(relative) <= 2 ? "eager" : "lazy"}
                  quality={86}
                  sizes={
                    isActive
                      ? "(min-width: 1280px) 980px, (min-width: 768px) 78vw, 86vw"
                      : "(min-width: 1280px) 620px, (min-width: 768px) 54vw, 68vw"
                  }
                  style={{
                    maxHeight: isActive
                      ? "clamp(290px, 58vw, 560px)"
                      : "clamp(250px, 56vw, 560px)",
                    maxWidth: isActive ? "min(84vw, 900px)" : "min(72vw, 820px)"
                  }}
                  src={image.src}
                  width={image.width}
                />
              </button>
            );
          })}
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-3xl gap-3">
        <div className="flex items-center justify-center gap-3">
          <button
            aria-label="Previous project"
            className="inline-flex size-12 items-center justify-center rounded-full border border-border bg-white text-foreground shadow-[0_14px_28px_rgba(30,24,18,0.08)] transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            onClick={previous}
            type="button"
          >
            <ChevronLeft aria-hidden="true" size={22} strokeWidth={2.4} />
          </button>
          <div className="min-w-24 text-center text-sm font-black tabular-nums tracking-[0.18em] text-foreground/75">
            {selected + 1} / {carouselImages.length}
          </div>
          <button
            aria-label="Next project"
            className="inline-flex size-12 items-center justify-center rounded-full border border-border bg-white text-foreground shadow-[0_14px_28px_rgba(30,24,18,0.08)] transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            onClick={next}
            type="button"
          >
            <ChevronRight aria-hidden="true" size={22} strokeWidth={2.4} />
          </button>
        </div>

        <div className="min-h-12 text-center">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-accent">
            {selectedImage.category}
          </p>
          <p className="mt-1 text-xl font-black tracking-tight text-foreground sm:text-2xl">
            {selectedImage.title}
          </p>
        </div>
      </div>
    </div>
  );
}
