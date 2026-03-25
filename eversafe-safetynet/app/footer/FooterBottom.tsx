"use client";

import Link from "next/link";

export default function FooterBottom() {
  return (
    <div className="border-t border-gray-700 dark:border-gray-600 mt-12 pt-6 text-center text-sm text-gray-500 relative z-10">
      <p>
        © {new Date().getFullYear()} Eversafe Safety Nets. All rights reserved. |
        <Link href="/privacy-policy" className="text-yellow-400 hover:underline ml-1">
          Privacy Policy
        </Link>
      </p>
      <p className="mt-2">
        Designed with ❤️ to protect every home and business —{" "}
        <span className="text-yellow-400 font-medium">EversafeSafetyNets.com</span>
      </p>
    </div>
  );
}
