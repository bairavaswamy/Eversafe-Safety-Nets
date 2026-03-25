"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Phone } from "lucide-react";
import { slides } from "@/app/data/Slides";
import StickyContactIcons from "../stickyIcons/StickyIcons";

export default function HomeCarousel() {
  const [active, setActive] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startX = useRef(0);

  const total = slides.length;
  const currentSlide = slides[active];

  /* ---------------- NAVIGATION ---------------- */

  const handleNext = useCallback(() => {
    setActive((p) => (p + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setActive((p) => (p - 1 + total) % total);
  }, [total]);

  /* ---------------- AUTOPLAY ---------------- */

  useEffect(() => {
    intervalRef.current = setInterval(handleNext, 5000);
    return () => {
  if (intervalRef.current) {
    clearInterval(intervalRef.current);
  }
};
  }, [handleNext]);

  const pauseAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  /* ---------------- TOUCH (SWIPE) ---------------- */

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = e.changedTouches[0].clientX - startX.current;

    if (Math.abs(diff) > 50) {
      diff > 0 ? handlePrev() : handleNext();
    }
  };

  /* ---------------- KEYBOARD ---------------- */

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") handleNext();
    if (e.key === "ArrowLeft") handlePrev();
  };

  /* ---------------- UI ---------------- */

  return (
    <>
      <section
        id="carousel"
        role="region"
        aria-label="Home service highlights carousel"
        aria-live="polite"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onMouseEnter={pauseAutoplay}
        className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden select-none outline-none"
      >
        {/* ---------- HERO IMAGE (LCP optimized) ---------- */}
        <div
          className="absolute inset-0"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <Image
            src={currentSlide.image || "/placeholder.jpg"}
            alt={currentSlide.title}
            fill
            priority={active === 0}
            fetchPriority={active === 0 ? "high" : "auto"}
            sizes="100vw"
            className="img.object-cover.object-center.brightness-[0.85]"
          />
        </div>

        {/* ---------- CONTENT ---------- */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h2 className="text-yellow-400 text-3xl md:text-5xl font-bold mb-3 drop-shadow-lg">
            {currentSlide.title}
          </h2>

          <p className="text-gray-200 dark:text-gray-300 md:text-lg mb-6 max-w-2xl">
            {currentSlide.description}
          </p>

          <a
            href={`tel:${currentSlide.phone}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 dark:border-gray-600 text-yellow-400 font-semibold hover:bg-yellow-400 hover:text-black transition-all shadow-lg"
          >
            <Phone size={18} aria-hidden="true" />
            Call Now
          </a>
        </div>

        {/* ---------- INDICATORS ---------- */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === active}
              className={`h-5 w-5 rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 ${
                i === active
                  ? "bg-yellow-400 w-5"
                  : "bg-gray-400/40 dark:bg-gray-600"
              }`}
            />
          ))}
        </div>

        {/* ---------- PREV BUTTON ---------- */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous slide"
          aria-controls="carousel"
          className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 items-center justify-center 
                     bg-black/40 hover:bg-black/70 
                     p-3 text-yellow-400 border border-gray-500 rounded-lg
                     focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
        >
          <ChevronLeft aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </button>

        {/* ---------- NEXT BUTTON ---------- */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next slide"
          aria-controls="carousel"
          className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 items-center justify-center 
                     bg-black/40 hover:bg-black/70 
                     p-3 text-yellow-400 border border-gray-500 rounded-lg
                     focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
        >
          <ChevronRight aria-hidden="true" />
          <span className="sr-only">Next</span>
        </button>
      </section>
      <StickyContactIcons />
    </>
  );
}
