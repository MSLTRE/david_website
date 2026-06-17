"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { carouselImages } from "@/content/portfolio";
import { cn } from "@/lib/utils/cn";

const dragThreshold = 46;
const defaultStageWidth = 1120;
const wheelAdvanceThreshold = 0.18;
const wheelLockDuration = 280;
const wheelSettleDelay = 130;

type DragStart = {
  readonly pointerId: number;
  readonly x: number;
  readonly y: number;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

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

function getSlideStyle(position: number, stageWidth: number): React.CSSProperties {
  const abs = Math.abs(position);
  const side = position < 0 ? -1 : 1;

  if (abs < 0.001) {
    return {
      filter: "brightness(1)",
      opacity: 1,
      transform: "translate3d(-50%, -50%, 90px) rotateY(0deg) scale(1)",
      transformOrigin: "center center",
      zIndex: 40
    };
  }

  const firstStep = Math.min(abs, 1);
  const secondStep = Math.min(Math.max(abs - 1, 0), 1);
  const thirdStep = Math.min(Math.max(abs - 2, 0), 1);
  const xOffset =
    side * stageWidth * (0.34 * firstStep + 0.12 * secondStep + 0.1 * thirdStep);
  const zOffset = 90 - 150 * firstStep - 80 * secondStep - 40 * thirdStep;
  const rotation = -side * (32 * firstStep + 5 * secondStep + 2 * thirdStep);
  const scale = 1 - 0.2 * firstStep - 0.09 * secondStep - 0.04 * thirdStep;

  let opacity = 0;
  if (abs <= 1) {
    opacity = 1 - 0.32 * abs;
  } else if (abs <= 2) {
    opacity = 0.68 - 0.36 * (abs - 1);
  } else if (abs <= 3) {
    opacity = 0.22 * (3 - abs);
  }

  const brightness = 1 - 0.12 * firstStep - 0.08 * secondStep;
  const saturation = 1 - 0.1 * firstStep;
  const contrast = 1 - 0.04 * firstStep;

  return {
    filter: `brightness(${brightness}) saturate(${saturation}) contrast(${contrast})`,
    opacity: clamp(opacity, 0, 1),
    pointerEvents: abs > 3 ? "none" : undefined,
    transform: `translate3d(calc(-50% + ${xOffset}px), -50%, ${zOffset}px) rotateY(${rotation}deg) scale(${scale})`,
    transformOrigin: position < 0 ? "right center" : "left center",
    zIndex: Math.max(0, 40 - Math.round(abs * 10))
  };
}

export function PortfolioCarousel() {
  const [selected, setSelected] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragProgress, setDragProgress] = useState(0);
  const [stageWidth, setStageWidth] = useState(defaultStageWidth);
  const dragStartRef = useRef<DragStart | null>(null);
  const suppressClickRef = useRef(false);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const wheelFrameRef = useRef<number | null>(null);
  const wheelLockUntilRef = useRef(0);
  const wheelProgressRef = useRef(0);
  const wheelSettleTimerRef = useRef<number | null>(null);
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

  const clearWheelMotion = useCallback(() => {
    if (wheelFrameRef.current !== null) {
      window.cancelAnimationFrame(wheelFrameRef.current);
      wheelFrameRef.current = null;
    }

    if (wheelSettleTimerRef.current !== null) {
      window.clearTimeout(wheelSettleTimerRef.current);
      wheelSettleTimerRef.current = null;
    }

    wheelProgressRef.current = 0;
  }, []);

  const clearSuppressedClick = useCallback(() => {
    window.setTimeout(() => {
      suppressClickRef.current = false;
    }, 120);
  }, []);

  const updateWheelProgress = useCallback(() => {
    wheelFrameRef.current = null;
    setIsDragging(true);
    setDragProgress(wheelProgressRef.current);
  }, []);

  const scheduleWheelProgress = useCallback(() => {
    if (wheelFrameRef.current !== null) {
      return;
    }

    wheelFrameRef.current = window.requestAnimationFrame(updateWheelProgress);
  }, [updateWheelProgress]);

  const finishWheel = useCallback(() => {
    const progress = wheelProgressRef.current;
    wheelProgressRef.current = 0;
    wheelSettleTimerRef.current = null;

    if (Math.abs(progress) < wheelAdvanceThreshold) {
      setDragProgress(0);
      setIsDragging(false);
      return;
    }

    suppressClickRef.current = true;
    clearSuppressedClick();

    if (progress < 0) {
      previous();
    } else {
      next();
    }

    setDragProgress(0);
    setIsDragging(false);
    wheelLockUntilRef.current = window.performance.now() + wheelLockDuration;
  }, [clearSuppressedClick, next, previous]);

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
        Math.abs(horizontalDelta) <= Math.abs(verticalDelta) * 1.1
      ) {
        return;
      }

      event.preventDefault();

      if (window.performance.now() < wheelLockUntilRef.current) {
        return;
      }

      const wheelTravelWidth = Math.max(stageWidth * 0.58, 1);
      wheelProgressRef.current = clamp(
        wheelProgressRef.current + horizontalDelta / wheelTravelWidth,
        -1.12,
        1.12
      );

      scheduleWheelProgress();

      if (wheelSettleTimerRef.current !== null) {
        window.clearTimeout(wheelSettleTimerRef.current);
      }

      wheelSettleTimerRef.current = window.setTimeout(
        finishWheel,
        wheelSettleDelay
      );
    },
    [finishWheel, scheduleWheelProgress, stageWidth]
  );

  useEffect(() => {
    const stage = stageRef.current;

    if (!stage) {
      return;
    }

    stage.addEventListener("wheel", onWheel, { passive: false });

    return () => stage.removeEventListener("wheel", onWheel);
  }, [onWheel]);

  useEffect(
    () => () => {
      clearWheelMotion();
    },
    [clearWheelMotion]
  );

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

      dragStartRef.current = {
        pointerId: event.pointerId,
        x: event.clientX,
        y: event.clientY
      };
      clearWheelMotion();
      suppressClickRef.current = false;
      setDragProgress(0);
      setIsDragging(true);
      event.currentTarget.setPointerCapture(event.pointerId);
    },
    [clearWheelMotion]
  );

  const onPointerMove = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    const start = dragStartRef.current;

    if (!start || start.pointerId !== event.pointerId) {
      return;
    }

    const distanceX = event.clientX - start.x;
    const distanceY = event.clientY - start.y;

    if (Math.abs(distanceX) > 3 && Math.abs(distanceX) > Math.abs(distanceY)) {
      event.preventDefault();
      setIsDragging(true);
      setDragProgress(
        clamp(-distanceX / Math.max(stageWidth, 1), -1.12, 1.12)
      );
    }
  }, [stageWidth]);

  const finishDrag = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      const start = dragStartRef.current;
      dragStartRef.current = null;
      setIsDragging(false);

      if (!start || start.pointerId !== event.pointerId) {
        return;
      }

      if (event.currentTarget.hasPointerCapture(event.pointerId)) {
        event.currentTarget.releasePointerCapture(event.pointerId);
      }

      const distanceX = event.clientX - start.x;
      const distanceY = event.clientY - start.y;
      const progress = clamp(-distanceX / Math.max(stageWidth, 1), -1.12, 1.12);
      const shouldAdvance =
        Math.abs(distanceX) >= dragThreshold &&
        Math.abs(distanceX) >= Math.abs(distanceY) * 1.15 &&
        Math.abs(progress) >= 0.16;

      if (!shouldAdvance) {
        setDragProgress(0);
        return;
      }

      suppressClickRef.current = true;
      clearSuppressedClick();

      if (progress < 0) {
        previous();
      } else {
        next();
      }
      setDragProgress(0);
    },
    [clearSuppressedClick, next, previous, stageWidth]
  );

  const cancelDrag = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    dragStartRef.current = null;
    setIsDragging(false);
    setDragProgress(0);

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  }, []);

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
        className={cn(
          "relative -mx-5 h-[clamp(340px,76vw,520px)] cursor-grab select-none overflow-hidden px-5 outline-none [overscroll-behavior-x:contain] [perspective:1500px] [perspective-origin:50%_48%] [touch-action:pan-y] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background sm:h-[clamp(410px,60vw,600px)] md:-mx-8 md:h-[clamp(470px,48vw,650px)] md:px-8",
          isDragging && "cursor-grabbing"
        )}
        onPointerCancel={cancelDrag}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={finishDrag}
        ref={stageRef}
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
                  "absolute left-1/2 top-1/2 block touch-manipulation overflow-hidden rounded-2xl bg-card transition-[transform,opacity,filter,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-[0_26px_70px_rgb(31_25_18/0.16)] ring-1 ring-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background",
                  (reduceMotion || isDragging) && "duration-0",
                  isActive
                    ? "cursor-default"
                    : "cursor-pointer shadow-[0_18px_44px_rgb(31_25_18/0.10)]"
                )}
                key={image.id}
                onClick={() => {
                  if (suppressClickRef.current) {
                    return;
                  }

                  if (!isActive) {
                    setSelected(index);
                  }
                }}
                style={{
                  aspectRatio: "16 / 10",
                  width: isActive ? "min(84vw, 980px)" : "min(62vw, 720px)",
                  ...getSlideStyle(relative - dragProgress, stageWidth),
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
                  sizes={
                    isActive
                      ? "(min-width: 1280px) 980px, (min-width: 768px) 78vw, 86vw"
                      : "(min-width: 1280px) 620px, (min-width: 768px) 54vw, 68vw"
                  }
                  src={image.src}
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/35"
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
            {selected + 1} / {carouselImages.length}
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
              aria-current={index === selected ? "true" : undefined}
              aria-label={`Show ${image.title}`}
              className={cn(
                "relative h-16 w-24 shrink-0 overflow-hidden rounded-xl border bg-card transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                index === selected
                  ? "border-accent shadow-[0_10px_24px_rgb(178_106_57/0.18)]"
                  : "border-border opacity-70 hover:opacity-100"
              )}
              key={image.id}
              onClick={() => setSelected(index)}
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
  );
}
