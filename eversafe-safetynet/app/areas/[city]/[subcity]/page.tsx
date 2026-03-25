import Navbar from "@/app/navbar/Navbar";
import Footer from "@/app/footer/Footer";
import { cityAreas } from "../areas";
import Link from "next/link";
import Image from "next/image";
import {
  FaDove,
  FaThLarge,
  FaCar,
  FaTree,
  FaFeatherAlt,
  FaHome,
  FaBaby
} from "react-icons/fa";
import { MdSports, MdSportsCricket } from "react-icons/md";
import {
  titleTemplates,
  descriptionTemplates,
  introTemplates,
  localReasons,
  seoHealthTemplates,
  faqTemplates,
  mainContentTemplates,
  pick,
} from "./seoSafetyNets";


const dailyContentVariants = [
  "Our technicians are active today in this area, completing new safety net installations for balconies and windows.",
  "Today we are serving multiple apartments in this locality with fast and secure safety net installations.",
  "Newly safety net installations are being completed today in nearby homes and buildings.",
  "Our team is currently installing balcony and pigeon safety nets in this area with same-day support.",
  "Safety net installation requests are actively being handled today in this locality.",
];


/* ================= UTILS ================= */
function rotate<T>(arr: T[], seed: number) {
  return arr[seed % arr.length];
}


type Props = {
  params: Promise<{
    city: string;
    subcity: string;
  }>;
};

/* ================= STATIC PARAMS ================= */
export async function generateStaticParams() {
  return Object.entries(cityAreas).flatMap(([city, areas]) =>
    areas.map((area) => ({
      city,
      subcity: area.toLowerCase().replace(/\s+/g, "-"),
    }))
  );
}

/* ================= SEO META ================= */
export async function generateMetadata({ params }: Props) {
  const { city, subcity } = await params;
  const cityName = city.replace(/-/g, " ");
  const areaName = subcity.replace(/-/g, " ");
  const seed = cityName.length + areaName.length;

  return {
    title: pick(titleTemplates, seed)
      .replaceAll("{area}", areaName)
      .replaceAll("{city}", cityName),
    description: pick(descriptionTemplates, seed)
      .replaceAll("{area}", areaName)
      .replaceAll("{city}", cityName),
      alternates: {
      canonical: `https://eversafesafetynets.com/areas/${city}/${subcity}`,
    },
    openGraph: {
      title: `${areaName} Safety Nets`,
      description: `Professional safety net installation in ${areaName}, ${cityName}`,
      type: "website",
      locale: "en_IN",
    },

  };
}

