type ProductProps = {
  name: string
  description: string
  image: string | string[]
  brand?: string
  price?: string | number
  minPrice?: string | number
  maxPrice?: string | number
  currency?: string
  url: string
  sku?: string
  ratingValue?: number
  reviewCount?: number
}

export function ProductSchema({
  name,
  description,
  image,
  brand = "Eversafe Safety Nets",
  price,
  minPrice,
  maxPrice,
  currency = "INR",
  url,
  sku,
  ratingValue = 4.8,
  reviewCount = 120
}: ProductProps) {

  const images = Array.isArray(image) ? image : [image]


  const offerBase: any = {
    "@type": "Offer",
    url,
    priceCurrency: currency,
    availability: "https://schema.org/InStock",
    itemCondition: "https://schema.org/NewCondition",

    // ✅ SELLER (IMPORTANT)
    seller: {
      "@type": "Organization",
      name: "EverSafe Safety Nets"
    },

    // ✅ SHIPPING DETAILS (FIXES WARNING)
    shippingDetails: {
      "@type": "OfferShippingDetails",
      shippingRate: {
        "@type": "MonetaryAmount",
        value: "0",
        currency: currency
      },
      shippingDestination: {
        "@type": "DefinedRegion",
        addressCountry: "IN"
      },
      deliveryTime: {
        "@type": "ShippingDeliveryTime",
        handlingTime: {
          "@type": "QuantitativeValue",
          minValue: 0,
          maxValue: 1,
          unitCode: "DAY"
        },
        transitTime: {
          "@type": "QuantitativeValue",
          minValue: 0,
          maxValue: 2,
          unitCode: "DAY"
        }
      }
    },

    // ✅ RETURN POLICY
    hasMerchantReturnPolicy: {
      "@type": "MerchantReturnPolicy",
      returnPolicyCategory: "https://schema.org/NoReturns"
    }
  }

  const schema: any = {
    "@context": "https://schema.org",
    "@type": "Product",

    name,
    description,
    image: images,
    url,

    ...(sku && { sku }),

    brand: {
      "@type": "Brand",
      name: brand
    },

    // CONNECT TO SERVICE (SEO BOOST 🔥)
    isRelatedTo: {
      "@type": "Service",
      name: name
    },

    // SINGLE PRICE (SAFE)
    ...(price && {
      offers: {
        ...offerBase,
        url,
        price: String(price),
        priceCurrency: currency,
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition"
      }
    }),

    // PRICE RANGE (ADVANCED + SAFE)
    ...(!price && minPrice && maxPrice && {
      offers: {
        ...offerBase,
        url,
        priceCurrency: currency,
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: String(minPrice),
          maxPrice: String(maxPrice),
          priceCurrency: currency
        },
        availability: "https://schema.org/InStock"
      }
    }),

    ...(ratingValue && reviewCount && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: String(ratingValue),
        reviewCount: String(reviewCount)
      }
    })
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}