import Link from "next/link"
import { Phone, MessageCircle, CalendarCheck } from "lucide-react"

type Props = {
  serviceName: string
  areaName: string
}

export default function CTA({ serviceName, areaName }: Props) {
  return (

    <section className="py-28 bg-gradient-to-br from-black via-gray-950 to-black rounded-3xl border border-yellow-400/20">

      <div className="max-w-4xl mx-auto text-center px-6">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
          Secure Your Home Today
        </h2>

        {/* Description */}
        <p className="text-gray-300 mb-10 text-lg max-w-2xl mx-auto">
          Get professional installation of{" "}
          <span className="text-yellow-400 font-semibold">
            {serviceName.toLowerCase()}
          </span>{" "}
          in <span className="font-semibold">{areaName}</span>.
          Fast service, strong materials, and expert installation.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">

          <Link
            href="/contact-us"
            className="
            flex items-center gap-2
            px-8 py-4
            bg-yellow-400
            hover:bg-yellow-500
            text-black
            font-semibold
            rounded-xl
            shadow-lg
            hover:-translate-y-1
            transition-all
            "
          >
            <CalendarCheck size={18}/>
            Get Free Quote
          </Link>

          <Link
            href="tel:+918074838518"
            className="
            flex items-center gap-2
            px-8 py-4
            border border-gray-700
            text-white
            rounded-xl
            hover:bg-gray-800
            hover:-translate-y-1
            transition-all
            "
          >
            <Phone size={18}/>
            Call Now
          </Link>

          <a
            href="https://wa.me/918074838518"
            className="
            flex items-center gap-2
            px-8 py-4
            bg-green-500
            hover:bg-green-600
            rounded-xl
            text-white
            font-semibold
            hover:-translate-y-1
            transition-all
            "
          >
            <MessageCircle size={18}/>
            WhatsApp
          </a>

        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">

          <span>✔ Free Consultation</span>
          <span>✔ Same Day Installation</span>
          <span>✔ 500+ Happy Customers</span>

        </div>

      </div>

    </section>

  )
}