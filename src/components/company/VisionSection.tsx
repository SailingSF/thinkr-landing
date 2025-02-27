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
    <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">
          {title}
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-[55%_45%] gap-12 items-start">
        <div>
          <div className="text-xl font-light text-gray-600 space-y-6">
            <p>{description.paragraph1}</p>
            <p>{description.paragraph2}</p>
          </div>
          <div className="mt-6 text-xl text-black">
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