import { ShieldCheck, Sun, Wrench, DollarSign, Sparkles, Zap } from "lucide-react"

type Feature = {
  title: string
  desc: string
}

type Props = {
  serviceName: string
  features?: Feature[]
}

const defaultFeatures: Feature[] = [
  {
    title: "UV Resistant Nets",
    desc: "High quality nylon nets built to withstand sunlight and weather."
  },
  {
    title: "Expert Installation",
    desc: "Our trained professionals ensure safe and precise installation."
  },
  {
    title: "Affordable Pricing",
    desc: "Premium materials with competitive pricing."
  },
  {
    title: "Strong Durability",
    desc: "Long lasting materials designed for years of reliable use."
  },
  {
    title: "Clean Aesthetic",
    desc: "Safety nets installed without blocking your balcony view."
  },
  {
    title: "Fast Service",
    desc: "Most installations completed within a few hours."
  }
]

const icons = [
  Sun,
  Wrench,
  DollarSign,
  ShieldCheck,
  Sparkles,
  Zap
]

export default function Features({
  serviceName,
  features = defaultFeatures
}: Props) {

  return (
    <section className="py-28 bg-gradient-to-b from-black via-gray-950 to-black">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-bold text-center text-yellow-400 mb-16">
          Why Choose Our {serviceName}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {features.map((feature, i) => {

            const Icon = icons[i]

            return (
              <div
                key={i}
                className="
                group
                relative
                p-7
                rounded-2xl
                bg-gray-900
                border border-gray-800
                hover:border-yellow-400/60
                hover:-translate-y-2
                hover:shadow-[0_20px_50px_rgba(255,200,0,0.1)]
                transition-all
                duration-300
                "
              >

                {/* Number badge */}
                <span className="absolute top-4 right-5 text-gray-700 text-4xl font-bold">
                  0{i + 1}
                </span>

                {/* Icon */}
                <div className="
                  w-12 h-12
                  rounded-xl
                  bg-yellow-400/10
                  flex
                  items-center
                  justify-center
                  mb-5
                  group-hover:bg-yellow-400/20
                  transition
                ">
                  <Icon className="text-yellow-400" size={22}/>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {feature.desc}
                </p>

              </div>
            )
          })}

        </div>

      </div>

    </section>
  )
}