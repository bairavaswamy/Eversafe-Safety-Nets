"use client";
import { motion } from "framer-motion";

const highlights = [
  {
    title: "10+ Years of Expertise",
    description:
      "Our experienced professionals understand safety at every level — from residential to large-scale industrial systems.",
  },
  {
    title: "Trusted by 100+ Clients",
    description:
      "We proudly serve businesses, communities, and homes across India with trust, reliability, and dedication.",
  },
  {
    title: "Innovation & Reliability",
    description:
      "Our solutions blend modern technology with time-tested reliability, ensuring long-lasting performance.",
  },
  {
    title: "24/7 Support & Monitoring",
    description:
      "Round-the-clock assistance so that you’re never left without help when you need it most.",
  },
  {
    title: "Customer First Approach",
    description:
      "We design every solution with the end-user in mind — intuitive, transparent, and easy to manage.",
  },
  {
    title: "Fast Response Time",
    description:
      "From consultation to installation, our team responds quickly and efficiently to keep your project on track.",
  },
  {
    title: "Safety You Can Trust",
    description:
      "Every system is tested and verified to meet top-tier safety and compliance standards.",
  },
  {
    title: "Affordable & Transparent Pricing",
    description:
      "We believe premium solutions shouldn’t come with hidden costs — you always know what you pay for.",
  },
  {
    title: "Eco-Friendly Operations",
    description:
      "Our processes and materials are designed to minimize waste and promote sustainable safety solutions.",
  },
];

const WhyOurSolutionsMatter = () => {
  return (
    <section className="relative py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-800 dark:text-gray-100"
          >
            Why Our <span className="text-yellow-400">Solutions Matter</span>
          </motion.h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            From the very first call to after-service support, our commitment is simple — 
            to protect, empower, and bring peace of mind through reliable safety solutions.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-yellow-400/40 p-6 rounded-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-lg font-semibold text-gray-800 dark:text-yellow-400 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Call-to-Action */}
        <div className="text-center mt-16">
          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="px-8 py-3 rounded-full border border-gray-700 dark:border-gray-400 text-gray-900 dark:text-white hover:bg-yellow-400 hover:text-gray-900 font-medium transition-all duration-300"
          >
            Learn More About Our Mission
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default WhyOurSolutionsMatter;
