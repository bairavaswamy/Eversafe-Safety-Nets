import { Star, Quote } from "lucide-react"

type Review = {
  name: string
  review: string
  rating?: number
}

type Props = {
  title?: string
  reviews: Review[]
  max?: number
}

export default function Reviews({
  title = "What Our Clients Say About Eversafe Safety Nets",
  reviews,
  max = 3
}: Props) {

  const list = reviews.slice(0, max)

  return (
    <section className="py-28 bg-gradient-to-b from-gray-950 to-black">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-center text-yellow-400 mb-14">
          {title}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {list.map((r, i) => (
            <div
              key={i}
              className="
              group
              relative
              bg-gradient-to-br
              from-gray-900
              to-gray-800
              border border-gray-700
              rounded-2xl
              p-7
              shadow-xl
              hover:-translate-y-2
              hover:shadow-yellow-500/10
              transition-all
              duration-300
              "
            >

              {/* Quote Icon */}
              <Quote className="absolute top-5 right-5 text-yellow-400/20 group-hover:text-yellow-400/40 transition" size={40} />

              {/* Stars */}
              {r.rating && (
                <div className="flex mb-4">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-yellow-400" size={18}/>
                  ))}
                </div>
              )}

              {/* Review Text */}
              <p className="text-gray-300 leading-relaxed mb-6">
                "{r.review}"
              </p>

              {/* Client */}
              <div className="flex items-center gap-3">

                <div className="w-10 h-10 rounded-full bg-yellow-400 text-black flex items-center justify-center font-bold">
                  {r.name.charAt(0)}
                </div>

                <div>
                  <p className="text-white font-semibold">
                    {r.name}
                  </p>

                  <p className="text-xs text-gray-400">
                    Verified Customer
                  </p>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}