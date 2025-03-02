import React from 'react';
import Image from 'next/image';

interface WorkImageProps {
  imageSrc: string;
  altText: string;
}

const WorkImage = ({ imageSrc, altText }: WorkImageProps) => {
  return (
    <section className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-lg overflow-hidden">
        <Image
          src={imageSrc}
          alt={altText}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
        />
      </div>
    </section>
  );
};

export default WorkImage; 