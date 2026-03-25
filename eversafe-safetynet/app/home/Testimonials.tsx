"use client";

import { useEffect, useRef } from "react";
import { testimonialsData } from "../data/TestimonialsData";

const Testimonials = () => {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateRow = (ref: HTMLDivElement | null, reverse = false) => {
      if (!ref) return;
      let scroll = 0;
      const speed = 0.7;
      let paused = false;

      const step = () => {
        if (!ref || paused) return;
        scroll += reverse ? -speed : speed;

        // Looping logic
        if (scroll >= ref.scrollWidth / 2) scroll = 0;
        if (scroll <= 0 && reverse) scroll = ref.scrollWidth / 2;

        ref.scrollLeft = scroll;
        requestAnimationFrame(step);
      };

      // Pause when hovering any child card
      const handleMouseEnter = () => (paused = true);
      const handleMouseLeave = () => {
        paused = false;
        requestAnimationFrame(step);
      };

      ref.querySelectorAll(".testimonial-card").forEach((card) => {
        card.addEventListener("mouseenter", handleMouseEnter);
        card.addEventListener("mouseleave", handleMouseLeave);
      });

      step();
    };

    animateRow(row1Ref.current);
    animateRow(row2Ref.current, true);
  }, []);

  // 🔹 Card Renderer
  const renderCards = (data: typeof testimonialsData) =>
    [...data, ...data].map((t, index) => (
      <div
        key={index}
        className="testimonial-card relative inline-block min-w-[80%] sm:min-w-[60%] md:min-w-[45%] lg:min-w-[40%] xl:min-w-[32%]
        mx-4 bg-white/90 dark:bg-gradient-to-b dark:from-gray-900 dark:to-black 
        border border-yellow-300/20 rounded-2xl shadow-[0_0_25px_rgba(255,215,0,0.1)]
        hover:shadow-[0_0_45px_rgba(255,215,0,0.25)]
        hover:-translate-y-2 transition-all duration-500 p-6"
      >
        {/* Decorative glow ring */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-300/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

        <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed text-base sm:text-lg mb-5">
          “{t.quote}”
        </p>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-3">
          <h3 className="font-semibold text-gray-900 dark:text-yellow-300 text-base sm:text-lg">
            {t.name}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{t.location}</p>
        </div>

        {/* Golden badge */}
        <div className="absolute top-4 right-5 bg-yellow-400/20 border border-yellow-300/40 text-yellow-400 text-xs font-semibold px-2 py-1 rounded-full backdrop-blur-sm">
          Verified
        </div>
      </div>
    ));

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-black dark:to-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
          Hear From Our <span className="text-yellow-400">Happy Clients</span>
        </h2>

        {/* Row 1 */}
        <div
          ref={row1Ref}
          className="flex overflow-x-hidden 
          [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
          mb-14"
        >
          {renderCards(testimonialsData)}
        </div>

        {/* Row 2 (reverse) */}
        <div
          ref={row2Ref}
          className="flex overflow-x-hidden 
          [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        >
          {renderCards(testimonialsData)}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
