// /data/navData.ts

export interface MegaCategory {
  href: string;
  text: string;
  title: string;
}

export interface MegaServiceCategory {
  description: string;
  items: MegaCategory[];
}

export const links = [
  { href: "/", label: "HOME" },
  { href: "/services", label: "SERVICES" },
  { href: "/about", label: "ABOUT" },
  { href: "/gallery", label: "GALLERY" },
  { href: "/contact-us", label: "CONTACT US" },
];

// 🧱 SEO Optimized Mega Menu Data
export const megaServices: Record<string, MegaServiceCategory> = {
  "Pigeon Safety Nets": {
    description:
      "High-quality pigeon protection nets for balconies, ducts, and open spaces. Keep your surroundings clean and hygienic.",
    items: [
      {
        href: "/services/pigeon-safety-nets/balcony-pigeon-safety-nets",
        text: "Balcony Pigeon Safety Nets",
        title: "Balcony Pigeon Safety Nets Installation Services",
      },
      {
        href: "/services/pigeon-safety-nets/window-pigeon-safety-nets",
        text: "Window Pigeon Safety Nets",
        title: "Window Bird Protection Nets Installation",
      },
      {
        href: "/services/pigeon-safety-nets/duct-area-pigeon-safety-nets",
        text: "Duct Area Pigeon Safety Nets",
        title: "Duct Area Bird Safety Nets for Apartments",
      },
      {
        href: "/services/pigeon-safety-nets/open-area-pigeon-safety-nets",
        text: "Open Area Pigeon Safety Nets",
        title: "Open Terrace and Outdoor Pigeon Net Installation",
      },
      {
        href: "/services/pigeon-safety-nets/staircase-pigeon-safety-nets",
        text: "Staircase Pigeon Safety Nets",
        title: "Staircase Pigeon Prevention Nets for Apartments",
      },
      {
        href: "/services/pigeon-safety-nets/industrial-pigeon-safety-nets",
        text: "Industrial Pigeon Safety Nets",
        title: "Industrial Bird Netting Solutions for Factories and Sheds",
      },
      {
        href: "/services/pigeon-safety-nets/parking-area-pigeon-safety-nets",
        text: "Parking Area Pigeon Safety Nets",
        title: "Parking Area Bird Control Nets Installation",
      },
      {
        href: "/services/pigeon-safety-nets/invisible-pigeon-safety-nets",
        text: "Invisible Pigeon Safety Nets",
        title: "Transparent Pigeon Nets for Balcony and Open Spaces",
      },
      {
        href: "/services/pigeon-safety-nets/hdpe-pigeon-safety-nets",
        text: "HDPE Pigeon Safety Nets",
        title: "HDPE UV-Stabilized Pigeon Safety Nets Installation",
      },
      {
        href: "/services/pigeon-safety-nets/nylon-pigeon-safety-nets",
        text: "Nylon Pigeon Safety Nets",
        title: "Durable Nylon Pigeon Safety Nets for Balcony",
      },
    ],
  },

 "Invisible Grills": {
  description:
    "Premium stainless steel invisible grills for balconies, windows, and staircases — combining safety, elegance, and unobstructed views for modern homes and high-rise apartments.",
  items: [
    {
      href: "/services/invisible-grills/invisible-balcony-grill",
      text: "Invisible Balcony Grill",
      title:
        "Invisible Balcony Grill Installation | Stainless Steel Balcony Safety Grills",
    },
    {
      href: "/services/invisible-grills/invisible-window-grill",
      text: "Invisible Window Grill",
      title:
        "Invisible Window Grill Design | Transparent and Secure Window Grilles",
    },
    {
      href: "/services/invisible-grills/stainless-steel-invisible-grill",
      text: "Stainless Steel Invisible Grill",
      title:
        "SS Invisible Grill for Balcony and Window | Durable and Rustproof Grilles",
    },
    {
      href: "/services/invisible-grills/fixed-invisible-grille",
      text: "Fixed Invisible Grille",
      title:
        "Fixed Frame Invisible Grille Installation | Strong and Long-Lasting Balcony Protection",
    },
    {
      href: "/services/invisible-grills/openable-invisible-grille",
      text: "Openable Invisible Grille",
      title:
        "Openable Invisible Grill System | Easy Access for Cleaning and Maintenance",
    },
    {
      href: "/services/invisible-grills/invisible-safety-grill",
      text: "Invisible Safety Grill",
      title:
        "Invisible Safety Grill for Balcony and Windows | Safe and Stylish Home Protection",
    },
    {
      href: "/services/invisible-grills/invisible-cable-grill",
      text: "Invisible Cable Grill",
      title:
        "Invisible Cable Grill Installation | Sleek, Strong, and Child-Safe Grilles",
    },
    {
      href: "/services/invisible-grills/invisible-grille-installation",
      text: "Invisible Grille Installation",
      title:
        "Professional Invisible Grille Installation Services | Balcony & Window Safety Solutions",
    },
  ],
},

"Sports Nets": {
  description:
    "High-quality sports safety nets and practice nets designed for durability, performance, and protection — ideal for cricket, football, badminton, golf, and indoor or outdoor training areas.",
  items: [
    {
      href: "/services/sports-nets/cricket-practice-nets",
      text: "Cricket Practice Nets",
      title:
        "Cricket Practice Nets Installation | Durable Nylon Nets for Outdoor & Indoor Training",
    },
    {
      href: "/services/sports-nets/football-safety-nets",
      text: "Football Safety Nets",
      title:
        "Football Safety Nets | Heavy-Duty Ball Stop Nets for Grounds and Stadiums",
    },
    {
      href: "/services/sports-nets/badminton-practice-nets",
      text: "Badminton Practice Nets",
      title:
        "Badminton Practice Nets | Strong and Long-Lasting Nylon Nets for Courts",
    },
    {
      href: "/services/sports-nets/tennis-court-nets",
      text: "Tennis Court Nets",
      title:
        "Tennis Court Safety Nets | Professional-Grade Nets for Clubs and Academies",
    },
    {
      href: "/services/sports-nets/volleyball-nets",
      text: "Volleyball Nets",
      title:
        "Volleyball Practice and Safety Nets | Weatherproof Nets for Outdoor & Indoor Use",
    },
    {
      href: "/services/sports-nets/multipurpose-safety-nets",
      text: "Multipurpose Sports Safety Nets",
      title:
        "All-Sport Safety Nets | Custom Nets for Schools, Gyms, and Sports Complexes",
    },
    {
      href: "/services/sports-nets/indoor-sports-nets",
      text: "Indoor Sports Nets",
      title:
        "Indoor Sports Practice Nets | Lightweight, Durable Nets for Indoor Arenas and Halls",
    },
    {
      href: "/services/sports-nets/ball-stop-safety-nets",
      text: "Ball Stop Safety Nets",
      title:
        "Ball Stop Nets for Grounds | Safety Netting for Cricket, Football, and Multi-Sport Areas",
    },
  ],
},
};