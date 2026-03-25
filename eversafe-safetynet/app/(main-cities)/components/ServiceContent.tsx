
import Image from "next/image"

type Props = {
  serviceName: string
  areaName: string
  imageUrl:string
}

export default function ServiceContent({
  serviceName,
  areaName,
  imageUrl
}: Props) {

  return (

    <section className="bg-gradient-to-b from-gray-900 via-gray-950 to-black py-28">

      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-8 text-yellow-400">
          {serviceName} in {areaName}
        </h2>

        {/* ✅ Image */}
            <div className="mb-8 flex justify-center">
      <Image
        src={imageUrl}
        alt={`${serviceName} in ${areaName}`}
        width={400}   // 👈 smaller width
        height={180}
        className="rounded-lg object-cover shadow-md"
      />
    </div>

        <p className="text-gray-300 mb-6 text-lg leading-relaxed">
          Looking for {serviceName.toLowerCase()} in {areaName}? Our team installs
          strong and safe nets for balconies, windows, and open spaces. Many
          families in {areaName} trust our service to keep their homes safe from
          pigeons and accidents.
        </p>

        <p className="text-gray-300 mb-6 text-lg leading-relaxed">
          Our safety nets are made with strong UV protected material. They are
          long lasting and safe for homes and apartments. The nets allow fresh
          air and sunlight while protecting children, pets, and property.
        </p>

        <p className="text-gray-300 mb-6 text-lg leading-relaxed">
          If you are searching for “{serviceName.toLowerCase()} near me” 
          in {areaName}, our technicians can reach your location quickly. We offer
          professional installation at affordable prices.
        </p>

        <h3 className="text-2xl font-semibold text-yellow-400 mt-12 mb-4">
          Professional Installation
        </h3>

        <p className="text-gray-300 mb-6 text-lg leading-relaxed">
          Our installation team measures your balcony or open area carefully.
          The nets are fixed securely so they stay strong for many years. The
          work is clean, quick, and safe for your home.
        </p>

        <h3 className="text-2xl font-semibold text-yellow-400 mt-12 mb-4">
          Safety Nets Near You
        </h3>

        <p className="text-gray-300 mb-6 text-lg leading-relaxed">
          We provide {serviceName.toLowerCase()} services across {areaName}.
          Whether you live in an apartment, villa, or commercial building,
          our team can install safety nets at your location.
        </p>

        <h3 className="text-2xl font-semibold text-yellow-400 mt-12 mb-4">
          Affordable Price and Quick Service
        </h3>

        <p className="text-gray-300 mb-6 text-lg leading-relaxed">
          Our safety nets are affordable and durable. We provide quick
          installation so your balcony or open area becomes safe the same day.
          Contact our team today for a free consultation in {areaName}.
        </p>

      </div>

    </section>
  )
}