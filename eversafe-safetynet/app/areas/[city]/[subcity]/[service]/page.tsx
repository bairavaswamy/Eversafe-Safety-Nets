import Link from "next/link";
import Navbar from "@/app/navbar/Navbar";
import Footer from "@/app/footer/Footer";
import Image from "next/image";
import { cityAreas } from "../../areas";
import { Metadata } from "next";
import {
  FaShieldAlt,
  FaDove,
  FaThLarge,
  FaCar,
  FaTree,
  FaFeatherAlt,
  FaBuilding
} from "react-icons/fa";
import { MdSports, MdSportsCricket } from "react-icons/md";


/* ================= DATA ================= */

const PHONE = "+918074838518";
const BASE_URL = "https://eversafesafetynets.com";

const services = {
  "balcony-safety-nets": "Balcony Safety Nets",
  "pigeon-safety-nets": "Pigeon Safety Nets",
  "children-safety-nets": "Children Safety Nets",
  "invisible-grills": "Invisible Grills",
  "terrace-safety-nets": "Terrace Safety Nets",
  "sports-nets": "Sports Nets",
  "cricket-practice-nets":"Cricket Practice Nets",
  "car-parking-safety-nets":"Car Parking Safety Nets",
  "coconut-tree-safety-nets":"Coconut Tree Safety Nets",
  "anti-bird-nets":"Anti Bird Nets",
};

/* ================= SLUG FUNCTION ================= */

function slugify(text: string) {
  return text.toLowerCase().replace(/\s+/g, "-");
}

export function generateStaticParams() {
  const paths: {
    city: string;
    subcity: string;
    service: string;
  }[] = [];

  Object.entries(cityAreas).forEach(([city, areas]) => {
    areas.forEach((area) => {
      Object.keys(services).forEach((service) => {
        paths.push({
          city: city.toLowerCase(),
          subcity: slugify(area),
          service,
        });
      });
    });
  });

  return paths;
}

type Props = {
  params: Promise<{
    city: string;
    subcity: string;
    service: string;
  }>;
};

