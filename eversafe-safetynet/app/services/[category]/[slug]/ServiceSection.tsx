"use client";
import { motion } from "framer-motion";

interface ServiceSectionProps {
  heading: string;
  content: string[] | string;
}

export default function ServiceSection({ heading, content }: ServiceSectionProps) {
  const isList = Array.isArray(content);

  return (
    <section className="my-12">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-6 bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent"
      >
        {heading}
      </motion.h2>

      {/* List or Paragraph */}
      {isList ? (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {content.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {item}
              </p>
            </motion.div>
          ))}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
        >
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            {content}
          </p>
        </motion.div>
      )}
    </section>
  );
}
