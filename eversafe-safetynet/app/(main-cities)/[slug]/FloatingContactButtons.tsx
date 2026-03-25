"use client"

import Link from "next/link"
import { BsWhatsapp } from "react-icons/bs"
import { FiPhone } from "react-icons/fi"

export default function FloatingContactButtons() {
  return (
    <>
      {/* WhatsApp Button - bottom left */}
      <Link
        href="https://wa.me/918074838518"
        target="_blank"
        className="
          fixed bottom-6 left-6
          w-14 h-14
          bg-green-500 hover:bg-green-600
          rounded-full
          flex items-center justify-center
          shadow-xl
          transition-all
          hover:scale-110
          z-50
        "
      >
        <BsWhatsapp size={28} className="text-white" />
      </Link>

      {/* Call Button - bottom right */}
      <Link
        href="tel:+918074838518"
        className="
          fixed bottom-6 right-6
          w-14 h-14
          bg-red-500 hover:bg-red-600
          rounded-full
          flex items-center justify-center
          shadow-xl
          transition-all
          hover:scale-110
          z-50
        "
      >
        <FiPhone size={28} className="text-white" />
      </Link>
    </>
  )
}