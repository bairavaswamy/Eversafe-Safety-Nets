"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

type Props = {
  serviceName: string
  areaName: string
  folder: string
  maxImages?: number
}

export default function Gallery({
  serviceName,
  areaName,
  folder,
  maxImages = 6
}: Props) {

  const images = Array.from(
    { length: maxImages },
    (_, i) => `/main-city/${folder}/image-${i + 1}.webp`
  )

  const [index, setIndex] = useState(0)

  const thumbsRef = useRef<HTMLDivElement>(null)
  const touchStart = useRef(0)

  const hero = images[index]

  const prev = () =>
    setIndex((p) => (p === 0 ? images.length - 1 : p - 1))

  const next = () =>
    setIndex((p) => (p === images.length - 1 ? 0 : p + 1))

  /* Keyboard navigation */

  useEffect(() => {

    const keyHandler = (e: KeyboardEvent) => {

      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()

    }

    window.addEventListener("keydown", keyHandler)

    return () => window.removeEventListener("keydown", keyHandler)

  }, [])

  /* Mobile swipe */

  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX
  }

  const onTouchEnd = (e: React.TouchEvent) => {

    const diff = e.changedTouches[0].clientX - touchStart.current

    if (Math.abs(diff) < 40) return

    diff > 0 ? prev() : next()

  }

  /* Auto center thumbnail */

  // useEffect(() => {

  //   const el = thumbsRef.current?.children[index] as HTMLElement

  //   el?.scrollIntoView({
  //     behavior: "smooth",
  //     inline: "center",
  //     block: "nearest"
  //   })

  // }, [index])

  return (

    <section className="py-4 bg-white">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 text-center mb-14">{serviceName} in {areaName}
        </h2>

        {/* HERO IMAGE */}

        <div
          className="
          relative
          rounded-3xl
          overflow-hidden
          shadow-xl
          "
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >

          <Image
            src={hero}
            alt={`${serviceName} in ${areaName}`}
            width={1400}
            height={800}
            priority
            sizes="(max-width:768px) 100vw, 1200px"
            className="
            w-full
            h-[420px]
            md:h-[520px]
            object-cover
            transition-all
            duration-500
            "
          />

          {/* IMAGE COUNTER */}

          <div className="absolute bottom-4 right-4 bg-black/60 text-white text-sm px-3 py-1 rounded-full">
            {index + 1} / {images.length}
          </div>

          {/* LEFT BUTTON */}

          <button
            onClick={prev}
            aria-label="Previous image"
            className="
            absolute left-4 top-1/2 -translate-y-1/2
            backdrop-blur-md
            p-3
            rounded-full
            shadow-lg
            hover:scale-110
            transition
            "
          >
            <ChevronLeft size={26}/>
          </button>

          {/* RIGHT BUTTON */}

          <button
            onClick={next}
            aria-label="Next image"
            className="
            absolute right-4 top-1/2 -translate-y-1/2
            backdrop-blur-md
            p-3
            rounded-full
            shadow-lg
            hover:scale-110
            transition
            "
          >
            <ChevronRight size={26}/>
          </button>

        </div>

        {/* THUMBNAILS */}

        <div className="mt-6">

          <div
            ref={thumbsRef}
            className="
            flex
            gap-3
            overflow-x-auto
            scrollbar-hide
            px-2
            py-2
            "
          >

            {images.map((img, i) => (

              <button
                key={i}
                onClick={() => setIndex(i)}
                className="flex-shrink-0"
              >

                <Image
                  src={img}
                  alt={`${serviceName} ${i + 1}`}
                  width={80}
                  height={80}
                  loading="lazy"
                  className={`
                  w-16
                  h-16
                  md:w-20
                  md:h-20
                  object-cover
                  rounded-lg
                  transition
                  duration-300
                  ${
                    index === i
                      ? "ring-2 ring-blue-500 scale-110"
                      : "opacity-70 hover:opacity-100 hover:scale-105"
                  }
                  `}
                />

              </button>

            ))}

          </div>

        </div>

      </div>

    </section>
  )
}