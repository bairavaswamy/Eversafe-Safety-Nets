"use client";

import CompanyInfo from "./CompanyInfo";
import ServicesColumns from "./ServicesColumns";
import QuickEnquiry from "./QuickEnquiry";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#050509] via-[#0A0A0F] to-black text-gray-300 dark:from-[#0B0B0F] dark:via-[#0D0D12] dark:to-black pt-16 pb-10 border-t border-gray-800 dark:border-gray-700 overflow-hidden">
      {/* Soft Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent)] pointer-events-none" />

      {/* Top Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
        <CompanyInfo />
        <ServicesColumns />
      </div>

      <QuickEnquiry />
      <FooterBottom />
    </footer>
  );
}
