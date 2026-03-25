"use client";

import Link from "next/link";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { Home, Info, Image as GalleryIcon, PhoneCall, Layers3 } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { links as allLinks, megaServices } from "@/app/data/NavLinks";
import ActionIcons from "./ActionIcons";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, setIsOpen }) => {
  const pathname = usePathname();
  const [openService, setOpenService] = useState<string | null>(null);
  const [logoLoaded, setLogoLoaded] = useState(false);

  const filteredLinks = allLinks.filter((link) => link.label !== "SERVICES");

  const toggleService = (service: string): void =>
    setOpenService(openService === service ? null : service);

  const isActive = (path: string): boolean => pathname === path;

  /* Lock body scroll */
  useEffect(() => {
    if (isOpen) document.body.classList.add("tw-overflow-hidden");
    else document.body.classList.remove("tw-overflow-hidden");

    return () => document.body.classList.remove("tw-overflow-hidden");
  }, [isOpen]);

  return (
    <>
      {/* 🍔 Hamburger */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        className="md:hidden ml-2 p-2 rounded-md bg-yellow-400 dark:bg-[#16234b] text-gray-900 dark:text-yellow-400 hover:scale-110 transition-transform duration-300"
      >
        <GiHamburgerMenu size={22} />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998] transition-opacity duration-300"
        />
      )}

      {/* 📱 Sidebar */}
      <div
        id="mobile-menu"
        className={`fixed inset-y-0 left-0 w-72 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } z-[9999] text-gray-800 dark:text-gray-100 border-r border-gray-300 dark:border-gray-700 shadow-2xl overflow-y-auto h-screen overscroll-contain`}
        style={{ backfaceVisibility: "hidden", transform: "translateZ(0)" }}
      >
        <div className="absolute inset-0 bg-white dark:bg-[#0b132b]" />

        <div className="relative min-h-full bg-gradient-to-b from-white via-gray-100 to-white dark:from-[#0b132b] dark:via-[#111b3a] dark:to-[#0b132b]">

          {/* ❌ Close Button (fixed) */}
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation menu"
            className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-[#1a2454] text-gray-800 dark:text-yellow-400 hover:scale-110 transition-transform z-50"
          >
            <RxCross2 size={22} />
          </button>

          {/* 🪶 Logo */}
          <div className="flex flex-col items-center justify-center pt-12 pb-6 border-b border-gray-300 dark:border-gray-700 relative">
            {!logoLoaded && (
              <div className="w-20 h-20 rounded-full bg-gray-300 dark:bg-gray-700 animate-pulse mb-2" />
            )}

            <Image
              src="/logo.webp"
              alt="Eversafe Safety Nets Logo"
              width={80}
              height={80}
              priority
              className={`rounded-full shadow-md transition-opacity duration-500 ${
                logoLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setLogoLoaded(true)}
            />

            <h1 className="mt-2 font-extrabold text-lg text-yellow-500 dark:text-yellow-400 tracking-wide text-center">
              EVERSAFE SAFETY NETS
            </h1>

            <p className="text-xs text-gray-500 dark:text-gray-400">
              Reliable. Safe. Invisible.
            </p>
          </div>

          {/* 🔗 Links */}
          <div className="px-5 py-4 space-y-3">
            {filteredLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                aria-label={`Go to ${link.label}`}
                className={`block flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "bg-yellow-400 text-gray-900 font-semibold shadow-md"
                    : "hover:text-gray-900 hover:bg-yellow-300 dark:hover:bg-[#16234b] dark:hover:text-yellow-400"
                }`}
              >
                {link.label === "HOME" && <Home size={18} className="mr-2" />}
                {link.label === "ABOUT" && <Info size={18} className="mr-2" />}
                {link.label === "GALLERY" && <GalleryIcon size={18} className="mr-2" />}
                {link.label === "CONTACT US" && <PhoneCall size={18} className="mr-2" />}
                <span>{link.label}</span>
              </Link>
            ))}

            {/* Services */}
            <div className="border-t border-gray-300 dark:border-gray-700 pt-4 pb-40">
              <div className="flex items-center gap-2 mb-2 px-3">
                <Layers3 size={18} className="text-yellow-400" />
                <span className="text-sm font-semibold uppercase text-yellow-500 dark:text-yellow-400 tracking-wider">
                  Services
                </span>
              </div>

              {Object.entries(megaServices).map(([category, { items }]) => {
                const isExpanded = openService === category;

                return (
                  <div key={category} className="mb-2">
                    <button
                      type="button"
                      onClick={() => toggleService(category)}
                      aria-expanded={isExpanded}
                      aria-controls={`service-${category}`}
                      className="w-full flex items-center justify-between px-3 py-2 rounded-md font-medium text-sm hover:text-yellow-400 transition-colors"
                    >
                      <span>{category}</span>
                      {isExpanded ? <FiChevronUp /> : <FiChevronDown />}
                    </button>

                    <div
                      id={`service-${category}`}
                      className={`overflow-hidden transition-all duration-300 ${
                        isExpanded ? "max-h-100 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <ul className="ml-4 mt-2 space-y-1">
                        {items.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              onClick={() => setIsOpen(false)}
                              aria-label={`Go to ${item.text}`}
                              className={`block px-3 py-1 rounded-md text-sm ${
                                isActive(item.href)
                                  ? "bg-yellow-300 text-gray-900 font-semibold"
                                  : "hover:text-yellow-400 hover:bg-gray-100 dark:hover:bg-[#1b275b]"
                              }`}
                            >
                              {item.text}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <ActionIcons />
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
