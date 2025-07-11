"use client"

import Image from 'next/image';

const HeroImage = () => {
  return (
    <Image
      src="/hero-image-chat.svg"
      alt=""
      width={1200}
      height={675}
      className="object-contain rounded-lg w-full h-full"
      priority
      sizes="(max-width: 640px) 95vw, (max-width: 768px) 85vw, (max-width: 1024px) 75vw, 1200px"
      placeholder="blur"
      blurDataURL="data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEIgJfVfyiCwAAAABJRU5ErkJggg=="
      quality={75}
      loading="eager"
      fetchPriority="high"
    />
  );
};

export default HeroImage;
