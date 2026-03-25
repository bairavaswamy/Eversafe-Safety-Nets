type Props = {
  name: string
  area: string
  service: string
  url: string
  title: string
  description: string
  image: string
  phone?: string
  email?: string
}

export default function Schemas({
  name,
  area,
  service,
  url,
  title,
  description,
  image,
  phone = "+918074838518",
  email = "official@eversafesafetynets.com"
}: Props) {

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name,
    url: "https://eversafesafetynets.com",
    telephone: phone,
    email,
    areaServed: {
      "@type": "City",
      name: area
    },
    makesOffer: {
      "@type": "Service",
      name: service,
      areaServed: {
        "@type": "City",
        name: area
      },
      url
    }
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name,
    url: "https://eversafesafetynets.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://eversafesafetynets.com/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://eversafesafetynets.com"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: `${service} in ${area}`,
        item: url
      }
    ]
  }

  return (
    <>
      <meta name="robots" content="max-image-preview:large" />

      {/* LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />

      {/* Website */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      {/* Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}