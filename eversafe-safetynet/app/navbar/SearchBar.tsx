"use client";

import { useState, useRef, useEffect} from "react";
import { useRouter } from "next/navigation";
import { servicesData } from "@/app/service/[category]/data/serviceData";
import { cities } from "@/app/footer/data";
import { cityAreas } from "@/app/areas/[city]/areas";

interface SearchResult {
  type: "service" | "city" | "area";
  slug: string;
  title: string;
  city?: string;
}

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const listboxId = "services-search-listbox";

  /* ---------------- SEARCH ---------------- */

  const handleSearch = (value: string) => {
    if (!value.trim()) {
      setResults([]);
      return;
    }
        const lower = value.toLowerCase();
          const combinedResults: SearchResult[] = [];

          /* ---------------- SERVICES ---------------- */
          Object.keys(servicesData).forEach((slug) => {
            const title = servicesData[slug].title;

            if (title.toLowerCase().includes(lower)) {
              combinedResults.push({
                type: "service",
                slug,
                title,
              });
            }
          });

          /* ---------------- CITIES ---------------- */
          cities.forEach((city) => {
            if (city.toLowerCase().includes(lower)) {
              combinedResults.push({
                type: "city",
                slug: city.toLowerCase().replace(/\s+/g, "-"),
                title: `Safety Nets in ${city}`,
              });
            }
          });

          /* ---------------- AREAS ---------------- */
          Object.keys(cityAreas).forEach((city) => {
            cityAreas[city].forEach((area: string) => {
              if (area.toLowerCase().includes(lower)) {
                combinedResults.push({
                  type: "area",
                  slug: area.toLowerCase().replace(/\s+/g, "-"),
                  title: `${area} - ${city}`,
                  city,
                });
              }
            });
          });

          setResults(combinedResults.slice(0, 10));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setActiveIndex(-1);

    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      handleSearch(value);
    }, 300);
  };

  /* ---------------- SELECT ---------------- */

  const handleSelect = (item: SearchResult) => {
  if (item.type === "service") {
    router.push(`/service/${item.slug}`);
  }

  if (item.type === "city") {
    router.push(`/areas/${item.slug}`);
  }

  if (item.type === "area" && item.city) {
    router.push(`/areas/${item.city}/${item.slug}`);
  }

  setQuery("");
  setResults([]);
  setActiveIndex(-1);
};

  /* ---------------- KEYBOARD ---------------- */

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!results.length) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => Math.min(prev + 1, results.length - 1));
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => Math.max(prev - 1, 0));
    }

    if (e.key === "Enter" && activeIndex >= 0) {
      e.preventDefault();
      handleSelect(results[activeIndex]);
    }

    if (e.key === "Escape") {
      setResults([]);
    }
  };

  /* ---------------- FIX ACTIVE INDEX ---------------- */

  useEffect(() => {
    if (activeIndex >= results.length) {
      setActiveIndex(results.length - 1);
    }
  }, [results, activeIndex]);

  /* ---------------- UI ---------------- */

  return (
    <search
      aria-label="Search services"
      className="relative w-full max-w-sm"
    >
      {/* Hidden label for accessibility */}
      <label htmlFor="services-search" className="sr-only">
        Search our services
      </label>

      <input
        ref={inputRef}
        id="services-search"
        type="text"
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        autoComplete="off"
        placeholder="Search services..."
        role="combobox"
        aria-expanded={results.length > 0}
        aria-controls={listboxId}
        aria-autocomplete="list"
        aria-activedescendant={
          activeIndex >= 0 ? `${listboxId}-option-${activeIndex}` : undefined
        }
        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-[#111b3a] text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
      />

      {results.length > 0 && (
        <ul
          id={listboxId}
          role="listbox"
          className="absolute bg-white dark:bg-[#111b3a] border border-gray-200 dark:border-gray-700 w-full mt-1 rounded shadow-lg max-h-60 overflow-auto z-50"
        >
          {results.map((service, index) => (
            <li
              key={service.slug}
              id={`${listboxId}-option-${index}`}
              role="option"
              aria-selected={index === activeIndex}
              onMouseDown={() => handleSelect(service)}
              className={`cursor-pointer px-3 py-2 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-800 ${
                index === activeIndex
                  ? "bg-blue-200 dark:bg-blue-700"
                  : ""
              }`}
            >
              {service.title}
            </li>
          ))}
        </ul>
      )}
    </search>
  );
}
