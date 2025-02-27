import React from 'react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
}

const HeroSection = ({ title, subtitle }: HeroSectionProps) => {
  return (
    <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-[50px] font-medium text-center mb-4">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl font-normal mx-auto text-xl text-gray-600">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default HeroSection; 