"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { services } from "@/app/data/services"

type Props = {
  citySlug?: string
  currentService?: string
}

export default function ServicesRow({ citySlug, currentService }: Props) {

  const sliderRef = useRef<HTMLDivElement>(null)

  let isDown = false
  let startX = 0
  let scrollLeft = 0

  const mouseDown = (e: React.MouseEvent) => {
    isDown = true
    startX = e.pageX - (sliderRef.current?.offsetLeft || 0)
    scrollLeft = sliderRef.current?.scrollLeft || 0
  }

  const mouseLeave = () => (isDown = false)
  const mouseUp = () => (isDown = false)

  const mouseMove = (e: React.MouseEvent) => {

    if (!isDown || !sliderRef.current) return

    e.preventDefault()

    const x = e.pageX - sliderRef.current.offsetLeft
    const walk = (x - startX) * 1.3

    sliderRef.current.scrollLeft = scrollLeft - walk
  }

  const filteredServices = services.filter(
    s => s.slug !== currentService
  )

  return (

    <section className="py-20 bg-gray-950">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-yellow-400 mb-10">
          Popular Services in {citySlug}
        </h2>

        <div
          ref={sliderRef}
          onMouseDown={mouseDown}
          onMouseLeave={mouseLeave}
          onMouseUp={mouseUp}
          onMouseMove={mouseMove}
          className="
          flex
          gap-6
          overflow-x-auto
          snap-x
          snap-mandatory
          scroll-smooth
          cursor-grab
          scrollbar-hide
          "
        >

          {filteredServices.map((service) => {

            const link = citySlug
              ? `/${service.slug}-in-${citySlug}`
              : `/${service.slug}`

            return (

              <div
                key={service.slug}
                className="
                snap-start
                w-[280px]
                flex-shrink-0
                bg-gray-900
                border border-gray-800
                rounded-xl
                overflow-hidden
                hover:border-yellow-400/70
                transition
                "
              >

                {/* Image */}

                <div className="relative h-[130px]">

                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    sizes="300px"
                    className="object-cover"
                  />

                  {/* Offer badge */}

                  <span className="
                  absolute
                  top-2
                  left-2
                  bg-red-500
                  text-white
                  text-xs
                  px-2
                  py-1
                  rounded
                  ">
                    20% OFF
                  </span>

                  {/* Brand badge */}

                  <span className="
                  absolute
                  top-2
                  right-2
                  bg-black/70
                  text-yellow-400
                  text-xs
                  px-2
                  py-1
                  rounded
                  ">
                    Eversafe
                  </span>

                </div>

                {/* Content */}

                <div className="p-4">

                  <h3 className="text-sm font-semibold text-white mb-1 line-clamp-2">
                    {service.name}
                  </h3>

                  <p className="text-xs text-gray-400 mb-3 line-clamp-2">
                    {service.short}
                  </p>

                  <div className="flex items-center justify-between">

                    {/* Price */}

                    <span className="text-yellow-400 font-bold text-sm">
                      ₹{service.price ?? 999}
                    </span>

                    <Link
                      href={link}
                      className="text-yellow-400 text-xs font-semibold hover:text-yellow-300"
                    >
                      View →
                    </Link>

                  </div>

                </div>

              </div>

            )

          })}

        </div>

      </div>

    </section>

  )

}