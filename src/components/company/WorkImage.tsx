import React from 'react';
import Image from 'next/image';

interface WorkImageProps {
  imageSrc: string;
  altText: string;
}

const WorkImage = ({ imageSrc, altText }: WorkImageProps) => {
  return (
    <section className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
        <Image
          src={imageSrc}
          alt={altText}
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
};

export default WorkImage; 