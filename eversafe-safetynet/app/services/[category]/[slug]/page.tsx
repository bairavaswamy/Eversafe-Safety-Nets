import { notFound } from "next/navigation";
import { megaServices } from "@/app/data/NavLinks";
import { servicesData } from "./ServicesData";
import Image from "next/image";
import Navbar from "@/app/navbar/Navbar";
import FAQSection from "./FAQSection";
import ServiceSection from "./ServiceSection";
import {
  FaHandshake,
  FaAward,
  FaUserShield,
} from "react-icons/fa";
import Footer from "@/app/footer/Footer";

interface ServicePageProps {
  params: Promise<{ category: string; slug: string }>;
}

// ✅ Force static generation
export const dynamic = "force-static";
export const dynamicParams = false;
export const revalidate = false; // Optional: disable revalidation

// ✅ Generate all possible static paths
export function generateStaticParams() {
  const params: { category: string; slug: string }[] = [];
  
  // Loop through servicesData to get all category-slug combinations
  servicesData.forEach((service) => {
    // Find the category for this service
    const categoryKey = Object.keys(megaServices).find(
      (key) => 
        megaServices[key as keyof typeof megaServices]?.items?.some(
          (item) => {
            const id = item.href.split("/").pop();
            return id === service.id;
          }
        )
    );
    
    if (categoryKey) {
      const categorySlug = categoryKey.toLowerCase().replace(/[\s&]+/g, "-");
      params.push({
        category: categorySlug,
        slug: service.id,
      });
    }
  });
  
  return params;
}

// ✅ Static metadata generation
export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const serviceItem = servicesData.find((service) => service.id === slug);
  
  if (!serviceItem) {
    return {
      title: 'Service Not Found',
      description: 'The requested service could not be found.'
    };
  }
  
  return {
    title: `${serviceItem.meta.title} Near Me | Call Now 8074838518`,
    description: serviceItem.meta.description,
    keywords: serviceItem.meta.keywords,
    
    openGraph: {
      title: serviceItem.social.ogTitle,
      description: serviceItem.social.ogDescription,
      images: [
        {
          url: `https://eversafesafetynets.com${serviceItem.social.ogImage}`,
          width: 1200,
          height: 630,
          alt: serviceItem.title,
        },
      ],
      url: `https://eversafesafetynets.com/services/${serviceItem.category}/${slug}`,
      type: 'website',
      siteName: 'Eversafe Safety Nets',
    },
    
    twitter: {
      card: 'summary_large_image',
      title: serviceItem.social.twitterTitle,
      description: serviceItem.social.twitterDescription,
      images: [`https://eversafesafetynets.com${serviceItem.social.twitterImage}`],
      creator: '@eversafesafety',
      site: '@eversafesafety',
    },
    
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    
    alternates: {
      canonical: `https://eversafesafetynets.com/services/${serviceItem.category}/${slug}`,
    },
    
  };
}

