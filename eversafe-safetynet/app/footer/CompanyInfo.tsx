"use client";

import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaAward,
  FaShieldAlt,
  FaRegHandshake,
  FaCertificate,
} from "react-icons/fa";
import { quickLinks, whyChoose, cities } from "./data";

export default function CompanyInfo() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-yellow-400 mb-4">
        Eversafe Safety Nets
      </h2>
      <p className="text-gray-400 dark:text-gray-300 leading-relaxed mb-6 text-[15px] max-w-md">
        Eversafe Safety Nets is a trusted provider of premium-quality safety
        solutions for residential, commercial, and industrial needs.
      </p>

      <div className="space-y-3 text-gray-400 text-sm">
        <p className="flex items-center gap-3">
          <FaMapMarkerAlt className="text-yellow-400" /> Bengaluru, Karnataka, India
        </p>
        <p className="flex items-center gap-3">
          <FaPhoneAlt className="text-yellow-400" /> +91 8074838518
        </p>
        <p className="flex items-center gap-3">
          <FaEnvelope className="text-yellow-400" /> eversafesafetynets@gmail.com
        </p>
      </div>

      {/* Social Icons */}
      <div className="flex gap-5 mt-6">
  {[
    { Icon: FaFacebook, label: "Visit our Facebook page" },
    { Icon: FaInstagram, label: "Visit our Instagram page" },
    { Icon: FaTwitter, label: "Visit our Twitter page" },
    { Icon: FaYoutube, label: "Visit our YouTube channel" },
  ].map(({ Icon, label }, i) => (
    <Link
      key={i}
      href="#"
      aria-label={label}
      className="hover:text-yellow-400 transition-colors"
    >
      <Icon size={22} />
    </Link>
  ))}
</div>


      {/* Trust Badges */}
      <div className="flex flex-wrap gap-4 mt-8 text-gray-400 text-sm">
        <div className="flex items-center gap-2">
          <FaAward className="text-yellow-400" /> <span>10+ Years Experience</span>
        </div>
        <div className="flex items-center gap-2">
          <FaShieldAlt className="text-blue-400" /> <span>ISO Certified</span>
        </div>
        <div className="flex items-center gap-2">
          <FaRegHandshake className="text-green-400" /> <span>5000+ Clients</span>
        </div>
        <div className="flex items-center gap-2">
          <FaCertificate className="text-purple-400" /> <span>Quality Guarantee</span>
        </div>
      </div>

      {/* Quick Links */}
      <div className="mt-10">
        <h3 className="text-lg font-semibold text-yellow-400 mb-3 border-b border-yellow-700 pb-1">
          Quick Links
        </h3>
        <ul className="grid grid-cols-2 gap-2 text-sm">
          {quickLinks.map((link, i) => (
            <li key={i}>
              <Link href={link.href} className="hover:text-yellow-400 transition-colors">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Why Choose Us */}
      <div className="mt-8 border-t border-gray-800 pt-4 space-y-3">
      <h3 className="text-lg font-semibold text-yellow-400 mb-2">
        Why Choose Eversafe?
      </h3>
      <ul className="space-y-2 text-sm text-gray-400 dark:text-gray-300">
        {whyChoose.map((item, i) => {
          const Icon = item.icon; // ✅ dynamically assign icon component
          return (
            <li key={i} className="flex items-start gap-3">
              <Icon className={item.color} /> {/* ✅ JSX here */}
              <span>{item.text}</span>
            </li>
          );
        })}
      </ul>
    </div>

          <div className="mt-8 border-t border-gray-800 dark:border-gray-700 pt-4">
            <h3 className="text-lg font-semibold text-yellow-400 mb-2">
              Areas We Serve
            </h3>

            <ul className="flex flex-wrap gap-2 mt-3 text-sm text-gray-400">
              {cities.map((city, i) => {
                const slug = city.toLowerCase().replace(/\s+/g, "-");

                return (
                  <li key={i}>
                    <Link
                      href={`/areas/${slug}`}
                      className="bg-gray-800 dark:bg-gray-900 border border-gray-700 px-3 py-1 rounded-full 
                                hover:text-yellow-400 hover:border-yellow-400 transition inline-block"
                    >
                      {city}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

      {/* Partner Websites */}
      <div className="mt-8 border-t border-gray-800 dark:border-gray-700 pt-4">
        <h3 className="text-lg font-semibold text-yellow-400 mb-3">
          Our Partner Websites
        </h3>
        <div className="flex items-center gap-3">
          <img
            src="/images/servani-logo.webp"
            alt="Servani Safety Nets"
            className="w-8 h-8 object-contain"
          />
          <Link
            href="https://www.servanisafetynets.com"
            target="_blank"
            className="hover:text-yellow-400 transition-colors font-medium"
          >
            ServaniSafetyNets.com
          </Link>
        </div>
      </div>
    </div>
  );
}
