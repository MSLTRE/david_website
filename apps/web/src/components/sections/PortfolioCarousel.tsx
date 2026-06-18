"use client";

import type { CSSProperties } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { carouselImages } from "@/content/portfolio";
import { cn } from "@/lib/utils/cn";

const defaultStageWidth = 1120;
const dragTravelRatio = 0.52;
const maxWheelVelocity = 0.32;
const maxDragVelocity = 0.28;
const slideWidth = "min(74vw, 880px)";

type DragStart = {
  readonly pointerId: number;
  readonly x: number;
  readonly y: number;
  readonly position: number;
};

type DragSample = {
  readonly x: number;
  readonly position: number;
  readonly time: number;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function wrapIndex(index: number, total = carouselImages.length) {
  return ((index % total) + total) % total;
}

function shortestDelta(target: number, current: number, total = carouselImages.length) {
  let delta = target - current;

  if (delta > total / 2) {
    delta -= total;
  } else if (delta < -total / 2) {
    delta += total;
  }

  return delta;
}

function getRelativeIndex(index: number, position: number) {
  const total = carouselImages.length;
  const wrappedPosition = ((position % total) + total) % total;
  let relative = index - wrappedPosition;

  if (relative > total / 2) {
    relative -= total;
  } else if (relative < -total / 2) {
    relative += total;
  }

  return relative;
}

function getSlideStyle(
  relative: number,
  stageWidth: number,
  reduceMotion: boolean,
  isActive: boolean
): CSSProperties {
  const abs = Math.abs(relative);
  const side = relative < 0 ? -1 : 1;

  if (reduceMotion) {
    return {
      opacity: isActive ? 1 : 0,
      pointerEvents: abs < 0.5 ? undefined : "none",
      transform: "translate3d(-50%, -50%, 0) scale(1)",
      zIndex: isActive ? 100 : 0
    };
  }

  const clamped = Math.min(abs, 2.8);
  const firstStep = Math.min(clamped, 1);
  const secondStep = Math.min(Math.max(clamped - 1, 0), 1);
  const xOffset =
    side * stageWidth * (0.46 * firstStep + 0.18 * secondStep);
  const rotation = -side * (8 * firstStep + 2 * secondStep);
  const scale = 1 - 0.13 * firstStep - 0.08 * secondStep;
  const brightness = 1 - Math.min(clamped, 2) * 0.045;
  const saturation = 1 - Math.min(clamped, 2) * 0.035;

  let opacity = isActive ? 1 : 0;
  if (isActive) {
    opacity = 1;
  } else if (abs <= 1.15) {
    opacity = 0.78;
  } else if (abs <= 2.1) {
    opacity = 0.42;
  } else if (abs <= 2.8) {
    opacity = 0.18 * (1 - (abs - 2.1) / 0.7);
  }

  return {
    filter: `brightness(${brightness}) saturate(${saturation})`,
    opacity: clamp(opacity, 0, 1),
    pointerEvents: abs > 1.25 ? "none" : undefined,
    transform: `translate3d(calc(-50% + ${xOffset}px), -50%, 0) rotateY(${rotation}deg) scale(${scale})`,
    transformOrigin: side < 0 ? "right center" : "left center",
    zIndex: isActive ? 100 : Math.max(0, 70 - Math.round(abs * 12))
  };
}

export function PortfolioCarousel() {
  const [position, setPosition] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [stageWidth, setStageWidth] = useState(defaultStageWidth);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const positionRef = useRef(0);
  const velocityRef = useRef(0);
  const targetRef = useRef<number | null>(0);
  const rafRef = useRef<number | null>(null);
  const animateRef = useRef<() => void>(() => undefined);
  const dragStartRef = useRef<DragStart | null>(null);
  const dragSampleRef = useRef<DragSample | null>(null);
  const suppressClickRef = useRef(false);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const selectedImage = carouselImages[activeIndex];

  const syncPosition = useCallback((nextPosition: number) => {
    positionRef.current = nextPosition;
    setPosition(nextPosition);
    setActiveIndex(wrapIndex(Math.round(nextPosition)));
  }, []);

  const stopAnimation = useCallback(() => {
    if (rafRef.current !== null) {
      window.cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }, []);

  const animate = useCallback(() => {
    rafRef.current = null;

    if (dragStartRef.current) {
      return;
    }

    let nextPosition = positionRef.current;
    let velocity = velocityRef.current;
    const target = targetRef.current;

    if (target !== null) {
      const delta = target - nextPosition;
      velocity += delta * 0.115;
      velocity *= 0.72;
      nextPosition += velocity;

      if (Math.abs(delta) < 0.0015 && Math.abs(velocity) < 0.0015) {
        nextPosition = target;
        velocity = 0;
        targetRef.current = null;
      }
    } else {
      nextPosition += velocity;
      velocity *= 0.91;

      if (Math.abs(velocity) < 0.003) {
        targetRef.current = Math.round(nextPosition);
      }
    }

    velocityRef.current = velocity;
    syncPosition(nextPosition);

    if (targetRef.current !== null || Math.abs(velocityRef.current) > 0.001) {
      rafRef.current = window.requestAnimationFrame(() => animateRef.current());
    }
  }, [syncPosition]);

  useEffect(() => {
    animateRef.current = animate;
  }, [animate]);

  const startAnimation = useCallback(() => {
    if (reduceMotion) {
      const target = targetRef.current ?? Math.round(positionRef.current);
      velocityRef.current = 0;
      targetRef.current = null;
      syncPosition(target);
      return;
    }

    if (rafRef.current === null) {
      rafRef.current = window.requestAnimationFrame(() => animateRef.current());
    }
  }, [reduceMotion, syncPosition]);

  const animateToIndex = useCallback(
    (index: number) => {
      const targetIndex = wrapIndex(index);
      const currentWrapped =
        ((positionRef.current % carouselImages.length) + carouselImages.length) %
        carouselImages.length;
      targetRef.current =
        positionRef.current +
        shortestDelta(targetIndex, currentWrapped, carouselImages.length);
      velocityRef.current = 0;
      startAnimation();
    },
    [startAnimation]
  );

  const step = useCallback(
    (direction: number) => {
      targetRef.current = (targetRef.current ?? positionRef.current) + direction;
      velocityRef.current = 0;
      startAnimation();
    },
    [startAnimation]
  );

  const previous = useCallback(() => step(-1), [step]);
  const next = useCallback(() => step(1), [step]);

  const visibleSlides = useMemo(
    () =>
      carouselImages.map((image, index) => ({
        image,
        index,
        relative: getRelativeIndex(index, position)
      })),
    [position]
  );
  const renderedSlides = useMemo(
    () =>
      [...visibleSlides].sort(
        (a, b) => Math.abs(b.relative) - Math.abs(a.relative)
      ),
    [visibleSlides]
  );

  useEffect(() => {
    const stage = stageRef.current;

    if (!stage) {
      return;
    }

    const updateStageWidth = () => {
      setStageWidth(stage.clientWidth || defaultStageWidth);
    };

    updateStageWidth();

    if (typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", updateStageWidth);
      return () => window.removeEventListener("resize", updateStageWidth);
    }

    const observer = new ResizeObserver(updateStageWidth);
    observer.observe(stage);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduceMotion(mediaQuery.matches);

    onChange();
    mediaQuery.addEventListener("change", onChange);

    return () => mediaQuery.removeEventListener("change", onChange);
  }, []);

  useEffect(() => stopAnimation, [stopAnimation]);

  useEffect(() => {
    if (!lightboxOpen) {
      return;
    }

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setLightboxOpen(false);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        previous();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        next();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [lightboxOpen, next, previous]);

  const onWheel = useCallback(
    (event: WheelEvent) => {
      if (dragStartRef.current) {
        return;
      }

      const deltaScale =
        event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? stageWidth : 1;
      const rawX = event.deltaX * deltaScale;
      const rawY = event.deltaY * deltaScale;
      const horizontalDelta =
        event.shiftKey && Math.abs(rawY) > Math.abs(rawX) ? rawY : rawX;
      const verticalDelta = event.shiftKey ? 0 : rawY;

      if (
        Math.abs(horizontalDelta) < 1 ||
        Math.abs(horizontalDelta) <= Math.abs(verticalDelta) * 1.12
      ) {
        return;
      }

      event.preventDefault();
      targetRef.current = null;
      velocityRef.current = clamp(
        velocityRef.current +
          horizontalDelta / Math.max(stageWidth * dragTravelRatio, 1) * 0.22,
        -maxWheelVelocity,
        maxWheelVelocity
      );
      startAnimation();
    },
    [stageWidth, startAnimation]
  );

  useEffect(() => {
    const stage = stageRef.current;

    if (!stage) {
      return;
    }

    stage.addEventListener("wheel", onWheel, { passive: false });

    return () => stage.removeEventListener("wheel", onWheel);
  }, [onWheel]);

  const clearSuppressedClick = useCallback(() => {
    window.setTimeout(() => {
      suppressClickRef.current = false;
    }, 120);
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

  const onPointerDown = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (event.pointerType === "mouse" && event.button !== 0) {
        return;
      }

      stopAnimation();
      dragStartRef.current = {
        pointerId: event.pointerId,
        x: event.clientX,
        y: event.clientY,
        position: positionRef.current
      };
      dragSampleRef.current = {
        x: event.clientX,
        position: positionRef.current,
        time: window.performance.now()
      };
      targetRef.current = null;
      velocityRef.current = 0;
      suppressClickRef.current = false;
      setIsDragging(true);
      event.currentTarget.setPointerCapture(event.pointerId);
    },
    [stopAnimation]
  );

  const onPointerMove = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      const start = dragStartRef.current;

      if (!start || start.pointerId !== event.pointerId) {
        return;
      }

      const distanceX = event.clientX - start.x;
      const distanceY = event.clientY - start.y;

      if (Math.abs(distanceX) <= 3 || Math.abs(distanceX) <= Math.abs(distanceY)) {
        return;
      }

      event.preventDefault();
      const travel = Math.max(stageWidth * dragTravelRatio, 1);
      const nextPosition = start.position - distanceX / travel;
      const now = window.performance.now();
      const last = dragSampleRef.current;

      if (last) {
        const elapsed = Math.max(now - last.time, 1);
        const instantVelocity = ((nextPosition - last.position) / elapsed) * 16.67;
        velocityRef.current = clamp(
          instantVelocity,
          -maxDragVelocity,
          maxDragVelocity
        );
      }

      dragSampleRef.current = {
        x: event.clientX,
        position: nextPosition,
        time: now
      };
      syncPosition(nextPosition);
    },
    [stageWidth, syncPosition]
  );

  const finishDrag = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      const start = dragStartRef.current;
      dragStartRef.current = null;
      dragSampleRef.current = null;
      setIsDragging(false);

      if (!start || start.pointerId !== event.pointerId) {
        return;
      }

      if (event.currentTarget.hasPointerCapture(event.pointerId)) {
        event.currentTarget.releasePointerCapture(event.pointerId);
      }

      const moved = Math.abs(event.clientX - start.x) > 8;
      if (moved) {
        suppressClickRef.current = true;
        clearSuppressedClick();
      }

      if (Math.abs(velocityRef.current) < 0.018) {
        targetRef.current = Math.round(positionRef.current);
      } else {
        targetRef.current = null;
      }

      startAnimation();
    },
    [clearSuppressedClick, startAnimation]
  );

  const cancelDrag = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      dragStartRef.current = null;
      dragSampleRef.current = null;
      setIsDragging(false);
      targetRef.current = Math.round(positionRef.current);
      velocityRef.current = 0;
      startAnimation();

      if (event.currentTarget.hasPointerCapture(event.pointerId)) {
        event.currentTarget.releasePointerCapture(event.pointerId);
      }
    },
    [startAnimation]
  );

  return (
    <>
      <div
        aria-label="Recent portfolio photos"
        aria-roledescription="carousel"
        className="grid gap-6"
        onKeyDown={onKeyDown}
        role="region"
      >
        <div aria-live="polite" className="sr-only">
          {selectedImage.title}, {activeIndex + 1} of {carouselImages.length}
        </div>

        <div
          className={cn(
            "relative -mx-5 h-[clamp(330px,68vw,540px)] cursor-grab select-none overflow-hidden border-y border-border/70 bg-background px-5 outline-none [overscroll-behavior-x:contain] [perspective:1200px] [perspective-origin:50%_50%] [touch-action:pan-y] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background sm:h-[clamp(400px,52vw,600px)] md:-mx-8 md:h-[clamp(470px,42vw,620px)] md:px-8 lg:rounded-[2rem] lg:border",
            isDragging && "cursor-grabbing"
          )}
          onPointerCancel={cancelDrag}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={finishDrag}
          ref={stageRef}
          tabIndex={0}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-[90] w-[5%] bg-gradient-to-r from-background/75 to-transparent"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-[90] w-[5%] bg-gradient-to-l from-background/75 to-transparent"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[9%] left-1/2 h-14 w-[min(40rem,62vw)] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
          />

          <div className="absolute inset-0">
            {renderedSlides.map(({ image, index, relative }) => {
              const isActive = index === activeIndex;
              const isInteractivePreview = Math.abs(relative) <= 1.55;

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
                    "absolute left-1/2 top-1/2 block touch-manipulation overflow-hidden rounded-[1.35rem] bg-card shadow-[0_34px_90px_rgb(31_25_18/0.22)] ring-1 ring-border transition-[box-shadow] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background",
                    isActive
                      ? "cursor-zoom-in ring-2 ring-accent/45"
                      : "cursor-pointer shadow-[0_18px_46px_rgb(31_25_18/0.14)]"
                  )}
                  key={image.id}
                  onClick={() => {
                    if (suppressClickRef.current) {
                      return;
                    }

                    if (isActive) {
                      setLightboxOpen(true);
                      return;
                    }

                    animateToIndex(index);
                  }}
                  style={{
                    aspectRatio: "16 / 10",
                    width: slideWidth,
                    ...getSlideStyle(relative, stageWidth, reduceMotion, isActive),
                    backfaceVisibility: "hidden"
                  }}
                  tabIndex={isInteractivePreview ? 0 : -1}
                  type="button"
                >
                  <Image
                    alt={isActive ? image.alt : ""}
                    className="object-cover"
                    draggable={false}
                    fill
                    fetchPriority={Math.abs(relative) <= 1 ? "high" : "auto"}
                    loading={Math.abs(relative) <= 2 ? "eager" : "lazy"}
                    quality={86}
                    sizes="(min-width: 1280px) 980px, (min-width: 768px) 82vw, 90vw"
                    src={image.src}
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_72%,rgb(31_25_18/0.18))] ring-1 ring-inset ring-white/35"
                  />
                </button>
              );
            })}
          </div>
        </div>

        <div className="mx-auto grid w-full max-w-5xl gap-5">
          <div className="flex items-center justify-center gap-3">
            <button
              aria-label="Previous project"
              className="inline-flex size-12 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-[0_14px_28px_rgb(31_25_18/0.08)] transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              onClick={previous}
              type="button"
            >
              <ChevronLeft aria-hidden="true" size={22} strokeWidth={2.4} />
            </button>
            <div className="min-w-24 text-center text-sm font-semibold tabular-nums tracking-[0.14em] text-muted-foreground">
              {activeIndex + 1} / {carouselImages.length}
            </div>
            <button
              aria-label="Next project"
              className="inline-flex size-12 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-[0_14px_28px_rgb(31_25_18/0.08)] transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              onClick={next}
              type="button"
            >
              <ChevronRight aria-hidden="true" size={22} strokeWidth={2.4} />
            </button>
          </div>

          <div className="mx-auto min-h-24 max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              {selectedImage.category}
            </p>
            <p className="mt-2 text-2xl font-semibold tracking-normal text-foreground sm:text-3xl">
              {selectedImage.title}
            </p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {[selectedImage.room, selectedImage.material, selectedImage.location]
                .filter(Boolean)
                .join(" · ")}
            </p>
          </div>

          <div className="mx-auto flex max-w-full gap-2 overflow-x-auto px-1 pb-2 [scrollbar-width:thin]">
            {carouselImages.map((image, index) => (
              <button
                aria-current={index === activeIndex ? "true" : undefined}
                aria-label={`Show ${image.title}`}
                className={cn(
                  "relative h-16 w-24 shrink-0 overflow-hidden rounded-xl border bg-card transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                  index === activeIndex
                    ? "border-accent shadow-[0_10px_24px_rgb(178_106_57/0.18)]"
                    : "border-border opacity-70 hover:opacity-100"
                )}
                key={image.id}
                onClick={() => animateToIndex(index)}
                type="button"
              >
                <Image
                  alt=""
                  className="object-cover"
                  fill
                  sizes="96px"
                  src={image.src}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {lightboxOpen ? (
        <div
          aria-label={`${selectedImage.title} image viewer`}
          aria-modal="true"
          className="fixed inset-0 z-[80] flex flex-col bg-primary/96 text-primary-foreground backdrop-blur-sm"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setLightboxOpen(false);
            }
          }}
          role="dialog"
        >
          <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-6">
            <div>
              <p className="font-display text-lg font-medium sm:text-xl">
                {selectedImage.title}
              </p>
              <p className="text-xs text-primary-foreground/70 sm:text-sm">
                {selectedImage.category} · {activeIndex + 1} of{" "}
                {carouselImages.length}
              </p>
            </div>
            <button
              aria-label="Close image viewer"
              className="inline-flex size-11 items-center justify-center rounded-full border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground"
              onClick={() => setLightboxOpen(false)}
              type="button"
            >
              <X aria-hidden="true" size={22} />
            </button>
          </div>
          <div className="relative flex flex-1 items-center justify-center px-3 pb-4 sm:px-6 sm:pb-6">
            <button
              aria-label="Previous project"
              className="absolute left-3 top-1/2 z-10 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-primary-foreground/30 bg-primary/40 text-primary-foreground hover:bg-primary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground sm:left-6"
              onClick={previous}
              type="button"
            >
              <ChevronLeft aria-hidden="true" size={22} />
            </button>
            <div className="relative h-full w-full max-w-6xl overflow-hidden rounded-2xl bg-primary/30">
              <Image
                alt={selectedImage.alt}
                className="object-contain"
                fill
                sizes="100vw"
                src={selectedImage.src}
              />
            </div>
            <button
              aria-label="Next project"
              className="absolute right-3 top-1/2 z-10 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-primary-foreground/30 bg-primary/40 text-primary-foreground hover:bg-primary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground sm:right-6"
              onClick={next}
              type="button"
            >
              <ChevronRight aria-hidden="true" size={22} />
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
