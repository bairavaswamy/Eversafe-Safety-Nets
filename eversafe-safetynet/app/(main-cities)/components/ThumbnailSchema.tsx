type ThumbnailSchemaProps = {
  pageTitle: string
  pageDescription: string
  pageUrl: string
  logoUrl: string
  thumbnailUrl?: string
}

export function ThumbnailSchema({
  pageTitle,
  pageDescription,
  pageUrl,
  logoUrl,
  thumbnailUrl
}: ThumbnailSchemaProps) {

  const schema: any = {

    "@context": "https://schema.org",
    "@type": "WebPage",

    name: pageTitle,
    description: pageDescription,
    url: pageUrl,

    inLanguage: "en-IN",

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl
    },

    ...(thumbnailUrl && {
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: thumbnailUrl,
        width: 1200,
        height: 630
      },

      image: {
        "@type": "ImageObject",
        url: thumbnailUrl,
        width: 1200,
        height: 630
      }
    }),

    isPartOf: {
      "@type": "WebSite",
      name: "Eversafe Safety Nets",
      url: "https://eversafesafetynets.com"
    },

    publisher: {
      "@type": "Organization",
      name: "Eversafe Safety Nets",

      logo: {
        "@type": "ImageObject",
        url: logoUrl,
        width: 512,
        height: 512
      },

      url: "https://eversafesafetynets.com",
      email: "official@eversafesafetynets.com"
    }

  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}