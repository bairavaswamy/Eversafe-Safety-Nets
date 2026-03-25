"use client";

import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center space-x-2 md:space-x-3 group select-none"
    >
      {/* 🟡 Desktop Logo */}
      <div className="relative w-12 h-12 rounded-full overflow-hidden shadow-lg ring-2 ring-amber-400 dark:ring-yellow-500 group-hover:ring-4 group-hover:ring-amber-500 transition-all duration-500 hidden md:block">
        <div className="absolute inset-0 rounded-full blur-md bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 opacity-50 group-hover:opacity-80 transition duration-500"></div>
        <Image
          src="/logo.webp"
          alt="Eversafe Safety Nets Logo"
          fill
          className="object-cover rounded-full relative z-10 group-hover:scale-105 transition-transform duration-500"
          priority
        />
      </div>

      {/* 🟡 Mobile Logo */}
      <div className="relative w-7 h-7 rounded-full overflow-hidden shadow-md ring-2 ring-amber-400 dark:ring-yellow-500 md:hidden">
        <Image
          src="/logo.webp"
          alt="Eversafe Safety Nets Logo"
          fill
          className="object-cover rounded-full"
          priority
        />
      </div>

      {/* 🔤 Brand Text */}
      <div className="flex flex-col leading-tight text-center md:text-left">
        <span className="text-[15px] md:text-2xl font-extrabold tracking-wide bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 bg-clip-text text-transparent group-hover:brightness-110 transition-all duration-500">
          EVERSAFE SAFETY
        </span>
        <span className="text-[10px] md:text-sm font-semibold text-gray-700 dark:text-gray-300"> NETS
        </span>
      </div>
    </Link>
  );
};

export default Logo;
