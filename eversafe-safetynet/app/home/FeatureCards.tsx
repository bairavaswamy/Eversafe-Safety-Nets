"use client";

import Image from "next/image";
import Link from "next/link";

interface CardProps {
  image: string;
  title: string;
  description: string;
  slug: string;
}


const FeatureCards = ({ image, title, description,slug }: CardProps) => {
  return (
    <div className="relative group">
      {/* ✨ Rotating gradient border */}
      <div
        className="absolute inset-0 rounded-[2rem] p-[1.5px] 
        bg-[conic-gradient(from_0deg,#FFD700,#ff6b00,#ffffff,#FFD700)]
        opacity-80 group-hover:opacity-100 group-hover:animate-spin-slow
        transition-all duration-1000 shadow-[0_0_20px_rgba(255,215,0,0.25)]"
        style={{
          clipPath: "polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)",
          borderRadius: "1.5rem",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      ></div>

      {/* 🌟 Card container */}
      <div
        className="relative bg-white/85 dark:bg-gradient-to-b dark:from-gray-900 dark:to-black 
        backdrop-blur-sm border border-gray-200 dark:border-gray-800 
        shadow-lg hover:shadow-yellow-300/40 hover:-translate-y-3 hover:scale-[1.02] 
        transition-all duration-700 overflow-hidden"
        style={{
          clipPath: "polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)",
          borderRadius: "1.5rem",
        }}
      >
        {/* 🖼️ Image Section */}
        <div className="relative w-full h-64 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Gradient overlay for better readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>

          {/* 🏷️ Brand badge */}
          <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/70 
            text-gray-900 dark:text-yellow-400 px-3 py-1 rounded-lg 
            text-sm font-semibold tracking-wide shadow-md backdrop-blur-md">
            Eversafe
          </div>
        </div>

        {/* 📖 Content Section */}
        <div className="p-6 relative z-10">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-yellow-300 mb-2 tracking-wide">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-sm sm:text-base line-clamp-4">
            {description}
          </p>

          {/* 🎛️ Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link href={`/service/${slug}`} 
            aria-label={`Read more about ${title}`}
            className="px-5 py-2 rounded-full bg-gradient-to-r from-[#FFD700] to-[#ffae00] 
              text-black font-semibold shadow-md hover:shadow-lg 
              hover:from-[#ffae00] hover:to-[#FFD700] transition-all duration-500">
              Read More
              <span className="sr-only">{`about ${title}`}</span>
            </Link>

            <a
              href="tel:+919876543210"
              aria-label="Call To Eversafe Safety Nets"
              className="px-5 py-2 rounded-full border border-yellow-400 text-yellow-400 
              hover:bg-yellow-400 hover:text-black font-semibold transition-all duration-500"
            >
              Call Now
            </a>
          </div>
        </div>

        {/* 🌈 Subtle Inner Glow on Hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
          bg-yellow-400/10 blur-3xl transition-all duration-700 -z-10"></div>

        {/* ✨ Top reflection for glassy feel */}
        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none rounded-[2rem]"></div>
      </div>
    </div>
  );
};

export default FeatureCards;
