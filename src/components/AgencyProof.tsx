import React from 'react';

const stats = [
  { value: '42%', description: 'increase in client revenue within 90 days.' },
  { value: '2x', description: 'increase in client retention.' },
  { value: '30%', description: 'faster campaign optimizations.' },
];

const AgencyProof = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-medium text-gray-800 tracking-tight">
            Trusted by forward-thinking Shopify agencies.
          </h3>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-10 md:gap-16 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-3 text-left">
              <span className="text-6xl sm:text-7xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                {stat.value}
              </span>
              <span className="text-sm sm:text-base text-gray-600 max-w-[150px]">
                {stat.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgencyProof; 