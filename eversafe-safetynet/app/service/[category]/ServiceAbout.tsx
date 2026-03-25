const ServiceAbout = ({ title, text }: { title: string; text: string }) => (
  <section className="mt-12 dark:text-white">
    <h2 className="text-2xl font-bold text-yellow-500">{title}</h2>
    <p className="mt-4 leading-relaxed opacity-90">{text}</p>
  </section>
);

export default ServiceAbout;
