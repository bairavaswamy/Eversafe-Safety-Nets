import { services } from "@/app/data/services"
import { cities } from "@/app/data/cities"
import { notFound } from "next/navigation"
import { ReactNode } from "react"
import Link from "next/link"
import type { Metadata } from "next"
import Stats from "../components/Stats"
import Features from "../components/Features"
import Gallery from "../components/Gallery"
import ServiceContent from "../components/ServiceContent"
import Reviews from "../components/Reviews"
import RelatedServices from "../components/RelatedServices"
import CTA from "../components/CTA"
import Schemas from "../components/Schemas"
import { ProductSchema } from "../components/ProductSchema"
import { ThumbnailSchema } from "../components/ThumbnailSchema"
import Footer from "@/app/footer/Footer"
import Navbar from "@/app/navbar/Navbar"
import NearbyAreas from "../components/NearbyAreas"
import Service from "../components/Service"
import ImageObjectSchema from "../components/ImageObjectSchema"
import CityMap from "../components/CityMap"
import FloatingContactButtons from "./FloatingContactButtons"
import { ServiceSchema } from "../components/ServiceSchema"

type Params = {
  slug: string
}

type PageProps = {
  params: Promise<Params>
}

/* ---------------- LIMIT CONTROLS ---------------- */

const MAX_REVIEWS = 3


/* ---------------- REVIEWS ---------------- */


export const allReviews = [
  { name: "Akshaya Arjilli", review: "Excellent installation service. The team installed pigeon safety nets quickly and the quality is very strong." },
  { name: "Priya Raj", review: "Very professional service. Our balcony is now completely safe for our children." },
  { name: "Arjun Chintakayala", review: "Affordable price and fast installation. Highly recommended for safety nets." },
  { name: "Suman Reddy", review: "The Eversafe team did a fantastic job installing the balcony nets. Safe and neat work." },
  { name: "Neha Sharma", review: "Quick installation, friendly staff, and high-quality nets. My pets are completely safe now." },
  { name: "Rahul Verma", review: "Great nets and fast service." },
  { name: "Anjali Patil", review: "Highly recommend Eversafe Safety Nets." },
  { name: "Vikram Singh", review: "Safe, durable and well installed." },
  { name: "Meera Joshi", review: "Affordable and professional installation." },
  { name: "Kiran Rao", review: "Kids and pets are completely safe now!" }
]

// Function to pick random 5 reviews
export function getRandomReviews(count = 5) {
  const shuffled = [...allReviews].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

/* ---------------- SLUG PARSER ---------------- */

function parseSlug(slug: string) {

  const parts = slug.split("-in-")

  return {
    serviceSlug: parts[0],
    citySlug: parts[1]
  }
}

/* ---------------- STATIC PARAMS ---------------- */

export async function generateStaticParams() {

  const params = []

  for (const service of services) {
    for (const city of cities) {

      params.push({
        slug: `${service.slug}-in-${city.slug}`
      })

    }
  }

  return params
}

/* ---------------- METADATA ---------------- */

export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {

  const { slug } = await params

  const { serviceSlug, citySlug } = parseSlug(slug)

  const service = services.find(s => s.slug === serviceSlug)
  const city = cities.find(c => c.slug === citySlug)

  if (!service || !city) return {}

  const title = `${service.name} in ${city.name} | ${service.name} Near You`

  const description = service.meta.replace("{location}", city.name)

  const url = `https://eversafesafetynets.com/${service.slug}-in-${city.slug}`

  return {

    title,
    description,

    alternates: {
      canonical: url
    },

   openGraph: {
  title,
  description,
  url,
  type: "website",
  images: [
    {
      url: `https://eversafesafetynets.com${service.image}`,
      width: 1200,
      height: 630,
      alt: `${service.name} in ${city.name}`
    }
  ]
},
   twitter: {
  card: "summary_large_image",
  title,
  description,
  images: [`https://eversafesafetynets.com${service.image}`]
}

  }

}

function getRandomServices(currentSlug: string) {

  const filtered = services.filter(s => s.slug !== currentSlug);

  const shuffled = [...filtered].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, 6);
}


/* ---------------- PAGE ---------------- */

