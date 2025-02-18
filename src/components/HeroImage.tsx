import Image from 'next/image';

const HeroImage = () => {
  return (
    <section className="py-20 px-32">
    <div className="relative w-full  mx-auto mt-8 px-6">
      <div className="bg-gray-50 rounded-2xl p-4 md:p-8">
        <div className="relative w-full">
          <div className="relative w-full aspect-[16/9]">
            <Image
              src="/hero_image_3.svg"
              alt="Application interface showing multiple screens including a playbook, chat interface, and customer support"
              fill
              className="object-contain rounded-lg"
              priority
            />
          </div>
          
          {/* Feature indicators */}
          <div className="flex gap-12 justify-center mt-12">
            <div className="text-center">
              <div className="mb-2 mx-auto flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 34 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M26.8789 0C23.4529 0 20.6761 2.7768 20.6761 6.20283C20.6761 6.7342 20.7608 7.39584 20.887 7.88794L9.81906 15.6125C8.82868 14.9426 7.48681 14.4733 6.20283 14.4733C2.7768 14.4733 0 17.2501 0 20.6761C0 24.1021 2.7768 26.8789 6.20283 26.8789C7.50956 26.8789 8.79973 26.393 9.80045 25.7045L20.8911 33.4911C20.7547 34.0018 20.6761 34.5952 20.6761 35.1494C20.6761 38.5754 23.4529 41.3522 26.8789 41.3522C30.305 41.3522 33.0818 38.5754 33.0818 35.1494C33.0818 31.7233 30.305 28.9465 26.8789 28.9465C25.5722 28.9465 24.2986 29.418 23.2999 30.1086L12.1803 22.3281C12.3147 21.8174 12.4057 21.2302 12.4057 20.6761C12.4057 20.122 12.3271 19.5245 12.1906 19.0138L23.2833 11.2561C24.2737 11.9239 25.5949 12.4057 26.8789 12.4057C30.305 12.4057 33.0818 9.62886 33.0818 6.20283C33.0818 2.7768 30.305 0 26.8789 0ZM26.8789 4.13522C28.0202 4.13522 28.9465 5.06151 28.9465 6.20283C28.9465 7.34415 28.0202 8.27044 26.8789 8.27044C25.7376 8.27044 24.8113 7.34415 24.8113 6.20283C24.8113 5.06151 25.7376 4.13522 26.8789 4.13522ZM6.20283 18.6085C7.34415 18.6085 8.27044 19.5348 8.27044 20.6761C8.27044 21.8174 7.34415 22.7437 6.20283 22.7437C5.06151 22.7437 4.13522 21.8174 4.13522 20.6761C4.13522 19.5348 5.06151 18.6085 6.20283 18.6085ZM26.8789 33.0818C28.0202 33.0818 28.9465 34.008 28.9465 35.1494C28.9465 36.2907 28.0202 37.217 26.8789 37.217C25.7376 37.217 24.8113 36.2907 24.8113 35.1494C24.8113 34.008 25.7376 33.0818 26.8789 33.0818Z" fill="#8D8A8B"/>
                </svg>
              </div>
              <p className="text-sm text-gray-600">Connect your Shopify store,</p>
              <p className="text-sm text-gray-300">other marketing apps and software</p>
            </div>
            
            <div className="text-center">
              <div className="mb-2 mx-auto flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="21" cy="21" r="18" stroke="#8D8A8B" strokeWidth="2"/>
                  <circle cx="21" cy="21" r="11" stroke="#8D8A8B" strokeWidth="2"/>
                  <circle cx="21" cy="21" r="4" stroke="#8D8A8B" strokeWidth="2"/>
                </svg>
              </div>
              <p className="text-sm text-gray-600">Set goals</p>
              <p className="text-sm text-gray-300">and have thinkr tell you how to achieve them</p>
            </div>
            
            <div className="text-center">
              <div className="mb-2 mx-auto flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 38 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M33.3751 12.9309C33.1599 20.2898 32.9591 27.6344 32.7726 34.9646C32.7726 36.5138 32.7726 38.0846 32.622 39.6123C32.622 40.4945 32.3638 41.9577 31.2879 42.1514C27.8007 42.521 24.2901 42.6217 20.7875 42.4526L9.64149 42.4311H5.61776C4.55094 42.5718 3.46591 42.4231 2.47623 42.0007C1.91678 41.7425 2.23954 38.3643 2.23954 37.4606V31.8876V20.7632V12.8448V8.84258C2.23954 7.93885 1.91678 6.34657 2.5623 5.59347C3.34286 5.26443 4.19795 5.15289 5.03679 5.27071C6.0481 5.27071 7.01638 5.27071 8.02769 5.27071C12.9121 5.27071 17.8181 5.27071 22.724 5.1416" stroke="#8D8A8B" strokeWidth="2.52378" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M36.2582 1.84944C35.7742 1.62708 35.2353 1.55224 34.709 1.63427H32.5573C30.9865 1.63427 29.4157 1.63427 27.845 1.84944C27.4577 1.84944 27.0704 1.84944 27.0919 2.32282C27.0919 3.50628 27.0919 4.68973 27.0919 5.87318V7.65912C27.0919 8.00339 26.9628 8.49829 27.3286 8.69195C27.703 8.84522 28.1094 8.90433 28.512 8.86408C30.6637 8.86408 32.8155 8.73498 35.0963 8.73498C35.4191 8.73498 35.8709 8.73498 36.1291 8.62739C36.7531 8.17553 36.4734 7.16422 36.4304 6.47566L36.3013 3.95814C36.3576 3.23837 36.3142 2.51427 36.1722 1.80641L36.2582 1.84944Z" stroke="#8D8A8B" strokeWidth="2.52378" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7.8125 12.5863L19.8192 12.4142" stroke="#8D8A8B" strokeWidth="2.52378" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7.72681 19.0851L19.4537 18.8915" stroke="#8D8A8B" strokeWidth="2.52378" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19.2167 24.3569L27.5654 24.5291" stroke="#8D8A8B" strokeWidth="2.52378" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18.9155 31.9521C21.6482 31.7369 24.467 31.9521 27.1997 31.9521" stroke="#8D8A8B" strokeWidth="2.52378" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14.2677 25.4106C14.8738 25.4106 15.3651 24.9193 15.3651 24.3132C15.3651 23.7071 14.8738 23.2158 14.2677 23.2158C13.6617 23.2158 13.1703 23.7071 13.1703 24.3132C13.1703 24.9193 13.6617 25.4106 14.2677 25.4106Z" fill="#8D8A8B"/>
                  <path d="M14.3539 32.7264C14.9599 32.7264 15.4512 32.2351 15.4512 31.629C15.4512 31.0229 14.9599 30.5316 14.3539 30.5316C13.7478 30.5316 13.2565 31.0229 13.2565 31.629C13.2565 32.2351 13.7478 32.7264 14.3539 32.7264Z" fill="#8D8A8B"/>
                </svg>
              </div>
              <p className="text-sm text-gray-600">Get recommendations</p>
              <p className="text-sm text-gray-300">and personalized step by step plans on how to execute</p>
            </div>
            
            <div className="text-center">
              <div className="mb-2 mx-auto flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 45 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.22461 1.82483L2.22461 38.286" stroke="#8D8A8B" strokeWidth="3.61148" strokeLinecap="round"/>
                  <path d="M42.5527 39.3909L2.22449 39.3909" stroke="#8D8A8B" strokeWidth="3.61148" strokeLinecap="round"/>
                  <path d="M11.8551 23.0957L18.5089 16.2248C18.7402 15.986 19.1212 15.9799 19.36 16.2111L27.2045 23.8053C27.4415 24.0347 27.8189 24.0307 28.051 23.7963L40.1451 11.5791" stroke="#8D8A8B" strokeWidth="4.2134" strokeLinecap="round"/>
                </svg>
              </div>
              <p className="text-sm text-gray-600">Save time and grow your business</p>
              <p className="text-sm text-gray-300">with automations and planning from thinkr&apos;s AI</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default HeroImage;
