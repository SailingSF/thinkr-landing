import Image from 'next/image';

const HeroImage = () => {
  return (
    <div className="relative w-full max-w-[1200px] mx-auto mt-8 px-6">
      <div className="bg-gray-50 rounded-2xl p-4 md:p-8">
        <div className="relative w-full aspect-[16/9]">
          <Image
            src="/mockup.png"
            alt="Application interface showing multiple screens including a playbook, chat interface, and customer support"
            fill
            className="object-contain rounded-lg"
            priority
          />
          
          {/* Feature indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-full shadow-lg mb-2 mx-auto flex items-center justify-center">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15.5 5H18.5L22 8.5V15.5L18.5 19H15.5M8.5 19H5.5L2 15.5V8.5L5.5 5H8.5M12 8V16M8 12H16" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-sm text-gray-600">Understand your customers</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-full shadow-lg mb-2 mx-auto flex items-center justify-center">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-sm text-gray-600">Automate admin tasks</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-full shadow-lg mb-2 mx-auto flex items-center justify-center">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 20H6C4.89543 20 4 19.1046 4 18V6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V13M16 16L20 16M20 16L18 18M20 16L18 14" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-sm text-gray-600">Get scheduled recommendations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
