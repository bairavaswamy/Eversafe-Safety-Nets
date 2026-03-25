const Highlights = ({ items }: { items: { title: string; desc: string }[] }) => {
  return (
    <section className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
      {items.map((item, i) => (
        <div
          key={i}
          className="bg-white dark:text-white dark:bg-gray-800 p-5 rounded-2xl shadow-lg"
        >
          <h2 className="text-xl font-semibold text-yellow-500">
            {item.title}
          </h2>
          <p className="mt-2 text-sm opacity-80">{item.desc}</p>
        </div>
      ))}
    </section>
  );
};

export default Highlights;
