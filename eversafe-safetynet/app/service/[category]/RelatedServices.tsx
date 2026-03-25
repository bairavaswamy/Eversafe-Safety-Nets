import Link from "next/link";
import Image from "next/image";
import { servicesData } from "./data/serviceData";

export default function RelatedServices({
  current,
}: {
  current: string;
}) {
  // remove current service
  const related = Object.entries(servicesData)
    .filter(([key]) => key !== current)
    .slice(0, 6); // ⭐ LIMIT TO 6 ONLY

  return (
    <section
      aria-labelledby="related-services-heading"
      className="pt-14"
    >
      <h2
        id="related-services-heading"
        className="text-2xl md:text-3xl font-bold text-center mb-10"
      >
        Related Safety Net Services
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {related.map(([slug, service]) => (
          <Link
            key={slug}
            href={`/service/${slug}`}
            aria-label={`${service.title} installation service`}
            className="
              group
              rounded-3xl
              overflow-hidden
              bg-white dark:bg-gray-900
              border border-gray-200 dark:border-gray-800
              shadow-sm hover:shadow-xl
              transition-all duration-300
              hover:-translate-y-1
              flex flex-col
            "
          >
            {/* IMAGE */}
            {service.service?.[0] && (
              <div className="relative h-40 w-full">
                <Image
                  src={service.service[0]}
                  alt={service.title}
                  fill
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition"
                />
              </div>
            )}

            {/* CONTENT */}
            <div className="p-5 flex flex-col gap-2">
              <h3 className="font-semibold text-lg group-hover:text-yellow-500 transition">
                {service.title}
              </h3>

              <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                {service.about.slice(0, 90)}...
              </p>

              <span className="mt-2 text-yellow-500 text-sm font-medium">
                Explore →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
