const WhyChooseUs = ({ points }: { points: string[] }) => (
  <section className="mt-12 dark:text-white">
    <h2 className="text-2xl font-bold text-yellow-500">Why Choose Us?</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
      {points.map((point, i) => (
        <div
          key={i}
          className="flex items-start gap-3 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md"
        >
          <span className="text-yellow-500 text-2xl">✔</span>
          <p className="opacity-90">{point}</p>
        </div>
      ))}
    </div>
  </section>
);

export default WhyChooseUs;
