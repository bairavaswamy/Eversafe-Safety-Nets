"use client";

import { motion } from "framer-motion";

export default function QuickEnquiry() {
  return (
    <section
      aria-labelledby="quick-enquiry-heading"
      className="max-w-5xl mx-auto mt-16 px-4 relative z-10"
    >
      <div className="bg-[#111] dark:bg-[#161616] border border-gray-800 dark:border-gray-700 rounded-2xl p-8 text-center">
        
        {/* Heading (SEO + Landmark) */}
        <h2
          id="quick-enquiry-heading"
          className="text-2xl font-bold text-yellow-400 mb-6"
        >
          Quick Enquiry
        </h2>

        <form
          method="POST"
          action="#"
          aria-label="Quick enquiry contact form"
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-4"
        >
          {/* Name */}
          <div className="w-full sm:w-[45%] lg:w-[22%] text-left">
            <label
              htmlFor="name"
              className="block text-sm mb-1 text-gray-300"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              aria-required="true"
              className="w-full bg-gray-800 dark:bg-gray-900 border border-gray-700 dark:border-gray-600 rounded-lg px-4 py-2 text-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Your Name"
            />
          </div>

          {/* Phone */}
          <div className="w-full sm:w-[45%] lg:w-[22%] text-left">
            <label
              htmlFor="phone"
              className="block text-sm mb-1 text-gray-300"
            >
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              aria-required="true"
              pattern="[0-9]{10}"
              className="w-full bg-gray-800 dark:bg-gray-900 border border-gray-700 dark:border-gray-600 rounded-lg px-4 py-2 text-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="9876543210"
            />
          </div>

          {/* Message */}
          <div className="w-full sm:w-[45%] lg:w-[22%] text-left">
            <label
              htmlFor="message"
              className="block text-sm mb-1 text-gray-300"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={2}
              required
              aria-required="true"
              className="w-full resize-none bg-gray-800 dark:bg-gray-900 border border-gray-700 dark:border-gray-600 rounded-lg px-4 py-2 text-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Your message..."
            />
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            aria-label="Send enquiry form"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-500 text-black font-semibold py-2 px-6 rounded-lg hover:bg-yellow-400 transition focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            Send
          </motion.button>
        </form>
      </div>
    </section>
  );
}
