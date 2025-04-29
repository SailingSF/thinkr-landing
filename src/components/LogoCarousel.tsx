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
    <div className="w-full overflow-hidden py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-medium tracking-tighter sm:text-4xl">Trusted by Stores Like Yours</h2>
        <p className="text-muted-foreground md:text-xl/relaxed mt-2">
          Join the growing list of successful Shopify stores scaling with thinkr.
        </p>
      </div>
      <div className="relative mask-gradient">
        <div className="flex animate-infinite-scroll">
          {duplicatedLogos.map((logo, index) => (
            <div key={`${logo.name}-${index}`} className="flex-shrink-0 mx-8" style={{ width: '160px' }}>
              <Image
                src={logo.src}
                alt={`${logo.name} logo`}
                width={160}
                height={80}
                className="object-contain h-16 w-auto mx-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel; 