/* ================= PAGE ================= */
export default async function SubCityPage({ params }: Props) {
  const { city, subcity } = await params;
  const cityName = city.replace(/-/g, " ");
  const subCityName = subcity.replace(/-/g, " ");
  const seed = cityName.length + subCityName.length;

  const intro = pick(introTemplates, seed)
    .replaceAll("{area}", subCityName)
    .replaceAll("{city}", cityName);

  const mainContent = pick(mainContentTemplates, seed)
    .replaceAll("{area}", subCityName)
    .replaceAll("{city}", cityName);

  const seoHealth = pick(seoHealthTemplates, seed)
    .replaceAll("{area}", subCityName)
    .replaceAll("{city}", cityName);

  const localText =
    pick(localReasons, seed).replace("{area}", subCityName) +
    " " +
    pick(localReasons, seed + 1).replace("{area}", subCityName);

  const faqs = faqTemplates
    .slice(seed % faqTemplates.length, seed % faqTemplates.length + 5)
    .map((f) => ({
      q: f.q.replaceAll("{area}", subCityName).replaceAll("{city}", cityName),
      a: f.a.replaceAll("{area}", subCityName).replaceAll("{city}", cityName),
    }));

  const services = [
    { slug: "balcony-safety-nets", name: "Balcony Safety Nets" },
    { slug: "pigeon-safety-nets", name: "Pigeon Safety Nets" },
    { slug: "children-safety-nets", name: "Children Safety Nets" },
    { slug: "terrace-safety-nets", name: "Terrace Safety Nets" },
    { slug: "invisible-grills", name: "Invisible Grill Nets" },
    { slug: "sports-nets", name: "Sports Nets" },
    {slug:"cricket-practice-nets",name:"Cricket Practice Nets"},
    {slug:"car-parking-safety-nets",name:"Car Parking Safety Nets"},
    {slug:"coconut-tree-safety-nets",name:"Coconut Tree Safety Nets"},
    {slug:"anti-bird-nets",name:"Anti Bird Nets" }
  ];
  const dailyFreshText = rotate(dailyContentVariants,seed);


  /* ================= SCHEMA ================= */
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a,
      },
    })),
  };

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "EverSafe Safety Nets",
    "areaServed": `${subCityName}, ${cityName}`,
    "telephone": "+918074838518",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": subCityName,
      "addressRegion": cityName,
      "addressCountry": "IN",
    },
    "serviceOffered": services,
  };

  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 mt-20 space-y-20 text-gray-900 dark:text-gray-100">

        {/* ================= SCHEMA JSON ================= */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />

        {/* ================= BREADCRUMB ================= */}
        <nav className="text-sm text-gray-500 dark:text-gray-400">
          <Link href="/">Home</Link> /{" "}
          <Link href="/areas">Areas</Link> /{" "}
          <Link href={`/areas/${city}`}>{cityName}</Link> /{" "}
          <span className="font-medium text-gray-900 dark:text-white">
            {subCityName}
          </span>
        </nav>

    {/* ================= HERO (PREMIUM) ================= */}
<section
  aria-label="Safety nets service hero"
  className="
    relative
    rounded-3xl
    overflow-hidden
    px-6 md:px-12 py-14
    grid md:grid-cols-2 gap-14 items-center
    bg-gradient-to-br 
    from-yellow-50 via-white to-gray-100
    dark:from-gray-900 dark:via-gray-950 dark:to-black
    shadow-xl
  "
>
  {/* LEFT CONTENT */}
  <div className="space-y-7">

    {/* small trust badge */}
    <span className="inline-block text-xs font-medium bg-yellow-400/20 text-yellow-700 dark:text-yellow-400 px-4 py-1 rounded-full">
      ⭐ Trusted by 15,000+ Homes
    </span>

    {/* Heading */}
    <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-gray-900 dark:text-white">
      Safety Nets Installation
      <br />
      in {subCityName}, {cityName}
    </h1>

    {/* Description (6th grade simple) */}
    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-xl">
      {intro}
    </p>

    {/* CTA buttons */}
    <div className="flex flex-wrap gap-4 pt-2">

      <a
        href="tel:+918074838518"
        className="
          bg-yellow-400 hover:bg-yellow-500
          text-black font-semibold
          px-7 py-3 rounded-2xl
          shadow-md hover:shadow-xl
          transition-all
          hover:-translate-y-1
        "
      >
        📞 Call Now
      </a>

      <Link
        href="/contact-us"
        prefetch={false}
        className="
          bg-white dark:bg-gray-900
          border border-gray-300 dark:border-gray-700
          px-7 py-3 rounded-2xl
          font-medium
          hover:bg-gray-100 dark:hover:bg-gray-800
          transition-all
        "
      >
        Get Free Quote
      </Link>
    </div>

    {/* mini trust points */}
    <div className="flex flex-wrap gap-6 text-sm text-gray-500 dark:text-gray-400 pt-3">
      <span>✔ Same-day service</span>
      <span>✔ Strong nylon nets</span>
      <span>✔ Affordable pricing</span>
    </div>
  </div>

  {/* RIGHT IMAGE */}
  <div className="relative">

    <Image
      src={`/service/balcony-5.webp`}
      alt={`Safety nets in ${subCityName}, ${cityName}`}
      width={600}
      height={400}
      priority
      className="
        rounded-3xl
        object-cover
        w-full h-[320px] md:h-[420px]
        shadow-2xl
        border border-gray-200 dark:border-gray-800
      "
    />

    {/* subtle glow effect */}
    <div className="absolute inset-0 rounded-3xl bg-yellow-400/10 blur-3xl -z-10" />
  </div>
</section>


        {/* ================= MAIN CONTENT ================= */}
        <section className="max-w-4xl mx-auto space-y-6 leading-relaxed">
          <h2 className="text-3xl font-bold text-center">
            Professional Safety Net Installation in {subCityName}
          </h2>
          <p className="text-gray-700 dark:text-gray-300">{mainContent}</p>
          
                         {/* DAILY FRESHNESS */}
          <p className="text-gray-600 dark:text-gray-400 italic">{dailyFreshText}</p>
        </section>

        {/* ================= SERVICES (PREMIUM UI) ================= */}
<section
  aria-label="Services"
  className="
    max-w-6xl mx-auto
    px-6 py-16
    space-y-14
  "
>
  {/* Heading */}
  <div className="text-center space-y-3">
    <h2 className="text-3xl md:text-4xl font-extrabold">
      Safety Net Services in {subCityName}
    </h2>

    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
      We install strong and safe nets for homes, apartments, and buildings.
      Choose the service you need below.
    </p>
  </div>

  {/* Cards */}
  <div className="grid grid-cols-2 md:grid-cols-3 gap-7">

    {services.map((s) => (
      <Link
        key={s.slug}
        href={`/areas/${city}/${subcity}/${s.slug}`}
        className="
          group
          relative
          rounded-3xl
          p-8
          text-center flex flex-col  items-center
          border border-gray-200 dark:border-gray-800
          bg-white dark:bg-gray-900
          shadow-sm hover:shadow-xl
          hover:-translate-y-2
          transition-all duration-300
          overflow-hidden
        "
      >
        {/* subtle gradient glow on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-yellow-100/40 to-transparent dark:from-yellow-500/10" />

        {/* icon (auto based on service name) */}
        <div className="relative text-4xl mb-3">
          {s.slug.includes("balcony") && <FaHome fill="red" size={40}/>}
          {s.slug.includes("pigeon") && <FaDove fill="yellow" size={40}/>}
          {s.slug.includes("children") && <FaBaby fill="yellow" size={40}/>}
          {s.slug.includes("terrace") && <FaThLarge fill="red" size={40}/>}
          {s.slug.includes("invisible") && <FaThLarge fill="orange" size={40}/>}
          {s.slug.includes("sports") && <MdSports fill="orange" size={40}/>}
          {s.slug.includes("cricket") && <MdSportsCricket fill="yellow" size={40}/>}
          {s.slug.includes("car") && <FaCar fill="blue" size={40}/>}
          {s.slug.includes("coconut") && <FaTree fill="green" size={40}/>}
          {s.slug.includes("anti") && <FaFeatherAlt fill="orange" size={40}/>}
        </div>

        {/* title */}
        <h3 className="relative font-semibold text-gray-900 dark:text-gray-100 text-lg">
          {s.name}
        </h3>

        {/* small subtitle for premium feel */}
        <p className="relative text-xs mt-2 text-gray-500 dark:text-gray-400">
          Professional Installation →
        </p>
      </Link>
    ))}

  </div>
</section>


        {/* ================= LOCAL REASONS (PREMIUM) ================= */}
<section
  className="
    max-w-6xl mx-auto
    px-6 py-14
    rounded-3xl
    bg-gradient-to-br
    from-yellow-50 via-white to-gray-50
    dark:from-gray-900 dark:via-gray-900 dark:to-gray-950
    border border-gray-200 dark:border-gray-800
    shadow-sm
  "
>
  <div className="grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT CONTENT */}
    <div className="space-y-5">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
        Why Safety Nets Are Important in {subCityName}
      </h2>

      <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
        {localText}
      </p>

      {/* small benefits */}
      <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
        <li>✔ Prevent balcony & window accidents</li>
        <li>✔ Stop pigeons and birds</li>
        <li>✔ Safe for kids and pets</li>
        <li>✔ Strong and weather resistant nets</li>
      </ul>
    </div>

    {/* RIGHT ICON CARD */}
    <div
      className="
        bg-white dark:bg-gray-900
        rounded-3xl
        border border-gray-200 dark:border-gray-800
        shadow-lg
        p-10
        text-center
      "
    >
      <div className="text-6xl mb-4">🛡️</div>
      <p className="font-semibold text-gray-900 dark:text-gray-100">
        Trusted Local Installation Team
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
        Fast service across {subCityName} with same-day support.
      </p>
    </div>

  </div>
</section>



{/* ================= MAP SECTION (PREMIUM) ================= */}
<section className="w-full py-16 space-y-10">

  {/* Heading container (centered text only) */}
  <div className="max-w-6xl mx-auto px-6 text-center space-y-3">
    <h2 className="text-3xl md:text-4xl font-extrabold">
      Safety Net Installation Near {subCityName}
    </h2>

    <p className="text-gray-600 dark:text-gray-400">
      Fast and professional safety net installation across {subCityName} and nearby areas.
    </p>
  </div>

  {/* FULL WIDTH MAP */}
  <div
    className="
      w-full
      overflow-hidden
      border-y border-gray-200 dark:border-gray-800
      shadow-lg
    "
  >
    <iframe
      title={`Safety nets in ${subCityName}`}
      src={`https://www.google.com/maps?q=${subCityName}+${cityName}&output=embed`}
      loading="lazy"
      className="
        w-full
        h-[420px] md:h-[520px]
        block
        dark:brightness-90 dark:contrast-110
      "
    />
  </div>

</section>


        {/* ================= TRUST (PREMIUM UI) ================= */}
          <section
            className="
              max-w-6xl mx-auto
              px-6 py-14
              rounded-3xl
              bg-gradient-to-br
              from-white to-gray-50
              dark:from-gray-900 dark:to-gray-950
              border border-gray-200 dark:border-gray-800
              shadow-sm
              space-y-12
            "
          >
            {/* Heading */}
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
                Why Choose EverSafe Safety Nets
              </h2>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {seoHealth}
              </p>
            </div>

            {/* Premium feature cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

              {/* Card */}
              <div
                className="
                  group
                  bg-white dark:bg-gray-900
                  rounded-2xl
                  p-6
                  border border-gray-200 dark:border-gray-800
                  shadow-sm hover:shadow-xl
                  hover:-translate-y-1
                  transition
                  text-center
                "
              >
                <div className="text-3xl mb-3">⭐</div>
                <p className="font-semibold text-gray-900 dark:text-gray-100">
                  10+ Years Experience
                </p>
              </div>

              <div className="group bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition text-center">
                <div className="text-3xl mb-3">🏗️</div>
                <p className="font-semibold text-gray-900 dark:text-gray-100">
                  15,000+ Installations
                </p>
              </div>

              <div className="group bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition text-center">
                <div className="text-3xl mb-3">🛡️</div>
                <p className="font-semibold text-gray-900 dark:text-gray-100">
                  ISO Quality Nets
                </p>
              </div>

              <div className="group bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition text-center">
                <div className="text-3xl mb-3">⚡</div>
                <p className="font-semibold text-gray-900 dark:text-gray-100">
                  Same-Day Installation
                </p>
              </div>

            </div>
          </section>


        {/* ================= FAQ ================= */}
        <section className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-center text-yellow-500">
            Frequently Asked Questions
          </h2>

          {faqs.map((f, i) => (
            <details
              key={i}
              className="group border dark:border-yellow-500 rounded-2xl 
                         bg-white dark:bg-gray-900 px-6 py-5"
            >
              <summary className="flex justify-between cursor-pointer font-semibold">
                {f.q}
                <span className="text-2xl text-yellow-500 group-open:rotate-45 transition">
                  +
                </span>
              </summary>
              <p className="mt-4 text-gray-600 dark:text-gray-300">{f.a}</p>
            </details>
          ))}
        </section>

        {/* ================= INTERNAL LINKS ================= */}
        {/* INTERNAL LINKS (CRAWL BOOST) */}
        <section className="hidden">
          <Link href={`/areas/${city}`}>Safety Nets in {cityName}</Link>
          <Link href="services/pigeon-safety-nets/balcony-pigeon-safety-nets/">Balcony Safety Nets</Link>
          <Link href="services/pigeon-safety-nets/invisible-pigeon-safety-nets/">Pigeon Safety Nets</Link>
        </section>

        

        {/* ================= BACK LINK (PREMIUM) ================= */}
            <section className="flex justify-center pb-20">
              <Link
                href={`/areas/${city}`}
                className="
                  group inline-flex items-center gap-3
                  px-8 py-4
                  rounded-2xl
                  bg-white dark:bg-gray-900
                  border border-gray-200 dark:border-yellow-500
                  shadow-md hover:shadow-xl
                  transition-all duration-300
                  hover:-translate-y-1
                  text-gray-800 dark:text-gray-200
                  font-semibold
                "
              >
                <span className="text-lg transition group-hover:-translate-x-1">
                  ←
                </span>

                <span>
                  Explore more areas in{" "}
                  <span className="text-yellow-500 font-bold">{cityName}</span>
                </span>
              </Link>
            </section>
      </main>

      <Footer />
    </>
  );
}
