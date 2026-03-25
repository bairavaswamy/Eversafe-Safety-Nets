import Image from "next/image";

type Props = {
  serviceName: string;
  areaName: string;
  heroImage: string; // dynamic background image
};

export default function Hero({ serviceName, areaName, heroImage }: Props) {
  return (
    <section className="relative h-[90vh] md:h-[100vh] w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt={`${serviceName} in ${areaName}`}
          fill
          className="object-cover object-center scale-100 brightness-90 contrast-110"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center items-center md:items-start text-center md:text-left h-full px-6 max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-yellow-400 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
          {serviceName}
          <span className="block text-gray-100 text-5xl md:text-2xl mt-2">
            in {areaName}
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-50 max-w-3xl leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
          Premium {serviceName.toLowerCase()} in {areaName}. Durable,
          UV-resistant safety nets designed to protect balconies, windows, and open spaces.
        </p>
      </div>
    </section>
  );
}