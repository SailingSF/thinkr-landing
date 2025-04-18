import React from 'react';
import Image from 'next/image';

const PartnerLogos: React.FC = () => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="flex items-center justify-center p-4">
        <Image 
          src="/partner_logos.png" 
          alt="Partner Logos"
          width={500}
          height={96}
          className="h-24 w-auto object-contain hover:opacity-100 hover:grayscale-0 transition-all duration-300"
        />
      </div>
    </div>
  );
};

export default PartnerLogos; 