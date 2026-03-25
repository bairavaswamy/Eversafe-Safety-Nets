import { FiPhone, FiMessageSquare } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function ActionIcons() {
  return (
    <div className="ml-20 flex items-center gap-3">

      {/* Call */}
      <a
        href="tel:+918074838518"
        className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition shadow-md"
        aria-label="Call Us"
      >
        <FiPhone className="text-xl" />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/+918074838518"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center hover:bg-green-600 transition shadow-md"
        aria-label="WhatsApp"
      >
        <FaWhatsapp className="text-xl" />
      </a>

      {/* Get Quote */}
      <a
        href="/contact-us"
        className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 transition shadow-md"
        aria-label="Get Quote"
      >
        <FiMessageSquare className="text-xl" />
      </a>

    </div>
  );
}