/* ================= METADATA (SEO + Canonical) ================= */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const awaitedData = await params
  const { city, subcity, service } = awaitedData;
  const cityName = city.replace(/-/g, " ");
  const areaName = subcity.replace(/-/g, " ");
  const serviceName = services[service as keyof typeof services];
  const url = `${BASE_URL}/areas/${city}/${subcity}/${service}`;
  const image = `${BASE_URL}/services/${service}.webp`; // Make sure image exists

  const title = `${serviceName} in ${areaName} | ${cityName}`;
  const description = `EverSafe provides high quality ${serviceName.toLowerCase()} in ${areaName}, ${cityName}. Protect your children, pets, and family with safe balcony, terrace, and window nets. Call for free inspection!`;

  return {
    title,
    description,
    alternates: {
        canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      images: [image],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}



export default async function ServicePage({ params }: Props) {
  const { city, subcity, service } = await params;

  const cityName = city.replace(/-/g, " ");
  const areaName = subcity.replace(/-/g, " ");
  const serviceName = services[service as keyof typeof services];

  const url = `${BASE_URL}/areas/${city}/${subcity}/${service}`;
  const heroImage = `/services/${service}.webp`;

  /* ================= SEO TEXT (simple 6th grade) ================= */

  const intro = `We install strong ${serviceName.toLowerCase()} in ${areaName}. Our nets protect kids, pets and families. Installation is fast and safe.`;

  const description = `
  EverSafe provides high quality ${serviceName.toLowerCase()} for homes and apartments in ${areaName}, ${cityName}. 
  Our safety nets prevent falls and stop birds. 
  We use UV protected materials that last many years. 
  Our team gives free inspection and same day installation.
  `;

  const benefits = [
    "Same day installation",
    "UV protected strong nets",
    "Affordable price",
    "5 year warranty",
  ];

  /* ================= FAQ (more SEO power) ================= */

  const faqs = [
    {
      q: `What is the cost of ${serviceName.toLowerCase()} in ${areaName}?`,
      a: "Cost depends on balcony size. Call us for a free quote and measurement.",
    },
    {
      q: "How long does installation take?",
      a: "Most installations finish within 2 to 3 hours.",
    },
    {
      q: "Are the safety nets strong for children?",
      a: "Yes. Our nets are strong, tested and safe for kids and pets.",
    },
    {
      q: "Do you provide warranty?",
      a: "Yes. We provide up to 5 years warranty on materials.",
    },
    {
      q: "Do you install in apartments and high-rise buildings?",
      a: "Yes. We install nets for flats, balconies, windows and terraces.",
    },
    {
      q: "Do you offer free inspection?",
      a: "Yes. Our team visits your home and gives free inspection and price.",
    },
  ];

  /* ================= SCHEMA ================= */

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Areas", item: `${BASE_URL}/areas` },
        { "@type": "ListItem", position: 3, name: areaName, item: `${BASE_URL}/areas/${city}/${subcity}` },
        { "@type": "ListItem", position: 4, name: serviceName, item: url },
      ],
    },
    {
      "@type": "Service",
      name: serviceName,
      areaServed: `${areaName}, ${cityName}`,
      provider: {
        "@type": "LocalBusiness",
        name: "EverSafe Safety Nets",
        telephone: PHONE,
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  /* ================= UI ================= */

  return (
    <>
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <main className="text-gray-900 dark:text-gray-100">

        {/* ================= HERO ================= */}
        <section
          aria-label="Service hero"
          className="bg-gradient-to-br from-yellow-50 via-blue to-gray-100 dark:from-gray-900 dark:to-black py-20 px-6"
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-extrabold">
                {serviceName} in {areaName}, {cityName}
              </h1>

              <p className="text-lg text-gray-600 dark:text-gray-300">
                {intro}
              </p>

              <div className="flex gap-4">
                <a
                  href={`tel:${PHONE}`}
                  aria-label="Call EverSafe Safety Nets"
                  className="bg-yellow-400 text-black px-7 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 transition"
                >
                  📞 Call Now
                </a>

                <Link
                  href="/contact-us"
                  aria-label="Get free quote"
                  className="border dark:border-gray-700 px-7 py-3 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  Free Quote
                </Link>
              </div>
            </div>

            <Image
              src={heroImage}
              alt={`${serviceName} in ${areaName}`}
              width={700}
              height={450}
              sizes="100vw"
              className="rounded-3xl shadow-2xl object-cover"
            />
          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section
          aria-labelledby="about-heading"
          className="max-w-5xl mx-auto py-16 px-6"
        >
          <h2 id="about-heading" className="text-2xl font-bold mb-4">
            Professional {serviceName} Installation
          </h2>
          <p className="text-gray-600 dark:text-gray-300">{description}</p>
        </section>

        {/* ================= BENEFITS ================= */}
        <section
          aria-label="Benefits"
          className="max-w-6xl mx-auto px-6 pb-16 grid md:grid-cols-4 gap-6"
        >
          {benefits.map((b) => (
            <div
              key={b}
              className="bg-white/80 dark:bg-gray-900/80 backdrop-blur border dark:border-gray-800 p-6 rounded-2xl shadow-lg text-center"
            >
              ✔ {b}
            </div>
          ))}
        </section>
{/* ================= RELATED SERVICES ================= */}
<section
  aria-labelledby="related-services-heading"
  className="max-w-6xl mx-auto px-6 pb-20"
>
  <h2
    id="related-services-heading"
    className="text-2xl md:text-3xl font-bold text-center mb-10"
  >
    More Safety Net Services in {areaName}
  </h2>

  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
    {Object.entries(services)
      .filter(([key]) => key !== service)
      .map(([key, value], i) => {
        const icons = [<FaShieldAlt fill="brown" size={40}/>, <FaDove size={40}/>, <FaThLarge fill="blue" size={40}/>,<FaBuilding fill="green" size={40}/>, <MdSports fill="red" size={40}/>, <MdSportsCricket size={40} fill="yellow"/>, <FaCar color="red" size={40}/>,<FaTree color="green" size={40}/>,<FaFeatherAlt color="yellow" size={40}/>];

        return (
          <Link
            key={key}
            href={`/areas/${city}/${subcity}/${key}`}
            aria-label={`${value} installation in ${areaName}`}
            className="
              group
              p-6
              rounded-3xl
              bg-white dark:bg-gray-900
              border border-gray-200 dark:border-gray-800
              shadow-sm hover:shadow-xl
              transition-all duration-300
              hover:-translate-y-1
              flex flex-col gap-3
            "
          >
            <span className="text-3xl">{icons[i % icons.length]}</span>

            <h3 className="font-semibold text-lg group-hover:text-yellow-500">
              {value}
            </h3>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              Safe and strong installation
            </p>

            <span className="text-yellow-500 text-sm font-medium">
              Explore →
            </span>
          </Link>
        );
      })}
  </div>
</section>





        {/* ================= MAP ================= */}
        <section aria-label="Location map" className="w-full">
          <iframe
            title={`Map showing ${serviceName} service in ${areaName}`}
            src={`https://www.google.com/maps?q=${areaName}+${cityName}&output=embed`}
            className="w-full h-[420px]"
            loading="lazy"
          />
        </section>

        {/* ================= FAQ ================= */}
        <section
          aria-labelledby="faq-heading"
          className="max-w-4xl mx-auto py-16 px-6 space-y-4"
        >
          <h2 id="faq-heading" className="text-2xl font-bold text-center">
            Frequently Asked Questions
          </h2>

          {faqs.map((f, i) => (
            <details
              key={i}
              className="group bg-white dark:bg-gray-900 border dark:border-gray-800 rounded-xl p-5 shadow"
            >
              <summary className="cursor-pointer font-semibold flex justify-between">
                {f.q}
                <span className="group-open:rotate-45 transition">+</span>
              </summary>
              <p className="mt-3 text-gray-600 dark:text-gray-300">{f.a}</p>
            </details>
          ))}
        </section>

        {/* ================= BACK LINKS (SEO BOOST) ================= */}
        <section
          aria-label="Related navigation links"
          className="text-center space-x-6 pb-20 text-yellow-500 font-medium"
        >
          <Link href={`/areas/${city}/${subcity}`}>← Back to {areaName}</Link>
          <Link href={`/areas/${city}`}>More areas in {cityName}</Link>
          <Link href="/">Home</Link>
        </section>
      </main>

      <Footer />
    </>
  );
}
