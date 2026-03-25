type ServiceSchemaProps = {
  name: string
  description: string
  url: string
  image: string | string[]
  city?: string
  minPrice?: number | string
  maxPrice?: number | string
}

export function ServiceSchema({
  name,
  description,
  url,
  image,
  city,
  minPrice = 25,
  maxPrice = 50
}: ServiceSchemaProps) {

  const images = Array.isArray(image) ? image : [image]

  const schema: any = {
    "@context": "https://schema.org",
    "@type": "Service",

    name,
    description,
    url,
    image: images,

    provider: {
      "@type": "LocalBusiness",
      name: "EverSafe Safety Nets",
      url: "https://eversafesafetynets.com",
      telephone: "+918074838518",
      logo: "https://eversafesafetynets.com/logo.png",
      sameAs: [
        "https://facebook.com/eversafesafety",
        "https://instagram.com/eversafesafety"
      ]
    },

    // ✅ LOCATION (ONLY HERE)
    ...(city && {
      areaServed: {
        "@type": "City",
        name: city
      }
    }),

    serviceType: name,

    availableChannel: {
      "@type": "ServiceChannel",
      serviceLocation: {
        "@type": "Place",
        name: "Customer Location"
      }
    },

    offers: {
      "@type": "Offer",
      url,
      priceCurrency: "INR",
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: String(minPrice),
        maxPrice: String(maxPrice),
        priceCurrency: "INR",
        unitCode: "SQF"
      },
      availability: "https://schema.org/InStock"
    },

    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${name} Features`,
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Professional Installation"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Balcony Safety Nets"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Child Safety Nets"
          }
        }
        ,
         {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Invisible Grill"
          }
        },
         {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sports Nets"
          }
        },
         {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Pet Safety Protection"
          }
        },
         {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Anti Bird Nets"
          }
        }
      ]
    },

    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "50"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}