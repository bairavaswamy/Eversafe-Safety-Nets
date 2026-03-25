"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import StickyContactIcons from "@/app/stickyIcons/StickyIcons";

interface FAQ {
  question: string;
  answer: string;
}

export default function FAQSection({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="mt-20 relative z-10">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10 text-center">
        Frequently Asked Questions
      </h2>

      <div className="max-w-6xl mx-auto space-y-5">
        {faqs.map((faq, index) => {
          const open = openIndex === index;

          return (
            <div
              key={index}
              className={`rounded-2xl border overflow-hidden transition-all duration-300 will-change-transform
                ${
                  open
                    ? "border-yellow-500 bg-yellow-50/40 dark:bg-yellow-500/10 shadow-md"
                    : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm"
                }`}
            >
              <button
                onClick={() => setOpenIndex(open ? null : index)}
                className="flex justify-between items-center w-full px-6 py-5 text-left"
              >
                <span className="font-medium text-gray-800 dark:text-gray-100 text-lg">
                  {faq.question}
                </span>
                {open ? (
                  <Minus className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                ) : (
                  <Plus className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                )}
              </button>

              {/* Independent animation container */}
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden`}
                style={{
                  maxHeight: open ? "300px" : "0px",
                }}
              >
                <div className="px-6 pb-5 pt-0 text-gray-700 dark:text-gray-300 leading-relaxed bg-transparent">
                  {faq.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <StickyContactIcons/>
    </section>
  );
}
