type Props = {
  serviceName: string;
};

export default function ServiceMaintenance({ serviceName }: Props) {
  return (
    <section className="mt-12 dark:text-white">
      <h2 className="text-2xl font-bold text-yellow-500">
        Maintenance & Durability
      </h2>

      <p className="mt-4 leading-relaxed opacity-90">
        {serviceName} requires very little maintenance. The materials used are weather-resistant and long-lasting, ensuring durability for years. 
        Regular cleaning is enough to keep the nets in good condition.
      </p>
    </section>
  );
}