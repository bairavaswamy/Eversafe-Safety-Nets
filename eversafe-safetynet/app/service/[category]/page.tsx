
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/app/navbar/Navbar";
import Footer from "@/app/footer/Footer";
import HeroGallery from "./HeroGallery";
import Highlights from "./Highlights";
import ServiceAbout from "./ServiceAbout";
import WhyChooseUs from "./WhyChooseUs";
import FeaturesList from "./FeaturesList";
import FAQSection from "./FAQSection";
import CTASection from "./CTASection";
import JsonLd from "./JsonLd";
import RelatedServices from "./RelatedServices";



import { servicesData } from "./data/serviceData";
import SEOIntentBlock from "./SEOIntentBlock";
import ServiceProblems from "./ServiceProblems";
import ServiceMaintenance from "./ServiceMaintenance";



export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(servicesData).map((id) => ({
    category: id,
  }));
}

//meta
export async function generateMetadata({
  params,
}: {
  params: { category: string };
}): Promise<Metadata> {
  const { category } = await params;
  const service = servicesData[category];

  if (!service) {
    return {
      title: "Service Not Found | EverSafe Safety Nets",
      description: "Requested service page not found.",
    };
  }

  const title = `${service.title} Near Me | Best Price & Installation`;
  const description = service.about.slice(0, 150);
  const image = service.service?.[0] || "/og-default.jpg";

  return {
    title,
    description,
    keywords: [
      service.title,
      "safety nets",
      "installation",
      "EverSafe",
      ...(service.features?.map((f) => f.toLowerCase()) || []),
    ],

    openGraph: {
      title,
      description,
      type: "website",
      url: `https://eversafesafetynets.com/service/${category}`,
      images: [{ url: image, width: 1200, height: 630 }],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },

    alternates: {
      canonical: `https://eversafesafetynets.com/service/${category}`,
    },

    robots: { index: true, follow: true },
  };
}




export default async function ServicePage({ params }: { params: { category: string } }) {
  const { category } = await params;
  const service = servicesData[category];
  if (!service) return notFound();

  //json-ld
  const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "EverSafe Safety Nets",
  image: "https://eversafesafetynets.com/logo.png",
  url: "https://eversafesafetynets.com",
  telephone: "+918074838518",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  areaServed: "IN",
  serviceType: "Safety Net Installation",
  sameAs: [
    "https://facebook.com/eversafesafety",
    "https://instagram.com/eversafesafety",
  ],
};

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.about,
    provider: {
      "@type": "Organization",
      name: "EverSafe Safety Nets",
      url: "https://eversafesafetynets.com",
      logo: "https://eversafesafetynets.com/logo.png",
      sameAs: [
        "https://facebook.com/eversafesafety",
        "https://instagram.com/eversafesafety",
      ],
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    offers: {
  "@type": "Offer",
  priceCurrency: "INR",
  priceSpecification: {
    "@type": "PriceSpecification",
    priceCurrency: "INR",
    minPrice: "15",
    maxPrice: "500",
    unitCode: "SQF",
  },
  availability: "https://schema.org/InStock",
},
availableChannel: {
  "@type": "ServiceChannel",
  serviceLocation: {
    "@type": "Place",
    name: "Customer Location",
  },
}
,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.title} Features`,
      itemListElement:
        service.features?.map((f) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: f },
        })) || [],
    },
  };
  const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: service.title,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.7",
    reviewCount: "10",
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
      item: "https://eversafesafetynets.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://eversafesafetynets.com/service",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: service.title,
      item: `https://eversafesafetynets.com/service/${category}`,
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: `${service.title} Installation Process`,
  description: `Step by step process of ${service.title.toLowerCase()} installation`,
  totalTime: "PT1H",
  supply: [
    { "@type": "HowToSupply", name: "Safety Net Material" },
    { "@type": "HowToSupply", name: "Hooks & Fasteners" },
  ],
  tool: [
    { "@type": "HowToTool", name: "Drill Machine" },
    { "@type": "HowToTool", name: "Measuring Tape" },
  ],
  step: [
    {
      "@type": "HowToStep",
      name: "Inspection",
      text: "Our team inspects the balcony or window area and understands your requirement.",
    },
    {
      "@type": "HowToStep",
      name: "Measurement",
      text: "We take accurate measurements to ensure a perfect fit for the net installation.",
    },
    {
      "@type": "HowToStep",
      name: "Customization",
      text: "The net is customized based on your space and safety needs.",
    },
    {
      "@type": "HowToStep",
      name: "Installation",
      text: "We install the net securely using strong hooks without damaging your property.",
    },
    {
      "@type": "HowToStep",
      name: "Final Check",
      text: "A final inspection is done to ensure safety, strength, and proper fitting.",
    },
  ],
};

  // ============================================================
  // 5) JSON-LD - FAQ SCHEMA
  // ============================================================
  const faqSchema =
    service.faqs?.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: service.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
          })),
        }
      : null;


  return (
    <>
    {/* Inject Schema */}
    <JsonLd data={localBusinessSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={reviewSchema} />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <JsonLd data={howToSchema} />
      <Navbar />

      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 pb-10 px-4">
        <div className="max-w-5xl mx-auto space-y-10">

          <HeroGallery title={service.title} images={service.service} />

          <Highlights items={service.highlights} />

          <ServiceAbout title={service.title} text={service.about} />

          <ServiceProblems serviceName={service.title}/>

          <WhyChooseUs points={service.whyChooseUs} />

          <FeaturesList list={service.features} />

          <SEOIntentBlock serviceName={service.title} />

          <ServiceMaintenance serviceName={service.title} />

          <FAQSection faqs={service.faqs} />

          <RelatedServices current={category} />

          <CTASection />

        </div>
      </main>

      <Footer />
    </>
  );
}
