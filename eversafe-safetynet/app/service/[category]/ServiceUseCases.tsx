type Props = {
  serviceName: string;
};

export default function ServiceUseCases({ serviceName }: Props) {
  return (
    <section className="mt-12 dark:text-white">
      <h2 className="text-2xl font-bold text-yellow-500">
        Where You Can Use {serviceName}
      </h2>

      <ul className="mt-4 space-y-3 opacity-90 leading-relaxed">
        <li>• Apartment balconies</li>
        <li>• Windows and open spaces</li>
        <li>• High-rise buildings</li>
        <li>• Residential homes and villas</li>
      </ul>
    </section>
  );
}