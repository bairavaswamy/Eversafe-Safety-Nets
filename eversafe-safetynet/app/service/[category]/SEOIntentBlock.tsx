type Props = {
  serviceName: string;
};

export default function SEOIntentBlock({ serviceName }: Props) {
  return (
    <section className="mt-12 dark:text-white space-y-10">

      {/* NEAR ME INTENT */}
      <div>
        <h2 className="text-2xl font-bold text-yellow-500">
          {serviceName} Service Near You
        </h2>
        <p className="mt-4 leading-relaxed opacity-90">
          Looking for {serviceName.toLowerCase()} near your location? Our team provides fast and reliable service with quick response and professional support. 
          We make it easy to get the right solution without delays, ensuring your home stays safe and protected.
        </p>
      </div>

      {/* DIRECTIONAL INTENT */}
      <div>
        <h2 className="text-2xl font-bold text-yellow-500">
          Easy Booking & Quick Service
        </h2>
        <p className="mt-4 leading-relaxed opacity-90">
          Getting started is simple. Contact our team through call or message, and we will guide you step by step. 
          Our experts will visit your place, check the area, and suggest the best solution based on your requirement.
        </p>
      </div>

      {/* COST INTENT */}
      <div>
        <h2 className="text-2xl font-bold text-yellow-500">
          {serviceName} Cost & Pricing
        </h2>
        <p className="mt-4 leading-relaxed opacity-90">
          The cost of {serviceName.toLowerCase()} depends on the size of your space, material type, and installation needs. 
          We offer affordable pricing with clear estimates, so you always know what you are paying for without hidden charges.
        </p>
      </div>

      {/* PROCESS INTENT */}
      <div>
        <h2 className="text-2xl font-bold text-yellow-500">
            {serviceName} Installation Process
            </h2>
            <p className="mt-4 leading-relaxed opacity-90">
            Our process includes inspection, measurement, customization, installation, and final safety check. 
            Each step is handled by professionals to ensure a secure and long-lasting setup without damaging your space.
            </p>
      </div>

      {/* TRUST INTENT */}
      <div>
        <h2 className="text-2xl font-bold text-yellow-500">
          Why Choose Our {serviceName}
        </h2>
        <p className="mt-4 leading-relaxed opacity-90">
          We focus on quality, safety, and customer satisfaction. Our experienced team uses durable materials and ensures proper installation for long-lasting results. 
          With fast service and reliable support, we help you choose the best solution for your home.
        </p>
      </div>

    </section>
  );
}