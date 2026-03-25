"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import StickyContactIcons from "../stickyIcons/StickyIcons";

const PHONE_NUMBER = "+918074838518";
const DISPLAY_PHONE = "+91 80748 38518";

const SectionTitle = ({ dark, highlight }: { dark: string; highlight: string }) => (
  <div className="mb-8 md:mb-10 text-center px-4">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold relative inline-block pb-3">
      <span className="bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-200 dark:to-gray-400 bg-clip-text text-transparent">
        {dark}{" "}
      </span>
      <span className="bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent">
        {highlight}
      </span>
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] w-24 rounded-full bg-gradient-to-r from-yellow-300 via-yellow-500 to-amber-300" />
    </h2>
  </div>
);

export default function AboutContent() {
  return (
    <>
      <Navbar />

      <main className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-[#0b132b] text-gray-800 dark:text-gray-100 min-h-screen">

        {/* 🟡 HERO SECTION (Optimized for LCP) */}
        <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] flex items-center justify-center text-center overflow-hidden">

          {/* Optimized Background Image */}
          <Image
            src="/service/balcony-safety-nets-9.webp"
            alt="Balcony safety nets installation by EverSafe"
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/50 dark:from-black/80 dark:via-black/70 dark:to-black/60" />

          {/* Content */}
          <div className="relative z-10 max-w-4xl px-4 sm:px-6 md:px-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent">
                About{" "}
              </span>
              <span className="text-white">EverSafe Safety Nets</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 px-2">
              Keeping You Safe in Style — Experts You Can Trust for All Kinds of Safety Nets.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="inline-block bg-gradient-to-r from-yellow-400 to-amber-400 text-gray-900 font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm sm:text-base"
              >
                Get a Free Quote
              </a>

              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-block bg-transparent border-2 border-yellow-400 text-yellow-400 font-semibold py-3 px-6 rounded-full hover:bg-yellow-400/10 transition-all duration-300 text-sm sm:text-base"
              >
                📞 {DISPLAY_PHONE}
              </a>
            </div>
          </div>
        </section>

        {/* 🟢 OUR STORY */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          <SectionTitle dark="Our" highlight="Story" />

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <div className="space-y-6">
                <p className="leading-relaxed text-gray-700 dark:text-gray-300 text-base md:text-lg">
                  <strong className="text-yellow-500 dark:text-yellow-400">
                    EverSafe Safety Nets
                  </strong>{" "}
                  started with one goal — to make every home, balcony, and workspace safe and beautiful.
                </p>

                <p className="leading-relaxed text-gray-600 dark:text-gray-400 text-base">
                  We use strong, UV-resistant materials that last in sun and rain. Our nets are almost invisible and do not affect your building’s look.
                </p>

                <a
                  href="/services"
                  className="inline-flex items-center text-yellow-500 dark:text-yellow-400 font-medium hover:text-yellow-600 dark:hover:text-yellow-300 transition-colors"
                >
                  Explore Our Services →
                </a>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-white dark:border-gray-800">
              <Image
                src="/service/invisible-grill-40.webp"
                alt="EverSafe Safety Nets installation team at work"
                width={600}
                height={400}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </section>

        {/* 🔵 WHAT WE OFFER (Animation only below fold) */}
        <section className="bg-gradient-to-b from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle dark="What We" highlight="Offer" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Balcony Safety Nets",
                "Bird Protection Nets",
                "Construction Safety Nets",
                "Children Safety Nets",
                "Pigeon Nets",
                "Industrial Safety Nets",
              ].map((title, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="bg-white dark:bg-gray-900/70 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  <h3 className="text-xl font-semibold text-yellow-500 dark:text-yellow-400 mb-3">
                    {title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    High-quality, durable and nearly invisible safety net solutions for maximum protection.
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <StickyContactIcons />
    </>
  );
}
