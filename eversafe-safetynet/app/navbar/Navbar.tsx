"use client";

import { useState, useEffect } from "react";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import { BsTelephoneFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import SearchBar from "./SearchBar";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative z-[200]">
      {/*Top Info Bar */}
      <div className="w-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 
        dark:from-[#0e1a3a] dark:via-[#101f46] dark:to-[#0e1a3a]
        text-gray-900 dark:text-gray-100 text-xs sm:text-sm md:text-base font-medium
        flex flex-col md:flex-row items-center justify-center md:justify-between
        px-4 py-2 shadow-md border-b border-yellow-400/30 dark:border-gray-700">

        <div className="flex items-center space-x-2 mb-1 md:mb-0">
          <BsTelephoneFill className="text-gray-900 dark:text-yellow-400" />
          <a
            href="tel:+918074838518"
            className="hover:underline"
          >
            +91 8074838518,
          </a>
        </div>

        <div className="text-center md:text-right">
          <span className="font-semibold">
            All Safety Net Services Available:
          </span>{" "}
          Balcony Nets • Pigeon Nets • Invisible Grills • Sports Nets • HDPE Nets
        </div>
      </div>

      {/* 🌗 Main Navbar */}
      <nav
        className={`fixed left-0 w-full transition-all duration-300 ${
          isSticky
            ? "top-0 bg-white/90 dark:bg-[#0b132b]/90 backdrop-blur-md shadow-md"
            : "top-[56px] md:top-[48px] bg-white dark:bg-[#0a142f]"
        }`}
      >
        {/* ✅ Proper Container Width */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex items-center justify-between py-3">

            {/* Logo */}
            <Logo />

            {/* Desktop Center Area */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="w-64">
                <SearchBar />
              </div>

              <DesktopMenu />
            </div>

            {/* Right Controls */}
            <div className="flex items-center space-x-4">

              {/* Desktop Theme */}
              <div className="hidden md:block">
                <ThemeToggle />
              </div>

              {/* Mobile Controls */}
              <div className="flex items-center space-x-3 md:hidden">
                <button
                  onClick={() => setShowMobileSearch(prev => !prev)}
                  aria-label="Toggle search"
                  className="p-2 rounded-full bg-gray-200 dark:bg-[#111b3a]"
                >
                  <FiSearch size={18} />
                </button>

                <ThemeToggle />

                <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
              </div>

            </div>
          </div>
        </div>

        {/* Mobile Search */}
        {showMobileSearch && (
          <div className="md:hidden bg-white dark:bg-[#0a142f] border-t p-4">
            <SearchBar />
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
