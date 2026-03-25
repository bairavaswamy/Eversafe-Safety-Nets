import type { Metadata } from "next";
import GalleryClient from "../gallery/GalleryClinet";

export const metadata: Metadata = {
  title: "Gallery | Real Installation Works",
  description:
    "Explore EverSafe Safety Nets gallery showcasing real balcony safety nets, invisible grills, duct area nets, and child safety installations. View our completed projects with premium finishing and secure installations.",

  keywords: [
    "EverSafe Safety Nets gallery",
    "Balcony Safety Nets photos",
    "Invisible Grill installation images",
    "Child Safety Nets gallery",
    "Bird Protection Nets photos",
    "Duct Area Safety Nets",
    "Apartment Safety Nets installation",
    "Safety Nets near me",
  ],

  openGraph: {
    title: "EverSafe Safety Nets Gallery – Real Installation Projects",
    description:
      "Browse real installation photos of balcony safety nets, invisible grills, and child protection nets installed by EverSafe Safety Nets.",
    url: "https://eversafesafetynets.com/gallery",
    siteName: "EverSafe Safety Nets",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://eversafesafetynets.com/images/cards/balcony-safety-nets.webp",
        width: 1200,
        height: 630,
        alt: "EverSafe Safety Nets Installation Gallery",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "EverSafe Safety Nets Gallery",
    description:
      "See real balcony and child safety net installations by EverSafe Safety Nets.",
    images: [
      "https://eversafesafetynets.com/images/cards/balcony-safety-nets.webp",
    ],
  },

  alternates: {
    canonical: "https://eversafesafetynets.com/gallery",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Page() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "EverSafe Safety Nets Gallery",
    description:
      "Real installation gallery of balcony safety nets, invisible grills and child protection nets.",
    url: "https://eversafesafetynets.com/gallery",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <GalleryClient />
    </>
  );
}