import AboutContent from "./AboutContent";
import { Metadata } from "next";

// Metadata for SEO & social sharing
export async function generateMetadata(): Promise<Metadata> {
  const phone = "+91 80748 38518";
  const title = "About EverSafe Safety Nets | Trusted Safety Net Experts";
  const description = `Learn about EverSafe Safety Nets — experts in balcony, bird, and industrial safety nets. Keeping homes and workplaces safe and stylish. Call us at ${phone}.`;
  const url = "https://eversafesafetynets.com/about";
  const image = "/service/invisible40.webp";

  return {
    title,
    description,
    keywords: [
      "safety nets",
      "balcony safety nets",
      "bird protection nets",
      "industrial safety nets",
      "EverSafe Safety Nets",
      "safe home",
      "safety solutions",
      "Anti bird nets",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      url,
      images: [{ url: image, width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
    alternates: { canonical: url },
    robots: { index: true, follow: true },
  };
}

// Server component renders the client AboutContent
export default function AboutPage() {
  return <AboutContent />;
}
