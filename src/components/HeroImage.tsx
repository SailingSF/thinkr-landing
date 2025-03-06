import Image from 'next/image';

const HeroImage = () => {
  return (
    <section className="py-4 md:py-12 px-4 md:px-32">
    <div className="relative w-full mx-auto">
      <div className="relative w-full mx-auto">
        <div className="bg-gray-100 rounded-[24px] p-4 pb-8 md:p-8 md:pb-16">
          <div className="relative w-full -mt-4 md:-mt-6">
            <div className="relative w-full aspect-[16/9]">
              <Image
                src="/hero_image_3.svg"
                alt="Application interface showing multiple screens including a playbook, chat interface, and customer support"
                fill
                className="object-contain rounded-lg px-4 md:px-24"
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, 80vw"
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEIgJfVfyiCwAAAABJRU5ErkJggg=="
              />
            </div>
            
            {/* Feature indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-4 -mt-0 md:-mt-8 lg:-mt-18 px-2 md:px-24 lg:px-32">
              <div className="text-center flex flex-col items-center">
                <div className="mb-3 md:mb-4 flex items-center justify-center h-8 md:h-12">
                  <svg className="w-full h-full max-w-[32px] md:max-w-[60px]" viewBox="0 0 34 42" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                    <path d="M26.8789 0C23.4529 0 20.6761 2.7768 20.6761 6.20283C20.6761 6.7342 20.7608 7.39584 20.887 7.88794L9.81906 15.6125C8.82868 14.9426 7.48681 14.4733 6.20283 14.4733C2.7768 14.4733 0 17.2501 0 20.6761C0 24.1021 2.7768 26.8789 6.20283 26.8789C7.50956 26.8789 8.79973 26.393 9.80045 25.7045L20.8911 33.4911C20.7547 34.0018 20.6761 34.5952 20.6761 35.1494C20.6761 38.5754 23.4529 41.3522 26.8789 41.3522C30.305 41.3522 33.0818 38.5754 33.0818 35.1494C33.0818 31.7233 30.305 28.9465 26.8789 28.9465C25.5722 28.9465 24.2986 29.418 23.2999 30.1086L12.1803 22.3281C12.3147 21.8174 12.4057 21.2302 12.4057 20.6761C12.4057 20.122 12.3271 19.5245 12.1906 19.0138L23.2833 11.2561C24.2737 11.9239 25.5949 12.4057 26.8789 12.4057C30.305 12.4057 33.0818 9.62886 33.0818 6.20283C33.0818 2.7768 30.305 0 26.8789 0Z" fill="#8D8A8B"/>
                  </svg>
                </div>
                <div className="space-y-1">
                  <p className="text-[14px] font-normal text-[#8d8a8b] leading-tight">Connect Shopify and integrate</p>
                  <p className="text-[14px] font-normal text-[#8d8a8b] leading-tight">all your business tools</p>
                </div>
              </div>
              
              <div className="text-center flex flex-col items-center">
                <div className="mb-3 md:mb-4 flex items-center justify-center h-8 md:h-12">
                  <svg className="w-full h-full max-w-[32px] md:max-w-[60px]" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                    <circle cx="21" cy="21" r="18" stroke="#8D8A8B" strokeWidth="2"/>
                    <circle cx="21" cy="21" r="11" stroke="#8D8A8B" strokeWidth="2"/>
                    <circle cx="21" cy="21" r="4" stroke="#8D8A8B" strokeWidth="2"/>
                  </svg>
                </div>
                <div className="space-y-1">
                  <p className="text-[14px] font-normal text-[#8d8a8b] leading-tight">Set clear goals and let <strong>thinkr</strong></p>
                  <p className="text-[14px] font-normal text-[#8d8a8b] leading-tight">guide your path forward</p>
                </div>
              </div>
              
              <div className="text-center flex flex-col items-center">
                <div className="mb-3 md:mb-4 flex items-center justify-center h-8 md:h-12">
                  <svg className="w-full h-full max-w-[32px] md:max-w-[60px]" viewBox="0 0 38 44" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                    <path d="M33.3751 12.9309C33.1599 20.2898 32.9591 27.6344 32.7726 34.9646C32.7726 36.5138 32.7726 38.0846 32.622 39.6123C32.622 40.4945 32.3638 41.9577 31.2879 42.1514C27.8007 42.521 24.2901 42.6217 20.7875 42.4526L9.64149 42.4311H5.61776C4.55094 42.5718 3.46591 42.4231 2.47623 42.0007C1.91678 41.7425 2.23954 38.3643 2.23954 37.4606V31.8876V20.7632V12.8448V8.84258C2.23954 7.93885 1.91678 6.34657 2.5623 5.59347C3.34286 5.26443 4.19795 5.15289 5.03679 5.27071C6.0481 5.27071 7.01638 5.27071 8.02769 5.27071C12.9121 5.27071 17.8181 5.27071 22.724 5.1416" stroke="#8D8A8B" strokeWidth="2.52378" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M36.2582 1.84944C35.7742 1.62708 35.2353 1.55224 34.709 1.63427H32.5573C30.9865 1.63427 29.4157 1.63427 27.845 1.84944C27.4577 1.84944 27.0704 1.84944 27.0919 2.32282C27.0919 3.50628 27.0919 4.68973 27.0919 5.87318V7.65912C27.0919 8.00339 26.9628 8.49829 27.3286 8.69195C27.703 8.84522 28.1094 8.90433 28.512 8.86408C30.6637 8.86408 32.8155 8.73498 35.0963 8.73498C35.4191 8.73498 35.8709 8.73498 36.1291 8.62739C36.7531 8.17553 36.4734 7.16422 36.4304 6.47566L36.3013 3.95814C36.3576 3.23837 36.3142 2.51427 36.1722 1.80641L36.2582 1.84944Z" stroke="#8D8A8B" strokeWidth="2.52378" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="space-y-1">
                  <p className="text-[14px] font-normal text-[#8d8a8b] leading-tight">Get custom strategies with</p>
                  <p className="text-[14px] font-normal text-[#8d8a8b] leading-tight">detailed steps to implement</p>
                </div>
              </div>
              
              <div className="text-center flex flex-col items-center">
                <div className="mb-3 md:mb-4 flex items-center justify-center h-8 md:h-12">
                  <svg className="w-full h-full max-w-[32px] md:max-w-[60px]" viewBox="0 0 45 42" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                    <path d="M2.22461 1.82483L2.22461 38.286" stroke="#8D8A8B" strokeWidth="3.61148" strokeLinecap="round"/>
                    <path d="M42.5527 39.3909L2.22449 39.3909" stroke="#8D8A8B" strokeWidth="3.61148" strokeLinecap="round"/>
                    <path d="M11.8551 23.0957L18.5089 16.2248C18.7402 15.986 19.1212 15.9799 19.36 16.2111L27.2045 23.8053C27.4415 24.0347 27.8189 24.0307 28.051 23.7963L40.1451 11.5791" stroke="#8D8A8B" strokeWidth="4.2134" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="space-y-1">
                  <p className="text-[14px] font-normal text-[#8d8a8b] leading-tight">Automate and grow with</p>
                  <p className="text-[14px] font-normal text-[#8d8a8b] leading-tight"><strong>thinkr&apos;s</strong> intelligent planning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default HeroImage;
