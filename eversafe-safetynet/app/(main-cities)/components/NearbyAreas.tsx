import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

type Area = {
  name: string;
  slug: string;
};

type Service = {
  name: string;
  slug: string;
};

type Props = {
  areaName: string;
  service: Service;
  areas: Area[];
};

export default function NearbyAreas({ areaName, service, areas }: Props) {
  return (
    <section className="py-28 bg-gradient-to-b from-gray-950 to-black">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-yellow-400">
          Cities We Serve
        </h2>

        <p className="text-gray-400 text-center mb-14 max-w-2xl mx-auto">
          Professional {service.name.toLowerCase()} available across nearby areas.
          Click your location to explore services.
        </p>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">

          {areas.map((area) => (
            <Link
              key={area.slug}
              href={`/${service.slug}-in-${area.slug}`}
              className="
              group
              relative
              bg-gradient-to-br
              from-black/50
              to-gray-900/60
              border border-yellow-500/20
              rounded-2xl
              p-6
              backdrop-blur-md
              hover:border-yellow-400
              hover:shadow-[0_10px_40px_rgba(255,200,0,0.15)]
              hover:-translate-y-1
              transition-all
              duration-300
              flex
              items-center
              justify-between
              "
            >

              <div className="flex items-center gap-3">

                <MapPin className="text-yellow-400 group-hover:scale-110 transition" size={20} />

                <div className="text-left">
                  <p className="font-semibold text-gray-100">
                    {area.name}
                  </p>

                  <p className="text-xs text-gray-400">
                    {service.name}
                  </p>
                </div>

              </div>

              <ArrowRight className="text-gray-400 group-hover:text-yellow-400 group-hover:translate-x-1 transition" size={18} />

            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}