// ✅ Main static page component
export default async function ServicePage({ params }: ServicePageProps) {
  const { category, slug } = await params;

  // Find the service category
  const serviceCategoryKey = Object.keys(megaServices).find(
    (key) => key.toLowerCase().replace(/[\s&]+/g, "-") === category
  );
  
  if (!serviceCategoryKey) return notFound();
  
  const serviceCategory = megaServices[serviceCategoryKey as keyof typeof megaServices];

  // Find the service item
  const serviceItem = servicesData.find((service) => service.id === slug);
  if (!serviceItem) return notFound();

  // Prepare related services
  const relatedServices = (serviceCategory.items || [])
    .map((item) => {
      const id = item.href?.split("/").pop();
      return servicesData.find((s) => s.id === id);
    })
    .filter((s) => s && s.id !== slug)
    .slice(0, 6);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "name": serviceItem.title,
                "description": serviceItem.shortDescription,
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "Eversafe Safety Nets",
                  "description": "Professional safety net installation services",
                  "url": "https://eversafesafetynets.com",
                  "logo": "https://eversafesafetynets.com/logo.png",
                  "sameAs": [
                    "https://www.facebook.com/eversafesafetynets",
                    "https://twitter.com/eversafesafetynets",
                    "https://www.instagram.com/eversafesafetynets"
                  ],
                  "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "India",
                    "addressLocality": "bengaluru",
                    "addressRegion": "Karnataka",
                    "streetAddress": "Yeswanthpur"
                  },
                  "telephone": "+91-8074838518",
                  "priceRange": "₹20-₹500",
                  "areaServed": ["Hyderabad", "Bengaluru", "Chennai", "viskhapatnam", "vijayawada"]
                },
                "serviceType": serviceItem.category,
                "image": `https://eversafesafetynets.com${serviceItem.heroImage}`,
                "offers": {
                  "@type": "Offer",
                  "description": "Professional installation services",
                  "availability": "https://schema.org/InStock",
                  "priceCurrency": "INR"
                },
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": `https://eversafesafetynets.com/services/${category}/${slug}`
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://eversafesafetynets.com"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Services",
                    "item": "https://eversafesafetynets.com/services"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": serviceItem.category,
                    "item": `https://eversafesafetynets.com/services/${category}`
                  },
                  {
                    "@type": "ListItem",
                    "position": 4,
                    "name": serviceItem.title,
                    "item": `https://eversafesafetynets.com/services/${category}/${slug}`
                  }
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": (serviceItem.faqs || []).map(faq => ({
                  "@type": "Question",
                  "name": faq.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                  }
                }))
              }
            ]
          })
        }}
      />
      <Navbar />
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <section className="relative h-[90vh] w-full overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={serviceItem.heroImage}
              alt={serviceItem.title}
              fill
              priority
              className="object-cover object-center md:object-top scale-100 brightness-100 contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

          <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-6">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-yellow-400 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] tracking-wide">
              {serviceItem.title}
            </h1>
            <p className="max-w-2xl text-lg md:text-xl text-gray-100 leading-relaxed drop-shadow-[0_1px_6px_rgba(0,0,0,0.7)]">
              {serviceItem.shortDescription}
            </p>
          </div>
        </section>

        {/* Trust Section */}
        <section className="bg-white dark:bg-gray-800 rounded-3xl shadow-md flex flex-col md:flex-row items-center gap-8 px-6 py-10 mt-[-80px] relative z-20 max-w-6xl mx-auto">
          <div className="relative w-full md:w-1/2 h-[360px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={serviceItem.heroImage}
              alt={`${serviceItem.title} mini`}
              fill
              className="object-cover object-center"
            />
          </div>

          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <FaHandshake className="text-yellow-500 text-4xl mb-3" />
              <p className="font-semibold text-blue-900 dark:text-yellow-400">
                10,000+ Trusted Homes
              </p>
            </div>

            <div className="flex flex-col items-center">
              <FaAward className="text-yellow-500 text-4xl mb-3" />
              <p className="font-semibold text-blue-900 dark:text-yellow-400">
                ISO Certified Quality
              </p>
            </div>

            <div className="flex flex-col items-center">
              <FaUserShield className="text-yellow-500 text-4xl mb-3" />
              <p className="font-semibold text-blue-900 dark:text-yellow-400">
                Expert Installation Team
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="space-y-10">
            {(serviceItem.sections || []).map((section, index) => (
              <ServiceSection
                key={index}
                heading={section.heading}
                content={section.content}
              />
            ))}
          </div>

          {/* FAQ Section */}
          <FAQSection faqs={serviceItem.faqs || []} />

          {/* Related Services */}
          <div className="mt-20">
            <h3 className="text-3xl font-semibold mb-8 text-gray-900 dark:text-white">
              RELATED {category.replaceAll("-", " ").toUpperCase()} SERVICES
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {relatedServices.map((service) => (
                <a
                  key={service!.id}
                  href={`/services/${category}/${service!.id}`}
                  className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={service!.heroImage}
                      alt={service!.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-5">
                    <h4 className="text-gray-800 dark:text-gray-100 font-semibold text-lg group-hover:text-yellow-500 transition">
                      {service!.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                      {service!.shortDescription.slice(0, 80)}...
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
}