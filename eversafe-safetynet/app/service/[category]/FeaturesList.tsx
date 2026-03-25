const FeaturesList = ({ list }: { list: string[] }) => (
  <section className="mt-12 dark:text-white">
    <h2 className="text-2xl font-bold text-yellow-500">Features</h2>

    <ul className="mt-4 space-y-3 list-disc list-inside opacity-90">
      {list.map((f, i) => (
        <li key={i}>{f}</li>
      ))}
    </ul>
  </section>
);

export default FeaturesList;
