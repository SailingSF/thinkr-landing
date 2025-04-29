import Image from 'next/image';

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

const LogoCarousel = () => {
  // Duplicate logos for seamless infinite scroll effect
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="w-full overflow-hidden py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl text-gray-900">Trusted by Stores Like Yours</h2>
          <p className="text-lg text-muted-foreground md:text-xl mt-3 max-w-2xl mx-auto">
            Join the growing list of successful Shopify stores scaling with thinkr.
          </p>
        </div>
        <div className="relative mask-gradient">
          <div className="flex animate-infinite-scroll [animation-duration:40s]">
            {duplicatedLogos.map((logo, index) => (
              <div key={`${logo.name}-${index}`} className="flex-shrink-0 mx-6 sm:mx-8 px-4 py-2" style={{ minWidth: '150px' }}>
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
  );
};

export default LogoCarousel; 