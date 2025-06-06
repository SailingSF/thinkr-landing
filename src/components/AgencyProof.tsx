import React from 'react';

const stats = [
  { value: '42%', description: 'increase in client revenue within 90 days.' },
  { value: '2x', description: 'increase in client retention.' },
  { value: '30%', description: 'faster campaign optimizations.' },
];

const AgencyProof = () => {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14 lg:mb-20">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-800 tracking-tight leading-tight px-4">
            Trusted by forward-thinking Shopify agencies.
          </h3>
        </div>

        {/* Stats Grid */}
        <div className="max-w-7xl mx-auto">
          {/* Mobile Layout (up to md) */}
          <div className="block md:hidden space-y-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center px-4">
                <div className="text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-3">
                  {stat.value}
                </div>
                <div className="text-base text-gray-600 leading-relaxed max-w-xs mx-auto">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>

          {/* Tablet Layout (md to lg) */}
          <div className="hidden md:block lg:hidden">
            <div className="flex flex-col space-y-12 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center justify-center gap-6 text-center">
                  <div className="text-6xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent leading-none flex-shrink-0">
                    {stat.value}
                  </div>
                  <div className="text-lg text-gray-600 leading-relaxed max-w-xs text-left">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Layout (lg+) */}
          <div className="hidden lg:flex justify-center items-start gap-12 xl:gap-20">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-4 text-left">
                <div className="text-7xl xl:text-8xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent leading-none">
                  {stat.value}
                </div>
                <div className="text-lg xl:text-xl text-gray-600 leading-relaxed max-w-[160px] xl:max-w-[180px]">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgencyProof; 