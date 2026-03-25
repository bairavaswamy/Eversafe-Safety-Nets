// /components/FeatureCardsSection.tsx

"use client";

import FeatureCard from "./FeatureCards";
import { cardsData } from "@/app/data/CardsData";

const FeatureCardsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-14">
          Our <span className="text-yellow-400">Premium Safety Solutions</span>
        </h2>

        {/* Cards Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {cardsData.map((card) => (
            <FeatureCard
              key={card.id}
              image={card.image}
              title={card.title}
              description={card.description}
              slug={card.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCardsSection;
