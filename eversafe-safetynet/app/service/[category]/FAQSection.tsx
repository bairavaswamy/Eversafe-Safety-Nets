const FAQSection = ({ faqs }: { faqs: { q: string; a: string }[] }) => (
  <section className="mt-12">
    <h2 className="text-2xl font-bold text-yellow-500">FAQs</h2>

    <div className="mt-6 space-y-4">
      {faqs.map((faq, i) => (
        <details
          key={i}
          className="bg-white dark:bg-gray-800 dark:text-white p-5 rounded-xl shadow-md"
        >
          <summary className="cursor-pointer font-semibold text-yellow-500">
            {faq.q}
          </summary>
          <p className="mt-2 opacity-90">{faq.a}</p>
        </details>
      ))}
    </div>
  </section>
);

export default FAQSection;
