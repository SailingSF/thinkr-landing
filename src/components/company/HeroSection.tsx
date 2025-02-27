import React from 'react';

interface HeroSectionProps {
  title: string;
}

const HeroSection = ({ title }: HeroSectionProps) => {
  return (
    <section className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-[50px] font-medium text-center mb-4">
          {title}
        </h1>
        <p className="text-xl sm:text-2xl lg:text-[32px] text-gray-500 font-normal mb-8 mt-6 max-w-3xl mx-auto">
          Empower e-commerce entrepreneurs with advanced AI agents that deliver insights, drive decisions, and do the heavy day-to-day lifting.
        </p>
      </div>
    </section>
  );
};

export default HeroSection; 