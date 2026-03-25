export default function Loading() {
  return (
    <div className="p-6 animate-pulse space-y-6">
      <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/3"></div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-40 bg-gray-300 dark:bg-gray-700 rounded-xl"></div>
        ))}
      </div>
    </div>
  );
}
