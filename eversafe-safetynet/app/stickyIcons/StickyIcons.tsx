import React, { useState } from "react";
import { FiPhone, FiMail, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const StickyContactIcons = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`fixed top-1/2 right-0 transform -translate-y-1/2 z-50 transition-all duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Hide contact icons" : "Show contact icons"}
        className="absolute -left-10 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-l-lg bg-gray-800 hover:bg-gray-900 text-white"
      >
        {isOpen ? <FiChevronRight className="h-5 w-5" /> : <FiChevronLeft className="h-5 w-5" />}
      </button>

      {/* Icons Container */}
      <div className="bg-white rounded-l-lg shadow-xl p-2 space-y-3">
        <a
          href="tel:+918074838518"
          aria-label="Call us at +91 8074838518"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-red-500 hover:bg-red-600 text-white transition-colors"
        >
          <FiPhone className="h-6 w-6" aria-hidden="true" />
        </a>
        <a
          href="https://wa.me/918074838518"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 hover:bg-green-600 text-white transition-colors"
        >
          <FaWhatsapp className="h-6 w-6" aria-hidden="true" />
        </a>
        <a
          href="mailto:eversafesafetynets@gmail.com"
          aria-label="Send an email to eversafesafetynets@gmail.com"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 text-white transition-colors"
        >
          <FiMail className="h-6 w-6" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}

export default StickyContactIcons;