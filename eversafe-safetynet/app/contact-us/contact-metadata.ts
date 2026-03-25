import { Metadata } from "next";

export const BASE_URL = "https://eversafesafetynets.com";

export function generateMetadata(): Metadata {
  const title = "Contact Us";
  const description =
    "Contact EverSafe Safety Nets in Bengaluru for professional installation of balcony, bird, and construction safety nets. Get your free quote today!";
  const url = `${BASE_URL}/contact`;
  const image = `${BASE_URL}/images/contact-hero.webp`;

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
      type: "website",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}