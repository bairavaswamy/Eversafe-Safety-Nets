import Link from "next/link";
import { links, megaServices } from "@/app/data/NavLinks";

export default function DesktopMenu() {
  return (
    <ul
      className="
        hidden md:flex
        items-center
        justify-center
        font-medium
        relative
        gap-2 md:gap-3 lg:gap-4 xl:gap-6
        flex-nowrap
        min-w-0
      "
    >
      {links.map((link) => {
        /* ================= SERVICES MEGA MENU ================= */
        if (link.label === "SERVICES") {
          return (
            <li key={link.href} className="relative group">
              
              {/* SERVICES BUTTON */}
              <button
                className="
                  px-2 md:px-3 lg:px-4
                  py-1.5 md:py-2
                  text-sm md:text-base lg:text-base xl:text-lg
                  font-semibold
                  whitespace-nowrap
                  text-gray-800 dark:text-gray-100
                  hover:text-yellow-500 dark:hover:text-yellow-400
                  transition-colors duration-200
                  rounded-md
                "
                aria-haspopup="true"
              >
                {link.label}
              </button>

              {/* MEGA MENU */}
              <div
                className="
                  absolute left-1/2 -translate-x-1/2 top-full mt-3

                  /* Width control */
                  w-[95vw]
                  max-w-[600px]
                  md:max-w-[800px]
                  lg:max-w-[900px]
                  xl:max-w-[1100px]

                  /* Grid layout */
                  grid
                  grid-cols-1
                  sm:grid-cols-2
                  lg:grid-cols-2
                  xl:grid-cols-3

                  gap-5
                  p-5 md:p-6 lg:p-7

                  bg-white dark:bg-[#0b132b]
                  text-gray-800 dark:text-gray-100
                  rounded-xl
                  shadow-2xl
                  border border-yellow-400/20 dark:border-gray-700/60

                  opacity-0 invisible scale-95
                  group-hover:opacity-100 group-hover:visible group-hover:scale-100
                  transition-all duration-200
                  z-50

                  max-h-[80vh] overflow-y-auto
                  lg:max-h-none lg:overflow-visible
                "
                role="menu"
                aria-label="Services Menu"
              >
                {Object.entries(megaServices).map(
                  ([category, { description, items }]) => (
                    <div key={category}>
                      
                      {/* CATEGORY TITLE */}
                      <h3
                        className="
                          font-semibold
                          text-base lg:text-lg
                          mb-1
                          text-yellow-600 dark:text-yellow-400
                        "
                      >
                        {category}
                      </h3>

                      {/* DESCRIPTION */}
                      <p
                        className="
                          hidden sm:block
                          text-sm
                          text-gray-600 dark:text-gray-400
                          mb-2
                          line-clamp-2
                        "
                      >
                        {description}
                      </p>

                      {/* LINKS */}
                      <ul className="space-y-1">
                        {items.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              title={item.title}
                              className="
                                block
                                px-2 py-1.5
                                rounded-md
                                text-sm md:text-base
                                text-gray-800 dark:text-gray-200
                                hover:text-yellow-500
                                dark:hover:text-yellow-400
                                hover:bg-yellow-50
                                dark:hover:bg-[#1b2345]
                                transition-colors duration-200
                                truncate
                              "
                            >
                              {item.text}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                )}
              </div>
            </li>
          );
        }

        /* ================= NORMAL LINKS ================= */
        return (
          <li key={link.href}>
            <Link
              href={link.href}
              className="
                block
                px-2 md:px-3 lg:px-4
                py-1.5 md:py-2
                text-sm md:text-base lg:text-base xl:text-lg
                font-semibold
                whitespace-nowrap
                text-gray-800 dark:text-gray-100
                hover:text-yellow-500
                dark:hover:text-yellow-400
                transition-colors duration-200
                rounded-md
              "
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
