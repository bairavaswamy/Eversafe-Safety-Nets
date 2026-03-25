"use client";

import Link from "next/link";
import { serviceCategories } from "./data";

export default function ServicesColumns() {
  return (
    <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
      {serviceCategories.map((category, idx) => (
        <div key={idx}>
          <h4 className="text-lg font-semibold text-yellow-400 mb-3 border-b border-yellow-700 pb-1">
            {category.title}
          </h4>
          <ul className="space-y-2 text-sm">
            {category.links.map((link, i) => (
              <li key={i}>
                <Link
                  href={`/service/${link.toLowerCase().replace(/\s+/g, "-")}`}
                  className="hover:text-yellow-400 transition-colors duration-200"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
