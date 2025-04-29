import React from 'react';
import Image from 'next/image';

// --- Stats Data ---
const agencyStats = [
  { value: '42%', description: 'increase in revenue within 90 days' },
  { value: '2x', description: 'increase in client retention.' },
  { value: '30%', description: 'faster campaign optimizations.' },
];

// --- Logos Data ---
const logos = [
  { name: 'Dupla', src: '/store-logos/dupla.png' },
  { name: 'Evergreen', src: '/store-logos/evergreen.png' },
  { name: 'Gutt', src: '/store-logos/gutt.png' },
  { name: 'Inside the House of Austria', src: '/store-logos/insidethehouseofaustria.png' },
  { name: 'Iselle', src: '/store-logos/iselle.png' },
  { name: 'Lumen & Leaf', src: '/store-logos/lumenandleaf.png' },
  { name: 'Nomad Threads', src: '/store-logos/nomadthreads.png' },
  { name: 'Velvet Harbor', src: '/store-logos/velvetharbor.png' },
  { name: 'Wewear', src: '/store-logos/wewear.png' },
];

const CombinedProof = () => {
  const duplicatedLogos = [...logos, ...logos];

  return (
    <>
      {/* --- Logo Carousel Part --- */}
      <section className="pt-8 sm:pt-12 pb-10 sm:pb-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-lg sm:text-xl font-medium text-gray-600 tracking-tight">
              Trusted by top Shopify stores
            </h3>
          </div>
          <div className="w-full overflow-hidden bg-transparent">
            <div className="relative mask-gradient">
              <div className="flex animate-infinite-scroll [animation-duration:40s]">
                {duplicatedLogos.map((logo, index) => (
                  <div key={`logo-${logo.name}-${index}`} className="flex-shrink-0 mx-6 sm:mx-8 px-4 py-2" style={{ minWidth: '150px' }}>
                    <Image
                      src={logo.src}
                      alt={`${logo.name} logo`}
                      width={150}
                      height={60}
                      className="object-contain h-12 sm:h-16 w-auto mx-auto grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-400"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Agency/Stats Proof Part --- */}
      <section className="pt-10 sm:pt-12 pb-16 sm:pb-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 tracking-tight">
              Stores that use thinkr see
            </h2>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-10 md:gap-16 max-w-6xl mx-auto">
            {agencyStats.map((stat, index) => (
              <div key={`agency-${index}`} className="flex items-center gap-3 text-left">
                <span className="text-6xl sm:text-7xl font-bold text-primary">
                  {stat.value}
                </span>
                <span className="text-base sm:text-lg text-gray-600 max-w-[150px]">
                  {stat.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CombinedProof; 