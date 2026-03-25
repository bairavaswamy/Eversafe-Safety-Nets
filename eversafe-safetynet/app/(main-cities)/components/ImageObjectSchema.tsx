type ImageObjectProps = {
  imageUrl: string
  title: string
  description?: string
  pageUrl: string
}

export default function ImageObjectSchema({
  imageUrl,
  title,
  description,
  pageUrl
}: ImageObjectProps) {

  const schema = {
    "@context": "https://schema.org",
    "@type": "ImageObject",

    contentUrl: imageUrl,

    name: title,

    description: description,

    url: pageUrl,

    creator: {
      "@type": "Organization",
      name: "Eversafe Safety Nets",
      url: "https://eversafesafetynets.com"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}