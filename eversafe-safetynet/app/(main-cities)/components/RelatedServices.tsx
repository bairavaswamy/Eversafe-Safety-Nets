import Link from "next/link";
import Image from "next/image";

type Service = {
  name: string;
  slug: string;
  image: string;
  description: string;
};

type Props = {
  service: Service;
  relatedServices: Service[];
  areaSlug: string;
  areaName: string;
};

export default function RelatedServices({
  service,
  relatedServices,
  areaSlug,
  areaName,
}: Props) {

  if (!relatedServices.length) return null;
  

  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold mb-14 text-yellow-400 text-center">
          Other Safety Net Services in {areaName}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {relatedServices.map((s) => (

            <div
              key={s.slug}
              className="
              group
              bg-black/40
              border border-yellow-500/20
              rounded-2xl
              overflow-hidden
              hover:shadow-xl
              hover:-translate-y-1
              transition-all duration-300
              "
            >

              {/* IMAGE */}

              <div className="relative h-52 overflow-hidden">

                <Image
                  src={s.image}
                  alt={s.name}
                  fill
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="
                  object-cover
                  group-hover:scale-105
                  transition-transform duration-500
                  "
                />

              </div>

              {/* CONTENT */}

              <div className="p-6">

                <h3 className="text-xl font-semibold text-white mb-2">
                  {s.name}
                </h3>

                <p className="text-gray-400 text-sm mb-5">
                  {s.description}
                </p>

                <Link
                  href={`/${s.slug}-in-${areaSlug}`}
                  className="
                  inline-flex items-center
                  text-yellow-400
                  font-semibold
                  hover:text-yellow-300
                  transition
                  "
                >
                  Explore
                  <span className="ml-2 group-hover:translate-x-1 transition">
                    →
                  </span>
                </Link>

              </div>

            </div>

          ))}

        </div>
      </div>
    </section>
  );
}