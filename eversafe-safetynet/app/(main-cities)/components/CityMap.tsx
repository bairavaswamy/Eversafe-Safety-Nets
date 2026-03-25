type Props = {
  cityName: string
  description?: string
}

export default function CityMap({ cityName, description }: Props) {
  return (
    <section className="py-12 px-6 max-w-6xl mx-auto text-center space-y-4">
      <h2 className="text-3xl md:text-4xl font-bold text-yellow-400">
        We Serve All Locations Across {cityName}
      </h2>
      
      {description && (
        <p className="text-gray-300 max-w-3xl mx-auto">
          {description}
        </p>
      )}

      <div className="mt-6 rounded-3xl overflow-hidden shadow-xl border border-gray-700">
        <iframe
          title={`${cityName} service map`}
          src={`https://www.google.com/maps?q=${encodeURIComponent(cityName)}&output=embed`}
          loading="lazy"
          className="w-full h-[350px] md:h-[450px]"
        />
      </div>
    </section>
  )
}