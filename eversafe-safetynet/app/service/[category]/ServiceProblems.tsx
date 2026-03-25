type Props = {
  serviceName: string;
};

export default function ServiceProblems({ serviceName }: Props) {
  return (
    <section className="mt-12 dark:text-white">
      <h2 className="text-2xl font-bold text-yellow-500">
        Common Problems Solved by {serviceName}
      </h2>

      <ul className="mt-4 space-y-3 opacity-90 leading-relaxed">
        <li>• Birds entering balcony and creating mess</li>
        <li>• Health issues caused by pigeon droppings</li>
        <li>• Difficulty in maintaining clean spaces</li>
        <li>• Safety concerns for children and pets</li>
      </ul>
    </section>
  );
}