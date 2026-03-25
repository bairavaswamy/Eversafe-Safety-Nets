"use client";

import StickyContactIcons from "@/app/stickyIcons/StickyIcons";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import "./hero-gallery.css";

export default function HeroGallery({
  title,
  images = [],
}: {
  title: string;
  images: string[];
}) {

  const [index, setIndex] = useState(0);

  const scrollRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const hero = images[index];

  /* IMAGE NAVIGATION */

  const prev = () =>
    setIndex((p) => (p === 0 ? images.length - 1 : p - 1));

  const next = () =>
    setIndex((p) => (p === images.length - 1 ? 0 : p + 1));

  /* KEYBOARD NAVIGATION */

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  /* MOBILE SWIPE */

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) < 40) return;
    diff > 0 ? prev() : next();
  };

  /* THUMBNAIL SCROLL BUTTON VISIBILITY */

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const updateScroll = () => {
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
    };

    updateScroll();

    el.addEventListener("scroll", updateScroll);
    window.addEventListener("resize", updateScroll);

    return () => {
      el.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
    };
  }, []);

  /* AUTO CENTER ACTIVE THUMBNAIL */

  useEffect(() => {
    const el = scrollRef.current?.children[index] as HTMLElement;

    el?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [index]);

  /* THUMBNAIL SCROLL */

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const amount = scrollRef.current.clientWidth * 0.7;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  /* OPTIONAL AUTO SLIDESHOW */

  // useEffect(() => {
  //   if (images.length <= 1) return;

  //   const interval = setInterval(() => {
  //     setIndex((p) => (p === images.length - 1 ? 0 : p + 1));
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, [images.length]);

  return (
    <div className="hg-wrapper">
      <h1 className="text-2xl text-orange-400 text-center font-bold p-2">{title}</h1>

      {/* HERO IMAGE */}

      {hero && (
        <div
          className="hg-hero-container"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >

          <Image
            src={hero}
            alt={title}
            width={1400}
            height={800}
            priority
            fetchPriority="high"
            loading="eager"
            sizes="100vw"
            className="hg-hero-image"
          />

          {images.length > 1 && (
            <>
              <button
                aria-label="Previous image"
                onClick={prev}
                className="hg-nav-button text-black bg-white left"
              >
                <svg viewBox="0 0 24 24">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              <button
                aria-label="Next image"
                onClick={next}
                className="hg-nav-button text-black bg-white right"
              >
                <svg viewBox="0 0 24 24">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </>
          )}
        </div>
      )}

      {/* THUMBNAILS */}

      {images.length > 1 && (
        <div className="hg-thumbnails-wrapper">

          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="hg-scroll-button text-black bg-white left"
              aria-label="Scroll thumbnails left"
            >
              <svg viewBox="0 0 24 24">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
          )}

          <div ref={scrollRef} className="hg-thumbnails">
            {images.map((img, i) => (
              <Image
                key={i}
                src={img}
                alt={`${title} ${i + 1}`}
                width={120}
                height={100}
                loading="lazy"
                onClick={() => setIndex(i)}
                className={`hg-thumb ${index === i ? "active" : ""}`}
              />
            ))}
          </div>

          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="hg-scroll-button text-black bg-white right"
              aria-label="Scroll thumbnails right"
            >
              <svg viewBox="0 0 24 24">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          )}
        </div>
      )}

      <StickyContactIcons />

    </div>
  );
}