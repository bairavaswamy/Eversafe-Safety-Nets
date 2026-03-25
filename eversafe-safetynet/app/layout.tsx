import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";

/* -------------------- METADATA -------------------- */

export const metadata: Metadata = {
  metadataBase: new URL("https://eversafesafetynets.com"),

  title: {
    default: "EverSafe Safety Nets | Premium Safety Net Solutions in India",
    template: "%s | EverSafe Safety Nets",
  },
  description:
    "EverSafe Safety Nets provides premium quality balcony safety nets, invisible grills, construction safety nets, sports nets, and industrial protection solutions across India.",

  keywords: [
    "balcony safety nets Bangalore",
    "invisible grills installation",
    "sports net installation",
    "anti bird nets","pigeon safety nets"
  ],

  authors: [{ name: "EverSafe Safety Nets" }],
  creator: "EverSafe Safety Nets",

  alternates: {
    canonical: "https://eversafesafetynets.com",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/logo.webp",
    apple: "/logo.webp",
  },

  manifest: "/site.webmanifest",

  openGraph: {
    type: "website",
    url: "https://eversafesafetynets.com",
    siteName: "EverSafe Safety Nets",
    title: "EverSafe Safety Nets | Premium Safety Net Solutions",
    description:
      "India's trusted safety net installation experts for balcony, sports, and industrial needs.",
    images: [
      {
        url: "/logo.webp",
        width: 1200,
        height: 630,
        alt: "EverSafe Safety Nets",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "EverSafe Safety Nets | Premium Safety Net Solutions",
    description:
      "Premium residential and industrial safety net solutions across India.",
    images: ["/logo.webp"],
  },
};

/* -------------------- VIEWPORT -------------------- */

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f59e0b" },
    { media: "(prefers-color-scheme: dark)", color: "#d97706" },
  ],
};

/* -------------------- STRUCTURED DATA -------------------- */

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "EverSafe Safety Nets",
  url: "https://eversafesafetynets.com",
  logo: "https://eversafesafetynets.com/logo.webp",
  image: "https://eversafesafetynets.com/logo.webp",
  telephone: "+91-8074838518",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Yeswanthpur",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560022",
    addressCountry: "IN",
  },
  openingHours: "Mo-Sa 08:30-21:00",
  sameAs: [
    "https://www.facebook.com/eversafesafetynets",
    "https://www.instagram.com/eversafesafetynets",
    "https://twitter.com/eversafesafetynets",
  ],
};

/* -------------------- ROOT LAYOUT -------------------- */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-white dark:bg-gray-900">

        {/* Google Tag Manager */}
        <GoogleTagManager gtmId="GTM-W3P794XH" />

        {/* Prevent Theme Flicker */}
        <Script id="theme-script" strategy="beforeInteractive">
          {`
            try {
              const theme = localStorage.getItem('theme');
              if (
                theme === 'dark' ||
                (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)
              ) {
                document.documentElement.classList.add('dark');
              }
            } catch (e) {}
          `}
        </Script>

        {/* Structured Data */}
        <Script
          id="jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Top Loader Bar */}
        <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 z-50" />

        {children}
      </body>
    </html>
  );
}
