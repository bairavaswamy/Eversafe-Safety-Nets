// /data/serviceData.ts

export interface ServiceData {
  id: string;
  title: string;
  service: string[];
  about: string;
  highlights: { title: string; desc: string }[];
  whyChooseUs: string[];
  features: string[];
  faqs: { q: string; a: string }[];
}

export const servicesData: Record<string, ServiceData> = {
  "balcony-pigeon-nets": {
    id: "balcony-pigeon-nets",
    title: "Balcony Pigeon Nets",
    service: [
      "/service/balcony-safety-nets-3.webp",
      "/service/balcony-safety-nets-4.webp",
      "/service/balcony-safety-nets-5.webp",
      "/service/balcony-safety-nets-6.webp",
      "/service/balcony-safety-nets-7.webp",
      "/service/balcony-safety-nets-8.webp",
      "/service/balcony-safety-nets-2.webp",
      "/service/balcony-safety-nets.webp",
    ],

    about:
  "Our balcony pigeon nets provide a strong, safe, and long-lasting solution to keep birds away from your living space. Pigeons can create dirt, feathers, unpleasant odor, and health concerns, but our high-quality anti bird nets effectively prevent them from entering your balcony. We offer reliable installation with durable, UV-resistant materials suitable for apartments, villas, and high-rise buildings. With quick response and professional support available in your area, you can expect a clean, secure, and hassle-free setup that keeps your home hygienic and protected.",

    highlights: [
      { title: "Durable Materials", desc: "UV & weather-resistant mesh." },
      { title: "Expert Installation", desc: "Installed by skilled professionals." },
      { title: "Affordable Pricing", desc: "Competitive and transparent costs." },
    ],

    whyChooseUs: [
      "10+ Years of Experience",
      "Premium UV-Coated Nets",
      "Certified Professional Installers",
      "Free Inspection Anywhere in City",
      "Fast Same-Day Installation",
      "Lifetime Service Support",
    ],

  features: [
  "Effective anti pigeon & bird protection",
  "UV & weather resistant material",
  "Suitable for all building types",
  "Safe for children & pets",
  "Strong, flexible & long-lasting nets",
  "Professional installation near you",
],

    faqs: [
      { q: "How long does installation take?", a: "30–60 minutes." },
      { q: "Do you offer warranty?", a: "Yes, warranty on all nets." },
      { q: "Is material pet friendly?", a: "Yes, completely safe." },
    ],
  },

    "invisible-bird-nets": {
  id: "invisible-bird-nets",
  title: "Invisible Bird Nets",
  service: [
    "/service/transnparent-9.webp",
    "/service/transparent-1.webp",
    "/service/transparent-4.webp",
    "/service/transparent-7.webp",
    "/service/transparent-8.webp",
    "/service/transparent-9.webp",
    "/service/transparent-2.webp",
  ],

  about:
    "Invisible Bird Nets are designed to protect balconies and windows without affecting your view. These transparent nets blend seamlessly with surroundings while offering strong and reliable bird control.",

  highlights: [
    { title: "Clear & Transparent", desc: "Maintains natural balcony view." },
    { title: "Premium Quality", desc: "Made from strong mono-filament material." },
    { title: "Safe Installation", desc: "Professionally installed without wall damage." },
  ],

  whyChooseUs: [
    "Crystal-clear netting",
    "UV-resistant and long-lasting",
    "Highly durable mono-filament",
    "Professional, damage-free installation",
    "Free site inspection",
    "Fast same-day installation",
  ],

  features: [
  "Almost invisible appearance",
  "High-strength mono-filament material",
  "UV & weather resistant",
  "Maintains natural view",
  "Safe for kids & pets",
  "Modern & aesthetic solution",
],

  faqs: [
    { q: "Are these nets really invisible?", a: "Yes, they blend with any wall or balcony view." },
    { q: "Do they withstand strong wind?", a: "Yes, they are wind-resistant and flexible." },
    { q: "Can the nets be removed?", a: "Yes, they can be removed or replaced anytime." },
  ],
},
    "hdpe-pigeon-nets": {
  id: "hdpe-pigeon-nets",
  title: "HDPE Pigeon Nets",
  service: [
    "/service/transparent-2.webp",
    "/service/transparent-6.webp",
    "/service/hdpe-1.webp",
    "/service/hdpe-2.webp",
    "/service/hdpe-3.webp",
    "/service/hdpe-4.webp",
  ],

  about:
    "HDPE Pigeon Nets are strong, chemical-resistant nets made from high-density polyethylene. Ideal for long-term balcony and window bird protection.",

  highlights: [
    { title: "High Strength", desc: "HDPE material for extra durability." },
    { title: "UV Protected", desc: "Prevents brittleness under sunlight." },
    { title: "Secure Fit", desc: "Installed firmly with high-grade fasteners." },
  ],

  whyChooseUs: [
    "Premium HDPE material",
    "Long-term weather resistance",
    "100% bird-proof protection",
    "Affordable pricing",
    "Quick same-day installation",
    "Free inspection & measurement",
  ],

  features: [
    "High tensile strength",
    "Resistant to chemicals & dust",
    "Suitable for both indoor & outdoor",
    "Available in multiple mesh sizes",
    "Long-lasting flexibility",
  ],

  faqs: [
    { q: "Do HDPE nets fade?", a: "No, they are UV-stabilized to avoid fading." },
    { q: "Is it safe for pets?", a: "Yes, HDPE nets are fully pet-friendly." },
    { q: "What is the lifespan?", a: "5–7 years depending on exposure." },
  ],
},
    "anti-bird-nets-for-windows": {
  id: "anti-bird-nets-for-windows",
  title: "Anti-Bird Nets for Windows",
  service: [
    "/service/window-net.webp",
    "/service/window-net-4.webp",
    "/service/window-net-5.webp",
    "/service/window-net-6.webp",
    "/service/window-net-7.webp",
  ],

  about:
    "Anti-Bird Nets for Windows prevent birds from entering your home while allowing fresh air and sunlight. Ideal for kitchens, bedrooms, bathrooms, and open windows.",

  highlights: [
    { title: "Perfect Window Fit", desc: "Custom-sized for all window types." },
    { title: "Airflow Safe", desc: "Does not block ventilation." },
    { title: "Rust-Free Install", desc: "No metal corrosion or staining." },
  ],

  whyChooseUs: [
    "Custom size cutting",
    "Skilled installers",
    "Premium netting material",
    "Affordable window protection",
    "Fast response time",
    "Free on-site inspection",
  ],

  features: [
    "Prevents bird entry",
    "Allows full air circulation",
    "Lightweight & durable",
    "Easy to clean",
    "Weatherproof material",
  ],

  faqs: [
    { q: "Will windows still open?", a: "Yes, nets are fitted without blocking movement." },
    { q: "Do nets damage window frames?", a: "No, our installation is 100% safe." },
    { q: "Can these nets be used for small windows?", a: "Yes, even very small windows can be fitted." },
  ],
},
    "industrial-bird-nets": {
  id: "industrial-bird-nets",
  title: "Industrial Bird Nets",
  service: [
    "/service/balcony-9.webp",
    "/service/balcony-8.webp",
    "/service/balcony-7.webp",
  ],

  about:
    "Industrial Bird Nets are heavy-duty nets designed for factories, warehouses, production units, and large open industrial spaces to prevent bird entry and contamination.",

  highlights: [
    { title: "Heavy-Duty Strength", desc: "Suitable for large industrial areas." },
    { title: "Long Lifespan", desc: "Made with high-grade HDPE material." },
    { title: "Hygiene Safety", desc: "Prevents bird droppings and contamination." },
  ],

  whyChooseUs: [
    "Trusted by major industries",
    "Strong and long-lasting material",
    "Expert industrial installers",
    "Free industrial site inspection",
    "Bulk installation capability",
    "Professional-grade finish",
  ],

  features: [
    "High tensile industrial-grade net",
    "UV and heat resistant",
    "Ideal for indoor & outdoor",
    "Large-area coverage",
    "Zero maintenance required",
  ],

  faqs: [
    { q: "Can you cover large warehouses?", a: "Yes, we specialize in big industrial installations." },
    { q: "Is it food-safe?", a: "Yes, suitable for food & pharma industries." },
    { q: "Does installation interrupt operations?", a: "We ensure minimal downtime." },
  ],
},
    "open-area-bird-nets": {
  id: "open-area-bird-nets",
  title: "Open Area Bird Nets",
  service: [
    "/service/open-area-1.webp",
    "/service/open-area-2.webp",
    "/service/open-area-3.webp",
    "/service/open-area-4.webp",
    "/service/open-area-5.webp",
    "/service/open-area-6.webp",
    "/service/open-area.webp",
  ],

  about:
    "Open Area Bird Nets provide strong and large-coverage netting ideal for terraces, open balconies, parking lots, and rooftop spaces to prevent bird entry and nesting.",

  highlights: [
    { title: "Wide Coverage", desc: "Suitable for large open spaces." },
    { title: "High Durability", desc: "Made for outdoor exposure." },
    { title: "Custom Fit", desc: "Tailored to any open structure." },
  ],

  whyChooseUs: [
    "Large-area installation experts",
    "UV-resistant outdoor nets",
    "Strong and flexible materials",
    "Affordable open-area protection",
    "Fast installation team",
    "Free on-site evaluation",
  ],

  features: [
    "Covers large open areas",
    "Weather-resistant",
    "Prevents nesting",
    "Suitable for all building types",
    "Strong anchoring system",
  ],

  faqs: [
    { q: "Do open areas need stronger nets?", a: "Yes, we use outdoor-grade durable nets." },
    { q: "Can nets handle heavy wind?", a: "Yes, made for high wind resistance." },
    { q: "Is cleaning required?", a: "Only basic water cleaning occasionally." },
  ],
},
    "bird-spikes-installation": {
  id: "bird-spikes-installation",
  title: "Bird Spikes Installation",
  service: [
    "/service/bird-spike-1.webp",
    "/service/bird-spike-2.webp",
    "/service/bird-spike-3.webp",
    "/service/bird-spike-4.webp",
    "/service/bird-spike-6.webp",
  ],

  about:
    "Bird Spikes offer a highly effective, non-harmful solution to prevent birds from sitting on ledges, AC units, pipes, and building edges. Made from durable polycarbonate or stainless steel.",

  highlights: [
    { title: "Humane Solution", desc: "Prevents sitting without harming birds." },
    { title: "Strong Hold", desc: "Firm fixing on any surface." },
    { title: "Long Life", desc: "Rust-proof and weatherproof." },
  ],

  whyChooseUs: [
    "High-quality stainless steel spikes",
    "100% bird-safe & humane",
    "Fast and secure installation",
    "Suitable for all surfaces",
    "Affordable rates",
    "Free inspection & measurements",
  ],

  features: [
    "Stops birds from sitting",
    "Weather-resistant spikes",
    "Available in multiple sizes",
    "No maintenance required",
    "Safe and durable",
  ],

  faqs: [
    { q: "Do spikes hurt birds?", a: "No, they only prevent sitting; completely humane." },
    { q: "Can spikes be fixed on metal?", a: "Yes, suitable for all surfaces." },
    { q: "What is the lifespan?", a: "5–10 years depending on type." },
  ],
},
    "glass-facade-bird-protection-nets": {
  id: "glass-facade-bird-protection-nets",
  title: "Glass Facade Bird Protection Nets",
  service: [
    "/service/window-net-2.webp",
    "/service/window-net-5.webp",
    "/service/window-net-6.webp",
  ],

  about:
    "Glass Facade Bird Protection Nets prevent birds from colliding with large glass panels and help protect building exteriors from stains and droppings while keeping aesthetics intact.",

  highlights: [
    { title: "Aesthetic Friendly", desc: "Almost invisible from distance." },
    { title: "High Safety", desc: "Prevents bird impact accidents." },
    { title: "Strong Installation", desc: "Secure anchoring for tall structures." },
  ],

  whyChooseUs: [
    "Experts in high-rise installation",
    "Safety-first trained team",
    "Premium clear netting",
    "No structural damage during installation",
    "Free safety assessment",
    "Wind-resistant materials",
  ],

  features: [
    "Prevents bird collision",
    "Maintains glass building aesthetics",
    "UV and weather-resistant",
    "High-rise compatible",
    "Low maintenance",
  ],

  faqs: [
    { q: "Are these nets visible?", a: "They are nearly invisible from 10–15 feet." },
    { q: "Do they affect building look?", a: "No, they blend with the structure." },
    { q: "Is high-rise installation safe?", a: "Yes, our team is trained with safety gear." },
  ],
},
    "hdpe-balcony-nets": {
  id: "hdpe-balcony-nets",
  title: "HDPE Balcony Nets",
  service: [
    "/service/hdpe-1.webp",
    "/service/hdpe-2.webp",
    "/service/hdpe-3.webp",
    "/service/hdpe-4.webp",
    "/service/hdpe-5.webp",
    "/service/hdpe-6.webp",
    "/service/hdpe-7.webp",
  ],

  about:
    "HDPE Balcony Nets provide strong, UV-stabilized protection for balconies, preventing birds from entering. Designed for long-term durability and weather resistance.",

  highlights: [
    { title: "HDPE Material", desc: "High-density polyethylene ensures long life." },
    { title: "UV Stabilized", desc: "Does not fade or crack under sunlight." },
    { title: "Custom Fit", desc: "Tailored perfectly to any balcony shape." },
  ],

  whyChooseUs: [
    "Premium HDPE netting",
    "Affordable pricing",
    "Precise measurement & fitting",
    "Weather-resistant installation",
    "Fast, professional service",
    "Free site visit available",
  ],

  features: [
    "Excellent outdoor durability",
    "Safe for pets and children",
    "Weather & corrosion proof",
    "Strong and flexible material",
    "Low maintenance required",
  ],

  faqs: [
    { q: "Do HDPE nets last long?", a: "Yes, typically 5–7 years." },
    { q: "Are they pet-safe?", a: "Yes, fully safe for cats and dogs." },
    { q: "Can they be installed on curved balconies?", a: "Yes, fully customizable." },
  ],
},
    "children-safety-nets": {
  id: "children-safety-nets",
  title: "Children Safety Nets",
  service: [
    "/service/hdpe-7.webp",
    "/service/balcony-6.webp",
    "/service/balcony-5.webp",
    "/service/hdpe-6.webp",
    "/service/hdpe-1.webp",
  ],

  about:
    "Children Safety Nets are specially designed to prevent kids from accidental falls from balconies, windows, staircases, and open spaces. Made with strong and safe material.",

  highlights: [
    { title: "Child-Proof Design", desc: "Prevents accidental slips & falls." },
    { title: "Soft & Strong", desc: "Safe material for kids' touch." },
    { title: "Secure Installation", desc: "Strong anchors ensure maximum safety." },
  ],

  whyChooseUs: [
    "100% child-safe nets",
    "Strong impact-resistant quality",
    "Highly trusted installers",
    "Free measurement & inspection",
    "Affordable rates",
    "Quick installation",
  ],

  features: [
    "High strength mesh",
    "Safe for infants & toddlers",
    "Weatherproof",
    "Smooth texture",
    "Zero sharp edges",
  ],

  faqs: [
    { q: "Are the nets safe for toddlers?", a: "Yes, completely child-safe." },
    { q: "Will it affect balcony airflow?", a: "No, airflow remains natural." },
    { q: "Does it work for windows?", a: "Yes, suitable for windows as well." },
  ],
},
        "pet-safety-nets": {
  id: "pet-safety-nets",
  title: "Pet Safety Nets",
  service: [
    "/service/hdpe-1.webp",
    "/service/balcony-1.webp",
    "/service/transparent-6.webp",
    "/service/hdpe-7.webp",
    "/service/hdpe-6.webp",
  ],

  about:
    "Pet Safety Nets prevent pets like cats and dogs from falling off balconies or windows. Strong enough to withstand pet pressure without tearing.",

  highlights: [
    { title: "Pet-Proof Strength", desc: "Resists scratching and pressure." },
    { title: "Non-Toxic Material", desc: "Safe for pets to touch and play." },
    { title: "Secure Locking", desc: "Tightly fixed to avoid any gaps." },
  ],

  whyChooseUs: [
    "Pet-friendly installations",
    "Scratch-resistant nets",
    "Customized fittings",
    "Strong anchor points",
    "Quick service",
    "Free inspection & quotation",
  ],

  features: [
    "Prevents pets from falling",
    "Strong mesh for cat safety",
    "UV-resistant",
    "Flexible yet durable",
    "Easy to clean",
  ],

  faqs: [
    { q: "Can cats tear the net?", a: "No, nets are scratch-resistant." },
    { q: "Is it safe for dogs?", a: "Yes, fully safe for all pets." },
    { q: "Will installation damage walls?", a: "No, damage-free methods used." },
  ],
},
    "window-safety-nets": {
  id: "window-safety-nets",
  title: "Window Safety Nets",
  service: [
    "/service/window-net-2.webp",
    "/service/window-net-5.webp",
    "/service/window-net-6.webp",
     "/service/window-net-7.webp",
    
  ],

  about:
    "Window Safety Nets provide protection from birds, pets falling out, and ensure safety for children. Suitable for all residential and commercial windows.",

  highlights: [
    { title: "Perfect Fit", desc: "Custom-sized for all window types." },
    { title: "Airflow Safe", desc: "Does not block wind or light." },
    { title: "Zero Damage", desc: "No scratches or marks during installation." },
  ],

  whyChooseUs: [
    "Custom window protection",
    "Durable UV-resistant nets",
    "Skilled installers",
    "Budget-friendly",
    "Free site inspection",
    "Same-day installation",
  ],

  features: [
    "Prevents falls and bird entry",
    "Strong mesh design",
    "Weather-resistant",
    "Easy maintenance",
    "Compatible with sliding windows",
  ],

  faqs: [
    { q: "Can I open the window freely?", a: "Yes, installation does not block window movement." },
    { q: "Do nets stop insects?", a: "These nets are bird nets, not mosquito nets." },
    { q: "Suitable for bathroom windows?", a: "Yes, fully waterproof & durable." },
  ],
},
    "invisible-safety-nets": {
  id: "invisible-safety-nets",
  title: "Invisible Safety Nets",
  service: [
    "/service/transparent-1.webp",
    "/service/transparent-2.webp",
    "/service/transparent-3.webp",
    "/service/transparent-4.webp",
    "/service/transparent-9.webp",
    "/service/transparent-6.webp",
  ],

  about:
    "Invisible Safety Nets offer completely transparent protection for balconies and windows without affecting building appearance. Ideal for high-rise buildings.",

  highlights: [
    { title: "Transparent Look", desc: "Maintains your home's appearance." },
    { title: "High Strength", desc: "Strong mono-filament material." },
    { title: "Rust-Free", desc: "No metal corrosion or stains." },
  ],

  whyChooseUs: [
    "Crystal-clear netting",
    "Expert high-rise team",
    "Strong anchored installation",
    "Free inspection",
    "Budget-friendly",
    "Quick, clean service",
  ],

  features: [
    "Almost invisible appearance",
    "Wind-resistant",
    "Safe for kids & pets",
    "UV-stabilized",
    "Smooth to touch",
  ],

  faqs: [
    { q: "Is it really invisible?", a: "Yes, seen only from very close." },
    { q: "Does it block airflow?", a: "Not at all, airflow is natural." },
    { q: "Can it be installed in apartments?", a: "Yes, ideal for flats & high-rise buildings." },
  ],
},
    "apartment-balcony-nets": {
  id: "apartment-balcony-nets",
  title: "Apartment Balcony Nets",
  service: [
    "/service/balcony-7.webp",
    "/service/transparent-1.webp",
    "/service/transparent-7.webp",
    "/service/hdpe-4.webp",
    "/service/balcony-4.webp",
    "/service/balcony-8.webp",
  ],

  about:
    "Apartment Balcony Nets protect against birds, dust, falls, and ensure complete safety for families living in multi-floor buildings.",

  highlights: [
    { title: "Apartment Friendly", desc: "Designed for standard flat balconies." },
    { title: "Durable Material", desc: "UV and weather-resistant." },
    { title: "Neat Installation", desc: "Clean and professional fitting." },
  ],

  whyChooseUs: [
    "Perfect for residential flats",
    "High-quality net mesh",
    "Professional fitting team",
    "Affordable packages",
    "Free size measurement",
    "Fast installation",
  ],

  features: [
    "Stops pigeons entering",
    "Safe for kids",
    "High durability",
    "Easy to clean",
    "Long-lasting protection",
  ],

  faqs: [
    { q: "Will it match apartment rules?", a: "Yes, fully society-approved nets available." },
    { q: "Does it fade in sunlight?", a: "No, UV-stabilized material stays fresh." },
    { q: "Is installation noisy?", a: "Minimal sound, done quickly." },
  ],
},
    "staircase-safety-nets": {
  id: "staircase-safety-nets",
  title: "Staircase Safety Nets",
  service: [
     "/service/stair-case-1.webp",
     "/service/stair-case-2.webp",
     "/service/stair-case-3.webp",
     "/service/stair-case-4.webp",
  ],

  about:
    "Staircase Safety Nets prevent accidents by covering open gaps between railings, balconies, and staircase edges. Ideal for apartments, schools, and commercial spaces.",

  highlights: [
    { title: "Strong Protection", desc: "Prevents slips & falls." },
    { title: "Custom Installation", desc: "Fits all staircase structures." },
    { title: "Child & Pet Safe", desc: "Smooth and soft material." },
  ],

  whyChooseUs: [
    "Trained installation team",
    "Durable safety mesh",
    "Neat finish",
    "Affordable pricing",
    "Free inspection",
    "Fast setup",
  ],

  features: [
    "High safety for kids & elders",
    "Impact-resistant",
    "Flexible & strong",
    "Weather-resistant",
    "Matches interior design",
  ],

  faqs: [
    { q: "Does it look odd indoors?", a: "No, nets blend with staircase design." },
    { q: "Can it handle heavy pressure?", a: "Yes, very strong and durable." },
    { q: "Is it washable?", a: "Yes, easy to clean with water." },
  ],
},
    "ventilation-nets": {
  id: "ventilation-nets",
  title: "Ventilation Nets",
  service: [
    "/service/vent-cover-1.webp",
    "/service/window-net-3.webp",
  ],

  about:
    "Ventilation Nets block birds from entering through ventilation openings while maintaining airflow. Perfect for kitchens, utility areas, bathrooms, and ducts.",

  highlights: [
    { title: "Airflow Friendly", desc: "Allows full air passage." },
    { title: "Secure Fit", desc: "Fits tight in small openings." },
    { title: "Durable Mesh", desc: "Weather & rust-resistant." },
  ],

  whyChooseUs: [
    "Perfect for small vents",
    "Professional finishing",
    "Strong net material",
    "Affordable fitting",
    "Free site visit",
    "Quick installation",
  ],

  features: [
    "Stops birds entering vents",
    "Allows ventilation",
    "Heat-resistant",
    "Long-lasting net",
    "No maintenance needed",
  ],

  faqs: [
    { q: "Does it block airflow?", a: "No, ventilation stays natural." },
    { q: "Suitable for kitchen vents?", a: "Yes, widely used for kitchens." },
    { q: "Is it waterproof?", a: "Yes, fully weather-resistant." },
  ],
},
"building-safety-nets": {
    id: "building-safety-nets",
    title: "Building Safety Nets",
    service: [
      "/service/open-area-4.webp",
      "/service/open-area-3.webp",
      "/service/open-area-2.webp",
      "/service/open-area-1.webp"
    ],
    about:
      "Our Building Safety Nets provide reliable fall protection for construction sites and high-rise buildings. Designed with strong, weather-resistant materials to ensure maximum safety.",
    highlights: [
      { title: "Strong Materials", desc: "Durable HDPE mesh for safety." },
      { title: "Expert Installation", desc: "Professional team for secure setup." },
      { title: "Cost Effective", desc: "Affordable solution for construction sites." }
    ],
    whyChooseUs: [
      "10+ Years of Construction Safety Experience",
      "High-Grade UV Coated Nets",
      "Certified Installation Experts",
      "Quick Deployment Anywhere",
      "Custom Sizes Available",
      "Lifetime Support & Guidance"
    ],
    features: [
      "Weather & corrosion resistant",
      "Safe for workers",
      "High-rise compatible",
      "Flexible & strong material",
      "Low maintenance"
    ],
    faqs: [
      { q: "How long does installation take?", a: "Typically 2–4 hours depending on size." },
      { q: "Do you provide customized sizes?", a: "Yes, tailor-made nets available." },
      { q: "Are these nets safe for all weather conditions?", a: "Absolutely, UV and corrosion resistant." }
    ]
  },

  "debris-netting": {
    id: "debris-netting",
    title: "Debris Netting",
    service: [
      "/service/open-area-1.webp",
      "/service/scaffold1.png",
      "/service/scaffold4.png",
      "/service/open-area-2.webp",
    ],
    about:
      "Debris Netting is ideal for containing construction debris and ensuring safety around active sites. Made from heavy-duty, durable materials for long-term use.",
    highlights: [
      { title: "Durable Mesh", desc: "High-tensile strength netting." },
      { title: "Safety Compliant", desc: "Prevents debris hazards effectively." },
      { title: "Easy Setup", desc: "Quick installation for sites." }
    ],
    whyChooseUs: [
      "Experienced Installation Team",
      "High-Tensile Materials",
      "Custom Fit Solutions",
      "Fast Deployment",
      "Industry Standard Compliance",
      "Ongoing Support & Maintenance"
    ],
    features: [
      "UV and corrosion resistant",
      "Prevents debris spread",
      "Flexible for different structures",
      "Lightweight but strong",
      "Low maintenance"
    ],
    faqs: [
      { q: "Can this be used for high-rise sites?", a: "Yes, suitable for multi-story buildings." },
      { q: "Is it reusable?", a: "Yes, with proper handling." },
      { q: "Does it comply with safety standards?", a: "Absolutely, meets all regulations." }
    ]
  },

  "construction-site-safety-nets": {
    id: "construction-site-safety-nets",
    title: "Construction Site Safety Nets",
    service: [
      "/service/building-safety.webp",
      "/service/construction-net.webp",
      "/service/open-area-4.webp",
      "/service/open-area-1.webp"
    ],
    about:
      "Construction Site Safety Nets protect workers and equipment from accidental falls and hazards. Designed for high strength and long-term durability on large construction projects.",
    highlights: [
      { title: "Strong Protection", desc: "Reliable safety netting for sites." },
      { title: "Certified Installation", desc: "Installed by professionals." },
      { title: "Cost-Effective Solution", desc: "Affordable and reliable." }
    ],
    whyChooseUs: [
      "Over a Decade of Safety Expertise",
      "Premium HDPE Nets",
      "Certified Installation Team",
      "Quick and Reliable Service",
      "Custom Sizes Available",
      "Ongoing Support & Maintenance"
    ],
    features: [
      "Weatherproof and UV resistant",
      "Safe for construction workers",
      "High-strength flexible material",
      "Reusable and low maintenance",
      "Customizable to site needs"
    ],
    faqs: [
      { q: "Are these nets suitable for skyscrapers?", a: "Yes, designed for high-rise projects." },
      { q: "Do you offer maintenance support?", a: "Yes, lifetime guidance available." },
      { q: "How quickly can it be installed?", a: "Typically within a few hours depending on size." }
    ]
  },

  "industrial-hdpe-nets": {
    id: "industrial-hdpe-nets",
    title: "Industrial HDPE Nets",
    service: [
      "/service/hdpe-2.webp",
      "/service/hdpe-1.webp",
      "/service/hdpe-3.webp",
      "/service/hdpe-4.webp"
    ],
    about:
      "Industrial HDPE Nets are designed for warehouses, factories, and industrial setups, providing durable and safe coverage to prevent accidents and damage.",
    highlights: [
      { title: "High-Durability Material", desc: "Premium HDPE mesh for industrial safety." },
      { title: "Professional Installation", desc: "Ensures strong and safe fit." },
      { title: "Cost-Effective", desc: "Reliable solution within budget." }
    ],
    whyChooseUs: [
      "10+ Years Industrial Safety Experience",
      "Certified Installers",
      "Custom Sized Nets",
      "Fast & Safe Installation",
      "Durable & UV Coated",
      "Lifetime Support & Maintenance"
    ],
    features: [
      "Weather and UV resistant",
      "High tensile strength",
      "Safe for heavy industrial use",
      "Flexible and durable material",
      "Low maintenance"
    ],
    faqs: [
      { q: "Can it be customized for my warehouse?", a: "Yes, we provide tailored sizes." },
      { q: "Is it reusable?", a: "Yes, with proper handling." },
      { q: "Will it last outdoors?", a: "Yes, UV and weather-resistant." }
    ]
  },

  "scaffolding-nets": {
    id: "scaffolding-nets",
    title: "Scaffolding Nets",
    service: [
      "/service/hdpe-5.webp",
      "/service/hdpe-6.webp",
      "/service/hdpe-1.webp",
      "/service/hdpe-2.webp"
    ],
    about:
      "Scaffolding Nets provide safety for workers and materials on scaffolds. Strong, lightweight, and UV-resistant to ensure safe construction activities.",
    highlights: [
      { title: "Worker Safety", desc: "Prevents accidental falls." },
      { title: "Durable & Lightweight", desc: "Easy to handle and install." },
      { title: "Cost-Effective", desc: "Reliable for all construction needs." }
    ],
    whyChooseUs: [
      "Experienced Installation Team",
      "High-Quality Materials",
      "Custom Fit for Scaffolds",
      "Quick Installation",
      "Compliance with Safety Standards",
      "Lifetime Support"
    ],
    features: [
      "Weather and UV resistant",
      "Lightweight but strong",
      "Prevents falls and debris",
      "High tensile strength",
      "Low maintenance"
    ],
    faqs: [
      { q: "Can it be used on multi-story scaffolds?", a: "Yes, suitable for any height." },
      { q: "How long does installation take?", a: "A few hours depending on scaffold size." },
      { q: "Is it reusable?", a: "Yes, if handled carefully." }
    ]
  },

  "fall-protection-nets": {
    id: "fall-protection-nets",
    title: "Fall Protection Nets",
    service: [
      "/service/open-area.webp",
      "/service/open-area-2.webp",
      "/service/open-area-3.webp",
      "/service/open-area-6.webp"
    ],
    about:
      "Fall Protection Nets are designed to prevent injuries and accidents in construction, industrial, and high-rise sites. Built with high-strength, durable materials for safety.",
    highlights: [
      { title: "Safety First", desc: "Reliable protection for workers." },
      { title: "Certified Installation", desc: "Installed by experts." },
      { title: "Affordable Solution", desc: "Effective yet cost-friendly." }
    ],
    whyChooseUs: [
      "Expert Installers",
      "10+ Years Safety Experience",
      "High-Grade UV Coated Nets",
      "Custom Sizes Available",
      "Fast Deployment",
      "Lifetime Support"
    ],
    features: [
      "Durable & UV resistant",
      "Safe for workers",
      "Strong & flexible material",
      "Reusable & low maintenance",
      "High tensile strength"
    ],
    faqs: [
      { q: "Are these nets suitable for all construction sites?", a: "Yes, designed for industrial and residential projects." },
      { q: "Do you provide warranty?", a: "Yes, full coverage." },
      { q: "Can these be installed at heights?", a: "Yes, high-rise compatible." }
    ]
  },

  "worker-safety-nets": {
    id: "worker-safety-nets",
    title: "Worker Safety Nets",
    service: [
      "/service/open-area.webp",
      "/service/open-area-6.webp",
      "/service/open-area-5.webp",
      "/service/open-area-1.webp"
    ],
    about:
      "Worker Safety Nets ensure protection for laborers at construction and industrial sites. High-strength and durable for maximum safety during work.",
    highlights: [
      { title: "Worker Protection", desc: "Prevents accidental falls." },
      { title: "Expert Installation", desc: "Installed securely by professionals." },
      { title: "Affordable Safety Solution", desc: "Reliable & cost-effective." }
    ],
    whyChooseUs: [
      "Professional Installation",
      "High-Strength Material",
      "Custom Fit Options",
      "Quick Setup",
      "Certified Safety Standards",
      "Lifetime Support"
    ],
    features: [
      "Durable and UV resistant",
      "High-strength material",
      "Safe for all workers",
      "Flexible & reusable",
      "Low maintenance"
    ],
    faqs: [
      { q: "Are these nets certified?", a: "Yes, compliant with safety standards." },
      { q: "Can these be reused?", a: "Yes, with proper handling." },
      { q: "Do they cover high-rise construction?", a: "Yes, fully compatible." }
    ]
  },

  "dust-control-nets": {
    id: "dust-control-nets",
    title: "Dust Control Nets",
    service: [
      "/service/shade-2.webp",
      "/service/scaffold2.png",
      "/service/scaffold3.png",
      "/service/shade-1.webp"
    ],
    about:
      "Dust Control Nets reduce airborne dust in construction and industrial areas. Strong, lightweight, and UV-resistant for long-term usage.",
    highlights: [
      { title: "Dust Suppression", desc: "Keeps work areas clean." },
      { title: "Durable Material", desc: "UV & weather resistant." },
      { title: "Easy Installation", desc: "Quick setup for large areas." }
    ],
    whyChooseUs: [
      "Expert Installation Team",
      "UV-Coated Mesh",
      "High-Strength Material",
      "Fast & Reliable Service",
      "Custom Sizes Available",
      "Ongoing Support"
    ],
    features: [
      "Reduces airborne dust",
      "Durable & UV-resistant",
      "Flexible & strong material",
      "Lightweight & reusable",
      "Low maintenance"
    ],
    faqs: [
      { q: "Is it reusable?", a: "Yes, if handled carefully." },
      { q: "Can it cover large construction areas?", a: "Yes, customizable sizes." },
      { q: "Does it comply with safety regulations?", a: "Yes, meets industry standards." }
    ]
  },
   "cricket-practice-nets": {
    id: "cricket-practice-nets",
    title: "Cricket Practice Nets",
    service: [
      "/service/vent-cover-2.webp",
      "/service/vent-cover-3.webp",
      "/service/cricket3.webp",
      "/service/cricket4.webp"
    ],
    about:
      "Our Cricket Practice Nets provide a safe and controlled environment for batting and bowling practice. Durable and high-quality nets ensure long-lasting usage for clubs, schools, and individuals.",
    highlights: [
      { title: "Durable Material", desc: "High-quality nylon or HDPE mesh." },
      { title: "Safe Practice", desc: "Protects players and surroundings." },
      { title: "Customizable", desc: "Sizes available for all spaces." }
    ],
    whyChooseUs: [
      "10+ Years Sports Safety Experience",
      "Premium-Grade Nets",
      "Certified Installation Team",
      "Custom Dimensions Available",
      "Quick Setup",
      "Lifetime Support"
    ],
    features: [
      "Weather & UV resistant",
      "Strong & flexible material",
      "Safe for indoor/outdoor use",
      "Low maintenance",
      "Long-lasting durability"
    ],
    faqs: [
      { q: "Can it be used outdoors?", a: "Yes, UV & weather-resistant." },
      { q: "Is it suitable for schools?", a: "Yes, perfect for clubs & schools." },
      { q: "How long does installation take?", a: "Typically 1–2 hours." }
    ]
  },

  "football-ground-nets": {
    id: "football-ground-nets",
    title: "Football Ground Nets",
    service: [
      "/service/fb.webp",
    ],
    about:
      "Football Ground Nets protect spectators, players, and nearby areas from stray balls. Designed for durability and safety on stadiums, grounds, and training fields.",
    highlights: [
      { title: "Durable Mesh", desc: "UV & weather-resistant materials." },
      { title: "Safe Design", desc: "Prevents stray balls and accidents." },
      { title: "Easy Installation", desc: "Quick and secure setup." }
    ],
    whyChooseUs: [
      "Certified Installers",
      "Premium UV-Coated Nets",
      "Custom Dimensions",
      "Fast & Reliable Service",
      "High Durability",
      "Ongoing Support"
    ],
    features: [
      "Weatherproof & UV resistant",
      "Safe for players & spectators",
      "Strong & flexible mesh",
      "Reusable & low maintenance",
      "Suitable for all football grounds"
    ],
    faqs: [
      { q: "Can it cover full-size grounds?", a: "Yes, customizable dimensions." },
      { q: "Is it suitable for schools?", a: "Yes, perfect for all levels." },
      { q: "Does it last outdoors?", a: "Yes, UV & corrosion-resistant." }
    ]
  },

  "badminton-court-nets": {
    id: "badminton-court-nets",
    title: "Badminton Court Nets",
    service: [
      "/service/bad.webp",
    ],
    about:
      "Our Badminton Court Nets provide a professional setup for indoor and outdoor courts. Designed with high-quality materials to ensure durability and consistent performance.",
    highlights: [
      { title: "High-Quality Mesh", desc: "Strong & tear-resistant material." },
      { title: "Professional Setup", desc: "Easy installation for all courts." },
      { title: "Affordable", desc: "Durable yet cost-effective." }
    ],
    whyChooseUs: [
      "Certified Installers",
      "Premium Materials",
      "Quick Setup",
      "Custom Sizes Available",
      "Low Maintenance",
      "Lifetime Support"
    ],
    features: [
      "Weather & UV resistant",
      "Safe for players",
      "Strong & flexible mesh",
      "Indoor & outdoor use",
      "Durable & long-lasting"
    ],
    faqs: [
      { q: "Is it suitable for tournaments?", a: "Yes, professional quality nets." },
      { q: "Can it be used outdoors?", a: "Yes, UV-resistant for outdoor use." },
      { q: "How long does installation take?", a: "Typically 30–60 minutes." }
    ]
  },

  "golf-nets": {
    id: "golf-nets",
    title: "Golf Nets",
    service: [
      "/service/golf1.webp",
      "/service/golf2.webp",
      "/service/golf3.webp",
      "/service/golf4.webp"
    ],
    about:
      "Golf Nets provide a safe practice environment for driving ranges or home setups. Durable nets catch balls effectively and are suitable for indoor and outdoor use.",
    highlights: [
      { title: "Durable Mesh", desc: "High-strength HDPE or nylon." },
      { title: "Safe Practice", desc: "Protects property and people." },
      { title: "Easy Setup", desc: "Quick assembly with secure supports." }
    ],
    whyChooseUs: [
      "Certified Installation",
      "10+ Years Experience",
      "Custom Dimensions Available",
      "UV Coated & Weatherproof",
      "Professional Guidance",
      "Lifetime Support"
    ],
    features: [
      "Weather & UV resistant",
      "Strong & flexible material",
      "Indoor/outdoor use",
      "Reusable & low maintenance",
      "Durable long-lasting mesh"
    ],
    faqs: [
      { q: "Can it be used indoors?", a: "Yes, suitable for indoor practice." },
      { q: "Is it safe for home use?", a: "Yes, fully safe & durable." },
      { q: "How quickly can it be set up?", a: "Typically 30–60 minutes." }
    ]
  },

  "tennis-nets": {
    id: "tennis-nets",
    title: "Tennis Nets",
    service: [
      "/service/bad.webp",
    ],
    about:
      "Tennis Nets are designed for courts of all levels, providing durability, flexibility, and safety for players. Suitable for clubs, schools, and personal courts.",
    highlights: [
      { title: "High-Quality Material", desc: "Durable and UV-resistant." },
      { title: "Professional Installation", desc: "Ensures safe and secure fit." },
      { title: "Affordable", desc: "Cost-effective for all facilities." }
    ],
    whyChooseUs: [
      "Certified Installers",
      "Premium Materials",
      "Custom Sizes Available",
      "Quick Setup",
      "Long-Lasting & Durable",
      "Lifetime Support"
    ],
    features: [
      "Weather & UV resistant",
      "Strong & flexible mesh",
      "Safe for players",
      "Indoor/outdoor compatible",
      "Low maintenance"
    ],
    faqs: [
      { q: "Is it suitable for competitive courts?", a: "Yes, tournament quality." },
      { q: "Can it be installed outdoors?", a: "Yes, UV-resistant." },
      { q: "How long does installation take?", a: "About 1 hour." }
    ]
  },

  "sports-enclosure-nets": {
    id: "sports-enclosure-nets",
    title: "Sports Enclosure Nets",
    service: [
      "/service/enclosure1.webp",
      "/service/enclosure2.webp",
      "/service/enclosure3.webp",
      "/service/enclosure4.webp"
    ],
    about:
      "Sports Enclosure Nets provide complete protection for multiple sports activities, ensuring safety for players and spectators. Ideal for stadiums, gyms, and multi-sport complexes.",
    highlights: [
      { title: "Complete Protection", desc: "Covers full play areas." },
      { title: "Durable Mesh", desc: "High-quality, UV & weather-resistant." },
      { title: "Easy Installation", desc: "Quick and secure setup." }
    ],
    whyChooseUs: [
      "Certified Installers",
      "10+ Years Experience",
      "Custom Dimensions",
      "UV-Coated & Weatherproof",
      "Fast Setup",
      "Lifetime Support"
    ],
    features: [
      "Weather & UV resistant",
      "Safe for all sports",
      "Strong & flexible material",
      "Indoor/outdoor compatible",
      "Low maintenance"
    ],
    faqs: [
      { q: "Can it cover multiple sports?", a: "Yes, designed for multi-sport complexes." },
      { q: "Is it reusable?", a: "Yes, with proper handling." },
      { q: "How long does installation take?", a: "1–2 hours depending on size." }
    ]
  },

  "stadium-netting": {
    id: "stadium-netting",
    title: "Stadium Netting",
    service: [
      "/service/stadium1.webp",
      "/service/stadium2.webp",
      "/service/stadium3.webp",
      "/service/stadium4.webp"
    ],
    about:
      "Stadium Netting ensures safety for spectators and players by preventing balls from leaving the playing area. Durable, high-strength, and weather-resistant materials for long-lasting protection.",
    highlights: [
      { title: "High Strength", desc: "Premium materials for stadium safety." },
      { title: "Certified Installation", desc: "Safe and secure setup." },
      { title: "Cost-Effective", desc: "Affordable protection solution." }
    ],
    whyChooseUs: [
      "Professional Installers",
      "Premium UV Coated Nets",
      "Custom Sizes",
      "Quick Setup",
      "Long-Lasting Durability",
      "Lifetime Support"
    ],
    features: [
      "Weather & UV resistant",
      "High-strength material",
      "Safe for spectators & players",
      "Flexible & reusable",
      "Low maintenance"
    ],
    faqs: [
      { q: "Can it cover large stadiums?", a: "Yes, fully customizable." },
      { q: "Is it safe for spectators?", a: "Yes, designed for safety." },
      { q: "How long does installation take?", a: "Several hours depending on size." }
    ]
  },

  "ball-stop-nets": {
    id: "ball-stop-nets",
    title: "Ball Stop Nets",
    service: [
      "/service/ballstop1.webp",
      "/service/ballstop2.webp",
      "/service/ballstop3.webp",
      "/service/ballstop4.webp"
    ],
    about:
      "Ball Stop Nets prevent balls from leaving the play area, ensuring safety for spectators and property. Ideal for multiple sports including cricket, football, and tennis.",
    highlights: [
      { title: "Durable Material", desc: "Strong HDPE mesh." },
      { title: "Safe Design", desc: "Protects surroundings effectively." },
      { title: "Quick Setup", desc: "Easy installation for multiple areas." }
    ],
    whyChooseUs: [
      "Certified Installation Team",
      "Premium-Grade Nets",
      "Customizable Sizes",
      "Fast & Secure Setup",
      "Long-Lasting Durability",
      "Ongoing Support"
    ],
    features: [
      "Weather & UV resistant",
      "Strong & flexible material",
      "Safe for all sports",
      "Reusable & low maintenance",
      "Indoor/outdoor compatible"
    ],
    faqs: [
      { q: "Can it cover large play areas?", a: "Yes, fully customizable." },
      { q: "Is it suitable for schools?", a: "Yes, ideal for educational institutions." },
      { q: "How long does installation take?", a: "Typically 1–2 hours." }
    ]
  },
  "invisible-balcony-safety-nets": {
    id: "invisible-balcony-safety-nets",
    title: "Invisible Balcony Safety Nets",
    service: [
      "/service/transnparent-9.webp",
      "/service/transparent-1.webp",
      "/service/transparent-3.webp",
      "/service/transparent-4.webp",
      "/service/transparent-9.webp",
      "/service/transparent-8.webp"
    ],
    about:
      "Our Invisible Balcony Safety Nets provide a sleek, unobtrusive protection for high-rise apartments and balconies. Designed to keep the view intact while ensuring complete safety.",
    highlights: [
      { title: "Invisible Design", desc: "Maintains aesthetics and view." },
      { title: "High Durability", desc: "UV & weather-resistant mesh." },
      { title: "Professional Installation", desc: "Installed by experts." }
    ],
    whyChooseUs: [
      "10+ Years Experience",
      "Premium UV-Coated Nets",
      "Certified Professional Installers",
      "Fast Installation",
      "Custom Sizes Available",
      "Lifetime Support"
    ],
    features: [
      "Weather & UV resistant",
      "Safe for children & pets",
      "High-rise compatible",
      "Low maintenance",
      "Strong & flexible material"
    ],
    faqs: [
      { q: "Will it block the view?", a: "No, it's nearly invisible." },
      { q: "Is it safe for pets?", a: "Yes, completely safe." },
      { q: "How long does installation take?", a: "30–60 minutes per balcony." }
    ]
  },

  "uv-resistant-nets": {
    id: "uv-resistant-nets",
    title: "UV Resistant Nets",
    service: [
      "/service/hdpe-1.webp",
      "/service/hdpe-3.webp",
      "/service/hdpe-2.webp",
      "/service/hdpe-4.webp"
    ],
    about:
      "Our UV Resistant Nets are specially designed to withstand harsh sunlight and UV rays, ensuring long-lasting durability for outdoor applications.",
    highlights: [
      { title: "UV Protection", desc: "Prevents degradation from sunlight." },
      { title: "Durable Material", desc: "Long-lasting high-strength mesh." },
      { title: "Versatile Use", desc: "Suitable for various outdoor needs." }
    ],
    whyChooseUs: [
      "Certified Installation",
      "10+ Years Experience",
      "Premium UV-Coated Nets",
      "Quick Setup",
      "Custom Dimensions Available",
      "Lifetime Support"
    ],
    features: [
      "UV & weather resistant",
      "Strong & flexible mesh",
      "Safe for outdoor use",
      "Low maintenance",
      "Long-lasting durability"
    ],
    faqs: [
      { q: "Can it be used outdoors?", a: "Yes, fully UV resistant." },
      { q: "Is it suitable for rooftops?", a: "Yes, ideal for rooftops and open areas." },
      { q: "How durable is it?", a: "Designed to last 10+ years outdoors." }
    ]
  },

  "fire-retardant-nets": {
    id: "fire-retardant-nets",
    title: "Fire Retardant Nets",
    service: [
      "/service/hdpe-5.webp",
      "/service/hdpe-6.webp",
      "/service/hdpe-2.webp",
      "/service/hdpe-4.webp"
    ],
    about:
      "Fire Retardant Nets provide an additional layer of safety by being resistant to flames. Ideal for industrial, construction, and high-risk areas.",
    highlights: [
      { title: "Fire Safety", desc: "Material is flame-retardant." },
      { title: "Durable Mesh", desc: "High-strength construction." },
      { title: "Professional Installation", desc: "Installed by experts." }
    ],
    whyChooseUs: [
      "Certified Installers",
      "10+ Years Experience",
      "Fire-Retardant Materials",
      "Quick & Reliable Setup",
      "Custom Sizes",
      "Lifetime Support"
    ],
    features: [
      "Flame-retardant material",
      "Durable & strong mesh",
      "Safe for high-risk areas",
      "Low maintenance",
      "Long-lasting durability"
    ],
    faqs: [
      { q: "Is it suitable for construction sites?", a: "Yes, perfect for industrial applications." },
      { q: "Does it prevent fire spread?", a: "It reduces risk, but not a replacement for safety systems." },
      { q: "How long does installation take?", a: "1–2 hours depending on size." }
    ]
  },

  "stainless-steel-wire-nets": {
    id: "stainless-steel-wire-nets",
    title: "Stainless Steel Wire Nets",
    service: [
      "/service/invisible21.webp",
      "/service/invisible20.webp",
      "/service/invisible19.webp",
      "/service/invisible24.webp",
      "/service/invisible25.webp",
      "/service/invisible29.webp"
    ],
    about:
      "Our Stainless Steel Wire Nets offer premium durability and security. Ideal for high-strength applications where longevity and resistance to corrosion are essential.",
    highlights: [
      { title: "Premium Material", desc: "High-grade stainless steel." },
      { title: "Corrosion Resistant", desc: "Perfect for outdoor use." },
      { title: "Professional Installation", desc: "Installed with precision." }
    ],
    whyChooseUs: [
      "10+ Years Experience",
      "Certified Installers",
      "Premium Stainless Steel",
      "Custom Sizes Available",
      "Quick Setup",
      "Lifetime Support"
    ],
    features: [
      "Corrosion & rust resistant",
      "High tensile strength",
      "Safe & durable",
      "Outdoor compatible",
      "Low maintenance"
    ],
    faqs: [
      { q: "Is it suitable for high-rise use?", a: "Yes, ideal for balconies & windows." },
      { q: "Will it rust outdoors?", a: "No, premium stainless steel prevents rusting." },
      { q: "How long does installation take?", a: "Typically 1–2 hours." }
    ]
  },

  "customized-net-solutions": {
    id: "customized-net-solutions",
    title: "Customized Net Solutions",
    service: [
      "/service/open-area-2.webp",
      "/service/open-area-3.webp",
      "/service/custom.webp",
      "/service/open-area-4.webp"
    ],
    about:
      "We offer Customized Net Solutions tailored to your specific requirements, from size to material, ensuring maximum safety and aesthetic appeal.",
    highlights: [
      { title: "Tailored Design", desc: "Custom dimensions & material." },
      { title: "Expert Installation", desc: "Professional setup for all spaces." },
      { title: "High Durability", desc: "Premium-grade materials used." }
    ],
    whyChooseUs: [
      "Certified Installers",
      "Custom Design Available",
      "10+ Years Experience",
      "Fast & Reliable Setup",
      "Premium Materials",
      "Lifetime Support"
    ],
    features: [
      "Fully customizable",
      "Durable & long-lasting",
      "Safe for all applications",
      "Indoor & outdoor use",
      "Low maintenance"
    ],
    faqs: [
      { q: "Can I get custom sizes?", a: "Yes, fully customizable." },
      { q: "Is it suitable for high-rise buildings?", a: "Yes, designed for safety." },
      { q: "How long does installation take?", a: "Depends on project size, 1–3 hours typically." }
    ]
  },

  "roof-safety-nets": {
    id: "roof-safety-nets",
    title: "Roof Safety Nets",
    service: [
      "/service/open-area-6.webp",
      "/service/open-area-5.webp",
      "/service/open-area-4.webp",
      "/service/open-area-2.webp"
    ],
    about:
      "Roof Safety Nets protect workers and property from falls and debris during construction or maintenance. Strong, durable, and compliant with safety standards.",
    highlights: [
      { title: "Fall Protection", desc: "Prevents accidents from heights." },
      { title: "Durable Material", desc: "High-strength HDPE or nylon mesh." },
      { title: "Easy Installation", desc: "Securely installed for safety." }
    ],
    whyChooseUs: [
      "10+ Years Experience",
      "Certified Installers",
      "Premium Safety Nets",
      "Quick Setup",
      "Custom Sizes Available",
      "Lifetime Support"
    ],
    features: [
      "Weather & UV resistant",
      "Strong & flexible mesh",
      "Safe for workers",
      "Low maintenance",
      "Long-lasting durability"
    ],
    faqs: [
      { q: "Is it suitable for commercial buildings?", a: "Yes, ideal for roofs & terraces." },
      { q: "How long does installation take?", a: "Typically 1–2 hours." },
      { q: "Is it safe for high-rise roofs?", a: "Yes, fully compliant with safety standards." }
    ]
  },

  "warehouse-nets": {
    id: "warehouse-nets",
    title: "Warehouse Nets",
    service: [
      "/service/vent-cover-2.webp",
    ],
    about:
      "Warehouse Nets provide protection for goods and workers in warehouses. Durable and versatile, they ensure safety and prevent damage from falling objects.",
    highlights: [
      { title: "Durable Material", desc: "Strong HDPE mesh for warehouse use." },
      { title: "Safety Compliance", desc: "Prevents accidents & damage." },
      { title: "Professional Installation", desc: "Installed by trained personnel." }
    ],
    whyChooseUs: [
      "10+ Years Experience",
      "Certified Installers",
      "Premium Materials",
      "Custom Sizes Available",
      "Fast & Secure Setup",
      "Lifetime Support"
    ],
    features: [
      "Weather & UV resistant",
      "Strong & flexible mesh",
      "Safe for workers",
      "Prevents damage to goods",
      "Low maintenance"
    ],
    faqs: [
      { q: "Is it suitable for large warehouses?", a: "Yes, fully customizable." },
      { q: "Can it prevent falling objects?", a: "Yes, designed for safety." },
      { q: "How long does installation take?", a: "1–2 hours depending on size." }
    ]
  },

  "solar-panel-protection-nets": {
    id: "solar-panel-protection-nets",
    title: "Solar Panel Protection Nets",
    service: [
      "/service/transparent-1.webp",
      "/service/transparent-4.webp",
    ],
    about:
      "Solar Panel Protection Nets safeguard panels from birds, debris, and accidental damage, enhancing longevity and efficiency while maintaining a clean surface.",
    highlights: [
      { title: "Panel Protection", desc: "Prevents bird & debris damage." },
      { title: "Durable Material", desc: "UV & weather-resistant mesh." },
      { title: "Professional Installation", desc: "Installed by experts." }
    ],
    whyChooseUs: [
      "10+ Years Experience",
      "Certified Installers",
      "Premium Materials",
      "Custom Sizes Available",
      "Fast & Reliable Setup",
      "Lifetime Support"
    ],
    features: [
      "UV & weather-resistant",
      "Durable & strong mesh",
      "Safe for all installations",
      "Low maintenance",
      "Long-lasting protection"
    ],
    faqs: [
      { q: "Is it safe for all types of panels?", a: "Yes, suitable for solar panels of any type." },
      { q: "Can it withstand birds?", a: "Yes, prevents bird damage effectively." },
      { q: "How long does installation take?", a: "1–2 hours depending on setup." }
    ]
  },
   "monkey-safety-nets": {
    id: "monkey-safety-nets",
    title: "Monkey Safety Nets",
    service: [
      "/service/hdpe-1.webp",
      "/service/hdpe-2.webp",
      "/service/hdpe-3.webp",
      "/service/hdpe-4.webp",
      "/service/hdpe-5.webp",
      "/service/hdpe-6.webp"
    ],
    about:
      "Monkey Safety Nets protect your home, terrace, and gardens from monkeys, ensuring safety for residents and animals. Durable and weather-resistant materials for long-lasting use.",
    highlights: [
      { title: "Strong Material", desc: "Durable and high-strength mesh." },
      { title: "Expert Installation", desc: "Installed by certified professionals." },
      { title: "Animal Safe", desc: "Designed to be safe for animals." }
    ],
    whyChooseUs: [
      "10+ Years Experience",
      "Certified Installers",
      "Premium UV-Coated Nets",
      "Fast Setup",
      "Custom Sizes Available",
      "Lifetime Support"
    ],
    features: [
      "Durable & flexible mesh",
      "Safe for animals & humans",
      "Weather-resistant",
      "High-rise compatible",
      "Low maintenance"
    ],
    faqs: [
      { q: "Is it safe for pets?", a: "Yes, completely safe." },
      { q: "How long does installation take?", a: "30–60 minutes per terrace." },
      { q: "Can it withstand strong monkeys?", a: "Yes, designed for strong animals." }
    ]
  },

  "seagull-protection-nets": {
    id: "seagull-protection-nets",
    title: "Seagull Protection Nets",
    service: [
      "/service/balcony-7.webp",
      "/service/balcony-1.webp",
      "/service/hdpe-3.webp",
      "/service/hdpe-5.webp",
      "/service/hdpe-7.webp"
    ],
    about:
      "Seagull Protection Nets prevent seagulls from nesting or damaging rooftops and balconies, keeping your space clean and safe.",
    highlights: [
      { title: "Effective Barrier", desc: "Prevents nesting & intrusion." },
      { title: "Durable Material", desc: "UV & weather-resistant mesh." },
      { title: "Professional Installation", desc: "Quick and reliable setup." }
    ],
    whyChooseUs: [
      "10+ Years Experience",
      "Certified Installers",
      "UV-Coated Nets",
      "Fast & Safe Installation",
      "Custom Dimensions",
      "Lifetime Support"
    ],
    features: [
      "Weather & UV resistant",
      "Safe for birds",
      "Durable & long-lasting",
      "Easy to maintain",
      "High-rise compatible"
    ],
    faqs: [
      { q: "Will it harm seagulls?", a: "No, it safely keeps them away." },
      { q: "How long does installation take?", a: "1–2 hours per roof." },
      { q: "Is it suitable for terraces?", a: "Yes, ideal for balconies & rooftops." }
    ]
  },

  "cat-safety-nets": {
    id: "cat-safety-nets",
    title: "Cat Safety Nets",
    service: [
      "/service/hdpe-6.webp",
      "/service/hdpe-3.webp",
      "/service/hdpe-1.webp",
      "/service/hdpe-4.webp",
      "/service/hdpe-5.webp"
    ],
    about:
      "Cat Safety Nets provide protection for cats on balconies, terraces, and windows, preventing accidental falls while allowing them to play safely.",
    highlights: [
      { title: "Pet Safe", desc: "Designed for the safety of cats." },
      { title: "Durable Material", desc: "UV & weather-resistant mesh." },
      { title: "Expert Installation", desc: "Installed by trained professionals." }
    ],
    whyChooseUs: [
      "Pet-friendly design",
      "Certified Installers",
      "10+ Years Experience",
      "Quick & Safe Installation",
      "Custom Sizes Available",
      "Lifetime Support"
    ],
    features: [
      "Weather-resistant mesh",
      "Safe for cats & pets",
      "Durable & flexible",
      "High-rise compatible",
      "Low maintenance"
    ],
    faqs: [
      { q: "Will it prevent falls?", a: "Yes, fully safe for cats." },
      { q: "Can it be installed on balconies?", a: "Yes, ideal for balconies." },
      { q: "How long does installation take?", a: "30–60 minutes." }
    ]
  },

  "dog-safety-nets": {
    id: "dog-safety-nets",
    title: "Dog Safety Nets",
    service: [
      "/service/hdpe-5.webp",
      "/service/hdpe-1.webp",
      "/service/hdpe-2.webp",
      "/service/hdpe-6.webp",
      "/service/hdpe-3.webp"
    ],
    about:
      "Dog Safety Nets prevent dogs from falling or escaping balconies, terraces, and windows while allowing them to play safely. Strong, durable, and reliable.",
    highlights: [
      { title: "Pet Safe", desc: "Designed for dogs of all sizes." },
      { title: "Durable Mesh", desc: "UV & weather-resistant." },
      { title: "Professional Installation", desc: "Expert setup for safety." }
    ],
    whyChooseUs: [
      "Pet-friendly design",
      "10+ Years Experience",
      "Certified Installers",
      "Custom Sizes Available",
      "Fast & Reliable Installation",
      "Lifetime Support"
    ],
    features: [
      "Safe for dogs",
      "Durable & flexible mesh",
      "Weather-resistant",
      "High-rise compatible",
      "Low maintenance"
    ],
    faqs: [
      { q: "Is it safe for large dogs?", a: "Yes, suitable for all sizes." },
      { q: "Can it be installed on terraces?", a: "Yes, fully compatible." },
      { q: "How long does installation take?", a: "1–2 hours depending on size." }
    ]
  },

  "tree-protection-nets": {
    id: "tree-protection-nets",
    title: "Tree Protection Nets",
    service: [
      "/service/tree1.webp",
      "/service/tree2.webp",
      "/service/tree3.webp",
      "/service/tree4.webp"
    ],
    about:
      "Tree Protection Nets safeguard trees from birds, animals, and external damage. Durable and flexible mesh suitable for gardens, farms, and orchards.",
    highlights: [
      { title: "Protect Trees", desc: "Prevents damage from animals & birds." },
      { title: "Durable Material", desc: "Weather-resistant mesh." },
      { title: "Professional Installation", desc: "Quick and reliable setup." }
    ],
    whyChooseUs: [
      "10+ Years Experience",
      "Certified Installers",
      "Custom Sizes Available",
      "Durable Mesh",
      "Fast & Safe Installation",
      "Lifetime Support"
    ],
    features: [
      "Weather-resistant",
      "Durable & strong",
      "Protects plants & trees",
      "Flexible installation",
      "Low maintenance"
    ],
    faqs: [
      { q: "Can it protect fruit trees?", a: "Yes, fully suitable." },
      { q: "Is it safe for animals?", a: "Yes, harmless." },
      { q: "How long does installation take?", a: "1–2 hours depending on area." }
    ]
  },

  "garden-and-farm-nets": {
    id: "garden-and-farm-nets",
    title: "Garden And Farm Nets",
    service: [
      "/service/shade-4.webp",
      "/service/shade-1.webp",
      "/service/shade-2.webp",
      "/service/shade-3.webp"
    ],
    about:
      "Garden and Farm Nets protect crops and plants from birds and animals. Durable, UV-resistant mesh ensures maximum protection and longevity.",
    highlights: [
      { title: "Crop Protection", desc: "Keeps birds & animals away." },
      { title: "Durable Mesh", desc: "Weather & UV-resistant." },
      { title: "Expert Installation", desc: "Fast and professional setup." }
    ],
    whyChooseUs: [
      "10+ Years Experience",
      "Certified Installers",
      "Custom Sizes Available",
      "Durable Materials",
      "Fast Setup",
      "Lifetime Support"
    ],
    features: [
      "UV & weather-resistant",
      "Durable & strong",
      "Protects crops & plants",
      "Flexible & safe installation",
      "Low maintenance"
    ],
    faqs: [
      { q: "Can it protect vegetable gardens?", a: "Yes, fully effective." },
      { q: "Is it safe for pets?", a: "Yes." },
      { q: "How long does installation take?", a: "1–2 hours depending on size." }
    ]
  },

  "terrace-animal-protection": {
    id: "terrace-animal-protection",
    title: "Terrace Animal Protection",
    service: [
      "/service/open-area-1.webp",
      "/service/open-area-2.webp",
      "/service/open-area-3.webp",
      "/service/open-area-4.webp"
    ],
    about:
      "Terrace Animal Protection Nets prevent birds, monkeys, and other animals from entering terraces, ensuring safety and cleanliness for your home.",
    highlights: [
      { title: "Animal Barrier", desc: "Prevents intrusion from animals." },
      { title: "Durable Mesh", desc: "UV & weather-resistant." },
      { title: "Professional Installation", desc: "Quick and reliable setup." }
    ],
    whyChooseUs: [
      "10+ Years Experience",
      "Certified Installers",
      "Durable Materials",
      "Fast Setup",
      "Custom Sizes Available",
      "Lifetime Support"
    ],
    features: [
      "Durable & flexible mesh",
      "Animal-safe",
      "Weather-resistant",
      "Easy to maintain",
      "High-rise compatible"
    ],
    faqs: [
      { q: "Is it suitable for terraces?", a: "Yes, ideal for rooftops & balconies." },
      { q: "Can it protect pets?", a: "Yes, fully safe." },
      { q: "How long does installation take?", a: "30–60 minutes depending on terrace size." }
    ]
  },

  "zoo-and-wildlife-nets": {
    id: "zoo-and-wildlife-nets",
    title: "Zoo and Wildlife Nets",
    service: [
      "/service/vent-cover-3.webp",
      "/service/zoo2.webp",
      "/service/zoo3.webp",
      "/service/zoo4.webp"
    ],
    about:
      "Zoo & Wildlife Nets are designed for enclosures, aviaries, and wildlife areas. High-strength mesh ensures safety for animals while preventing escape or intrusion.",
    highlights: [
      { title: "Wildlife Safety", desc: "Safe enclosures for animals." },
      { title: "Durable Material", desc: "High-strength mesh." },
      { title: "Professional Setup", desc: "Installed by experts." }
    ],
    whyChooseUs: [
      "Certified Installers",
      "10+ Years Experience",
      "Durable Materials",
      "Custom Sizes Available",
      "Fast & Reliable Installation",
      "Lifetime Support"
    ],
    features: [
      "Durable & strong mesh",
      "Safe for animals",
      "Weather-resistant",
      "Flexible installation",
      "Low maintenance"
    ],
    faqs: [
      { q: "Is it suitable for zoo enclosures?", a: "Yes, fully compatible." },
      { q: "Can it prevent escapes?", a: "Yes, designed for containment." },
      { q: "How long does installation take?", a: "Depends on enclosure size, 1–3 hours." }
    ]
  },

  "invisible-grills-for-balcony": {
    id: "invisible-grills-for-balcony",
    title: "Invisible Grills for Balcony",
    service: [
      "/service/invisible1.webp",
      "/service/invisible2.webp",
      "/service/invisible3.webp",
      "/service/invisible4.webp",
      "/service/invisible5.webp",
      "/service/invisible6.webp"
    ],
    about:
      "Invisible Grills for Balcony provide safety without obstructing the view. Made from high-quality stainless steel cables, they ensure child and pet safety while maintaining aesthetics.",
    highlights: [
      { title: "Unobstructed View", desc: "Transparent stainless steel cables." },
      { title: "High Safety", desc: "Prevents accidental falls." },
      { title: "Professional Installation", desc: "Expertly installed for durability." }
    ],
    whyChooseUs: [
      "10+ Years Experience",
      "Certified Installers",
      "Premium Materials",
      "Fast Installation",
      "Custom Sizes Available",
      "Lifetime Support"
    ],
    features: [
      "Durable stainless steel cables",
      "Child & pet safe",
      "Weather-resistant",
      "Low maintenance",
      "Modern aesthetic"
    ],
    faqs: [
      { q: "Will it block the view?", a: "No, designed to be nearly invisible." },
      { q: "Is it safe for children?", a: "Yes, fully child-proof." },
      { q: "How long does installation take?", a: "1–2 hours per balcony." }
    ]
  },

  "invisible-grills-for-windows": {
    id: "invisible-grills-for-windows",
    title: "Invisible Grills for Windows",
    service: [
      "/service/invisible37.webp",
      "/service/invisible35.webp",
      "/service/invisible41.webp",
      "/service/invisible42.webp",
      "/service/invisible36.webp"
    ],
    about:
      "Invisible Grills for Windows offer a secure solution for high-rise apartments and homes without compromising the view. Durable and corrosion-resistant.",
    highlights: [
      { title: "Safe & Secure", desc: "Prevents accidental falls." },
      { title: "Invisible Design", desc: "Doesn’t obstruct view." },
      { title: "Durable Material", desc: "Weather & corrosion-resistant." }
    ],
    whyChooseUs: [
      "Certified Installers",
      "10+ Years Experience",
      "Custom Sizes",
      "Quick Installation",
      "Lifetime Support",
      "Premium Materials"
    ],
    features: [
      "High-strength stainless steel cables",
      "Safe for children & pets",
      "Corrosion & UV-resistant",
      "Low maintenance",
      "Modern and sleek"
    ],
    faqs: [
      { q: "Will it obstruct natural light?", a: "No, it’s nearly invisible." },
      { q: "Is it suitable for high-rise?", a: "Yes, designed for high-rise windows." },
      { q: "How long is the warranty?", a: "1 year standard warranty." }
    ]
  },

  "stainless-steel-invisible-grills": {
    id: "stainless-steel-invisible-grills",
    title: "Stainless Steel Invisible Grills",
    service: [
      "/service/invisible7.webp",
      "/service/invisible8.webp",
      "/service/invisible9.webp",
      "/service/invisible10.webp",
      "/service/invisible11.webp",
      "/service/invisible39.webp"
    ],
    about:
      "Stainless Steel Invisible Grills combine elegance with strength. Ideal for balconies, windows, and terraces, they offer maximum protection with minimal visibility.",
    highlights: [
      { title: "Premium Material", desc: "High-grade stainless steel." },
      { title: "Safe & Durable", desc: "Child, pet, and weather safe." },
      { title: "Professional Setup", desc: "Installed by experienced team." }
    ],
    whyChooseUs: [
      "10+ Years Experience",
      "Certified Installers",
      "Custom Sizes",
      "Fast & Safe Installation",
      "Lifetime Support",
      "High-Quality Materials"
    ],
    features: [
      "Durable & strong cables",
      "Child & pet safety",
      "Weather-resistant",
      "Low maintenance",
      "Sleek design"
    ],
    faqs: [
      { q: "Are cables strong enough?", a: "Yes, tested for high strength." },
      { q: "Will it rust?", a: "No, corrosion-resistant stainless steel." },
      { q: "How long does installation take?", a: "1–2 hours per balcony/window." }
    ]
  },

  "balcony-grill-safety-nets": {
    id: "balcony-grill-safety-nets",
    title: "Balcony Grill Safety Nets",
    service: [
      "/service/invisible12.webp",
      "/service/invisible13.webp",
      "/service/invisible14.webp",
      "/service/invisible15.webp",
      "/service/invisible34.webp",
      "/service/invisible40.webp"
    ],
    about:
      "Balcony Grill Safety Nets provide a strong barrier for children, pets, and birds while maintaining an open view. Durable and long-lasting protection for all balcony types.",
    highlights: [
      { title: "Child & Pet Safe", desc: "Prevents accidents effectively." },
      { title: "Durable Mesh", desc: "UV & weather-resistant." },
      { title: "Professional Installation", desc: "Quick and precise setup." }
    ],
    whyChooseUs: [
      "10+ Years Experience",
      "Certified Installers",
      "Custom Sizes Available",
      "Fast Installation",
      "Lifetime Support",
      "High-Quality Materials"
    ],
    features: [
      "Durable & flexible mesh",
      "Safe for children & pets",
      "Weather & UV-resistant",
      "Low maintenance",
      "High-rise compatible"
    ],
    faqs: [
      { q: "Can it withstand heavy weight?", a: "Yes, tested for durability." },
      { q: "Is it pet-friendly?", a: "Yes, completely safe." },
      { q: "How long is installation?", a: "1–2 hours per balcony." }
    ]
  },

  "invisible-mesh-nets": {
    id: "invisible-mesh-nets",
    title: "Invisible Mesh Nets",
    service: [
      "/service/invisible16.webp",
      "/service/invisible17.webp",
      "/service/invisible18.webp",
      "/service/invisible19.webp",
      "/service/invisible43.webp"
    ],
    about:
      "Invisible Mesh Nets offer protection without blocking the view. Ideal for balconies, windows, and terraces, they prevent accidental falls and intrusion.",
    highlights: [
      { title: "Transparent Protection", desc: "Minimal visual impact." },
      { title: "Strong & Durable", desc: "UV & weather-resistant mesh." },
      { title: "Expert Installation", desc: "Fast and precise setup." }
    ],
    whyChooseUs: [
      "10+ Years Experience",
      "Certified Installers",
      "Custom Sizes Available",
      "Lifetime Support",
      "Fast Installation",
      "Premium Materials"
    ],
    features: [
      "Durable & strong mesh",
      "Safe for children & pets",
      "Weather-resistant",
      "Low maintenance",
      "High-rise compatible"
    ],
    faqs: [
      { q: "Will it block view?", a: "No, designed to be almost invisible." },
      { q: "Is it suitable for pets?", a: "Yes, safe for all pets." },
      { q: "Installation duration?", a: "30–60 minutes per balcony/window." }
    ]
  },

  "invisible-grills-for-high-rise": {
    id: "invisible-grills-for-high-rise",
    title: "Invisible Grills for High Rise",
    service: [
      "/service/invisible20.webp",
      "/service/invisible21.webp",
      "/service/invisible22.webp",
      "/service/invisible23.webp",
      "/service/invisible34.webp"
    ],
    about:
      "Invisible Grills for High Rise apartments provide safety for children, pets, and residents while maintaining an unobstructed view. Strong, durable, and visually appealing.",
    highlights: [
      { title: "High-Rise Safety", desc: "Prevents accidental falls." },
      { title: "Durable Material", desc: "Stainless steel cables." },
      { title: "Professional Setup", desc: "Installed by experts." }
    ],
    whyChooseUs: [
      "10+ Years Experience",
      "Certified Installers",
      "Fast Installation",
      "Custom Sizes Available",
      "Lifetime Support",
      "Premium Materials"
    ],
    features: [
      "Durable stainless steel cables",
      "Child & pet safe",
      "Weather & UV-resistant",
      "Low maintenance",
      "Sleek modern design"
    ],
    faqs: [
      { q: "Is it safe for balconies?", a: "Yes, fully secure." },
      { q: "How long does installation take?", a: "1–2 hours per unit." },
      { q: "Does it block view?", a: "No, designed to be invisible." }
    ]
  },

  "transparent-balcony-nets": {
    id: "transparent-balcony-nets",
    title: "Transparent Balcony Nets",
    service: [
      "/service/invisible24.webp",
      "/service/invisible25.webp",
      "/service/invisible26.webp",
      "/service/invisible27.webp",
      "/service/invisible33.webp",
      "/service/invisible44.webp"
    ],
    about:
      "Transparent Balcony Nets provide safety while maintaining clear views. Ideal for high-rise buildings, terraces, and balconies. Durable, weather-resistant, and child-friendly.",
    highlights: [
      { title: "Clear View", desc: "Minimal visual obstruction." },
      { title: "Child & Pet Safe", desc: "Prevents accidents." },
      { title: "Durable Material", desc: "UV & weather-resistant." }
    ],
    whyChooseUs: [
      "10+ Years Experience",
      "Certified Installers",
      "Custom Sizes Available",
      "Fast Installation",
      "Lifetime Support",
      "Premium Materials"
    ],
    features: [
      "Transparent & strong mesh",
      "Safe for children & pets",
      "Durable & weather-resistant",
      "Low maintenance",
      "High-rise compatible"
    ],
    faqs: [
      { q: "Will it block view?", a: "No, designed to be transparent." },
      { q: "Is it child-friendly?", a: "Yes, fully safe." },
      { q: "Installation time?", a: "1–2 hours per balcony." }
    ]
  },

  "custom-invisible-grill-designs": {
    id: "custom-invisible-grill-designs",
    title: "Custom Invisible Grill Designs",
    service: [
      "/service/invisible28.webp",
      "/service/invisible29.webp",
      "/service/invisible30.webp",
      "/service/invisible31.webp",
      "/service/invisible32.webp"
    ],
    about:
      "Custom Invisible Grill Designs allow you to tailor grills according to your space, aesthetic preferences, and safety requirements. Fully professional and safe.",
    highlights: [
      { title: "Custom Design", desc: "Tailored to your space and needs." },
      { title: "Premium Material", desc: "High-grade stainless steel cables." },
      { title: "Expert Installation", desc: "Professional setup for safety & durability." }
    ],
    whyChooseUs: [
      "10+ Years Experience",
      "Certified Installers",
      "Customizable Sizes",
      "Fast Installation",
      "Lifetime Support",
      "Premium Materials"
    ],
    features: [
      "Tailored & strong mesh",
      "Child & pet safe",
      "Weather & UV-resistant",
      "Low maintenance",
      "Sleek modern design"
    ],
    faqs: [
      { q: "Can I customize size?", a: "Yes, fully customizable." },
      { q: "Is it safe for pets?", a: "Yes, fully safe." },
      { q: "How long for installation?", a: "1–3 hours depending on size." }
    ]
  },
  "parking-lot-nets": {
    id: "parking-lot-nets",
    title: "Parking Lot Nets",
    service: [
      "/service/parking-1.webp",
      "/service/parking2.webp",
      "/service/parking3.webp",
      "/service/parking4.webp"
    ],
    about:
      "Parking Lot Nets provide protection from debris, birds, and environmental hazards. Ensures safety for vehicles and pedestrians while being durable and weather-resistant.",
    highlights: [
      { title: "Durable Materials", desc: "UV & weather-resistant mesh." },
      { title: "Safety Focused", desc: "Prevents debris and bird interference." },
      { title: "Expert Installation", desc: "Installed by professionals." }
    ],
    whyChooseUs: [
      "10+ Years Experience",
      "Certified Installers",
      "Fast Installation",
      "Custom Sizes",
      "Lifetime Support",
      "High-Quality Materials"
    ],
    features: [
      "Durable & flexible mesh",
      "Weather-resistant",
      "Protects vehicles & pedestrians",
      "Low maintenance",
      "High-strength construction"
    ],
    faqs: [
      { q: "Can it handle heavy debris?", a: "Yes, designed for parking lots." },
      { q: "Is installation quick?", a: "Yes, completed in a few hours." },
      { q: "Maintenance required?", a: "Minimal, weather-resistant materials." }
    ]
  },

  "swimming-pool-safety-nets": {
    id: "swimming-pool-safety-nets",
    title: "Swimming Pool Safety Nets",
    service: [
      "/service/sp.png",
      "/service/pool2.webp",
      "/service/pool3.webp",
      "/service/pool4.webp"
    ],
    about:
      "Swimming Pool Safety Nets ensure child and pet safety by preventing accidental falls. Durable, corrosion-resistant materials suitable for indoor and outdoor pools.",
    highlights: [
      { title: "Child & Pet Safe", desc: "Prevents accidental falls into pool." },
      { title: "Durable Material", desc: "UV & corrosion-resistant mesh." },
      { title: "Professional Setup", desc: "Installed safely and securely." }
    ],
    whyChooseUs: [
      "Certified Installers",
      "10+ Years Experience",
      "Fast Installation",
      "Custom Sizes",
      "Lifetime Support",
      "Premium Materials"
    ],
    features: [
      "Safe for children & pets",
      "Durable & weather-resistant",
      "Low maintenance",
      "Strong mesh for pool protection",
      "Custom-fit for any pool size"
    ],
    faqs: [
      { q: "Will it support adult weight?", a: "Yes, designed to hold safety weight limits." },
      { q: "Is it UV-resistant?", a: "Yes, UV and corrosion-resistant materials." },
      { q: "Installation duration?", a: "1–2 hours depending on pool size." }
    ]
  },

  "terrace-covering-nets": {
    id: "terrace-covering-nets",
    title: "Terrace Covering Nets",
    service: [
      "/service/open-area-6.webp",
      "/service/open-area.webp",
      "/service/open-area-3.webp",
      "/service/open-area-5.webp"
    ],
    about:
      "Terrace Covering Nets provide protection from birds, debris, and weather exposure. Strong, durable, and UV-resistant, ensuring terrace safety and cleanliness.",
    highlights: [
      { title: "Full Coverage", desc: "Protects entire terrace area." },
      { title: "Durable Material", desc: "UV & weather-resistant mesh." },
      { title: "Professional Installation", desc: "Installed by certified experts." }
    ],
    whyChooseUs: [
      "10+ Years Experience",
      "Certified Installers",
      "Custom Sizes Available",
      "Fast Installation",
      "Lifetime Support",
      "High-Quality Materials"
    ],
    features: [
      "Durable & strong mesh",
      "Protects terrace from birds & debris",
      "Weather-resistant",
      "Low maintenance",
      "Custom-fit for terraces"
    ],
    faqs: [
      { q: "Will it withstand heavy rain?", a: "Yes, designed to be weatherproof." },
      { q: "Is installation fast?", a: "Yes, typically within 1–2 hours." },
      { q: "Maintenance required?", a: "Minimal, easy to clean mesh." }
    ]
  },

  "warehouse-dust-nets": {
    id: "warehouse-dust-nets",
    title: "Warehouse Dust Nets",
    service: [
      "/service/warehouse-1.png",
      "/service/warehouse-2.png",
    ],
    about:
      "Warehouse Dust Nets protect stored goods from dust, debris, and environmental contaminants. Made from durable, UV-stabilized, and low-maintenance materials.",
    highlights: [
      { title: "Dust Protection", desc: "Keeps warehouse clean and safe." },
      { title: "Durable Material", desc: "UV & weather-resistant mesh." },
      { title: "Professional Installation", desc: "Installed quickly by experts." }
    ],
    whyChooseUs: [
      "10+ Years Experience",
      "Certified Installers",
      "Fast Installation",
      "Custom Sizes",
      "Lifetime Support",
      "Premium Materials"
    ],
    features: [
      "Durable & strong mesh",
      "UV & weather-resistant",
      "Protects goods from dust & debris",
      "Low maintenance",
      "Custom-fit for warehouses"
    ],
    faqs: [
      { q: "Can it cover large warehouses?", a: "Yes, fully scalable." },
      { q: "Is it weather-resistant?", a: "Yes, UV and corrosion-resistant." },
      { q: "Maintenance needed?", a: "Minimal, easy to clean." }
    ]
  },

  "solar-panel-bird-protection": {
    id: "solar-panel-bird-protection",
    title: "Solar Panel Bird Protection",
    service: [
      "/service/open-area-1.webp",
      "/service/open-area-2.webp",
      "/service/open-area-3.webp",
      "/service/open-area-4.webp"
    ],
    about:
      "Solar Panel Bird Protection Nets prevent birds from nesting under panels, ensuring efficient energy production and panel longevity. Durable, UV-resistant materials.",
    highlights: [
      { title: "Protect Panels", desc: "Prevents bird nesting & droppings." },
      { title: "Durable Material", desc: "UV & weather-resistant mesh." },
      { title: "Professional Installation", desc: "Fast & secure setup." }
    ],
    whyChooseUs: [
      "10+ Years Experience",
      "Certified Installers",
      "Fast Installation",
      "Custom Sizes Available",
      "Lifetime Support",
      "Premium Materials"
    ],
    features: [
      "Protects solar panels from birds",
      "Durable & strong mesh",
      "UV & weather-resistant",
      "Low maintenance",
      "Custom-fit for panels"
    ],
    faqs: [
      { q: "Will it reduce energy efficiency?", a: "No, designed to allow sunlight." },
      { q: "Is it weatherproof?", a: "Yes, UV & corrosion-resistant." },
      { q: "Installation duration?", a: "1–2 hours per installation." }
    ]
  },

  "school-playground-nets": {
    id: "school-playground-nets",
    title: "School Playground Nets",
    service: [
      "/service/spg.png",
      "/service/spg-2.png",
      "/service/custom.webp",
      "/service/event-1.webp"
    ],
    about:
      "School Playground Nets ensure safety of children by preventing balls, birds, and debris from leaving the playground. Durable, UV-resistant materials for long-lasting protection.",
    highlights: [
      { title: "Child Safety", desc: "Prevents accidents and stray balls." },
      { title: "Durable Material", desc: "UV & weather-resistant mesh." },
      { title: "Professional Installation", desc: "Installed quickly and securely." }
    ],
    whyChooseUs: [
      "Certified Installers",
      "10+ Years Experience",
      "Custom Sizes",
      "Fast Installation",
      "Lifetime Support",
      "High-Quality Materials"
    ],
    features: [
      "Durable & strong mesh",
      "Child & pet safe",
      "Weather-resistant",
      "Low maintenance",
      "Custom-fit for playgrounds"
    ],
    faqs: [
      { q: "Can it handle heavy impact?", a: "Yes, designed for playground use." },
      { q: "Is maintenance required?", a: "Minimal, easy to clean." },
      { q: "Installation time?", a: "1–2 hours depending on size." }
    ]
  },

  "factory-shade-nets": {
    id: "factory-shade-nets",
    title: "Factory Shade Nets",
    service: [
      "/service/shade-net.webp",
      "/service/warehouse-2.png",
      "/service/warehouse-1.png",
    ],
    about:
      "Factory Shade Nets provide protection against sun, dust, and debris for workers and machinery. Durable, UV-stabilized materials ensure long-lasting coverage.",
    highlights: [
      { title: "Worker Safety", desc: "Protects workers from sun and debris." },
      { title: "Durable Material", desc: "UV & weather-resistant mesh." },
      { title: "Professional Installation", desc: "Quick & secure setup." }
    ],
    whyChooseUs: [
      "10+ Years Experience",
      "Certified Installers",
      "Custom Sizes",
      "Fast Installation",
      "Lifetime Support",
      "Premium Materials"
    ],
    features: [
      "Durable & UV-stabilized mesh",
      "Protects workers & machinery",
      "Weather-resistant",
      "Low maintenance",
      "Custom-fit for factory areas"
    ],
    faqs: [
      { q: "Can it withstand heavy wind?", a: "Yes, designed for industrial use." },
      { q: "Maintenance needed?", a: "Minimal, easy to clean." },
      { q: "Installation duration?", a: "1–3 hours depending on area." }
    ]
  },

  "event-safety-net-setup": {
    id: "event-safety-net-setup",
    title: "Event Safety Net Setup",
    service: [
      "/service/vent-cover-2.webp",
      "/service/cent-cover-3.webp"
    ],
    about:
      "Event Safety Nets provide temporary safety for public events, preventing accidents and ensuring crowd safety. Quick installation and removal, durable and reusable materials.",
    highlights: [
      { title: "Temporary Safety", desc: "Quick installation for events." },
      { title: "Durable Material", desc: "Reusable and weather-resistant mesh." },
      { title: "Professional Setup", desc: "Installed by certified experts." }
    ],
    whyChooseUs: [
      "Certified Installers",
      "10+ Years Experience",
      "Fast Setup & Removal",
      "Custom Sizes Available",
      "Lifetime Support",
      "Premium Materials"
    ],
    features: [
      "Durable & strong mesh",
      "Temporary or permanent setup",
      "Weather-resistant",
      "Low maintenance",
      "Custom-fit for events"
    ],
    faqs: [
      { q: "Can it handle large crowds?", a: "Yes, designed for public safety." },
      { q: "Is it reusable?", a: "Yes, can be reused multiple times." },
      { q: "Installation time?", a: "1–2 hours depending on area." }
    ]
  },
  "cloth-hangers": {
    id: "cloth-hangers",
    title: "Cloth Hangers",
    service: [
      "/service/cloth-hanger-1.webp",
      "/service/cloth-hanger-2.webp",
      "/service/cloth-hanger-3.webp",
    ],
    about:
      "Our Cloth Hangers are durable, rust-resistant, and designed for both indoor and outdoor use. Ideal for apartments, terraces, and laundry spaces, ensuring clothes dry efficiently and neatly.",
    highlights: [
      { title: "Durable Materials", desc: "Rust-resistant metal and coated finish." },
      { title: "Space-Saving Design", desc: "Optimized for small & large areas." },
      { title: "Easy Installation", desc: "Quick mounting with secure fixtures." }
    ],
    whyChooseUs: [
      "10+ Years Experience",
      "Premium-Grade Materials",
      "Space-Efficient Design",
      "Quick Installation",
      "Lifetime Support",
      "Custom Sizes Available"
    ],
    features: [
      "Durable & rust-resistant",
      "Indoor & outdoor use",
      "Easy to install",
      "Space-saving",
      "Low maintenance"
    ],
    faqs: [
      { q: "Can it hold heavy clothes?", a: "Yes, designed to handle full loads." },
      { q: "Is it suitable for terraces?", a: "Yes, weather-resistant and durable." },
      { q: "Does it require maintenance?", a: "Minimal, wipe clean as needed." }
    ]
  },

  "shade-safety-nets": {
    id: "shade-safety-nets",
    title: "Shade Safety Nets",
    service: [
      "/service/shade-1.webp",
      "/service/shade-2.webp",
      "/service/shade-3.webp",
    ],
    about:
      "Shade Safety Nets provide protection from harsh sunlight, debris, and bird interference for terraces, balconies, and outdoor workspaces. Durable, UV-stabilized, and weather-resistant.",
    highlights: [
      { title: "UV Protection", desc: "Blocks harmful sunlight effectively." },
      { title: "Durable Material", desc: "High-strength mesh for long-lasting use." },
      { title: "Professional Installation", desc: "Installed securely for safety." }
    ],
    whyChooseUs: [
      "10+ Years Experience",
      "Certified Installers",
      "Custom Sizes",
      "Fast Installation",
      "Lifetime Support",
      "Premium Materials"
    ],
    features: [
      "Durable & UV-stabilized mesh",
      "Protects against sun & debris",
      "Weather-resistant",
      "Easy maintenance",
      "Custom-fit for terraces or workspaces"
    ],
    faqs: [
      { q: "Does it withstand heavy sun?", a: "Yes, UV-resistant materials used." },
      { q: "Can it cover large areas?", a: "Yes, custom sizes available." },
      { q: "Maintenance needed?", a: "Minimal, easy to clean mesh." }
    ]
  }
  ,
  "building-covering-safety-nets": {
    "id": "building-covering-safety-nets",
    "title": "Building Covering Safety Nets",
    "service": [
      "/service/building-covering-safety-net.webp",
      "/service/open-area-3.webp",
      "/service/balcony-9.webp",
      "/service/balcony-8.webp",
      "/service/balcony-6.webp",
      "/service/balcony-2.webp"
    ],
    "about": "Building Covering Safety Nets are heavy-duty protective systems designed to shield construction sites, building facades, and renovation projects from falling debris, dust, and unauthorized access. These robust nets ensure safety compliance while allowing natural light and ventilation.",
    "highlights": [
      { "title": "Debris Containment", "desc": "Prevents falling materials during construction." },
      { "title": "Safety Compliance", "desc": "Meets all construction safety regulations." },
      { "title": "All-Weather Protection", "desc": "Withstands heavy rain, wind, and sun exposure." },
      { "title": "Enhanced Security", "desc": "Deters unauthorized entry to construction sites." }
    ],
    "whyChooseUs": [
      "ISO-Certified Materials",
      "Structural Engineering Support",
      "Quick Deployment Teams",
      "Wind-Load Certified",
      "Custom Engineering Solutions",
      "24/7 Emergency Service"
    ],
    "features": [
      "Heavy-duty HDPE/Polypropylene mesh",
      "UV-stabilized & weather-resistant",
      "Fire-retardant options available",
      "Custom sizing for any building",
      "Quick-install tension systems",
      "Minimal visual obstruction",
      "Reusable & durable materials",
      "Dust & debris containment"
    ],
    "faqs": [
      { "q": "What materials are used?", "a": "Premium HDPE/Polypropylene mesh with UV stabilization and weather-resistant coatings." },
      { "q": "How long does installation take?", "a": "Depends on building size; typically 1-3 days for standard structures." },
      { "q": "Can nets withstand monsoon winds?", "a": "Yes, our nets are wind-load certified for up to 120 km/h winds." },
      { "q": "Do you provide fire-retardant nets?", "a": "Yes, we offer Class A fire-retardant options for enhanced safety." },
      { "q": "How do you handle tall buildings?", "a": "We use specialized equipment and certified climbers for high-rise installations." },
      { "q": "What maintenance is required?", "a": "Minimal - occasional visual inspections and cleaning with water spray." },
      { "q": "Are these nets reusable?", "a": "Yes, our nets can be dismantled and reinstalled at different sites." },
      { "q": "Do you provide safety certificates?", "a": "Yes, we provide installation certificates and material test reports." }
    ],
  },
   "duct-area-covering-nets": {
    "id": "duct-area-covering-safety-nets",
    "title": "Duct Area Covering Safety Nets",
    "service": [
      "/service/duct-area.webp",
      "/service/vent-cover-1.webp",
      "/service/window-net-2.webp",
      "/service/window-net-4.webp",
    ],
    "about": "Duct Area Covering Safety Nets provide essential protection for ventilation ducts, exhaust openings, and air conditioning units. These specialized nets prevent debris accumulation, bird nesting, and unauthorized access while maintaining proper airflow and ventilation efficiency.",
    "highlights": [
      { "title": "Airflow Optimized", "desc": "Special mesh design ensures uninterrupted ventilation." },
      { "title": "Bird & Pest Prevention", "desc": "Blocks entry of birds, rodents, and insects effectively." },
      { "title": "Debris Protection", "desc": "Prevents leaves, dust, and foreign objects from entering ducts." },
    ],
    "whyChooseUs": [
      "Custom-Fit Solutions",
      "HVAC-Specialized Team",
      "Quick Installation",
      "Maintenance-Free Design",
      "Aesthetic Integration",
      "10-Year Warranty"
    ],
    "features": [
      "Fine mesh for small particle filtration",
      "Stainless steel/UV-resistant materials",
      "Quick-release mounting systems",
      "Transparent design maintains aesthetics",
      "Easy cleaning access",
      "Fire-retardant options available",
      "Anti-corrosion coatings",
      "Wind-resistant tensioning"
    ],
    "faqs": [
      { "q": "Does it affect ventilation efficiency?", "a": "No, our specially designed mesh allows 85-90% airflow while providing protection." },
      { "q": "How do you install without damaging ducts?", "a": "We use non-invasive mounting systems with rubber gaskets and tension wires." },
      { "q": "Can it withstand monsoon conditions?", "a": "Yes, materials are weather-resistant and designed for year-round durability." },
      { "q": "How often should nets be cleaned?", "a": "Recommended cleaning every 3-6 months depending on location and pollution levels." },
      { "q": "Do you provide custom shapes for odd ducts?", "a": "Yes, we create custom-fitted solutions for any duct shape or size." },
      { "q": "What about fire safety?", "a": "We offer fire-retardant materials that meet building safety codes." },
      { "q": "Can nets be installed on high-rise ducts?", "a": "Yes, our team is equipped with safety gear for high-altitude installations." },
      { "q": "How long does installation take?", "a": "Typically 2-4 hours per duct depending on accessibility and complexity." }
    ],
  }
  // Add more services below similarly...
};
