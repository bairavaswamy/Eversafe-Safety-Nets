"use client";

import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const CTASection = () => {
  const handleCallClick = () => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "cta_click",
        action: "call",
        label: "Call Now Button",
      });
    }
  };

  const handleWhatsappClick = () => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "cta_click",
        action: "whatsapp",
        label: "WhatsApp Button",
      });
    }
  };

  return (
    <section className="mt-20 relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-r from-yellow-400 to-yellow-500 dark:from-yellow-500 dark:to-yellow-600 text-black dark:text-white p-10">

      {/* Glow Effect */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-2xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
          Book Your Free Inspection Today
        </h2>

        {/* Subtext */}
        <p className="mt-4 text-base md:text-lg opacity-90">
          Fast response, expert installation, and long-lasting safety solutions for your home.
        </p>

        {/* Trust badges */}
        <div className="mt-4 flex flex-wrap gap-3 text-sm font-medium">
          <span className="bg-black/10 px-3 py-1 rounded-full">✔ Same-Day Service</span>
          <span className="bg-black/10 px-3 py-1 rounded-full">✔ Certified Experts</span>
          <span className="bg-black/10 px-3 py-1 rounded-full">✔ Affordable Pricing</span>
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap gap-4">
          {/* Call */}
          <a
            href="tel:+918074838518"
            onClick={handleCallClick}
            className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform duration-200"
          >
            <FaPhoneAlt />
            Call Now
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/918074838518"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsappClick}
            className="flex items-center gap-3 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform duration-200"
          >
            <FaWhatsapp />
            WhatsApp Now
          </a>
        </div>

        {/* Urgency */}
        <p className="mt-5 text-sm opacity-80">
          Limited slots available — get quick service from nearby professionals.
        </p>
      </div>
    </section>
  );
};

export default CTASection;