export default async function Page({ params }: PageProps): Promise<ReactNode> {

  const { slug } = await params

  const { serviceSlug, citySlug } = parseSlug(slug)

  const service = services.find((s) => s.slug === serviceSlug)
  const city = cities.find((c) => c.slug === citySlug)

  if (!service || !city) notFound()

  const relatedServices = getRandomServices(service.slug)

  return (

    <>
   <Navbar/>

    <main className="bg-[#0b0b0c] text-white overflow-hidden pt-8">

      {/* BREADCRUMBS */}

      <nav className="max-w-7xl mx-auto px-6 pt-10 text-lg text-white">

        <Link href="/">Home</Link>

        <span className="mx-2">/</span>

        <span>{service.name} in {city.name}</span>

      </nav>

       <Gallery
        serviceName={service.name}
        areaName={city.name}
        folder={service.folder}
        maxImages={6}
      />

      <Service citySlug={city.slug} currentService={service.slug} />

       <ServiceContent
        serviceName={service.name}
        areaName={city.name}
        imageUrl={service.image}
      />

      <Stats
        title="Our Installation Experience"
        stats={[
          { value: "1200+", label: "Pigeon Nets Installed" },
          { value: "8+", label: "Years Experience" },
          { value: "24h", label: "Quick Installation" },
          { value: "100%", label: "Customer Satisfaction" }
        ]}
      />


      <Features serviceName={service.name} />


      <Reviews reviews={getRandomReviews()} max={MAX_REVIEWS} />


      <RelatedServices
        service={service}
        relatedServices={relatedServices}
        areaSlug={city.slug}
        areaName={city.name}
      />

        <NearbyAreas areaName={city.name} service={service} areas={cities}/>

        <CityMap
        cityName={city.name}
        description={`Find professional ${service.name.toLowerCase()} installation anywhere in ${city.name}. Fast, safe, and reliable service.`}
          />

      <CTA
        serviceName={service.name}
        areaName={city.name}
      />


      <Schemas
      name="Eversafe Safety Nets"
      area={city.name}
      service={service.name}
      url={`https://eversafesafetynets.com/${service.slug}-in-${city.slug}`}
      title={`${service.name} in ${city.name} | Eversafe Safety Nets`}
      description={`Professional ${service.name.toLowerCase()} installation in ${city.name}. High-quality safety nets for balconies, windows, and buildings.`}
      image={`https://eversafesafetynets.com${service.image}`}
    />


            <ProductSchema
        name={service.name}
        description={`Durable and high-strength ${service.name.toLowerCase()} suitable for balcony and window protection. Designed to block birds, reduce maintenance, and provide long-lasting safety, this solution is ideal for residential and commercial spaces with professional installation support.`}
        image={`https://eversafesafetynets.com${service.image}`}
        price={service.price ?? 999}
        url={`https://eversafesafetynets.com/${service.slug}-in-${city.slug}`}
        sku={`${service.slug}-${city.slug}`}
      />

      <ServiceSchema
        name={`Safety Nets in ${city.name}`}
        description={service.description}
        image={`https://eversafesafetynets.com${service.image}`}
        url={`https://eversafesafetynets.com/${service.slug}-in-${city.slug}`}
        city={city.name}
        minPrice={15}
        maxPrice={500}
      />

            <ImageObjectSchema
        imageUrl={`https://eversafesafetynets.com${service.image}`}
        title={`${service.name} in ${city.name}`}
        description={`Professional ${service.name.toLowerCase()} installation in ${city.name}`}
        pageUrl={`https://eversafesafetynets.com/${service.slug}-in-${city.slug}`}
      />


      <ThumbnailSchema
      pageTitle={`${service.name} in ${city.name} | Eversafe Safety Nets`}
      pageDescription={`Professional ${service.name.toLowerCase()} installation in ${city.name}. High-quality safety nets for balconies, windows, and open areas. Fast installation by Eversafe Safety Nets.`}
      pageUrl={`https://eversafesafetynets.com/${service.slug}-in-${city.slug}`}
      logoUrl="https://eversafesafetynets.com/logo.png"
      thumbnailUrl={`https://eversafesafetynets.com${service.image}`}
/>

    </main>
    <FloatingContactButtons />
    <Footer/>
 </>
  )
}