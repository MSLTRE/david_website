"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import type { PortfolioImage } from "@/content/portfolio";

type PortfolioGalleryProps = {
  readonly images: readonly PortfolioImage[];
};

type CardProps = {
  readonly image: PortfolioImage;
  readonly aspect: string;
  readonly sizes: string;
  readonly priority?: boolean;
  readonly onOpen: (id: string) => void;
};

function GalleryCard({ image, aspect, sizes, priority, onOpen }: CardProps) {
  return (
    <button
      type="button"
      onClick={() => onOpen(image.id)}
      aria-label={`Open ${image.title}`}
      className={`group relative block w-full overflow-hidden rounded-xl border border-border bg-secondary transition-shadow hover:shadow-[0_20px_40px_-20px_rgba(40,28,18,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${aspect}`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-foreground/5"
      />
      <span className="pointer-events-none absolute left-3 bottom-3 inline-flex items-center gap-1 rounded-full bg-background/85 backdrop-blur px-2.5 py-1 text-[0.7rem] font-medium tracking-wide text-foreground/80">
        {image.category}
      </span>
    </button>
  );
}

export function PortfolioGallery({ images }: PortfolioGalleryProps) {
  const [openId, setOpenId] = useState<string | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);
  const dialogTitleId = useId();

  const total = images.length;
  const openIndex = openId
    ? images.findIndex((image) => image.id === openId)
    : -1;
  const current = openIndex >= 0 ? images[openIndex] : null;

  const handleOpen = useCallback((id: string) => {
    if (typeof document !== "undefined") {
      previouslyFocusedRef.current = document.activeElement as HTMLElement;
    }
    setOpenId(id);
  }, []);

  const handleClose = useCallback(() => {
    setOpenId(null);
  }, []);

  const handlePrev = useCallback(() => {
    if (openIndex < 0) return;
    const nextIndex = (openIndex - 1 + total) % total;
    setOpenId(images[nextIndex].id);
  }, [images, openIndex, total]);

  const handleNext = useCallback(() => {
    if (openIndex < 0) return;
    const nextIndex = (openIndex + 1) % total;
    setOpenId(images[nextIndex].id);
  }, [images, openIndex, total]);

  useEffect(() => {
    if (!current) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        handleClose();
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        handlePrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        handleNext();
      }
    };
    window.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [current, handleClose, handlePrev, handleNext]);

  useEffect(() => {
    if (current) return;
    previouslyFocusedRef.current?.focus?.();
  }, [current]);

  if (images.length === 0) {
    return null;
  }

  const featured = images[0];
  const supporting = images.slice(1, 5);
  const remainder = images.slice(5);

  return (
    <>
      <div className="grid gap-3 md:gap-4 md:grid-cols-12">
        <div className="md:col-span-7">
          <GalleryCard
            image={featured}
            aspect="aspect-[4/5] md:aspect-[5/6]"
            sizes="(min-width: 1024px) 50vw, (min-width: 640px) 70vw, 92vw"
            priority
            onOpen={handleOpen}
          />
        </div>
        <div className="md:col-span-5 grid gap-3 md:gap-4 grid-cols-2 md:grid-cols-1">
          {supporting.slice(0, 2).map((image) => (
            <GalleryCard
              key={image.id}
              image={image}
              aspect="aspect-[4/3]"
              sizes="(min-width: 1024px) 25vw, 50vw"
              onOpen={handleOpen}
            />
          ))}
        </div>

        {supporting.slice(2).map((image) => (
          <div key={image.id} className="md:col-span-4">
            <GalleryCard
              image={image}
              aspect="aspect-[4/3]"
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
              onOpen={handleOpen}
            />
          </div>
        ))}

        {remainder.map((image) => (
          <div key={image.id} className="md:col-span-3">
            <GalleryCard
              image={image}
              aspect="aspect-[4/3]"
              sizes="(min-width: 1024px) 24vw, (min-width: 640px) 45vw, 92vw"
              onOpen={handleOpen}
            />
          </div>
        ))}
      </div>

      {current ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={dialogTitleId}
          className="fixed inset-0 z-50 flex flex-col bg-foreground/95 backdrop-blur-sm"
          onClick={(event) => {
            if (event.target === event.currentTarget) handleClose();
          }}
        >
          <div className="flex items-center justify-between gap-3 px-4 sm:px-6 py-3 text-background">
            <div className="flex flex-col">
              <span id={dialogTitleId} className="font-display text-lg sm:text-xl tracking-tight">
                {current.title}
              </span>
              <span className="text-xs sm:text-sm text-background/70">
                {current.category} · {openIndex + 1} of {total}
              </span>
            </div>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={handleClose}
              aria-label="Close image viewer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-background/30 text-background hover:bg-background/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </svg>
            </button>
          </div>

          <div className="relative flex-1 flex items-center justify-center px-2 sm:px-6 pb-3 sm:pb-6">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous image"
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full border border-background/30 bg-foreground/40 text-background hover:bg-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <div className="relative w-full max-w-5xl mx-auto">
              <div
                className="relative w-full mx-auto"
                style={{
                  maxHeight: "calc(100vh - 9rem)",
                  aspectRatio: `${current.width} / ${current.height}`
                }}
              >
                <Image
                  key={current.id}
                  src={current.src}
                  alt={current.alt}
                  fill
                  sizes="(min-width: 1024px) 80vw, 100vw"
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next image"
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full border border-background/30 bg-foreground/40 text-background hover:bg-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
