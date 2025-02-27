import React from 'react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
}

const HeroSection = ({ title, subtitle }: HeroSectionProps) => {
  return (
    <section className="max-w-7xl mx-auto py-14 sm:py-18 md:py-22 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-[36px] sm:text-5xl lg:text-[50px] font-medium text-center mb-4">
          {title}
        </h1>
        <p className="text-[16px] sm:text-[20px] md:text-[25px] font-normal text-gray-600 mb-8 mt-6 max-w-[90%] lg:max-w-[95%] mx-auto">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default HeroSection; 