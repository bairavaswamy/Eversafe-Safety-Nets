import { cityAreas } from "./areas";
import { cities } from "@/app/footer/data";
import Footer from "@/app/footer/Footer";
import Navbar from "@/app/navbar/Navbar";
import Link from "next/link";

import {
  cityTitleTemplates,
  cityDescriptionTemplates,
  cityIntroTemplates,
  cityLongContent,
  faqTemplates,
  pick,
} from "./seoCitySafetyNets";

type Props = {
  params: Promise<{ city: string }>;
};

const PHONE = "8074838518";
const BASE_URL = "https://eversafesafetynets.com";

/* ======================================================
   STATIC ROUTES
====================================================== */

export async function generateStaticParams() {
  return cities.map((city) => ({
    city: city.toLowerCase().replace(/\s+/g, "-"),
  }));
}

/* ======================================================
   METADATA
====================================================== */

export async function generateMetadata({ params }: Props) {
  const { city } = await params;
  const cityName = city.replace(/-/g, " ");
  const seed = cityName.length;

  const title = pick(cityTitleTemplates, seed).replaceAll("{city}", cityName);
  const description = pick(cityDescriptionTemplates, seed).replaceAll(
    "{city}",
    cityName
  );
  const canonicalUrl = `${BASE_URL}/areas/${city}`

  return {
    title,
    description,
    alternates: {
      canonical :canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/areas/${city}`,
      images: [`${BASE_URL}/areas/service/balcony-2.webp`],
    },
  };
}

/* ======================================================
   LOADING SKELETON
====================================================== */

export default async function AreaPage({ params }: Props) {
  const { city } = await params;

  const cityName = city.replace(/-/g, " ");
  const subAreas = cityAreas[city] || [];
  const seed = cityName.length;

  const intro = pick(cityIntroTemplates, seed).replaceAll("{city}", cityName);
  const longText = pick(cityLongContent, seed).replaceAll("{city}", cityName);

  const faqs = Array.from({ length: 5 }).map((_, i) => {
    const f = pick(faqTemplates, seed + i);
    return {
      q: f.q.replaceAll("{city}", cityName),
      a: f.a.replaceAll("{city}", cityName),
    };
  });

  /* ======================================================
     SCHEMA (LOCAL + BREADCRUMB + FAQ)
  ====================================================== */

 const localSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "EverSafe Safety Nets",
  telephone: PHONE,
  url: `${BASE_URL}/areas/${city}`,
  areaServed: cityName,
  priceRange: "₹30-₹500",
  serviceType: "Safety Net Installation",
  address: {
    "@type": "PostalAddress",
    addressLocality: cityName,
    addressCountry: "IN",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: BASE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Areas",
      item: `${BASE_URL}/areas`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: cityName,
      item: `${BASE_URL}/areas/${city}`,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};


  return (
    <>
      <Navbar />

      {/* All Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="max-w-6xl mx-auto px-4 mt-24 mb-24 space-y-24">
        {/* ======================================================
             HERO SECTION
          ====================================================== */}
        <section className="rounded-3xl bg-gradient-to-br from-yellow-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 p-14 text-center shadow-sm">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Safety Nets Installation in {cityName}
          </h1>

          <p className="max-w-3xl mx-auto mt-5 text-lg text-gray-600 dark:text-gray-300">
            {intro}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <a
              href={`tel:${PHONE}`}
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              📞 Call Now – {PHONE}
            </a>

            <Link
              href="#areas"
              className="border-2 border-gray-300 hover:border-yellow-400 dark:border-gray-600 dark:hover:border-yellow-400 px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
            >
              View Areas
            </Link>
          </div>

          {/* Service badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 text-sm text-gray-600 dark:text-gray-400">
            <span>✔ Balcony Nets</span>
            <span>✔ Pigeon Nets</span>
            <span>✔ Children Safety Nets</span>
            <span>✔ Terrace Nets</span>
            <span>✔ Sports Practice Nets</span>
            <span>✔ Anti Bird Nets</span>
          </div>
        </section>

        {/* ======================================================
             BREADCRUMB NAVIGATION
          ====================================================== */}
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 dark:text-gray-400">
          <ol className="flex items-center space-x-2 max-w-max mx-auto">
            <li>
              <Link href="/" className="hover:text-yellow-500 dark:hover:text-yellow-400">
                Home
              </Link>
            </li>
            <li>
              <span className="mx-2">/</span>
              <Link href="/areas" className="hover:text-yellow-500 dark:hover:text-yellow-400">
                Areas
              </Link>
            </li>
            <li>
              <span className="mx-2">/</span>
              <span className="font-semibold text-gray-900 dark:text-white">{cityName}</span>
            </li>
          </ol>
        </nav>

        {/* ======================================================
             AREAS GRID
          ====================================================== */}
        <section id="areas" className="space-y-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Areas We Serve in {cityName}
          </h2>

          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 dark:text-white">
            {subAreas.slice(0, 10).map((area, index) => {
              const slug = area.toLowerCase().replace(/\s+/g, "-");

              return (
                <li key={`${area}-${index}`}>
                  <Link
                    href={`/areas/${city}/${slug}`}
                    className="block rounded-2xl bg-gray-50 dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-700 p-4 text-sm shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 border border-gray-100 dark:border-gray-700"
                  >
                    {area}
                    <div className="text-xs text-gray-400 dark:text-gray-500 mt-1 font-medium">
                      View →
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
            <div className="relative group inline-block">
            <p className="text-xl text-yellow-500 font-bold dark:text-yellow-600 cursor-help">
              Search For More Areas
            </p>

            {/* Tooltip */}
            <span className="absolute left-1/2 -translate-x-1/2 mt-2 w-48 bg-gray-900 text-white text-sm rounded-md p-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
              Use the Search Bar above to find more areas
            </span>
          </div>
        </section>

        {/* ======================================================
             GOOGLE MAP
          ====================================================== */}
        <section className="text-center space-y-6">
          <h2 className="text-3xl font-bold dark:text-white">
            We Serve All Locations Across {cityName}
          </h2>

          <iframe
            title={`${cityName} service map`}
            src={`https://www.google.com/maps?q=${cityName}&output=embed`}
            loading="lazy"
            className="w-full h-[350px] rounded-3xl shadow-lg"
          />
        </section>

        {/* ======================================================
             SEO CONTENT
          ====================================================== */}
        <section className="max-w-4xl mx-auto space-y-6 leading-relaxed text-gray-700 dark:text-gray-300">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white">
            Trusted Safety Net Service Near You
          </h2>

          <p>
            EverSafe provides strong safety nets in {cityName}. Our nets protect
            children, pets and families from balcony and window accidents. We
            also stop pigeons and birds from entering your home.
          </p>

          <p>
            We install balcony nets, pigeon nets, terrace nets and duct covering
            nets. Our team works fast and keeps your place clean. Most
            installations finish the same day.
          </p>

          <p>
            If you are searching for <strong>safety nets near me in {cityName}</strong>,
            call us today. We offer affordable prices and long-lasting materials.
          </p>

          <p>{longText}</p>
        </section>

        {/* ======================================================
             WHY CHOOSE US
          ====================================================== */}
        <section className="grid md:grid-cols-4 gap-6 text-center">
          {[
            "⭐ 10+ Years Experience",
            "⚡ Same Day Service",
            "🛡️ Strong Materials",
            "💰 Affordable Pricing",
          ].map((item, index) => (
            <div
              key={item}
              className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 dark:border-gray-700"
            >
              <div className="text-2xl mb-3">{item.split(" ")[0]}</div>
              <div className="font-semibold text-gray-900 dark:text-white">
                {item.slice(2)}
              </div>
            </div>
          ))}
        </section>

        {/* ======================================================
             PRICING SECTION
          ====================================================== */}
        <section
          aria-labelledby="pricing-heading"
          className="bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 rounded-3xl p-14 text-center space-y-12 shadow-xl"
        >
          <h2
            id="pricing-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
          >
            Safety Net Installation Prices in {cityName}
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We offer affordable and transparent pricing. Final cost depends on balcony
            size and material. Call us for a free quote today.
          </p>

          {/* Hidden SEO keywords */}
          <p className="sr-only">
            safety nets price in {cityName}, balcony net cost, pigeon net installation
            charges, cheap safety nets near me, affordable safety net service
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Balcony Nets */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-3">
                Balcony Safety Nets
              </h3>
              <p className="text-4xl font-black text-yellow-500 mb-4">₹20 / sq.ft*</p>
              <ul className="text-sm space-y-2 text-gray-600 dark:text-gray-300">
                <li>✔ Child protection</li>
                <li>✔ Strong nylon net</li>
                <li>✔ Long lasting</li>
              </ul>
            </div>

            {/* Pigeon Nets (Highlighted) */}
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900 rounded-2xl p-8 shadow-2xl hover:shadow-3xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-all duration-300" />
              <h3 className="font-bold text-xl relative z-10 mb-3">Pigeon Safety Nets</h3>
              <p className="text-4xl font-black relative z-10 mb-4">₹20 / sq.ft*</p>
              <ul className="text-sm space-y-2 relative z-10">
                <li>✔ Bird proof solution</li>
                <li>✔ Balcony & windows</li>
                <li>✔ Most popular choice</li>
              </ul>
            </div>

            {/* Terrace Nets */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-3">
                Terrace / Duct Nets
              </h3>
              <p className="text-4xl font-black text-yellow-500 mb-4">₹15 / sq.ft*</p>
              <ul className="text-sm space-y-2 text-gray-600 dark:text-gray-300">
                <li>✔ Heavy duty nets</li>
                <li>✔ Large areas covered</li>
                <li>✔ Weather resistant</li>
              </ul>
            </div>
          </div>

          <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
            *Prices may vary based on size and installation requirements
          </p>

          <a
            href={`tel:${PHONE}`}
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200"
          >
            📞 Get Free Quote Now
          </a>
        </section>

        {/* ======================================================
             FAQ SECTION
          ====================================================== */}
        <section className="max-w-4xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details
                key={i}
                className="group border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 rounded-2xl hover:shadow-md transition-all duration-200"
              >
                <summary className="font-semibold cursor-pointer text-lg text-gray-900 dark:text-white pb-2 group-open:mb-4">
                  {f.q}
                </summary>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ======================================================
             NEARBY CITIES
          ====================================================== */}
        <section className="text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            Nearby Cities We Serve
          </h2>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {cities.slice(0, 12).map((c, index) => (
              <Link
                key={`${c}-${index}`}
                href={`/areas/${c.toLowerCase().replace(/\s+/g, "-")}`}
                className="bg-gray-100 dark:bg-gray-800 hover:bg-yellow-400 dark:hover:bg-yellow-500 text-gray-800 dark:text-gray-200 hover:text-gray-900 px-6 py-3 rounded-full text-sm font-semibold shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200 border border-gray-200 dark:border-gray-700"
              >
                Safety Nets in {c}
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
