import { CheckCircle, Clock, Star, Briefcase } from "lucide-react"

type Stat = {
  value: string
  label: string
}

type Props = {
  stats?: Stat[]
  title?: string
}

const defaultStats: Stat[] = [
  { value: "500+", label: "Projects Completed" },
  { value: "10+", label: "Years Experience" },
  { value: "24h", label: "Fast Installation" },
  { value: "100%", label: "Customer Satisfaction" }
]

const icons = [
  Briefcase,
  Star,
  Clock,
  CheckCircle
]

export default function Stats({ stats = defaultStats, title }: Props) {

  return (

    <section className="py-28 bg-gradient-to-b from-black via-gray-950 to-black">

      <div className="max-w-6xl mx-auto px-6">

        {title && (
          <h2 className="text-3xl md:text-4xl font-bold text-center text-yellow-400 mb-16">
            {title}
          </h2>
        )}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {stats.map((stat, i) => {

            const Icon = icons[i]

            return (

              <div
                key={i}
                className="
                group
                relative
                p-8
                rounded-2xl
                border border-gray-800
                bg-gray-900
                text-center
                hover:-translate-y-2
                hover:border-yellow-400/60
                hover:shadow-[0_15px_40px_rgba(255,200,0,0.12)]
                transition-all
                duration-300
                "
              >

                <div className="
                w-12 h-12
                mx-auto mb-5
                flex items-center justify-center
                rounded-xl
                bg-yellow-400/10
                group-hover:bg-yellow-400/20
                transition
                ">
                  <Icon className="text-yellow-400" size={22}/>
                </div>

                <p className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                  {stat.value}
                </p>

                <p className="text-gray-400 mt-3 text-sm tracking-wide uppercase">
                  {stat.label}
                </p>

              </div>

            )

          })}

        </div>

      </div>

    </section>

  )
}