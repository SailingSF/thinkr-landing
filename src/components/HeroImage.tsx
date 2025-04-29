"use client"

import Image from 'next/image';

const HeroImage = () => {
  return (
    <section className="container mx-auto py-4 md:py-12 px-4">
      <div className="relative w-full mx-auto">
        <div className="relative w-full mx-auto">
          <div className="bg-gray-100 rounded-[16px] md:rounded-[24px] p-3 pb-8 md:p-6 md:pb-16">
            <div className="relative w-full -mt-2 md:-mt-4">
              <div className="relative w-full aspect-[3/2] md:aspect-[16/9]">
                <Image
                  src="/hero_image_3.svg"
                  alt="Application interface showing multiple screens including a playbook, chat interface, and customer support"
                  fill
                  className="object-contain rounded-lg px-2 md:px-16"
                  priority
                  sizes="(max-width: 640px) 95vw, (max-width: 768px) 85vw, (max-width: 1024px) 75vw, 1200px"
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEIgJfVfyiCwAAAABJRU5ErkJggg=="
                  quality={85}
                />
              </div>
              
              {/* Feature indicators */}
              {/* REMOVED the entire div grid containing the four feature items */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroImage;
