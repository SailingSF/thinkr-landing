import React from 'react';
import Image from 'next/image';

interface VisionSectionProps {
  title: string;
  description: {
    paragraph1: string;
    paragraph2: string;
  };
  imageSrc: string;
  imageAlt: string;
}

const VisionSection = ({ 
  title, 
  description, 
  imageSrc, 
  imageAlt 
}: VisionSectionProps) => {
  return (
    <section className="max-w-7xl mx-auto py-20 sm:py-24 md:py-28 lg:py-36 px-4 sm:px-6 lg:px-8 text-left">
      <div className="mb-14 sm:mb-18">
        <h2 className="text-[32px] sm:text-[45px] md:text-[60px] font-light text-gray-900 text-left">
          {title}
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-[55%_45%] gap-12 items-start text-left">
        <div>
          <div className="text-[16px] sm:text-[20px] md:text-[25px] font-normal text-gray-600 space-y-6 text-left">
            <p>{description.paragraph1}</p>
            <p>{description.paragraph2}</p>
          </div>
          <div className="mt-6 text-[16px] sm:text-[20px] md:text-[25px] font-medium text-black text-left">
            <p>And we are just getting started...</p>
          </div>
        </div>
        <div className="relative w-full h-[400px] md:h-[600px] lg:h-[700px] rounded-lg overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        </div>
      </div>
    </section>
  );
};

export default VisionSection; 